// Here, we should export all our SVG icons
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Add from './Add';
import colors from '../../theme/colors';
import Cross from './Cross';

export enum IconNames {
  add = 'add',
  cross = 'cross',
  back = 'back',
  /* For empty icon */
  none = 'none',
}

export type IconNameType = keyof typeof IconNames;

interface Props {
  name: IconNameType;
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  opacity?: number;
}

const Icon: React.FC<Props> = ({
  name,
  style = {},
  size = 24,
  color = colors.blue,
  opacity = 1,
}) => {
  return {
    [IconNames.none]: null,
    [IconNames.add]: (
      <Add style={style} size={size} color={color} opacity={opacity} />
    ),
    [IconNames.cross]: (
      <Cross style={style} size={size} color={color} opacity={opacity} />
    ),
    [IconNames.back]: (
      <Add style={style} size={size} color={color} opacity={opacity} />
    ),
  }[name];
};

export default Icon;
