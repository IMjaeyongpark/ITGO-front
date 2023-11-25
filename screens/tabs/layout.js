import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen'
import NearmeScreen from './NearmeScreen'
import PopularityRankingScreen from './PopularityRankingScreen'
import BookmarkScreen from './BookmarkScreen'
import MyScreen from './MyScreen'
import { Ionicons, AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
export default function TabLayout({ nav }) {

  return (
    <Tab.Navigator initialRouteName='홈' screenOptions={{
      headerShown: false, // 헤더를 숨김
    }}>
      
      <Tab.Screen name='내 근처' options={{
        tabBarIcon: () => (
          <Ionicons name="ios-location-outline" size={24} color="black" />
        ),
      }}>
        {() => <NearmeScreen nav={nav} />}
      </Tab.Screen>
      <Tab.Screen name='즐겨찾기' options={{
        tabBarIcon: () => (
          <AntDesign name="staro" size={24} color="black" />
        ),
      }}>
        {() => <BookmarkScreen nav={nav} />}
      </Tab.Screen>
      <Tab.Screen name='홈' options={{
        tabBarIcon: () => (
          <Ionicons name="ios-home-outline" size={24} color="black" />
        ),
      }}>
        {() => <MainScreen nav={nav} />}
      </Tab.Screen>
      <Tab.Screen name='인기순위' options={{
        tabBarIcon: () => (
          <AntDesign name="Trophy" size={24} color="black" />
        ),
      }}>
        {() => <PopularityRankingScreen nav={nav} />}
      </Tab.Screen>
      <Tab.Screen name='내 정보' options={{
        tabBarIcon: () => (
          <AntDesign name="user" size={24} color="black" />
        ),
      }}>
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


