import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SplashScreen, Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
// MainScreen 컴포넌트
const MainScreen = () => {

  return (
    <ThemeProvider >
      <Stack>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;

