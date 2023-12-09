import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Back from '../assets/back.png';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
//알림 키워드 설정 스크린
const NotificationKeywordSettingScreen = () => {
    const navigation = useNavigation();

    const backStack = () => {
        
        // 알림 받을 동네 넘겨주기 // 아직 백부분 구현 안된거로 알고 있음
        const requestPost = async () => {
            const data = {
                title: 'foo',
                body: 'bar',
                userId: 1
            };

            try {
                const response = await axios.post('<https://jsonplaceholder.typicode.com/posts>', data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        navigation.goBack()
    }

    const [text, setText] = useState('')

    const onChangeText = (inputText) => {
        setText(inputText)
    }
    
    const [searchHistory,setSearchHistory] = useState(['아이폰 15', '아이폰 15 맥스', "search"])
    const [searchGeo, setSearchGeo] = useState([
        { location: '삼가동', isSelected: false },
        { location: '탕정면', isSelected: false }
    ])
    //등록한 키워드 삭제
    const deleteSearchHistory = (idx) => {
        const tmp = [...searchHistory]
        tmp.splice(idx,1)
        setSearchHistory(tmp)
    }

    const delAllSearchHistory = () => {
        setSearchHistory([])
    }
    //체크박스 선택
    const toggleLocationSelection = (index) => {
        const updatedLocations = [...searchGeo];
        updatedLocations[index].isSelected = !updatedLocations[index].isSelected;
        setSearchGeo(updatedLocations);
        console.log(searchGeo)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.searchView}>
                <View style={{
                    width: "80%", height: '70%', backgroundColor: "#E9E4E4", borderRadius: '10%',
                    flexDirection: 'row',
                }}>
                    <TextInput style={{ width: "80%", height: '100%', marginLeft: '5%' }}
                        placeholder='제품명을 입력하세요'
                        onChangeText={onChangeText}
                    ></TextInput>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('SearchResultScreen')}>
                        <Feather name="search" size={30} color="black" style={{ opacity: 0.4 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginLeft: '5%' }} onPress={backStack}>
                    <Text style={{ fontSize: '18' }}>취소</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: "5%", marginLeft: '4%', alignItems: "center" }}>
                <View style={{ height: '100%', width: '80%' }}>
                    <Text style={{ fontSize: 23, marginLeft: '3%', fontWeight:"500" }}>등록한 키워드</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: '#4D4D4D' }} onPress={delAllSearchHistory}>지우기</Text>
                </TouchableOpacity>
            </View>
            
            

            <View>
                {searchHistory.map((x, index) => (
                    <View style={{ flexDirection: 'row', marginLeft: "8%", marginTop: "4%", alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', borderColor: '#C9C3C3', borderWidth: 1, borderRadius: 20, padding: 7, alignItems: "center" }}>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 19, fontWeight: '300' }}>   {x} </Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 5, }} onPress={()=>deleteSearchHistory(index)}>
                                <AntDesign name="close" size={19} color="#C9C3C3" />
                            </TouchableOpacity>
                            <Text>  </Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={{ flexDirection: 'row', marginTop: "5%", marginLeft: '4%', alignItems: "center" }}>
                <View style={{ height: '100%', width: '80%' }}>
                    <Text style={{ fontSize: 23, marginLeft: '3%', fontWeight:"500" }}>알림 받을 동네</Text>
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
        // shadowColor:'rgb(50,50,50)',
        // shadowOpacity:'0.5',
        // shadowRadius:5,
        // shadowOffset:{
        //     height:'3',
        //     width:0
        // }
    }
});
export default NotificationKeywordSettingScreen;
