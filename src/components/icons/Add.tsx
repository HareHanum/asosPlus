import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  style: StyleProp<ViewStyle>;
  size: number;
  color: string;
  opacity: number;
}

const Add: React.FC<Props> = ({style, size, color, opacity}) => (
  <Svg
    style={style}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill={color}
    opacity={opacity}
  >
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </Svg>
);

export default Add;
