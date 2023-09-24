import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


  
const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>로그인페이지</Text>
      <Button
        title="동의하고 시작하기"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default LoginScreen;
