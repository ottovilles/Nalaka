import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import KeskustaScreen from '../screens/KeskustaScreen';
import HervantaScreen from '../screens/HervantaScreen';
import KauppiScreen from '../screens/KauppiScreen';


const options = {
  showIcon: false,
  labelStyle: {
    fontSize: 16
  },
  tabStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTintColor: 'orange'
}

const KeskustaStack = createStackNavigator({
  TAY: KeskustaScreen,
});

KeskustaStack.navigationOptions = {
  tabBarLabel: 'Keskusta',
  tabBarOptions: options
};

const HervantaStack = createStackNavigator({
  TTY: HervantaScreen,
});

HervantaStack.navigationOptions = {
  tabBarLabel: 'Hervanta',
  tabBarOptions: options
};

const KauppiStack = createStackNavigator({
  KAUPPI: KauppiScreen,
});

KauppiStack.navigationOptions = {
  tabBarLabel: 'Kauppi',
  tabBarOptions: options
};

export default createBottomTabNavigator({
  KeskustaStack,
  HervantaStack,
  KauppiStack
});
