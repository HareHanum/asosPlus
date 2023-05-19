import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './NavigationTypes';
import Routes from './routes';
import {
    fullScreenModalOptions, getScreenWithoutHeaderOptions
} from './utils';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigatorRootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...getScreenWithoutHeaderOptions(),
                ...fullScreenModalOptions,
            }}
        >
            <Stack.Screen
                name={Routes.homeScreen}
                component={HomeScreen}
            />
        </Stack.Navigator>

    );
}

export default AppNavigatorRootStack;
