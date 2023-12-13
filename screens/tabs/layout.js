import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen'
import NearmeScreen from './NearmeScreen'
import PopularityRankingScreen from './PopularityRankingScreen'
import BookmarkScreen from './BookmarkScreen'
import MyScreen from './MyScreen'
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
export default function TabLayout({ nav }) {

  return (
    <Tab.Navigator
      initialRouteName='홈'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='인기순위'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      >
        {() => <PopularityRankingScreen nav={nav} />}
      </Tab.Screen>

      <Tab.Screen
        name='즐겨찾기'
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      >
        {() => <BookmarkScreen nav={nav} />}
      </Tab.Screen>

      <Tab.Screen
        name='홈'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      >
        {() => <MainScreen nav={nav} />}
      </Tab.Screen>

      <Tab.Screen
        name='내 근처'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-location-outline" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      >
        {() => <NearmeScreen nav={nav} />}
      </Tab.Screen>

      <Tab.Screen
        name='내 정보'
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      >
        {() => <MyScreen nav={nav} />}
      </Tab.Screen>
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


