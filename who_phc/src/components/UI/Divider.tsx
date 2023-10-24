import React, { PropsWithChildren } from 'react';
import { ColorValue, View } from 'react-native';

type DividerProps = PropsWithChildren<{
  color: ColorValue;
  height?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
}>;

const Divider = ({
  color,
  height = 2,
  marginVertical = 5,
  marginHorizontal = 5,
  opacity = 1,
}: DividerProps) => (
  <View
    style={{
      marginHorizontal: marginHorizontal,
      marginVertical: marginVertical,
      height: height,
      backgroundColor: color,
      opacity: opacity,
    }}
  />
);

export default Divider;
