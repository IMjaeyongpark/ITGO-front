import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

// MainScreen 컴포넌트
const CategoryResult = ({ route }) => {

    const navigation = useNavigation();


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
                console.log(response.data)

            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행


    return (
        <View style={{ flex: 1, }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity onPress={()=>navigation.push('DeviceInfo')}>
                    <Text style={{fontSize:30}}>info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        height: 40,
    },
    kindlist: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        borderTopColor: '#C9C3C3',
        borderTopWidth: 0.8
    }
});

export default CategoryResult;

