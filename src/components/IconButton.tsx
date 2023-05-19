import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import Icon, { IconNameType } from './icons';

import colors from '../theme/colors';

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
    iconName: IconNameType;
    color?: string;
    size?: number;
    hasOutline?: boolean;
    label?: string;
}

const defaultProps = {
    color: colors.blue,
    size: 24,
};

const IconButton: React.FC<Props> = props => (
    <TouchableOpacity
        {...props}
        style={[
            props.style,
            props.label && styles.container,
            props.disabled && styles.disabled,
        ]}
        activeOpacity={0.7}
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
    >
        <View
            style={
                props.hasOutline
                    ? [
                        styles.iconContainer,
                        {
                            height: props.size + 4,
                            width: props.size + 4,
                            borderRadius: (props.size + 4) / 2,
                            borderColor: props.color,
                        },
                    ]
                    : {}
            }
        >
            <Icon name={props.iconName} size={props.size} color={props.color} />
        </View>
        {props.label && (
            <Text
                style={[styles.label, { fontSize: props.size + 4, color: props.color }]}
            >
                {props.label}
            </Text>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: 'OktaNeue-Medium',
        marginStart: 8,
    },
    disabled: {
        backgroundColor: colors.lightGray,
    },
});

IconButton.defaultProps = defaultProps;

export { IconButton };
