
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../theme/colors';

export interface TextProps
    extends React.ComponentProps<typeof Text> {
    size?: number;
    text: string;
}

const Label: React.FC<TextProps> = props => {
    return (
        <Text
            {...props}
            style={[textStyle, { fontSize: props.size }]}
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
};

export { Label };
