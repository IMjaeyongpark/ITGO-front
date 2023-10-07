import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import No from '../../assets/no.png'
import Yes from '../../assets/yes.png'

// MainScreen 컴포넌트
const List = ({nav}) => {

    const value = {
        "testImage": { uri: "https://img.danawa.com/prod_img/500000/148/824/img/17824148_1.jpg?shrink=330:*&_v=20220929125243" },
        "title": "[최상급] 아이폰14프로 256GB 실버 배터리성능100%",
        "time": "배방읍 1시간 전",
        "price": "1,316,000원",
        "where": "당근",
        "bookmark": false,
    }

    const a = [value, value, value, value, value, value, value, value, value, value, value, value, value, value, value, value, value]
    

    return (
        <ScrollView >
            {
                a.map(x => {
                    const [bookmark, setBookmark] = useState(x[bookmark])
                    const aa = () => {
                        setBookmark(!bookmark)
                    }
                    const b = (check) => {
                        return check ? Yes : No
                    }

                    return (
                        <TouchableOpacity onPress={() => nav.navigate('ItemDetailScreen')}>
                            <View style={styles.listStyle}>
                                <View style={{ felx: 1, flexDirection: 'row', width: '100%', height: '100%' }} >
                                    <View style={{ width: '35%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                                        <Image source={x['testImage']} style={{ width: "80%", height: "80%" }} /></View>
                                    <View style={{ width: '65%', height: '100%' }}>
                                        <Text style={{ fontSize: 17, marginTop: "5%" }}>{x["title"]}</Text>
                                        <Text style={{ fontSize: 12, marginTop: "3%" }}>{x["time"]}</Text>
                                        <View style={{ felx: 1, flexDirection: 'row', flex: 1, alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 20, marginBottom: 10 }}>{x["price"]}</Text>
                                            <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: "10%" }}>{x["where"]}</Text>
                                            <TouchableOpacity onPress={aa}><Image source={b(bookmark)} style={{ width: 30, height: 30, marginBottom: 10, marginLeft: 40 }} /></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listStyle: {
        width: '100%',
        height: 150,
        borderColor: 'black',
        borderBottomWidth: 0.5
    }
});

export default List;

