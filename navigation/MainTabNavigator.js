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
  KESKUSTA: KeskustaScreen,
});

KeskustaStack.navigationOptions = {
  tabBarLabel: 'Keskusta',
};

const HervantaStack = createStackNavigator({
  HERVANTA: HervantaScreen,
});

HervantaStack.navigationOptions = {
  tabBarLabel: 'Hervanta',
};

const KauppiStack = createStackNavigator({
  KAUPPI: KauppiScreen,
});

KauppiStack.navigationOptions = {
  tabBarLabel: 'Kauppi',
};

export default createBottomTabNavigator(
  {
    KeskustaStack,
    HervantaStack,
    KauppiStack
  },
  {
    tabBarOptions: options,
    lazy: false,
    initialRouteName: 'KauppiStack'
  }
);
