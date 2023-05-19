import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';

interface Props {
    style: StyleProp<ViewStyle>;
    size: number;
    color: string;
    opacity: number;
}

const Back: React.FC<Props> = ({ style, size, color, opacity }) => (
    <Svg
        style={style}
        height={size}
        width={size}
        viewBox="0 0 24 24"
        opacity={opacity}
        fill={color}
    >
        <Rect fill="none" height="24" width="24" />
        <G transform="translate(-6.408)">
            <Path d="M16.88,2.88h0a1.249,1.249,0,0,0-1.77,0L6.7,11.29a1,1,0,0,0,0,1.41l8.41,8.41a1.249,1.249,0,0,0,1.77,0h0a1.249,1.249,0,0,0,0-1.77L9.54,12l7.35-7.35A1.259,1.259,0,0,0,16.88,2.88Z" />
        </G>
    </Svg>
);

export default Back;
