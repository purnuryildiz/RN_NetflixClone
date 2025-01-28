import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../utils/routes';
import TabNavigator from './tabNavigator';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.TABMENU} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
