import React from 'react';
import { View, Text, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titletext}>시작페이지</Text>

      {/*회원가입 버튼 */}
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
  );
}


const styles = StyleSheet.create({
  titletext:{
    fontSize:25
  },
  regi: {
    backgroundColor: '#3498db',
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  starttext: {
    color: 'white', fontSize: 24
  },
  text1:{
    fontSize: 18
  },
  touchtext: {
    color: 'blue', fontSize: 18
  }
});

export default StartScreen;
