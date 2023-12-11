import React from 'react';
import { View, TouchableOpacity, SafeAreaView,Text } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';


const TopNav = ({ nav }) => {
    return (
        <SafeAreaView style={{ width: '100%', height: '15%', borderBottomColor: '#3454CD', borderBottomWidth: 0.8, flexDirection: 'row',backgroundColor:"#3454CD" }}>
            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
            </View>
            <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginEnd:'10%', marginLeft: '50%' }} onPress={() => nav.navigate('SearchScreen')}>
                    <Feather name="search" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('Compare')}>
                    <AntDesign name="bells" size={30} color="white"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default TopNav;

