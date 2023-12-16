import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TMP from '../assets/tmp3.png';

// MainScreen 컴포넌트
const Compare = () => {

    const navigation = useNavigation();

    const backStack = () => {
        navigation.goBack()
    }
    const data1 =
    {
        "modelname": "삼성전자 갤럭시북3 프로 NT940XFG-KC51G ",
        "kind": "노트북 ",
        "OS": " 윈도우11홈 ",
        "screen": {
            "LCD": "35.6cm(14인치) ",
            "Resolution": " 2880x1800(WQXGA+) ",
            "brightness": " 400nit ",
            "scanning_rate": " 120Hz "
        },
        "CPU": {
            "name": "인텔 ",
            "processor": " 코어i5-13세대 ",
            "cpu": " i5-1340P (1.9GHz) ",
            "core": " 12코어(4P+8E) "
        },
        "ram": {
            "name": "LPDDR5(온보드) ",
            "capacity": "16GB ",
            "replace": "불가능 "
        },
        "graphic": {
            "graphic": "내장",
            "name": " Iris Xe "
        },
        "storage": {
            "name": "M.2(NVMe) ",
            "size": " 256GB ",
            "slot": " 2개 "
        },
        "network": " 802.11ax(Wi-Fi 6E) ",
        "imageIO": {
            "cable": "HDMI ",
            "cam": " 웹캠(FHD) "
        },
        "input": {
            "key": "키보드 라이트 ",
            "rudder": " ㅗ형 방향키 "
        },
        "power": {
            "battery": " 63Wh ",
            "adapters": " 65W ",
            "type": " 타입C ",
            "length": " 최대16시간 "
        },
        "basic": {
            "thickness": " 11.3mm ",
            "weight": " 1.17kg ",
            "color": " 그라파이트"
        },
        "image": "https://img.danawa.com/prod_img/500000/140/936/img/18936140_1.jpg?shrink=500:500"
    }

    const data2 = {
        "modelname": "APPLE 2022 맥북에어13 M2 8Core 8GPU 블루 ",
        "kind": "노트북 ",
        "OS": " macOS Monterey ",
        "screen": {
            "LCD": "34.5cm(13.6인치) ",
            "Resolution": " 2560x1664 ",
            "brightness": " 500nit "
        },
        "CPU": {
            "name": "애플(ARM) ",
            "cpu": " 실리콘 M2 ",
            "core": " 옥타코어(4+4) "
        },
        "ram": {
            "capacity": "8GB ",
            "replace": "불가능 "
        },
        "graphic": {
            "graphic": "내장",
            "name": " M2 8 core "
        },
        "storage": {
            "name": "SSD ",
            "size": " 256GB "
        },
        "network": " 802.11ax(Wi-Fi 6) ",
        "imageIO": {
            "cam": "웹캠(FHD) "
        },
        "input": {
            "key": "키보드 라이트 ",
            "rudder": " ㅗ형 방향키 "
        },
        "power": {
            "battery": " 52.6Wh ",
            "adapters": " 30W ",
            "type": " MagSafe 3 ",
            "length": " 최대18시간 "
        },
        "basic": {
            "thickness": " 11.3mm ",
            "weight": " 1.24kg ",
            "color": " 미드나이트 "
        },
        "image": "https://img.danawa.com/prod_img/500000/826/203/img/17203826_1.jpg?shrink=500:500"
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                width: '100%', height: '13.6%', borderBottomColor: '#C9C3C3',
                borderBottomWidth: 0.8, flexDirection: 'row', backgroundColor: "#3454CD", alignItems: "center"
            }}>
                <TouchableOpacity style={{ marginLeft: '5%', marginTop: '10%' }} onPress={backStack}>
                    <AntDesign name="left" size={35} color="white" />
                </TouchableOpacity>
                <SafeAreaView>
                    <Text style={{ color: 'white', fontSize: 25, marginTop: '8%', marginLeft: '28%' }}>제품 비교하기</Text>
                </SafeAreaView>
            </View>

            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "500" }}>{data1["modelname"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "500" }}>{data2["modelname"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Image source={{ uri: data1['image'] }} style={{ width: '80%', aspectRatio: 1, borderRadius: "10%", marginTop: 20 }} />
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Image source={{ uri: data2['image'] }} style={{ width: '80%', aspectRatio: 1, borderRadius: "10%", marginTop: 20 }} />
                        </View>
                    </View>
                    <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>기본스펙</Text>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["kind"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["kind"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["OS"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["OS"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["thickness"]}(두께)</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["thickness"]}(두께)</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["weight"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["weight"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["color"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["color"]}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>화면</Text>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["LCD"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["LCD"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["Resolution"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["Resolution"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["brightness"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["brightness"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["scanning_rate"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["scanning_rate"]}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>CPU</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["CPU"]["name"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["CPU"]["name"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["CPU"]["cpu"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["CPU"]["cpu"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["CPU"]["core"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["CPU"]["core"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>램</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["ram"]["capacity"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["ram"]["capacity"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["ram"]["replace"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["ram"]["replace"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>그래픽</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["graphic"]["graphic"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["graphic"]["graphic"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["graphic"]["name"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["graphic"]["name"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>네트워크</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["network"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["network"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>영상입출력</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["imageIO"]["cable"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["imageIO"]["cable"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["imageIO"]["cam"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["imageIO"]["cam"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>입력창지</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["input"]["key"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["input"]["key"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["input"]["rudder"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["input"]["rudder"]}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>파워</Text>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["power"]["battery"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["power"]["battery"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["power"]["adapters"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["power"]["adapters"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["power"]["type"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["power"]["type"]}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inlist}>
                        <Text style={styles.textFont}>{data1["power"]["length"]}</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: "center", }}>
                        <Text style={styles.textFont}>{data2["power"]["length"]}</Text>
                    </View>
                </View>




                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
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
    },
    row: {
        borderRightWidth: 0.8,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    inlist: {
        width: '50%',
        alignItems: "center",
        borderRightColor: '#C9C3C3',
        borderRightWidth: 0.8
    },
    textFont: {
        fontSize: 17,
        marginTop: 20,
        fontWeight: "500"
    }
});

export default Compare;

