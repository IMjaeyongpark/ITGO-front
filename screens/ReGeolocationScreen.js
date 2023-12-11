import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {REST_API_KEY} from "@env"


const ReGeolocationScreen = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [geolocationName, setGeolocationName] = useState(null);
  const navigation = useNavigation();
  const [coordinate_X,setCoordinate_X] = useState(null);
  const [coordinate_Y,setCoordinate_Y] = useState(null);
  const [text,setText] = useState('');
  const [autogeolocationName,setAutoGeolocationName]= useState("충남 아산시 탕정면");

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
  useEffect(() => {
    // autogeolocationName이 변경될 때 실행되는 로직
    console.log("autogeolocationName이 변경되었습니다:", autogeolocationName);
    // 추가로 원하는 작업을 수행할 수 있습니다.
  }, [autogeolocationName]); // autogeolocationName이 변경될 때만 useEffect 실행

  //위치 확인창
  const goAlert = () =>{
    const displayValue = autogeolocationName || ""; // null이나 falsy한 값이라면 빈 문자열로 처리

  Alert.alert(
    "현재 주소가 일치하시나요?",
    displayValue,
    [
      {
        text: "아니요",
        onPress: () => console.log("아니라는데"),
        style: "cancel",
      },
      { text: "네", onPress: () => navigation.navigate('Main') },
    ],
    { cancelable: false }
  );
  }

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
  
      console.log("ss",response.data.documents[0].road_address.region_1depth_name); // 응답 데이터를 출력하거나 원하는 로직을 수행하세요
      setAutoGeolocationName(
        response.data.documents[0].road_address.region_1depth_name+" "+
        response.data.documents[0].road_address.region_2depth_name+" "+
        response.data.documents[0].road_address.region_3depth_name
        );
      goAlert();
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
        <Text style={styles.explanation}>동네 인증하기</Text>
        <Text style={styles.explanation2}>현재 위치가 내 동내로 설정한'
          <Text>{autogeolocationName}</Text>&nbsp;
        '에 있습니다.
        </Text>
        <TouchableOpacity  style={styles.buttonstyle} onPress={requestGeoCoord2Address}>
          <Text style={styles.buttonText}>동네인증 완료하기</Text>
        </TouchableOpacity>
      <Text style={styles.paragraph}>{text}</Text>
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
    explanation2:{
      fontSize:15,
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
export default ReGeolocationScreen