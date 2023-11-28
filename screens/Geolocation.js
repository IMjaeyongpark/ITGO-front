import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {REST_API_KEY} from "@env"


const Geolocation = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [geolocationName, setGeolocationName] = useState(null);
  const navigation = useNavigation();
  const [coordinate_X,setCoordinate_X] = useState(null);
  const [coordinate_Y,setCoordinate_Y] = useState(null);
  const [text,setText] = useState('위치찾는중');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  const requestGeoCoord2Address = async () => {
    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/geo/coord2address.json',
        {
          params: {
            x: coordinate_X,
            y: coordinate_Y,
            input_coord: 'WGS84',
          },
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        }
      );
  
      console.log(response.data); // 응답 데이터를 출력하거나 원하는 로직을 수행하세요
    } catch (error) {
      console.error(error); // 에러 처리 로직을 추가하세요
    }
  };

  
  useEffect(() => {
    if (errorMsg) {
      setText("gps를 허가해주세요.");
    } else if (location && location.coords) {
      const { longitude, latitude } = location.coords;
      setCoordinate_X(longitude);
      setCoordinate_Y(latitude);
      console.log(longitude);
      console.log(latitude);
      setTimeout(requestGeoCoord2Address, 100);
    }
  }, [location, errorMsg]); // location과 errorMsg 상태가 변경될 때만 실행되도록 설정
  

  return (
    <View style={styles.container}>
      <View style={styles.explanationcontainer}>
        <Text style={styles.explanation}>사용자 위치를 설정해주세요.</Text>
      
      
        <TextInput
            placeholder='동명(읍,면)으로 검색(ex.서초동)'
            placeholderTextColor={'#616161'}
            fontSize="20px"
            onChangeText={setGeolocationName}
            keyboardType='phone-pad'
            style={styles.textInput}
          />
        <TouchableOpacity style={styles.buttonstyle} onPress={requestGeoCoord2Address}>
          <Text style={styles.buttonText}>현재위치로 찾기</Text>
        </TouchableOpacity>
     
      
      
        
      <Text style={styles.paragraph}>{text}</Text>

      <Button
            title="main"
            onPress={() => navigation.navigate('Main')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paragraph:{

    },
    explanationcontainer:{
      margin:60
    },
    explanation:{
      fontSize:24,
      fontWeight:'bold',
      textAlign: 'center',
      marginBottom:20
    },
    searchcontainer:{
      
    },
    textInput:{
      width: 304,
      height: 59,
      flexShrink:0,
      backgroundColor:'#AEAEAE96',
      borderRadius:30,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonstyle:{
      marginBottom: 20,
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
    }
  

})
export default Geolocation