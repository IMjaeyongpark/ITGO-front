import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';


// MainScreen 컴포넌트
const CategoryResult = ({ route }) => {

    const navigation = useNavigation();

    const [data, setData] = useState([])


    const url = process.env.API_IP + '/device/find/list/byCategory'
    const params = {
        'page': 0,
        'size': 100,
        'sortBy': 'RECENT_POST',
        'category': route.params.x.id
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { params });
                setData(response.data.deviceList)

            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

    const backStack = () => {
        navigation.goBack()
    }


    return (
        <View style={{flex:1}}>
           <View style={{
                width: '100%', height: '13.6%', borderBottomColor: '#C9C3C3',
                borderBottomWidth: 0.8, flexDirection: 'row', backgroundColor: "#3454CD", alignItems: "center"
            }}>
                <TouchableOpacity style={{ marginLeft: '5%', marginTop: '10%' }} onPress={backStack}>
                    <AntDesign name="left" size={35} color="white" />
                </TouchableOpacity>

            </View>
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    {data.map((x, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('DeviceInfo', { 'id': x.detailId })}>
                            <View style={styles.listStyle}>
                                <View style={{ felx: 1, flexDirection: 'row', width: '100%', height: '100%' }} >
                                    <View style={{ width: '35%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                                        <Image source={{ uri: x['image'] }} style={{ width: "80%", height: "80%", borderRadius: "10%" }} />
                                        {/* <TouchableOpacity onPress={() => toggleBookmark(index)} style={{ marginTop: "" }}>
                                    <Image source={x.bookmark ? Yes : No} style={{ width: 30, height: 30, marginBottom: 10, marginLeft: 40 }} />
                                </TouchableOpacity> */}
                                    </View>
                                    <View style={{ width: '65%', height: '100%' }}>
                                        <Text style={{ fontSize: 17, marginTop: "5%" }}>{x["deviceName"]}</Text>
                                        <View style={{ felx: 1, flexDirection: 'row', flex: 1, alignItems: 'flex-end' }}>
                                            <View style={{ width: '45%' }}>
                                                <Text style={{ fontSize: 20, marginBottom: 10 }}>{x["launchPrice"].toLocaleString('ko-KR')}원</Text>
                                            </View>
                                            <View style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: "10%" }}>{x["manufacturer"]}</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View >
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
    kindlist: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        borderTopColor: '#C9C3C3',
        borderTopWidth: 0.8
    },
    listStyle: {
        width: '100%',
        height: 150,
        borderColor: '#C9C3C3',
        borderBottomWidth: 0.5,
    }
});

export default CategoryResult;

