import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../utils/routes';
import Home from '../screens/home';
import Downloads from '../screens/downloads';
import Search from '../screens/search';
import More from '../screens/more';
import {DownloadIcon, HomeIcon, MenuIcon, SearchIcon} from '../assets/icons';
import Colors from '../theme';
const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
          borderTopColor: Colors.BLACK,
        },
        tabBarLabelStyle: {},
        tabBarIcon: () => {
          let Icon;
          if (route.name === ROUTES.HOME) {
            Icon = HomeIcon;
          } else if (route.name === ROUTES.SEARCH) {
            Icon = SearchIcon;
          } else if (route.name === ROUTES.DOWNLOADS) {
            Icon = DownloadIcon;
          } else if (route.name === ROUTES.MORE) {
            Icon = MenuIcon;
          }

          return <Icon color={Colors.WHITE} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.SEARCH} component={Search} />
      <Tab.Screen name={ROUTES.DOWNLOADS} component={Downloads} />
      <Tab.Screen name={ROUTES.MORE} component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
