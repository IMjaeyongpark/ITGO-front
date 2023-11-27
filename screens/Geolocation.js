import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
const Geolocation = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [geolocationName, setGeolocationName] = useState(null);
  const navigation = useNavigation();

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
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.explanationcontainer}>
        <Text style={styles.explanation}>사용자 위치를 설정해주세요.</Text>
      </View>
      <View style={styles.searchcontainer}>
        <TextInput
            placeholder='동명(읍,면)으로 검색(ex.서초동)'
            placeholderTextColor={'#616161'}
            fontSize="20px"
            onChangeText={setGeolocationName}
            keyboardType='phone-pad'
            style={styles.textInput}
          />
      </View>
      <View style={styles.searchcontainer}>
        <TouchableOpacity style={styles.buttonstyle}>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>{text}</Text>

      <Button
            title="main"
            onPress={() => navigation.navigate('Main')}
          />
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
      
    },
    explanation:{
      fontSize:24,
      fontWeight:'bold',
      color:'black',
      margin:'#fff',
      margin:20
    },
    searchcontainer:{
      flex:2
    },
    textInput:{
      width: 304,
      height: 59,
      flexShrink:0,
      backgroundColor:'#AEAEAE96',
      borderRadius:30
    },
    buttonstyle:{
      width: 304,
      height: 47
    }
  

})
export default Geolocation