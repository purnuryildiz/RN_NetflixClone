import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SectionTitleProps} from '../../model/ui/sectionTitle';
import Colors from '../../theme';

const SectionTitle: React.FC<SectionTitleProps> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default SectionTitle;
