import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// MainScreen 컴포넌트
const MainScreen = () => {

  const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {
          a.map(x => (
            <View style={styles.listStyle}>
              <View style={{felx:1,flexDirection:'row',width:'100%',height:'100%'}} >
                <View style={{width:'35%',height:'100%'}}></View><View style={{width:'65%',height:'100%',backgroundColor:'pink'}}></View>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
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

export default MainScreen;

