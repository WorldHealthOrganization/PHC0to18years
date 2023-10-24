import { View, Text, StyleSheet, ColorValue } from 'react-native';
import React from 'react';
import { t } from 'i18next';
import { COLORS } from '../../../styles/generalStyles.styles';
import useMainContext from '../../../context/useMainContext';

type ToolResultProps = {
  title: string;
  value?: string;
  color?: ColorValue;
};

const ToolResult: React.FC<ToolResultProps> = ({ title, value, color }) => {
  const { fontSize } = useMainContext();

  return (
    <View style={[styles.rowContainer, styles.spaceBetweenContainer]}>
      <View style={styles.rowContainer}>
        <View style={[styles.box, { backgroundColor: color }]} />
        <Text style={[styles.resultTitle, { fontSize: fontSize }]}>
          {t(title)}
        </Text>
      </View>
      <Text style={[styles.resultValue, { fontSize: fontSize }]}>
        {t(value)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingRight: 30
  },
  spaceBetweenContainer: {
    justifyContent: 'space-between',
  },
  box: {
    height: 20,
    width: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  resultTitle: {
    fontWeight: '500',
    color: COLORS.darkGrey,
  },
  resultValue: {
    fontWeight: '500',
    color: COLORS.graphite,
  },
});
export default ToolResult;
