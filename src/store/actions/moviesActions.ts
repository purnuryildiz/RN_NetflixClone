import {createAsyncThunk} from '@reduxjs/toolkit';
import {get} from '../../service/verb';
import {TOP_RATED_URL} from '../../service/urls';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const response = await get(TOP_RATED_URL, {});
    return response.data;
  },
);

export {getTopRatedMovies};
