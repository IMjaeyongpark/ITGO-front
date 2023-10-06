import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
const BookmarkScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={listSyle}>즐겨찾기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listSyle:{
    width:'100%',
    height:"100px"
  }
});

export default BookmarkScreen;

