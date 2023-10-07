import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import List from './List'

// MainScreen 컴포넌트
const MainScreen = ({nav}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <List nav={nav}/>
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

