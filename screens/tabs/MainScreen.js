import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import List from './List'
import axios from 'axios';
import TopNav from './TopNav'
import { Image } from 'react-native';
// MainScreen 컴포넌트
const MainScreen = ({ nav }) => {

  return (
    <View style={styles.container}>
      <TopNav nav={nav}></TopNav>
      {/* top  광고 인터페이스*/}
      <View style={styles.topbox}>
        <Text style={styles.toptext}>
          어떤 전자기기와 이어드릴까요?
        </Text>
        <Image style={styles.img} source={require('/Users/ichungmin/Desktop/Itgo/assets/interface.png')}/>
       
      </View>
      <Text style={styles.text}>최근 본 상품</Text>
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
  },
  topbox:{
    height:254,
    backgroundColor:'#3454CD'
  },
  text:{
    fontSize:23,
    fontWeight:'bold',
    marginLeft:20
  },
  toptext:{
    fontSize:23,
    fontWeight:'bold',
    marginLeft:20,
    color:'white',
    fontFamily:'Pretendard'
  },
  img:{
    width:159,
    height:154,
    marginTop:70,
    marginLeft:200
  }
});

export default MainScreen;

