import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/moviesActions';
import {Movie, MovieTypes} from '../../model/data/moviesTypes';

const initialState: MovieTypes = {
  pending: false,
  movies: [],
  errorMessage: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // (hangi actiona tepki verileceğini belirtir, statei nasıl güncelleyeceğini belirtir)
    builder.addCase(getTopRatedMovies.pending, state => {
      state.pending = true;
      state.errorMessage = '';
    });

    builder.addCase(
      getTopRatedMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload.results;
        state.pending = false;
      },
    );

    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      state.pending = false;
      state.errorMessage = action.error.message || 'Bir hata oluştu';
    });
  },
});

export default movieSlice.reducer;
