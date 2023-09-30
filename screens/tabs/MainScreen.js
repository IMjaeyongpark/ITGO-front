import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
const MainScreen = () => {

  return (
    <View style={styles.container}>
      <Text>메인 페이지</Text>
    </View>
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

