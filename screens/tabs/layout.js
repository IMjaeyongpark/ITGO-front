import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen'
import NearmeScreen from './NearmeScreen'
import PopularityRankingScreen from './PopularityRankingScreen'


const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
export default function TabLayout() {

  return (
    <Tab.Navigator initialRouteName='MainScreen'>
      <Tab.Screen name='MainScreen' component={MainScreen} />
      <Tab.Screen name='NearmeScreen' component={NearmeScreen} />
      <Tab.Screen name='PopularityRankingScreen' component={PopularityRankingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


