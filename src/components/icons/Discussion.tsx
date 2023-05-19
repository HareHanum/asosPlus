import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
    style: StyleProp<ViewStyle>;
    size: number;
    color: string;
    opacity: number;
}

const Discussion: React.FC<Props> = ({ style, size, color, opacity }) => (
    <Svg
        style={style}
        height={size}
        width={size}
        viewBox="-1 0 19 19"
        fill={color}
        opacity={opacity}
    >
        <Path d="M16.417 9.583A7.917 7.917 0 118.5 1.666a7.917 7.917 0 017.917 7.917zM7.115 7.447h3.087V5.93a.318.318 0 00-.317-.317h-6.35a.317.317 0 00-.317.317v4.441a.317.317 0 00.316.317h.725v.94c0 .175.12.242.269.15l1.479-.923v-2.3a1.11 1.11 0 011.108-1.108zm6.667 1.108a.317.317 0 00-.316-.316h-6.35a.318.318 0 00-.318.316v4.442a.318.318 0 00.317.316h3.573a.322.322 0 00.03.022l1.767 1.102c.148.092.269.025.269-.15v-.974h.712a.317.317 0 00.316-.316z" />
    </Svg>
);

export default Discussion;
