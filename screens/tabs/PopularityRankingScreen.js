import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './List'
import TopNav from './TopNav'


// MainScreen 컴포넌트
const PopularityRankingScreen = ({ nav }) => {
  return (
    <View style={styles.container}>
      <TopNav nav={nav}></TopNav>
    </View>
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
