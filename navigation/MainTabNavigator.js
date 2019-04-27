import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import KeskustaScreen from '../screens/KeskustaScreen';
import HervantaScreen from '../screens/HervantaScreen';
import KauppiScreen from '../screens/KauppiScreen';
import SettingsScreen from '../screens/SettingsScreen';


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
  Keskusta: KeskustaScreen,
  Settings: SettingsScreen
});

KeskustaStack.navigationOptions = ({ navigation }) => {  
  return {
    tabBarLabel: 'Keskusta',
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Settings' ? false : true,
  }
};

const HervantaStack = createStackNavigator({
  Hervanta: HervantaScreen,
  Settings: SettingsScreen
});

HervantaStack.navigationOptions = ({ navigation }) => {  
  return {
    tabBarLabel: 'Hervanta',
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Settings' ? false : true
  }
};

const KauppiStack = createStackNavigator({
  Kauppi: KauppiScreen,
  Settings: SettingsScreen
});

KauppiStack.navigationOptions = ({ navigation }) => {  
  return {
    tabBarLabel: 'Kauppi',
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Settings' ? false : true
  }
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
