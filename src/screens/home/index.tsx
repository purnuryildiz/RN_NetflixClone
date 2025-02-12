import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/moviesActions';
import {AppDispatch, RootState} from '../../store';
import {ExampleSectionData} from '../../utils/ExampleSectionData';
import SectionItem from '../../components/movies/sectionItem';

const Home: React.FC = () => {
  const {movies} = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={ExampleSectionData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <SectionItem sectionData={item} moviesData={movies} />
        )}
      />
    </View>
  );
};

export default Home;
