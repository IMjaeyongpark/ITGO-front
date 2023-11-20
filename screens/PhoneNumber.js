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
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();

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
  return (
    //빈공간 클릭시 키보드 내려가는 동작위함
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>
          Login using OTP
        </Text>
        <TextInput
          placeholder='phone number with country code'
          onChangeText={setPhoneNumber}
          keyboardType='phone-pad'
          autoComplete='tel'
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
          <Text style={styles.buttonText}>
            Send verification
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder='Confirm code'
          onChangeText={setCode}
          keyboardType='number-pad'
          autoCompleteType='tel'
          style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendCode} onPress={confirmCode} >
            <Text style={styles.buttonText} >
              Confirm verification
            </Text>
          </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },
  textInput:{
    paddingTop:40,
    paddingBottom:20,
    paddingHorizontal:20,
    fontSize:24,
    borderBottomColor:'#fff',
    borderBottomWidth:2,
    marginBottom:20,
    textAlign:'center',
    color:'#fff'

  },
  sendVerification:{
    padding:20,
    backgroundColor:'#3498db',
    borderRadius:10,

  },
  sendCode:{
    padding:20,
    backgroundColor:'#9b59b6',
    borderRadius:10
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  otpText:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff',
    margin:'#fff',
    margin:20
  }
})