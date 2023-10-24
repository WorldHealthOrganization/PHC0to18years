import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../styles/generalStyles.styles';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  handleClear: () => void;
  clearable?: boolean;
  icon?: React.ReactNode;
  autoFocus?: boolean;
};

const Input = ({
  value,
  placeholder,
  onChange,
  clearable = true,
  autoFocus = false,
  icon,
  handleClear = null,
}: InputProps) => {
  return (
    <View style={styles.wrapper}>
      {icon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.inputField}
        placeholderTextColor={COLORS.darkGrey}
        autoFocus={autoFocus}
      />
      {clearable && !!value && !!value.length && (
        <MaterialCommunityIcons
          onPress={handleClear}
          name="close"
          color={COLORS.darkGrey}
          size={20}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 40,
    borderRadius: 40,
    backgroundColor: COLORS.lightGrey,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  inputField: {
    height: 40,
    flex: 1,
    color: COLORS.darkGrey,
  },
  icon: {
    width: 30,
  },
});

export default Input;
