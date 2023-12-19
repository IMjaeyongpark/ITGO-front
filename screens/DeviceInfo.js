import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { saveDataToStorage, loadDataFromStorage } from '../storage/AsyncStorageUtil';

// MainScreen 컴포넌트
const DeviceInfo = ({ route }) => {

    const [com, setCom] = useState('null')
    const [data1, setData1] = useState(null)
    const [check, setCheck] = useState(false)

    const params = {
        'detailId': route.params.id
    }
    const url = process.env.API_IP + '/device/find/mobile/info'

    console.log(url)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { params });
                setData1(response.data.info)
                console.log(data1)

            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData(); // useEffect 안에서 비동기 함수 호출
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행


    const navigation = useNavigation();

    const backStack = () => {
        navigation.goBack()
    }

    const saveCompare = () => {

        if (com == null) {
            saveDataToStorage('data1', params.detailId)
            const t = !check
            setCheck(t)
        } else {
            navigation.push('DeviceCompare', { data1: com, data2: params.detailId })
        }
    }
    const deleteCompare = () => {
        saveDataToStorage('data1', null)
        const t = !check
        setCheck(t)
    }

    useEffect(() => {
        const checkAsyncStorage = async () => {
            // AsyncStorage에서 데이터를 확인하여 콘솔에 출력
            try {
                const tmp = await loadDataFromStorage('data1');

                console.log("------------------------------------------");
                console.log(`AsyncStorage 확인 - 키: data1, 데이터:`, tmp);
                setCom(tmp)


            } catch (e) { console.log("error") }
        }
        checkAsyncStorage()

    }, [check]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                width: '100%', height: '13.6%', borderBottomColor: '#C9C3C3',
                borderBottomWidth: 0.8, flexDirection: 'row', backgroundColor: "#3454CD", alignItems: "center"
            }}>
                <TouchableOpacity style={{ marginLeft: '5%', marginTop: '10%' }} onPress={backStack}>
                    <AntDesign name="left" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={saveCompare}>
                    <View style={{ alignItems: "center", marginLeft: 210, marginTop: 40, borderRadius: '8', borderColor: '#E9E4E4', borderWidth: 1, }}>
                        <Text style={{ fontSize: 20, color: '#E9E4E4', margin: 5, fontWeight: '500' }}>비교</Text>
                    </View>
                </TouchableOpacity>
                {(com != null) ? (
                    <TouchableOpacity onPress={deleteCompare}>
                        <View style={{
                            alignItems: "center",
                            borderColor: '#E9E4E4', borderWidth: 1,
                            marginLeft: 15, marginTop: 40, borderRadius: '8'
                        }}>
                            <Text style={{ fontSize: 20, color: '#E9E4E4', margin: 5, fontWeight: '500' }}>삭제</Text>
                        </View>
                    </TouchableOpacity>) : (<></>)}
            </View>
            {(data1 != null) ? (<>

                <ScrollView>
                    <View style={{ width: '100%' }}>
                        <View style={styles.row}>
                            <View style={styles.inlist, {
                                width: '100%',
                                alignItems: "center",
                            }}>
                                <Text style={{ fontSize: 25, marginTop: 20, fontWeight: "500" }}>{data1["basic"]["name"]}</Text>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Image source={{ uri: data1['image'] }} style={{ width: '80%', aspectRatio: 1, borderRadius: "10%", marginTop: 20 }} />
                            </View>

                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>기본스펙</Text>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>제조사</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["basic"]["manufacturer"]}</Text>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>출시일</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["basic"]["releaseDate"]}</Text>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>출고가</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>￦{data1["basic"]["price"]}</Text>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>출시 OS</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["basic"]["os"]}</Text>
                            </View>

                        </View>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>무게</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["basic"]["weight"]}</Text>
                            </View>

                        </View>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>크기</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["basic"]["size"]}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>화면</Text>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>크기</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["screen_size"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>주사율</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["scanning_rate"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>화면 타입</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["screen_type"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>해상도</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["resolution"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>화면 폭</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["screen_width"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>화면 높이</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["screen"]["screen_height"]}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>칩셋</Text>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>AP</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["chipSet"]["ap"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>CPU</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["chipSet"]["cpu"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>CPU 코어</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["chipSet"]["cpu_core"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>GPU</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["chipSet"]["gpu"]}</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>카메라</Text>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>플래시</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["camera"]["flash"]}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>사진해상도</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["camera"]["photo_resolution"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>영상해상도</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["camera"]["image_resolution"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>영상프레임</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["camera"]["video_frame"]}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>전면카메라</Text>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>사진해상도</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["front_camera"]["front_photo_resolution"]}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>영상해상도</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["front_camera"]["front_image_resolution"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>영상프레임</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["front_camera"]["front_video_frame"]}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>배터리</Text>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>배터리</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["battery"]["battery"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>타입</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["battery"]["type"]}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>무선 충전</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["battery"]["wireless_charging"]}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>생체인식</Text>
                        <View style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.textFont}>생체인식</Text>
                            </View>
                            <View style={styles.inlist}>
                                <Text style={styles.textFont}>{data1["biometric_recognition"]}</Text>
                            </View>
                        </View>
                        <View style={{ height: 50 }} />
                    </View>

                </ScrollView></>) : (<View></View>)}
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
        justifyContent: "center",
        borderLeftColor: '#C9C3C3',
        borderLeftWidth: 0.8

    },
    textFont: {
        fontSize: 17,
        marginTop: 20,
        fontWeight: "500",

        alignItems: "center",
    },
    info: {
        width: '50%',
        alignItems: "center",
        justifyContent: "center"
    }
});

export default DeviceInfo

