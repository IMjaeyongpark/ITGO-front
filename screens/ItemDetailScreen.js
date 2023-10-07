import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// MainScreen 컴포넌트
const ItemDetailScreen = () => {

  return (
    <View style={styles.container}>
      <Text>ItemDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemDetailScreen;

