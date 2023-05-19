import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { StackNavigationOptions } from '@react-navigation/stack';
import { IconButton } from '../components/IconButton';
import colors from '../theme/colors';
import Icon, { IconNames } from '../components/icons';
import { goBack } from './Navigation';

export const fullScreenModalOptions: StackNavigationOptions = {
    gestureEnabled: false,
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateY: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.height, 0],
                        }),
                    },
                ],
            },
        };
    },
};
export const getScreenWithoutHeaderOptions = () => ({ headerShown: false });

export const getFullScreenModalHeaderOptions = ({
    screenTitle,
    handlePressGoBack = goBack,
}) => {
    return {
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => (
            <IconButton
                style={styles.crossButton}
                iconName={IconNames.cross}
                onPress={handlePressGoBack}
                color={colors.black}
                size={24}
            />
        ),
        headerTitle: () => (
            <Text style={styles.fullScreenModalHeaderTitle}>{screenTitle}</Text>
        ),
    } as StackHeaderOptions;
};

// TODO: Review rest of the app headers
export const getScreenWithHeaderOptions = ({
    screenTitle,
    handlePressGoBack = goBack,
}) => {
    return {
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerStyle: {
            shadowColor: 'transparent',
            shadowRadius: 0,
        },
        headerLeft: () => (
            <IconButton
                style={styles.backButton}
                iconName={IconNames.back}
                onPress={handlePressGoBack}
                color={colors.black}
                size={24}
            />
        ),
        headerTitle: () => <Text style={styles.headerTitle}>{screenTitle}</Text>,
    } as StackHeaderOptions;
};

// TODO: Review rest of the app headers
export const getScreenWithNewHeaderOptions = ({
    screenTitle,
    handlePressGoBack = goBack,
}) => {
    return {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerLeft: () => (
            <IconButton
                style={styles.backButtonNew}
                iconName={IconNames.back}
                onPress={handlePressGoBack}
                color={colors.black}
                size={16}
            />
        ),
        headerTitle: () => <Text style={styles.headerTitleNew}>{screenTitle}</Text>,
    } as StackHeaderOptions;
};

export const getHeaderRight = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.headerRightTitle}>{text}</Text>
    </TouchableOpacity>
);

export const getScreenWithoutHeaderAndGestureDisabledOptions = () => ({
    headerShown: false,
    gestureEnabled: false,
});

export const getTabIcon = (
    name: IconNames,
    style?: StyleProp<ViewStyle>,
    size?: number,
) => ({ color }) => (
    <View style={style}>
        <Icon name={name} color={color} size={size || 24} />
    </View>
);

const styles = StyleSheet.create({
    backButton: {
        alignSelf: 'center',
        marginLeft: 36,
    },
    backButtonNew: {
        alignSelf: 'center',
        marginLeft: 24,
    },
    crossButton: {
        alignSelf: 'center',
        marginLeft: 24,
    },
    fullScreenModalHeaderTitle: {
        color: colors.black,
        fontSize: 16,
        flexShrink: 1,
        fontWeight: '600',
        fontFamily: 'Manrope',
    },
    headerTitle: {
        color: colors.black,
        fontSize: 24,
        fontFamily: 'Manrope',
    },
    headerTitleNew: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.black,
    },
    headerRightTitle: { fontSize: 16, marginRight: 24 },
});
