import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatsMenuScreen from '../screens/ChatsMenuScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './NavigationTypes';
import Routes from './routes';
import DiscussionsScreen from '../screens/DiscussionsScreen';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigatorRootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name={Routes.homeScreen}
                component={HomeScreen}
            />
            <Stack.Screen
                name={Routes.chatsMenuScreen}
                component={ChatsMenuScreen}
            />
            <Stack.Screen
                name={Routes.discussionsScreen}
                component={DiscussionsScreen}
            />
        </Stack.Navigator>

    );
}

export default AppNavigatorRootStack;
