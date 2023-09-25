import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>시작페이지</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default StartScreen;
