import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './List'


// MainScreen 컴포넌트
const PopularityRankingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listStyle: {
    width: '100%',
    height: 150,
    borderColor: 'black',
    borderBottomWidth: 0.5
  }
});

export default PopularityRankingScreen;
