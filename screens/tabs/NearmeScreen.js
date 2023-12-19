import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import List from './List'
import TopNav from './TopNav'


// MainScreen 컴포넌트
const NearmeScreen = ({ nav }) => {

  const par = {
    memberId: 1,
    page: 0,
    size: 100,
    sortBy: 'VIEW',
      }
  const path = '/post/find/all/list'

  return (
    <View style={styles.container}>
    <TopNav nav={nav}></TopNav>
    {/* top  광고 인터페이스*/}
    <List nav={nav} par={par} path={path} />
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

export default NearmeScreen;
