import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TextInput,AsyncStorage } from 'react-native';
import Back from '../assets/back.png';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import axios from 'axios';
import { saveDataToStorage, loadDataFromStorage } from '../storage/AsyncStorageUtil';


//알림 키워드 설정 스크린
const NotificationKeywordSettingScreen = () => {
    const navigation = useNavigation();

    const [text, setText] = useState('')
    const [searchHistory,setSearchHistory] = useState(['아이폰 15', '아이폰 15 맥스', "search"])
    const [searchGeo, setSearchGeo] = useState([
        { location: '삼가동', isSelected: false },
        { location: '탕정면', isSelected: false }
    ])
    useEffect(() => {
         // 컴포넌트가 마운트될 때 AsyncStorage에서 데이터를 로드합니다.
        loadSearchGeoFromStorage();
    },[])


    // 알림 받을 동네 넘겨주기 (아직 미완성)
    const geolocationPost = async () => {
        const data = {
            memberId:1,
            page: 1,
            size:10
        };

        try {
            const response = await axios.post(process.env.API_IPSS+'/notification/', data);
            console.log(response.data);
            // setSearchHistory(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    // 알림 받을 키워드 등록  api
    const keywordPost = async (keyword) => {
        const data = {
            memberId: 1,
            deviceId: keyword
        };

        try {
            const response = await axios.get(process.env.API_IPSS + '/like/regist/device', {
                params: data
            });
             console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // 알림 받을 키워드 삭제  api
    const keywordDeletePost = async (idx) => {
        const data = {
            memberId:1,
            messageIndex:idx
        };

        try {
            const response = await axios.post(process.env.API_IPSS+'/notification/delete', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // 알림 받을 키워드 all 삭제  api
    const keywordDeleteAllPost = async (idx) => {
        const data = {
            memberId:1
        };

        try {
            const response = await axios.post(process.env.API_IPSS+'/notification/delete/all', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const backStack = () => {
        geolocationPost();
        navigation.goBack()
    }

    const onChangeText = (inputText) => {
        setText(inputText)
    }
    //등록한 키워드 추가
    const addKeyword = () => {
        if (text.trim() !== '') {
            setSearchHistory((prevSearchHistory) => [...prevSearchHistory, text]);
            setText(''); // Clear the input after adding a keyword
        }
        // keywordPost(text)
    };

    //등록한 키워드 삭제
    const deleteSearchHistory = (idx) => {
        const tmp = [...searchHistory]
        console.log(tmp[idx])
        //api
        keywordDeletePost(idx)
        tmp.splice(idx,1)
        setSearchHistory(tmp)
        
    }

    const delAllSearchHistory = () => {
        keywordDeleteAllPost()
        setSearchHistory([])
    }
    //asyncStorage로 알림받을동네 체크 박스 유지하기
    const loadSearchGeoFromStorage = async () => {
        const storedSearchGeo = await loadDataFromStorage('searchGeo');
        if (storedSearchGeo) {
          setSearchGeo(storedSearchGeo);
        }
      };
    //체크박스 선택
    const toggleLocationSelection = (index) => {
        const updatedLocations = [...searchGeo];
        updatedLocations[index].isSelected = !updatedLocations[index].isSelected;
        setSearchGeo(updatedLocations);
        // console.log(searchGeo)
         // 업데이트된 상태를 AsyncStorage에 저장합니다.
        saveDataToStorage('searchGeo', updatedLocations);   

        // AsyncStorage에 데이터가 들어왔는지 확인하는 콘솔 출력
        checkAsyncStorage('searchGeo');
    }

    const checkAsyncStorage = async (key) => {
        // AsyncStorage에서 데이터를 확인하여 콘솔에 출력
        const data = await loadDataFromStorage(key);
        console.log("------------------------------------------");
        console.log(`AsyncStorage 확인 - 키: ${key}, 데이터:`, data);
      };
   
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.searchView}>
                <View style={{
                    width: "80%", height: '70%', backgroundColor: "#E9E4E4", borderRadius: '10%',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        style={{ width: "80%", height: '100%', marginLeft: '5%' }}
                        placeholder='등록할 제품명을 입력하세요'
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TouchableOpacity
                        style={{ justifyContent: "center", alignItems: "center" }}
                        onPress={addKeyword}
                    >
                        <Feather name="search" size={30} color="black" style={{ opacity: 0.4 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginLeft: '5%' }} onPress={backStack}>
                    <Text style={{ fontSize: '18' }}>취소</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: "5%", marginLeft: '4%', alignItems: "center" }}>
                <View style={{ height: '100%', width: '80%' }}>
                    <Text style={{ fontSize: 23, marginLeft: '3%', fontWeight: "500" }}>등록한 키워드</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: '#4D4D4D' }} onPress={delAllSearchHistory}>지우기</Text>
                </TouchableOpacity>
            </View>
            <View>
                {searchHistory.map((x, index) => (
                    <View key={index} style={{ flexDirection: 'row', marginLeft: "8%", marginTop: "4%", alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', borderColor: '#C9C3C3', borderWidth: 1, borderRadius: 20, padding: 7, alignItems: "center" }}>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 19, fontWeight: '300' }}>   {x} </Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 5, }} onPress={() => deleteSearchHistory(index)}>
                                <AntDesign name="close" size={19} color="#C9C3C3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
            <View style={{ flexDirection: 'row', marginTop: "5%", marginLeft: '4%', alignItems: "center" }}>
                <View style={{ height: '100%', width: '80%' }}>
                    <Text style={{ fontSize: 23, marginLeft: '3%', fontWeight: "500" }}>알림 받을 동네</Text>
                </View>
            </View>
            <View>
                {searchGeo.map((location, index) => (
                    <View key={index} style={{ flexDirection: 'row', marginLeft: "8%", marginTop: "4%", alignItems: "center" }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                borderColor: '#C9C3C3',
                                borderWidth: 1,
                                borderRadius: 20,
                                padding: 7,
                                alignItems: "center",
                            }}
                            onPress={() => toggleLocationSelection(index)}
                        >
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 19, fontWeight: '300' }}> {location.location} </Text>
                            </View>
                            {location.isSelected ? (
                                <AntDesign name="checksquare" size={19} color="#2ecc71" />
                            ) : (
                                <AntDesign name="checksquareo" size={19} color="#C9C3C3" />
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchView: {
        width: '100%',
        height: '8%',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        borderBottomColor: "#C9C3C3",
        borderBottomWidth: '0.5px',
    }
});
export default NotificationKeywordSettingScreen;
