import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import No from '../../assets/no.png';
import Yes from '../../assets/yes.png';
import axios from 'axios';
import { API_IP } from "@env"

const List = ({ nav }) => {

    const url = API_IP + '/post/find/all/list';

    const params = {
        memberId: 1,
        page: 1,
        size: 10,
        sortBy: 'RECENT_POST',
    };

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { params });
                const newData = response.data.posts.map((v) => ({
                    "Image": { uri: "https://img.danawa.com/prod_img/500000/148/824/img/17824148_1.jpg?shrink=330:*&_v=20220929125243" },
                    "title": v.title,
                    "time": "배방읍 1시간 전",
                    "price": v.price,
                    "where": "당근",
                    "bookmark": v.isLike,
                    "content": "✅정보✅모델명: 아이폰14프로(A2890)용량/색상: 256GB / 실버IOS버전: 16.5.1최초개통일: 2023 . 07 . 13구성품: 보호필름+투명케이스+충전케이블✅상태설명✅◊외관상태: 액정상태(S급) / 테두리(A급) / 뒷면(S급)◊내부기능(검수완료)- 이상없음/잔상없음※실버제품 특성상 테두리 부분 초미세 사용감은 있을 수 있음※★추천★- 배터리성능 100%- 정식AS보증기간 2024 . 07 . 13- 전체적으로 눈에 띄는 생활감 없이 깨끗한 외관 상태이며,- 내부 기능 검수 완벽하게 된 제품입니다!- 서비스 꼼꼼히 챙겨,새폰같은 중고폰으로 보내 드릴게요!😉🚚 배송정보🚚(로젠택배 발송)(월-금) pm4시 전까지 구매 시,당일 운송장 등록가능(토요일) pm1시 전까지 구매 시,당일 운송장 등록가능발송일기준 전국 1~2일 이내 배송(제주2~3일)단,택배사 사정으로 간혹 지연 될 수도 있습니다⛔필독사항⛔AS기간/14일제품 수령 후, 제품 설명과 다른 이상이 있을 경우2주이내에 100% AS및 교환 해 드립니다"
                }));
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
            {data.map((x, index) => (
                <TouchableOpacity key={index} onPress={() => nav.navigate('ItemDetailScreen', { x })}>
                    <View style={styles.listStyle}>
                        <View style={{ felx: 1, flexDirection: 'row', width: '100%', height: '100%' }} >
                            <View style={{ width: '35%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                                <Image source={x['Image']} style={{ width: "80%", height: "80%", borderRadius: "10%" }} />
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
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: "10%" }}>{x["where"]}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
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
    },
});

export default List;
