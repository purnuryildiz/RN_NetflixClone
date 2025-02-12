import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SectionItemProps} from '../../model/ui/sectionItem';
import SectionTitle from '../ui/sectionTitle';

import MovieItem from './movieItem';

const SectionItem: React.FC<SectionItemProps> = props => {
  const {sectionData, moviesData} = props;
  return (
    <View>
      <SectionTitle title={sectionData.title} />
      <FlatList
        horizontal
        data={moviesData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default SectionItem;
