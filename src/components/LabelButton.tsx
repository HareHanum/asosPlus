import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
} from 'react-native';
import colors from '../theme/colors';

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
    text: string;
    color?: string;
    textStyle?: StyleProp<TextStyle>;
    fontSize?: number;
}

const defaultProps = {
    color: colors.orange,
    fontSize: 12,
};

const LabelButton: React.FC<Props> = props => (
    <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
    >
        <Text
            style={[
                styles.text,
                {
                    color: props.color,
                    fontSize: props.fontSize,
                },
                props.textStyle && props.textStyle,
            ]}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        color: colors.orange,
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: 'Futura-Medium',
        fontWeight: '600',
    },
});

LabelButton.defaultProps = defaultProps;

export { LabelButton };
