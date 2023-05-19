import React from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import { HomeScreenStrings } from '../theme/strings';

const HomeScreen = () => {
    /****************************************** ATTRIBUTES ************************************************/

    const ASOS_URL = 'https://asos.com';

    /****************************************** FUNCTIONS ************************************************/


    /****************************************** UI ************************************************/

    return (
        <SafeAreaView style={container}>
            <WebView
                javaScriptEnabled
                source={{ uri: HomeScreenStrings.ASOS_URL }}
                style={container} />
        </SafeAreaView>
    );
};
const {
    container,
} = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
