
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import Icon, { IconNames, IconNameType } from './icons';
import colors from '../theme/colors';

export interface ButtonProps
    extends React.ComponentProps<typeof TouchableOpacity> {
    text: string;
    textColor?: string;
    backgroundColor?: string;
    iconName?: IconNameType;
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    loading?: boolean;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = props => {
    const {
        textStyle,
        textColor,
        iconName,
        loading,
        text,
        icon,
        iconPosition = 'right',
    } = props;
    const renderLoadingIndicator = () => (
        <MaterialIndicator color={textColor} size={18} style={styles.spinner} />
    );

    const rendeLeftIconIfNeeded = () => {
        if (iconPosition === 'right') return null;
        if (icon) {
            return icon;
        }
        return (
            !!iconName && (
                <Icon style={styles.icon} name={iconName} size={20} color={textColor} />
            )
        );
    };
    const renderRightIconIfNeeded = () => {
        if (iconPosition === 'left') return null;
        if (icon) {
            return icon;
        }
        return (
            !!iconName && (
                <Icon style={styles.icon} name={iconName} size={20} color={textColor} />
            )
        );
    };

    return (
        <TouchableOpacity
            {...props}
            style={[
                styles.conatiner,
                props.style,
                { backgroundColor: props.backgroundColor },
                props.disabled && styles.disabled,
                props.buttonStyle,
            ]}
            onPress={props.onPress}
            disabled={props.disabled}
            activeOpacity={0.7}
        >
            {rendeLeftIconIfNeeded()}
            <Text
                selectable={false}
                style={[
                    styles.text,
                    { color: props.textColor },
                    textStyle || styles.upperCase,
                ]}
            >
                {text}
            </Text>
            {loading ? renderLoadingIndicator() : renderRightIconIfNeeded()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    upperCase: {
        textTransform: 'capitalize',
    },
    conatiner: {
        height: 56,
        borderRadius: 1000,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Futura-Medium',
        letterSpacing: 0.5,
        marginHorizontal: 8,
    },
    disabled: {
        backgroundColor: colors.grayDark,
    },
    separation: {
        marginStart: 8,
    },
    spinner: {
        flex: 0,
        paddingStart: 8,
    },
    icon: {
        marginStart: 8,
        alignSelf: 'center',
    },
});

Button.defaultProps = {
    textColor: colors.white,
    backgroundColor: colors.blue,
    iconName: IconNames.none,
};

export { Button };
