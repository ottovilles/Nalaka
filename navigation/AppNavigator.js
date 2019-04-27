import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/LoadingScreen';
import SettingsScreen from '../screens/SettingsScreen';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    Main:  MainTabNavigator,
    Loading: LoadingScreen
  },
  {
    initialRouteName: 'Main',
  }
));