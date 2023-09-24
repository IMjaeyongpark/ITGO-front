import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationParams = {
    Register: undefined; // 'Register' 스크린에 전달할 파라미터가 있다면 여기에 정의
    Login:undefined; // 'Login'
    Main:undefined; // 'Main'
  };
  
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationParams>>();

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
