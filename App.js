import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import CompleteScreen from './components/CompleteScreen';
import AllScreen from './components/AllScreen.js';
import ActiveScreen from './components/ActiveScreen';
import DetailScreen from './components/DetailScreen';

const AllScreenStack = createStackNavigator ({
  AllScreen: {screen: AllScreen},
  DetailScreen: {screen: DetailScreen},
});

const TabNavigator = createBottomTabNavigator ({
  Complete: {screen: CompleteScreen},
  AllScreen: {screen: AllScreenStack},
  Active: {screen: ActiveScreen},
});

export default createAppContainer (TabNavigator);
