import React from 'react';
import { View, Text, Button, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#3454CD'}}>
      <View style={styles.topbox}>
        <Image
            source={require('../assets/logo.png')} // 로고 이미지 경로로 수정하세요.
            style={styles.logo}
          />
      </View>
      {/*회원가입 버튼 */}
      <View style={styles.bottombox}>
        <TouchableOpacity style={styles.regi}
          title="회원가입"
          onPress={() => navigation.navigate('PhoneNumber')}
        >
      
        <Text style={styles.starttext} >시작하기</Text>
        </TouchableOpacity>

        {/*로그인 버튼 */}
        <Text style={styles.text1}>이미 계정이 있나요? &nbsp;
          <TouchableOpacity
            title="로그인"
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.touchtext}>로그인하기</Text>
          </TouchableOpacity>
        </Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  titletext:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#333', // 텍스트 색상을 원하는 색상으로 변경하세요
    textAlign: 'center',
  },
  titletext2:{
    fontSize:40,
    fontWeight: 'bold',
    color: '#3454CD', // 텍스트 색상을 원하는 색상으로 변경하세요
    textAlign: 'center',
  },
  regi: {
    backgroundColor: 'white',
    padding: 16,
    margin: 10,
    borderRadius: 29.5,
    width: 250, // 원하는 가로 크기로 조절
    alignItems: 'center', // 가로 크기 조절 후 내용을 중앙으로 정렬
  },
  starttext: {
    color: '#3454CD',
    fontSize: 20,
    fontWeight:'bold'
  },
  text1:{
    fontSize: 18
  },
  touchtext: {
    color: 'white', fontSize: 18
  },
  bottombox: {
    marginTop: 300,
    alignItems: 'center',
    marginBottom: 20, // 변경된 부분
  },
  topbox: {
    marginBottom: 50,
  },
  logo: {
    width: 430, // 로고 이미지의 가로 크기를 조절하세요.
    height: 114, // 로고 이미지의 세로 크기를 조절하세요.
  },
});

export default StartScreen;
