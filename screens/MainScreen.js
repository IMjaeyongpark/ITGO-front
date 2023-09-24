import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNav';

// 네비게이션 파라미터 타입 정의 (RootStackParam에 따라 수정)
export type NavigationParams = {
  Main: undefined;
  Register: undefined;
  Login: undefined;
};

// MainScreen 컴포넌트
const MainScreen: React.FC = () => {

  return (
    <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
