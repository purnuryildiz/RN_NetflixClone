import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
