import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen'
import NearmeScreen from './NearmeScreen'
import PopularityRankingScreen from './PopularityRankingScreen'
import BookmarkScreen from './BookmarkScreen'
import MyScreen from './MyScreen'


const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
export default function TabLayout() {

  return (
    <Tab.Navigator initialRouteName='MainScreen' backBehavior="none">
      <Tab.Screen name='홈' component={MainScreen} />
      <Tab.Screen name='내 근처' component={NearmeScreen} />
      <Tab.Screen name='즐겨찾기' component={BookmarkScreen} />
      <Tab.Screen name='인기순위' component={PopularityRankingScreen} />
      <Tab.Screen name='내 정보' component={MyScreen} />
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


