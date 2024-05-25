import icoMoonConfig from './selection.json';
import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

const IconMoonIcons = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

interface CustomIconProps {
  style?: object;
  name: string;
  color?: string;
}

const CustomIcon = (props: CustomIconProps) => {
  const { style = {}, name, color = 'white' } = props;
  return <IconMoonIcons style={style} name={name} color={color} {...props} />;
};

export default CustomIcon;
