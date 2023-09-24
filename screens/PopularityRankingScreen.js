import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// 네비게이션 파라미터 타입 정의 (RootStackParam에 따라 수정)
export type NavigationParams = {
  Main: undefined;
  Register: undefined;
  Login: undefined;
};

// MainScreen 컴포넌트
const PopularityRankingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>메인 페이지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PopularityRankingScreen;
