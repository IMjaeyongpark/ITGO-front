import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import List from './tabs/List';
import { saveDataToStorage, loadDataFromStorage } from '../storage/AsyncStorageUtil';


const SearchResultScreen = ({ route }) => {
    const navigation = useNavigation();

    const [searchHistory, setSearchHistory] = useState([])
    
    console.log('route:' + route.params.text)

    const backStack = () => {
        navigation.goBack()
    }

    const [text, setText] = useState(route.params.text)

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

    const addSearchHistory = () => {
        const tmp = [text, ...searchHistory]
        saveDataToStorage('searchHistory', tmp)
        setSearchHistory(tmp)
        console.log(searchHistory)
    }

    const par = {
        memberId: 1,
        keyword: text,
        page: 0,
        size: 10,
        sortBy: 'RECENT_POST',
    }
    const path = '/search/keyword'

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.searchView}>
                <TouchableOpacity style={{ marginRight: '5%' }} onPress={backStack}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={{
                    width: "80%", height: '70%', backgroundColor: "#E9E4E4", borderRadius: '10%',
                    flexDirection: 'row',
                }}>
                    <TextInput style={{ width: "80%", height: '100%', marginLeft: '5%' }}
                        placeholder='제품명을 입력하세요'
                        onChangeText={onChangeText}
                    ></TextInput>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => {
                        addSearchHistory(text)
                        navigation.push('SearchResultScreen', { text })}}>
                        <Feather name="search" size={30} color="black" style={{ opacity: 0.4 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <List nav={navigation} path={path} par={par} />
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

export default SearchResultScreen;

