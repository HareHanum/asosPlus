import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { isReadyRef, navigationRef } from './navigation/Navigation';

const Root = () => {
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                (isReadyRef.current as any) = true;
            }}
        >
            <AppNavigator />
        </NavigationContainer>

    );
};

export default Root;
