import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import PopularityRankingScreen from './PopularityRankingScreen';



const Tab = createBottomTabNavigator();

// MainScreen 컴포넌트
const TabNav = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name='MainScreen' component={MainScreen} />
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

export default TabNav;
