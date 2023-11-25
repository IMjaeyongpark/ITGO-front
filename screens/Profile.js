import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back from '../assets/back.png';
import BasicProfile from '../assets/basicProfile.jpg';
import Camera from '../assets/camera.png'


const Profile = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('닉네임')

  const onChangeText = (inputText) => {
    setText(inputText)
  }


  const backStack = () => {
    navigation.goBack()

  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 130, alignItems: 'center', justifyContent: 'flex-end', }}>
        <Text style={{ fontSize: 20 }}>프로필 수정</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image source={BasicProfile}
          style={{ width: 80, height: 80, borderRadius: 100 }}></Image>
      </View>
      <View style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: 100, marginTop: -20, marginLeft: 50, borderColor: 'black', borderWidth: '0.5' }}>
        <TouchableOpacity>
          <Image source={Camera}
            style={{ width: '100%', height: "100%" }}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'flex-start', width: '100%', marginTop: 30 }}>
        <Text style={{ fontSize: 20, marginLeft: '10%' }} >닉네임</Text>
      </View>
      <View style={{ width: '80%', marginTop: 10 }}>
        <TextInput style={{ backgroundColor: '#e8e3e3', height: 35, borderRadius: 8, }}
          onChangeText={onChangeText}
          placeholder={text}></TextInput>
      </View>


      <View style={styles.back} onPress={backStack}>
        <TouchableOpacity onPress={backStack} style={{ height: "100%", width: "100%" }}>
          <Image source={Back} style={{ height: "100%", width: "100%" }} transform={[{ scaleX: -1 }]} />
        </TouchableOpacity>
      </View>
      <View style={styles.save} onPress={backStack}>
        <TouchableOpacity onPress={backStack} style={{ height: "100%", width: "100%" }}>
          <Text style={{ fontSize: 25 }}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    marginLeft: 15,
    marginTop: 40
  },
  save: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    height: 40,
    width: 60,
    marginRight: 15,
    marginTop: 45
  }
});

export default Profile;