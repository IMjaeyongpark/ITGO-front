import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';


const TopNav = ({ nav }) => {
    return (
        <SafeAreaView style={{ width: '100%', height: '15%', borderBottomColor: 'black', borderBottomWidth: 0.8, flexDirection: 'row' }}>
            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <AntDesign name="bars" size={40} color="black" style={{ marginLeft: 20, }} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginEnd: 10, marginLeft: '40%' }} onPress={() => nav.navigate('SearchScreen')}>
                    <Feather name="search" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="bells" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default TopNav;

