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
    const data1 = {
        "modelname": "A3106",
        "basic": {
            "name": "아이폰15프로맥스(256GB)",
            "manufacturer": "애플",
            "releaseDate": "2023. 10",
            "price": "1,892,000",
            "OS": "iOS 17",
            "size": "76.7 x 159.9 x 8.25",
            "weight": "221g"
        },
        "screen": {
            "screen_size": "6.7 인치",
            "scanning_rate": "10 - 120 Hz",
            "screen_type": "OLED",
            "resolution": "1290 x 2796",
            "screen_width": "71.29mm",
            "screen_height": "154.33"
        },
        "chipSet": {
            "AP": "Apple A17 Pro",
            "CPU": "2x 3.7 GHz, 4x",
            "CPU_core": "6개",
            "GPU": "Apple GPU"
        },
        "camera": {
            "flash": "Dual LED",
            "photo_resolution": "8000 x 6000",
            "image_resolution": "3840 x 2160",
            "video_frame": "60FPS"
        },
        "front_camera": {
            "front_photo_resolution": "4032 x 3024",
            "front_image_resolution": "3840 x 2160",
            "front_video_frame": "60FPS"
        },
        "battery": {
            "battery": "4,422 mAh",
            "type": "Li-Ion",
            "wireless_charging": "무선충전 지원"
        },
        "biometric_recognition": "FaceID",
        "image": "https://cdn.cetizen.com/CDN/review/thumb_350/8157.jpg"
    }

    const data2 = {
        "modelname": "A3102",
        "basic": {
            "name": "아이폰15프로(128GB)",
            "manufacturer": "애플",
            "releaseDate": "2023. 10",
            "price": "1,540,000",
            "OS": "iOS 17",
            "size": "70.6 x 146.6 x 8.25",
            "weight": "187g"
        },
        "screen": {
            "screen_size": "6.1 인치",
            "scanning_rate": "10 - 120 Hz",
            "screen_type": "OLED",
            "resolution": "1179 x 2556",
            "screen_width": "64.9 mm",
            "screen_height": "140.69 mm"
        },
        "chipSet": {
            "AP": "Apple A17 Pro",
            "CPU": "2x 3.7 GHz, 4x",
            "CPU_core": "6개 (64 비트)",
            "GPU": "Apple GPU"
        },
        "camera": {
            "flash": "Dual LED",
            "photo_resolution": "8000 x 6000",
            "image_resolution": "3840 x 2160",
            "video_frame": "60 FPS "
        },
        "front_camera": {
            "front_photo_resolution": "4032 x 3024",
            "front_image_resolution": "3840 x 2160 ",
            "front_video_frame": "60 FPS"
        },
        "battery": {
            "battery": "3,274 mAh ",
            "type": "Li-Ion ",
            "wireless_charging": "무선충전 지원"
        },
        "biometric_recognition": "FaceID",
        "image": "https://cdn.cetizen.com/CDN/review/thumb_350/8153.jpg"
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
                            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "500" }}>{data1["basic"]["name"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "500" }}>{data2["basic"]["name"]}</Text>
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
                            <Text style={styles.textFont}>{data1["basic"]["manufacturer"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["manufacturer"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["releaseDate"]} 출시</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["releaseDate"]} 출시</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>￦{data1["basic"]["price"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>￦{data2["basic"]["price"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["OS"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["OS"]}</Text>
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
                    {/* <View style={{ marginTop: '3%', alignItems: "center", marginBottom: '3%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>제품 크기</Text>
                    </View> */}
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["basic"]["size"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["basic"]["size"]}</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>화면</Text>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["screen_size"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["screen_size"]}</Text>
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
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["screen_type"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["screen_type"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["resolution"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["resolution"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["screen_width"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["screen_width"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["screen"]["screen_height"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["screen"]["screen_height"]}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>칩셋</Text>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["chipSet"]["AP"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["chipSet"]["AP"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["chipSet"]["CPU"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["chipSet"]["CPU"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["chipSet"]["CPU_core"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["chipSet"]["CPU_core"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["chipSet"]["GPU"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["chipSet"]["GPU"]}</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 35, marginLeft: "5%", marginTop: '5%', fontWeight: 500 }}>카메라</Text>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["camera"]["flash"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["camera"]["flash"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["camera"]["photo_resolution"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["camera"]["photo_resolution"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["camera"]["image_resolution"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["camera"]["image_resolution"]}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inlist}>
                            <Text style={styles.textFont}>{data1["camera"]["video_frame"]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: "center", }}>
                            <Text style={styles.textFont}>{data2["camera"]["video_frame"]}</Text>
                        </View>
                    </View>
                </View>

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

