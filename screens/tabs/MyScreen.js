import React from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import Locate from '../../assets/locate.png'
// MainScreen 컴포넌트
const MyScreen = (nav) => {

  return (
    <View style={styles.container}>
      <View style ={{flexDirection: 'row',alignItems: 'center',
    }}>
      <Image source = {{uri:"https://i.namu.wiki/i/jsPubRFgPfxn4Kca1eKOcK7-b4-NLxQyvuVOz9V1Qu4Fe77F4iWWktlMUKSVoZrmusi-YWs3CP_OQbzFVMWT5DQ0tVn7Cf4kxFTi0lZX00ec5WLwublm1HCAmPEpSSVi4gXWIMNGWT6JXVq_lsqWiA.webp"}} 
      style={{width:50,height:50,borderRadius:100,margin:30}}></Image>
      <Text style={{fontSize:20}}>닉네임</Text>
      </View>
      <View style ={{flexDirection: 'row',alignItems: 'center',marginTop:50}}>
      <Image source = {Locate}
    style={{width:25,height:36,marginLeft:40}}></Image>
    
        <Text style ={{fontSize:20,marginLeft:40}}>위치 설정</Text>
      </View>
      <View style ={{flexDirection: 'row',alignItems: 'center',marginTop:30}}>
      <Image source = {Locate}
    style={{width:25,height:36,marginLeft:40}}></Image>
    
        <Text style ={{fontSize:20,marginLeft:40}}>동네 인증하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default MyScreen;

