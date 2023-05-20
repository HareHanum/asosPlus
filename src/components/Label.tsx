
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../theme/colors';

export interface TextProps
    extends React.ComponentProps<typeof Text> {
    text: string;
    size?: number;
    color?: string;
}

const Label: React.FC<TextProps> = props => {
    return (
        <Text
            {...props}
            style={[textStyle, { fontSize: props.size, color: props.color }]}
        >
            {props.text}
        </Text>
    );
};

const { textStyle } = StyleSheet.create({
    textStyle: {
        color: colors.black,
        fontFamily: 'Futura-Medium'
    }
});

Label.defaultProps = {
    size: 14,
    color: colors.black
};

export { Label };
