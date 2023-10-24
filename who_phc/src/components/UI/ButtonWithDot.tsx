import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  ColorValue,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../styles/generalStyles.styles';

type ButtonWithDotProps = PropsWithChildren<{
  label: string;
  color: ColorValue;
  buttonStyle?: ViewStyle;
  onPress: () => void;
}>;

const ButtonWithDot = ({
  label,
  color,
  buttonStyle = {},
  onPress,
}: ButtonWithDotProps) => {
  return (
    <Pressable
      key={label}
      onPress={onPress}
      style={[buttonStyles.button, buttonStyle]}>
      <View style={[buttonStyles.dot, { backgroundColor: color }]} />
      <Text style={buttonStyles.label}>{label}</Text>
    </Pressable>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.darkGrey,
    flex: 1,
  },
  dot: {
    borderRadius: 10,
    width: 10,
    height: 10,
    backgroundColor: COLORS.lightGrey,
  },
});

export default ButtonWithDot;
