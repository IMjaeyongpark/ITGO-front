import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Back from '../assets/back.png';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
    const navigation = useNavigation();

    const backStack = () => {
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>searchScreen</Text>

            <View style={styles.back} onPress={backStack}>
                <TouchableOpacity onPress={backStack} style={{ height: "100%", width: "100%" }}>
                    <Image source={Back} style={{ height: "100%", width: "100%" }} transform={[{ scaleX: -1 }]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default SearchScreen;

