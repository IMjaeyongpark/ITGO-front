import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity } from 'react-native';

import axios from 'axios';
import { API_IP } from "@env"

const NotificationList = () => {

    const params = {
        memberId:1,
        page: 1,
        size:10
    }
    

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_IP + '/notification/find', {params} );
                const newData = response.data;
                setData(newData); // 데이터를 상태에 설정
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <ScrollView>
            {data.map((x, index) => (
                <></>
            ))}
        </ScrollView>
    );

};

const styles = StyleSheet.create({
   
});

export default NotificationList;
