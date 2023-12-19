import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const List = (props) => {


    const nav = props.nav
    const url = process.env.API_IP + props.path
    console.log(url)

    const params = props.par


    console.log(params)

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { params });

                const newData = response.data.posts.map((v) => {
                    var tmp = v.imgFolderAddress
                    tmp = tmp.replace('[', '')
                    tmp = tmp.replace(']', '')
                    tmp = tmp.replace(/ /g, '')
                    tmp = tmp.replace(/\'/g, '')
                    tmp = tmp.split(',')

                    if (v.memberName == 'joongna') {
                        v.memberName = "중고나라"

                    }
                    return {
                        "Image": tmp,
                        "title": v.title,
                        "time": v.location.street + " 1시간 전",
                        "price": v.price,
                        "where": v.memberName,
                        "like": v.isLike,
                        "postId": v.postId,
                        "nav": nav
                    }
                });
                setData(newData); // 데이터를 상태에 설정
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        


        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

    const toggleBookmark = (index) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index].bookmark = !newData[index].bookmark;
            return newData;
        });
    };



    return (

        <ScrollView>
            {props.add}
            <View>
            {data.map((x, index) => (
                <TouchableOpacity key={index} onPress={() => nav.navigate('ItemDetailScreen', { x })} style={{backgroundColor:"white"}}>
                    <View style={styles.listStyle}>
                        <View style={{ felx: 1, flexDirection: 'row', width: '100%', height: '100%' }} >
                            <View style={{ width: '35%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                                <Image source={{ uri: x['Image'][0] }} style={{ width: "80%", height: "80%", borderRadius: "10%" }} />
                                {/* <TouchableOpacity onPress={() => toggleBookmark(index)} style={{ marginTop: "" }}>
                                    <Image source={x.bookmark ? Yes : No} style={{ width: 30, height: 30, marginBottom: 10, marginLeft: 40 }} />
                                </TouchableOpacity> */}
                            </View>
                            <View style={{ width: '65%', height: '100%' }}>
                                <Text style={{ fontSize: 17, marginTop: "5%" }}>{x["title"]}</Text>
                                <Text style={{ fontSize: 12, marginTop: "3%" }}>{x["time"]}</Text>
                                <View style={{ felx: 1, flexDirection: 'row', flex: 1, alignItems: 'flex-end' }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 20, marginBottom: 10 }}>{x["price"].toLocaleString('ko-KR')}원</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: "10%" }}>{x["where"]}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listStyle: {
        width: '100%',
        height: 150,
        borderColor: '#C9C3C3',
        borderBottomWidth: 0.5,
        
    }
});

export default List;
