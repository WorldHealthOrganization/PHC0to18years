import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import ToolResult from '../../../components/UI/tools/ToolResultSymptomItem';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import ToolResultWithTriangles from '../../../components/UI/tools/ToolResultWithTriangles';
import useMainContext from '../../../context/useMainContext';

const ToolsResultScreen = ({ route }: NativeStackHeaderProps) => {
  const { params } = route;
  const { goBack } = useNavigation();
  const { fontSize } = useMainContext();
  return (
    <ToolScreenLayout
      result={
        <View style={styles.resultContainer}>
          <Text style={[styles.result, { fontSize: fontSize * 1.5 }]}>
            {(params as ToolsResultScreenParams).result}
          </Text>
        </View>
      }
      form={
        <>
          {(params as ToolsResultScreenParams).treatment ? (
            <ToolResultWithTriangles
              data={(params as ToolsResultScreenParams).treatment}
            />
          ) : null}

          <View
            style={{
              marginTop: 10,
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          {(params as ToolsResultScreenParams).age ? (
            <ToolResult
              title="ToolsPage.General.Age.Age"
              value={(params as ToolsResultScreenParams).age}
              color={COLORS.grey}
            />
          ) : null}
          {(params as ToolsResultScreenParams).respiratoryRate ? (
            <ToolResult
              title="ToolsResultPage.RespiratoryRate"
              value={(params as ToolsResultScreenParams).respiratoryRate}
              color={COLORS.graphite}
            />
          ) : null}
          {(params as ToolsResultScreenParams).symptoms.length > 0 ? (
            <Text style={[styles.symptomsTitle, { fontSize: fontSize }]}>
              {t`ToolsPage.General.Symptoms.Symptoms`}:
            </Text>
          ) : null}
          {(params as ToolsResultScreenParams).symptoms.map(item => {
            return (
              <ToolResult key={item} title={item} color={COLORS.lightBlue} />
            );
          })}
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            goBack();
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`PneumoniaToolPage.ButtonRecalculateTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    paddingHorizontal: 10,
  },
  symptomsTitle: {
    fontWeight: '500',
    color: COLORS.darkGrey,
  },
  result: {
    color: COLORS.white,
  },
  treatment: {
    fontSize: 25,
  },
});

export default ToolsResultScreen;
