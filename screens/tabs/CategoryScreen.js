import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import TopNav from './TopNav'
import axios from 'axios';

// MainScreen 컴포넌트
const CategoryScreen = ({ nav }) => {
    

    
    const url = process.env.API_IP + '/device/find/category'

    console.log(url)
    const [sam, setSam] = useState([]);
    const [apple, setApple] = useState([]);
    const [lg, setLg] = useState([]);
    const [etc, setEtc] = useState([]);


    const [tmpdata, setTmpData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setSam([])
                setApple([])
                setLg([])
                setEtc([])
                const response = await axios.get(url);
                const newData = response.data.categoryList;
                setTmpData(newData);

                newData.forEach((x) => {
                    const tmp = x.manufacturer;
                    const entry = { 'deviceType': x.deviceType, 'id': x.id };

                    if (tmp === '삼성') {
                        setSam((prevSam) => [...prevSam, entry]);
                    } else if (tmp === '애플') {
                        setApple((prevApple) => [...prevApple, entry]);
                    } else if (tmp === '엘쥐') {
                        setLg((prevLg) => [...prevLg, entry]);
                    } else {
                        setEtc((prevEtc) => [...prevEtc, entry]);
                    }
                });

            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
            
        };

        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행



    return (
        <View style={{ flex: 1 }}>
            <TopNav nav={nav}></TopNav>
            <ScrollView>
                    <View style={styles.kindlist}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>삼성</Text>
                    </View>
                {sam.map((x) => (<TouchableOpacity style={styles.listStyle} onPress={() => nav.push('CategoryResult', { x })}>
                    <View style={{ flex: 1, justifyContent: "center", marginLeft: 50 }}>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>{x.deviceType}</Text>
                    </View>
                </TouchableOpacity>))}
                    <View style={styles.kindlist}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>애플</Text>
                    </View>
                {apple.map((x) => (<TouchableOpacity style={styles.listStyle} onPress={() => nav.push('CategoryResult', { x })}> 
                    <View style={{ flex: 1, justifyContent: "center", marginLeft: 50 }}>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>{x.deviceType}</Text>
                    </View>
                </TouchableOpacity>))}
                    <View style={styles.kindlist}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>LG</Text>
                    </View>
                {lg.map((x) => (<TouchableOpacity style={styles.listStyle} onPress={() => nav.push('CategoryResult', { x })}>
                    <View style={{ flex: 1, justifyContent: "center", marginLeft: 50 }}>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>{x.deviceType}</Text>
                    </View>
                </TouchableOpacity>))}
                    <View style={styles.kindlist} onPress={() => nav.push('CategoryResult', { x })}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>기타</Text>
                    </View>
                {etc.map((x) => (<TouchableOpacity style={styles.listStyle} onPress={() => nav.push('CategoryResult', { x })}>
                    <View style={{ flex: 1, justifyContent: "center", marginLeft: 50 }}>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>{x.deviceType}</Text>
                    </View>
                </TouchableOpacity>))}
            </ScrollView>
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
        height: 40,
        borderTopColor: '#C9C3C3',
        borderTopWidth: 0.8
    }
});

export default CategoryScreen;

