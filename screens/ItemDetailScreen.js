import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Back from '../assets/back.png'
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { API_IP } from "@env"
import axios from 'axios';

// MainScreen 컴포넌트
const ItemDetailScreen = ({ route }) => {

  const navigation = useNavigation();

  const [value, setValue] = useState(route.params.x)
  const [content, setContent] = useState('')
  const [scrapedUrl, setScrapedUrl] = useState('')

  const backStack = () => {
    navigation.goBack()
  }

  const url = API_IP + '/post/view'

  const params = {
    memberId: 1,
    postId: value.postId
  };
  
  const like = () => {
    const tmp = { ...value }
    tmp.like = !tmp.like
    var likeurl
    if (tmp.like) {
      likeurl = API_IP + '/like/regist/post'
    } else {
      likeurl = API_IP + '/like/delete/post'
    }
    console.log(likeurl)

    fetch(likeurl, { params })
      .then(response => console.log('성공'))
      .catch(error => console.error('API 호출 중 에러:', error));

    setValue(tmp)
  }

  const yesLike = <AntDesign name="heart" size={30} color="red" />
  const noLike = <AntDesign name="hearto" size={30} color="black" />

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        setContent(response.data.content)
        setScrapedUrl(response.data.scrapedUrl)

      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData(); // useEffect 안에서 비동기 함수 호출
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행


  return (
    <View>
      <SafeAreaView style={styles.topnav}>
        <TouchableOpacity style={{ marginLeft: "5%" }} onPress={backStack}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={{ height: "89%", backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Image source={value.Image} style={{ width: "100%", paddingBottom: '100%', }} />
          <View style={{ borderBottomColor: '#C9C3C3', borderBottomWidth: 0.8, width: '100%', borderTopColor: '#C9C3C3', borderTopWidth: 0.8 }}>
            <View style={{ marginTop: "2%", width: "80%" }}>
              <Text style={{ fontSize: 30, marginTop: '5%', fontWeight: 'bold', marginLeft: '5%' }}>{value.price.toLocaleString('ko-KR')}원</Text>
            </View>
            <View style={{ marginTop: "2%", width: "80%", marginBottom: '3%', marginLeft: '5%' }}>
              <Text style={{ fontSize: 18 }}>{value.title}</Text>
            </View>
          </View>
          <View style={{ marginTop: "5%", width: "80%" }}>
            <Text style={{ fontSize: 15 }}>{content}</Text>
          </View>
          <View style={{ height: 180 }} />
        </View>
      </ScrollView>

      <View style={styles.underView}>
        <TouchableOpacity style={{ marginLeft: "5%" }} onPress={like}>
          {value.like ? yesLike : noLike}
        </TouchableOpacity>
        <TouchableOpacity style={styles.diego} onPress={() => { alert(scrapedUrl) }}>
          <Text style={{ fontSize: 15, color: 'white' }}>사이트로 이동하기</Text>
        </TouchableOpacity></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topnav: {
    height: '11%',
    felx: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: '#C9C3C3',
    borderBottomWidth: 0.8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //marginTop: "2%",
  },
  diego: {
    backgroundColor: "#3454CD",
    width: "75%",
    height: "50%",
    borderRadius: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "5%"
  },
  underView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '11%',
    felx: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: '#C9C3C3',
    borderTopWidth: 0.8,
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
  }
});

export default ItemDetailScreen;

