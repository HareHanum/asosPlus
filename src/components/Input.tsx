import React, { useRef } from 'react';
import {
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ViewStyle,
    StyleProp,
    Text,
    View,
    Platform,
} from 'react-native';

import colors from '../theme/colors';
import { isEmpty } from '../utils/stringsUtils';

interface Props extends React.ComponentProps<typeof TextInput> {
    style?: StyleProp<ViewStyle>;
    error?: boolean;
    hint?: string;
    disabled?: boolean;
}

const defaultProps = {
    style: {},
    error: false,
    hint: '',
};

const Input: React.FC<Props> = props => {
    const input = useRef(null);

    const handlePress = () => {
        input.current.focus();
    };

    return (
        <View style={[props.style, props.disabled && styles.disabled]}>
            <TouchableOpacity
                style={[
                    styles.container,
                    Platform.OS === 'ios' && { paddingBottom: 20 },
                    props.error && styles.errorContainer,
                ]}
                onPress={handlePress}
                disabled={props.disabled}
                activeOpacity={1}
            >
                <TextInput
                    {...props}
                    style={[styles.text]}
                    ref={input}
                    numberOfLines={1}
                    editable={!props.disabled}
                    placeholderTextColor={colors.grayDark}
                />
            </TouchableOpacity>
            {!isEmpty(props.hint) && (
                <Text style={[styles.hintText, props.error && styles.errorText]}>
                    {props.hint}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.grayDark,
    },
    text: {
        fontSize: 14,
        color: colors.black,
        fontFamily: 'Futura-Medium'
    },
    errorContainer: {
        borderBottomColor: colors.toastRed,
    },
    errorText: {
        color: colors.toastRed,
    },
    hintText: {
        fontSize: 12,
        color: colors.grayDark,
        marginTop: 4,
    },
    disabled: {
        opacity: 0.5,
    },
});

Input.defaultProps = defaultProps;

export { Input };
