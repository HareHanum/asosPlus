import React, { FC, useEffect } from 'react';
import {
    Animated,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { WebView } from 'react-native-webview';
import { HomeScreenProps } from '../navigation/NavigationTypes';
import { HomeScreenStrings } from '../theme/strings';
import Icon from '../components/icons';
import colors from '../theme/colors';
import Routes from '../navigation/routes';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    /****************************************** ATTRIBUTES ************************************************/

    const ASOS_URL = 'https://asos.com';
    const shakeAnimation = new Animated.Value(0);

    /****************************************** FUNCTIONS ************************************************/

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 1, duration: 300, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -1, duration: 300, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 1, duration: 300, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 300, useNativeDriver: true })
            ])).start();
    }, [])

    const onSupportPress = () => {
        navigation.navigate(Routes.chatsMenuScreen)
    }

    /****************************************** UI ************************************************/

    return (
        <SafeAreaView style={container}>
            <WebView
                javaScriptEnabled
                source={{ uri: HomeScreenStrings.ASOS_URL }}
                style={container} />
            <Animated.View style={[supportButtonContainer, {
                transform: [
                    {
                        rotate: shakeAnimation.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ['-0.1rad', '0.1rad']
                        })
                    }
                ]
            }]}>
                <TouchableOpacity onPress={onSupportPress} style={supportButton} activeOpacity={.7}>
                    <Icon size={64} name='support' />
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
};
const {
    container,
    supportButtonContainer,
    supportButton
} = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    supportButtonContainer: {
        zIndex: 10,
        position: 'absolute',
        width: 64,
        bottom: 32,
        right: 24,
        height: 64,
    },
    supportButton: {
        position: 'absolute',
        width: 64,
        bottom: Platform.OS === 'android' ? 0 : 16,
        right: 0,
        height: 64,
    },
});

export default HomeScreen;
