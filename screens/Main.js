import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from './tabs/layout';
import { useNavigation } from '@react-navigation/native';

const Tabnav = () => {

    const navigation = useNavigation();

    return (
        <NavigationContainer independent={true}>
            <TabLayout nav={navigation} />
        </NavigationContainer>
    )
}

export default Tabnav;
