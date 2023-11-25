import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import Back from '../assets/back.png'
import { useNavigation } from '@react-navigation/native';

// MainScreen 컴포넌트
const ItemDetailScreen = () => {

  const navigation = useNavigation();

  const backStack = () => {
    navigation.goBack()

  }

  test = { uri: "https://img.danawa.com/prod_img/500000/148/824/img/17824148_1.jpg?shrink=330:*&_v=20220929125243" }

  testText = "✅정보✅모델명: 아이폰14프로(A2890)용량/색상: 256GB / 실버IOS버전: 16.5.1최초개통일: 2023 . 07 . 13구성품: 보호필름+투명케이스+충전케이블✅상태설명✅◊외관상태: 액정상태(S급) / 테두리(A급) / 뒷면(S급)◊내부기능(검수완료)- 이상없음/잔상없음※실버제품 특성상 테두리 부분 초미세 사용감은 있을 수 있음※★추천★- 배터리성능 100%- 정식AS보증기간 2024 . 07 . 13- 전체적으로 눈에 띄는 생활감 없이 깨끗한 외관 상태이며,- 내부 기능 검수 완벽하게 된 제품입니다!- 서비스 꼼꼼히 챙겨,새폰같은 중고폰으로 보내 드릴게요!😉🚚 배송정보🚚(로젠택배 발송)(월-금) pm4시 전까지 구매 시,당일 운송장 등록가능(토요일) pm1시 전까지 구매 시,당일 운송장 등록가능발송일기준 전국 1~2일 이내 배송(제주2~3일)단,택배사 사정으로 간혹 지연 될 수도 있습니다⛔필독사항⛔AS기간/14일제품 수령 후, 제품 설명과 다른 이상이 있을 경우2주이내에 100% AS및 교환 해 드립니다"
  return (
    <View>

      <ScrollView>
        <View style={styles.container}>
          <Image source={test} style={{ width: "100%", paddingBottom: '100%' }} />
          <View style={{ marginTop: "2%", width: "80%" }}>
            <Text style={{ fontSize: 30,marginTop:'5%',fontWeight: 'bold' }}>1,316,000원</Text>
          </View>
          <View style={{ marginTop: "3%", width: "80%" }}>
            <Text style={{ fontSize: 15 }}>[최상급] 아이폰14프로 256GB 실버 배터리성능100%</Text>
          </View>
          <View style={{ marginTop: "2%", width: "80%" }}>
            <Text style={{ fontSize: 15 }}>배방읍 1시간 전</Text>
          </View>
          <View style={{ marginTop: "5%", width: "80%" }}>
            <Text style={{ fontSize: 15 }}>{testText}</Text>
          </View>
          <View style={{ height: 180 }} />
        </View>
      </ScrollView>
      <View style={styles.back} onPress={backStack}>
        <TouchableOpacity onPress={backStack} style={{ height: "100%", width: "100%" }}>
          <Image source={Back} style={{ height: "100%", width: "100%" }} transform={[{ scaleX: -1 }]} />
        </TouchableOpacity>
      </View>
      <View style={styles.underView}>
        <TouchableOpacity style={styles.diego} onPress={() => { alert('이동') }}>
          <Text style={{ fontSize: 15, color: 'white' }}>사이트로 이동하기</Text>
        </TouchableOpacity></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "10%"
  },
  diego: {
    backgroundColor: "#3454CD",
    width: "80%",
    height: "50%",
    borderRadius: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "15%"
  },
  underView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '11%',
    backgroundColor: 'rgba(226, 226, 226, 1)',
    felx: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {

    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    marginLeft: 15,
    marginTop: 40
  }
});

export default ItemDetailScreen;

