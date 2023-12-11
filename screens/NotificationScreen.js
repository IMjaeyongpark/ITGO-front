import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TMP from '../assets/tmp3.png';
import NotificationList from './tabs/NotificationList';

// MainScreen 컴포넌트
const NotificationScreen = () => {

    const navigation = useNavigation();

    const backStack = () => {
        navigation.goBack()
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
                    <Text style={{ color: 'white', fontSize: 25,marginTop: '10%', marginLeft: '50%' }}>알림</Text>
                </SafeAreaView>
            </View>
            <ScrollView>
                <View>
                    <NotificationList/>
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
    }
});

export default NotificationScreen;
