import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import PopularityRankingScreen from './PopularityRankingScreen';

// 네비게이션 파라미터 타입 정의 (RootStackParam에 따라 수정)
export type NavigationParams = {
  Main: undefined;
  Register: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator();

// MainScreen 컴포넌트
const TabNav: React.FC = () => {

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
