import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import List from './List'
import TopNav from './TopNav'
// MainScreen 컴포넌트 
const MainScreen = ({ nav }) => {

  const par = {
    memberId: 1,
    page: 0,
    size: 100,
    sortBy: 'RECENT_POST',
  }
  const path = '/post/find/all/list'

  const add = (
    <View style={styles.topbox}>
      <Text style={styles.toptext}>
        어떤 전자기기와 이어드릴까요?
      </Text>
      <Image style={styles.img} source={require('../../assets/interface.png')} />
    </View>)

  return (
    <View style={styles.container}>
      <TopNav nav={nav}></TopNav>
      {/* top  광고 인터페이스*/}
      <List nav={nav} par={par} path={path} add={add} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  listStyle: {
    width: '100%',
    height: 150,
    borderColor: 'black',
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20
  },
  toptext: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    color: 'white',
    fontFamily: 'Pretendard'
  },
  topbox: {
    height: 254,
    backgroundColor: '#3454CD'
  },
  img: {
    width: 159,
    height: 154,
    marginTop: 66,
    marginLeft: 200,
  }
});

export default MainScreen;

