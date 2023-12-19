import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Back from '../assets/back.png';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { saveDataToStorage, loadDataFromStorage } from '../storage/AsyncStorageUtil';


const SearchScreen = () => {
    const navigation = useNavigation();


    const [searchHistory, setSearchHistory] = useState([])


    const backStack = () => {
        navigation.goBack()
    }

    const [text, setText] = useState('')

    const onChangeText = (inputText) => {
        setText(inputText)
    }

    useEffect(() => {
        const checkAsyncStorage = async (key) => {
            // AsyncStorage에서 데이터를 확인하여 콘솔에 출력
            try {
                const tmp = await loadDataFromStorage(key);

                console.log("------------------------------------------");
                console.log(`AsyncStorage 확인 - 키: ${key}, 데이터:`, tmp);
                setSearchHistory(tmp)


            } catch (e) { console.log("error") }
        }
        checkAsyncStorage('searchHistory')

    }, []);





    const deleteSearchHistory = (idx) => {
        const tmp = [...searchHistory]
        tmp.splice(idx, 1)
        setSearchHistory(tmp)
    }

    const delAllSearchHistory = () => {
        setSearchHistory([])
        saveDataToStorage('searchHistory', [])

    }

    const addSearchHistory = () => {
        const tmp = [text, ...searchHistory]
        saveDataToStorage('searchHistory', tmp)
        setSearchHistory(tmp)
        console.log(searchHistory)

        navigation.push('SearchResultScreen', { text })
    }

    const aa = ()=>{
        navigation.push('SearchResultScreen', { text })
    }

    const onPressSearchHistory = (v, index) => {

        const tmp1 = searchHistory.filter((value, idx) => {
            if (idx != index) {
                return value;
            }
        })
        
        const tmp = [v, ...tmp1]
        setText(v)
        saveDataToStorage('searchHistory', tmp)
        setSearchHistory(tmp)
        aa()
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
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => {
                        addSearchHistory()
                    }}>
                        <Feather name="search" size={30} color="black" style={{ opacity: 0.4 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginLeft: '5%' }} onPress={backStack}>
                    <Text style={{ fontSize: '18' }}>취소</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: "5%", marginLeft: '4%', alignItems: "center" }}>
                <View style={{ height: '100%', width: '80%' }}>
                    <Text style={{ fontSize: 23, marginLeft: '3%', fontWeight: "500" }}>최근 검색어</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: '#4D4D4D' }} onPress={delAllSearchHistory}>지우기</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                {searchHistory.map((x, index) => (
                    <TouchableOpacity onPress={() => onPressSearchHistory(x, index)}>
                        <View style={{ flexDirection: 'row', marginLeft: "8%", marginTop: "4%", alignItems: "center" }}>
                            <View style={{ flexDirection: 'row', borderColor: '#C9C3C3', borderWidth: 1, borderRadius: 20, padding: 7, alignItems: "center" }}>
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={{ fontSize: 19, fontWeight: '300' }}>   {x} </Text>
                                </View>
                                <TouchableOpacity style={{ marginLeft: 5, }} onPress={() => deleteSearchHistory(index)}>
                                    <AntDesign name="close" size={19} color="#C9C3C3" />
                                </TouchableOpacity>
                                <Text>  </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
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

export default SearchScreen;

