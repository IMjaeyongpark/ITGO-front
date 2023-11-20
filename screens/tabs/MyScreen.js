import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Locate from '../../assets/locate.png'
import BasicProfile from '../../assets/basicProfile.jpg';

// MainScreen 컴포넌트
const MyScreen = ({nav}) => {

  profile = BasicProfile

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.navigate('Profile')}>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
      }}>
        <Image source={profile}
          style={{ width: 50, height: 50, borderRadius: 100, margin: 30 }}></Image>
        <Text style={{ fontSize: 20 }}>닉네임</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
        <Image source={Locate}
          style={{ width: 25, height: 36, marginLeft: 40 }}></Image>

        <Text style={{ fontSize: 20, marginLeft: 40 }}>위치 설정</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
        <Image source={Locate}
          style={{ width: 25, height: 36, marginLeft: 40 }}></Image>

        <Text style={{ fontSize: 20, marginLeft: 40 }}>동네 인증하기</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 20, marginLeft: 105 }}>알림 설정</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
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

