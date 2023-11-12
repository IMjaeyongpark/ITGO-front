import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PhoneNumber = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const sendVerificationCode = async () => {
    navigation.navigate('Geolocation')
    // try {
    //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //   Alert.alert('SMS 전송 완료', '인증 코드를 입력하세요.');
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert('오류', 'SMS 전송에 실패했습니다.');
    // }
  };

  const verifyCode = async () => {
    useNavigation()
    try {
      const userCredential = await confirmation.confirm(verificationCode);
      Alert.alert('인증 성공', '휴대폰 본인 인증이 완료되었습니다.');
    } catch (error) {
      console.error(error);
      Alert.alert('인증 실패', '올바른 코드를 입력하세요.');
    }
  };

  return (
    <View>
      <Text>휴대폰 번호:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="휴대폰 번호 입력"
      />
      <Button title="인증 코드 전송" onPress={sendVerificationCode} />

      <Text>인증 코드:</Text>
      <TextInput
        value={verificationCode}
        onChangeText={setVerificationCode}
        placeholder="인증 코드 입력"
      />
      <Button title="인증 확인" onPress={verifyCode} />
    </View>
  );
};

export default PhoneNumber;