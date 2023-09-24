import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation,useIsFocused } from '@react-navigation/native';


  
const SplashScreen = () => {

  const navigation = useNavigation();
const [showLogo, setShowLogo] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      navigation.navigate('Start');
    }, 2000); // 1초 후에 StartScreen으로 이동

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  useEffect(() => {
    if (!isFocused) {
      // SplashScreen이 포커스를 잃으면 다시 뒤로 가기 동작을 비활성화
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      });
    }
  }, [isFocused, navigation]);


  return (
    <View style={styles.container}>
      {showLogo && (
        <Image
          source={require('../assets/icon.png')} // 로고 이미지 경로로 수정하세요.
          style={styles.logo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150, // 로고 이미지의 가로 크기를 조절하세요.
    height: 150, // 로고 이미지의 세로 크기를 조절하세요.
  },
});

export default SplashScreen;
