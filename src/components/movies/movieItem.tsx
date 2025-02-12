import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme';
import {Movie} from '../../model/data/moviesTypes';
import {MovieItemProps} from '../../model/ui/movieItem';
import CustomImage from '../ui/customImage';

const MovieItem: React.FC<MovieItemProps> = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <CustomImage style={styles.image} path={item.poster_path} />
      {/* <Text style={{color: Colors.WHITE}}> {item.title} </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default MovieItem;
