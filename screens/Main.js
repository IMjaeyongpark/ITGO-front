import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from './tabs/layout';

const Tabnav = () => {
    return (
        <NavigationContainer independent={true}>
            <TabLayout />
        </NavigationContainer>
    )
}

export default Tabnav;
