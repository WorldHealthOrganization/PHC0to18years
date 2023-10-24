import React, { useMemo } from 'react';
import { Text, StyleSheet, View, InputModeOptions } from 'react-native';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';

import { COLORS } from '../../styles/generalStyles.styles';
import { t } from 'i18next';
import useMainContext from '../../context/useMainContext';

type RatioButtonsGroupProps = {
  title: string;
  data: ICheckboxButton[];
  initial?: number;
  inputMode?: InputModeOptions;
  onChange: (selectedItem: ICheckboxButton) => void;
};

const RatioButtonsGroup = ({
  title,
  data,
  onChange,
  initial = 0,
}: RatioButtonsGroupProps) => {
  const { fontSize } = useMainContext();

  const styledData = useMemo(() => {
    return data.map(item => ({
      ...item,
      text: t(item.text),
      textStyle: [styles.textStyle, {fontSize: fontSize}],
      fillColor: COLORS.blue,
    }));
  }, [data, fontSize]);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: fontSize }]}>
        {t(title)}
      </Text>
      <BouncyCheckboxGroup
        data={styledData}
        initial={initial}
        style={styles.btnsList}
        onChange={onChange}
      />
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
    flexDirection: 'column',
    rowGap: 5,
  },
  textStyle: {
    textDecorationLine: 'none',
  },
});

export default RatioButtonsGroup;
