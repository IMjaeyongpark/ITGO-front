import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './List'

const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
const MainScreen = () => {

  const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const testImage = { uri: "https://img.danawa.com/prod_img/500000/148/824/img/17824148_1.jpg?shrink=330:*&_v=20220929125243" }
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

export default MainScreen;

