import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';

// MainScreen 컴포넌트
const List = () => {

  const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const testImage = { uri: "https://img.danawa.com/prod_img/500000/148/824/img/17824148_1.jpg?shrink=330:*&_v=20220929125243" }
  return (
      <ScrollView >
        {
          a.map(x => (
            <View style={styles.listStyle}>
              <View style={{ felx: 1, flexDirection: 'row', width: '100%', height: '100%' }} >
                <View style={{ width: '35%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                  <Image source={testImage} style={{ width: "80%", height: "80%" }} /></View>
                <View style={{ width: '65%', height: '100%' }}>
                  <Text style={{ fontSize: 17, marginTop: "5%" }}>[최상급] 아이폰14프로 256GB 실버 배터리성능100%</Text>
                  <Text style={{ fontSize: 12, marginTop: "3%" }}>배방읍 1시간 전</Text>
                  <View style={{ felx: 1, flexDirection: 'row', flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>1,316,000원</Text>
                    <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: "10%" }}>당근</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
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

