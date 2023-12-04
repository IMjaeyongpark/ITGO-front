import React from 'react';
import { View, Text, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.topbox}>
      <Text style={styles.titletext}>IT 중고거래는 &nbsp;
        <Text style={styles.titletext2}>ITGO</Text>
      </Text>
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
    backgroundColor: '#3454CD',
    padding: 16,
    margin: 10,
    borderRadius: 8,
    width: 250, // 원하는 가로 크기로 조절
    alignItems: 'center', // 가로 크기 조절 후 내용을 중앙으로 정렬
  },
  starttext: {
    color: 'white',
    fontSize: 24,
    
  },
  text1:{
    fontSize: 18
  },
  touchtext: {
    color: 'blue', fontSize: 18
  },
  bottombox: {
    alignItems: 'center',
    marginBottom: 20, // 변경된 부분
  },
  topbox: {
    marginBottom: 50,
  },
});

export default StartScreen;
