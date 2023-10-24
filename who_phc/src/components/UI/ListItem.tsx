import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  ColorValue,
  Pressable,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

interface ListItemProps extends PropsWithChildren {
  label: string;
  color?: ColorValue;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const ListItem = ({
  label,
  buttonStyle = {},
  labelStyle = {},
  color,
  onPress,
}: ListItemProps) => {
  return (
    <Pressable
      key={label}
      onPress={onPress}
      style={[buttonStyles.button, buttonStyle]}>
      <Text style={[buttonStyles.label, { color }, labelStyle]}>{label}</Text>
    </Pressable>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    padding: 5,
  },
});

export default ListItem;
