import React from 'react';
import { Text, StyleSheet, View, InputModeOptions } from 'react-native';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';

import { COLORS } from '../../styles/generalStyles.styles';
import { t } from 'i18next';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckboxItem from './tools/CheckboxItem';
import useMainContext from '../../context/useMainContext';

type CheckboxGroupProps = {
  title: string;
  data: ICheckboxButton[];
  initial?: number;
  inputMode?: InputModeOptions;
  onPress: (selectedItem: ICheckboxButton) => void;
};

const CheckboxGroup = ({ title, data, onPress }: CheckboxGroupProps) => {
  const { fontSize } = useMainContext();
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: fontSize }]}>{t(title)}</Text>
      <View style={styles.btnsList}>
        {data.map(item => {
          return <CheckboxItem key={item.id} item={item} onPress={onPress} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingRight: 20
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.darkGrey,
    fontWeight: '400',
    marginBottom: 5,
  },
  btnsList: {
    paddingRight: 10,
    marginRight: 10,
  },
  textStyle: {
    textDecorationLine: 'none',
  },
});

export default CheckboxGroup;
