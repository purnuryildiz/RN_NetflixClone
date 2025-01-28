import React from 'react';
import {Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Home: React.FC = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
