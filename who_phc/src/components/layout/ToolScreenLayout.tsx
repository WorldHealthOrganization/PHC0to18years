import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';

import { COLORS } from '../../styles/generalStyles.styles';
import useMainContext from '../../context/useMainContext';

type ToolScreenLayoutProps = {
  result: React.ReactNode | string | number;
  form: React.ReactNode;
  padding?: number;
  accentColor?: string;
  button: React.ReactNode;
};

const ToolScreenLayout: React.FC<ToolScreenLayoutProps> = ({
  result,
  form,
  padding = 15,
  accentColor = COLORS.blue,
  button,
}) => {
  const { fontSize } = useMainContext();
  return (
    <View style={[styles.growView, styles.container, {backgroundColor: accentColor}]}>
      <View style={styles.resultWrapper}>
        {typeof result === 'string' || typeof result === 'number' ? (
          <Text style={[styles.result, { fontSize: fontSize * 1.5 }]}>
            {result}
          </Text>
        ) : (
          (result as React.ReactNode)
        )}
      </View>

    <View style={[styles.formWrap, {padding: padding}]}>
      <ScrollView style={[styles.growView, styles.form]}>{form}</ScrollView>
      {button}
    </View>
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
  },
  label: {
    fontSize: 15,
    alignSelf: 'flex-start',
    paddingLeft: 5,
    marginBottom: 5,
    color: COLORS.darkGrey,
    fontWeight: '400',
  },
  resultWrapper: {
    padding: 10,
  },
  result: {
    fontWeight: '500',
    alignSelf: 'center',
    color: COLORS.white,
    marginBottom: 5,
  },
  formWrap: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  form: {
    rowGap: 10,
  },
  growView: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.blue,
  },
});

export default ToolScreenLayout;
