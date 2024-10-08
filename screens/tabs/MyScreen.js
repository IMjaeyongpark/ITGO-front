import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Locate from '../../assets/locate.png'
import BasicProfile from '../../assets/basicProfile.jpg';
import TopNav from './TopNav'
import { saveDataToStorage, loadDataFromStorage } from '../../storage/AsyncStorageUtil';
import axios from 'axios';

// MainScreen 컴포넌트
const MyScreen = ({ nav }) => {
  profile = BasicProfile
  const [nickName,setNickName] = useState("닉네임");
  const [onOff, setOnOff] = useState(true)
  useEffect(() => {
    const getUserInfo = async()=>{
      try {
        const data = await loadDataFromStorage('phone');
        console.log("process.env.API_IP",process.env.API_IP)
        console.log("data",data)
        const response = await axios.post(`${process.env.API_IP}/profile?phoneNum=${data}`);
        console.log("response.data",response.data);
        setNickName(response.data.name)
    } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  }
  getUserInfo()
  },[])


  // 알림설정 onoff 설정
  const clickButton = () => {
    setOnOff(!onOff)

    //asyncStorage.setItem
    saveDataToStorage("Notification_onoff",!onOff)
    
    checkAsyncStorage('Notification_onoff')
  } 
  const checkAsyncStorage = async (key) => {
    // AsyncStorage에서 데이터를 확인하여 콘솔에 출력
    const data = await loadDataFromStorage(key);
    console.log("------------------------------------------");
    console.log(`AsyncStorage 확인 - 키: ${key}, 데이터:`, data);
  };



  return (
    <View style={styles.container}>
      <TopNav nav={nav}></TopNav>
      <TouchableOpacity onPress={() => nav.navigate('Profile')}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}>
          <Image source={profile}
            style={{ width: 50, height: 50, borderRadius: 100, margin: 30 }}></Image>
          <Text style={{ fontSize: 20 }}>{nickName}</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
          <Image source={Locate}
            style={{ width: 25, height: 36, marginLeft: 40 }}></Image>

          <Text style={{ fontSize: 20, marginLeft: 40 }}>위치 설정</Text>
        </View>
      </TouchableOpacity> */}
      

      <TouchableOpacity onPress={() => nav.navigate('ReGeolocationScreen')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image source={Locate}
            style={{ width: 25, height: 36, marginLeft: 40 }}></Image>

          <Text style={{ fontSize: 20, marginLeft: 40 }}>동네 인증하기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={clickButton}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ fontSize: 20, marginLeft: 105 }}>알림 설정</Text><Text style={{ fontSize: 20, marginLeft: 150 }}>{onOff ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate('NotificationKeywordSettingScreen')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ fontSize: 20, marginLeft: 105 }}>알림 키워드 설정</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default MyScreen;

