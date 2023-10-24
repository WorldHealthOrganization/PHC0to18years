import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  InputModeOptions,
} from 'react-native';
import useMainContext from '../../context/useMainContext';

import { COLORS } from '../../styles/generalStyles.styles';

type InputWithLabelProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  inputMode?: InputModeOptions;
};

const InputWithLabel = ({
  value,
  placeholder,
  onChange,
  label,
  inputMode = 'numeric',
}: InputWithLabelProps) => {
  const { fontSize } = useMainContext();
  return (
    <View>
      <Text style={[styles.label, { fontSize: fontSize }]}>{label}</Text>
      <TextInput
        style={[styles.input, { fontSize: fontSize }]}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGrey,
    color: COLORS.darkGrey,
  },
  label: {
    alignSelf: 'flex-start',
    paddingLeft: 5,
    marginBottom: 5,
    color: COLORS.darkGrey,
    fontWeight: '400',
  },
});

export default InputWithLabel;
