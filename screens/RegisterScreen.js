import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

const RegisterScreen = () => {
  const navigation = useNavigation();
  Geolocation.requestAuthorization(level);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>회원가입 페이지</Text>
      <Button
        title="회원가입"
        onPress={() => {
          // 여기에 회원가입 처리 로직을 추가하세요.

          // 가입 성공 후에 MainScreen으로 이동하도록 수정하세요.
          navigation.navigate('Main');
        }}
      />
    </View>
  );
}

export default RegisterScreen;

