import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatsMenuScreen from '../screens/ChatsMenuScreen';
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
            <Stack.Screen
                name={Routes.chatsMenuScreen}
                component={ChatsMenuScreen}
            />
        </Stack.Navigator>

    );
}

export default AppNavigatorRootStack;
