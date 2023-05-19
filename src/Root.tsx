import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const Root = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>

    );
};

export default Root;
