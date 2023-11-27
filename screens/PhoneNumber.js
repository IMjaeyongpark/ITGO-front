import React, { useState,useRef } from 'react';
import { View, Text, TouchableOpacity,TextInput, StyleSheet,Button, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseConfig } from './config';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';


const PhoneNumber = () => {
  const navigation = useNavigation();
  const [code,setCode]=useState('');
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] =useState();
  const [verificationId, setVerificationId] =useState();
  const [verificationError, setVerificationError] = useState();
  const sendVerification=()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
        .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
        .then((id)=>{
          setVerificationId(id);
          setPhoneNumber('');
        })
        
  };

  const confirmCode=()=>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
    .then(()=>{
      setCode('');
    })
    .catch((error)=>{
      alert(error);
    })
    Alert.alert(
      '회원가입 성공!'
    )
    navigation.navigate('Geolocation')

  }
  //인증번호가 오지 않을때 버튼
  const verificationErrorfunction=()=>{
  
  }
  return (
    //빈공간 클릭시 키보드 내려가는 동작위함
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>
        안녕하세요! {"\n"}휴대폰 번호로 로그인해주세요.
        </Text>
        <View style={styles.textBtn}>
          <TextInput
            placeholder='휴대폰 번호(-없이 숫자만 입력)'
            placeholderTextColor={'#616161'}
            fontSize="20px"
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoComplete='tel'
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>
              인증문자받기
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder='인증번호입력'
            placeholderTextColor={'#616161'}
            fontSize="20px"
            onChangeText={setCode}
            keyboardType='number-pad'
            autoCompleteType='tel'
            style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendCode} onPress={confirmCode} >
              <Text style={styles.buttonText} >
                동의하고 시작하기
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={verificationErrorfunction} >
              <Text style={styles.atagtext} >
                인증번호가 오지 않나요?
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    padding:40
    
  },
  textInput:{
    marginBottom: 20,
    width: 304,
    height: 59,
    flexShrink:0,
    backgroundColor:'#AEAEAE96',
    borderRadius:30,
    textAlign: 'center',
  },
  
  sendVerification:{
    marginBottom: 20,
    backgroundColor:'#3454CD',
    borderRadius:7,
    width: 304,
    height: 47
  },
  sendCode:{
    backgroundColor:'#3454CD',
    borderRadius:7,
    width: 304,
    height: 47
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    lineHeight: 45, // 높이에 맞게 조절
  },
  otpText:{
    fontSize:24,
    color:'black',
    margin:'#fff',
    margin:20
  },
  textBtn:{
    flexDirection: 'column', // 열 방향으로 정렬
    justifyContent: 'space-between', // 요소들 사이의 공간을 동일하게 분배
    alignItems: 'center', // 가운데 정렬
    paddingVertical: 10, // 위아래로 간격을 조절
  },
  
  atagtext:{
    color: '#A2A2A2',
    textDecorationLine: 'underline', // 밑줄 추가
    marginTop: 10, // 에러 텍스트와 버튼 간의 간격 조절
  }
})