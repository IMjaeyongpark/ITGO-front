import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import List from './List'
import axios from 'axios';
import TopNav from './TopNav'

// MainScreen 컴포넌트
const MainScreen = ({ nav }) => {

  return (
    <View style={styles.container}>
      <TopNav nav={nav}></TopNav>
      <List nav={nav} />
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

export default MainScreen;

