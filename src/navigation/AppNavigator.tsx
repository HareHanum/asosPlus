import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './NavigationTypes';
import Routes from './routes';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigatorRootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
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
