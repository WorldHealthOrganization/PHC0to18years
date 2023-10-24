import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { t } from 'i18next';
import {
  GrowthMonitoringChartParams,
  GrowthMonitoringResultItemProps,
} from '../../../domains/types/GrowthMonitoringResultScreenParams';
import { useNavigation } from '@react-navigation/native';
import { MenuNavigationProp } from '../../../domains/types/Routing';
import { ToolsRoutes } from '../../../routing/routing';
import { COLORS } from '../../../styles/generalStyles.styles';
import { getNutritionalStatusColor } from '../../../utility/growthMonitoring';

const GrowthMonitoringResultItem = ({
  title,
  zscore,
  percentile,
  toolType,
  sex,
  age,
  leftParameter,
  bottomParameter,
  nutritionalStatus = '',
}: GrowthMonitoringResultItemProps) => {
  const { navigate } = useNavigation<MenuNavigationProp>();

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: getNutritionalStatusColor(true, zscore) },
      ]}>
      <Text style={styles.title}>{t(title)}</Text>
      <View style={styles.flexContainer}>
        <Text style={styles.descriptionTitle}>
          {t`GrowthMonitoringToolPage.Result.ZscoreTitle`}:
        </Text>
        <Text
          style={[
            styles.descriptionText,
            { color: getNutritionalStatusColor(false, zscore) },
          ]}>
          {' '}
          {zscore}
        </Text>
      </View>
      <Text style={styles.descriptionTitle}>
        {t`GrowthMonitoringToolPage.Result.PercentileTitle`}: {percentile}
      </Text>
      {nutritionalStatus != '' ? (
        <View style={styles.flexContainer}>
          <Text style={{ color: COLORS.black }}>
            {t`GrowthMonitoringToolPage.Result.NutritionalStatus.Title`}:{' '}
          </Text>
          <Text style={{ color: getNutritionalStatusColor(false, zscore) }}>
            {t(nutritionalStatus)}
          </Text>
        </View>
      ) : null}
      <TouchableOpacity
        style={ styles.getChartButtonContainer}
        onPress={() => {
          navigate(ToolsRoutes.GrowthMonitoringChartScreen, {
            toolType: toolType,
            sex: sex,
            age: age,
            zscore: Number(zscore),
            leftParameter: leftParameter,
            bottomParameter: bottomParameter,
          } as GrowthMonitoringChartParams);
        }}>
        <Text
          style={{
            color: COLORS.white,
            textAlign: 'center',
          }}>{t`GrowthMonitoringToolPage.Result.GetChartButtonTitle`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  flexContainer: { 
    display: 'flex', 
    flexDirection: 'row' 
  },
  getChartButtonContainer: {
    backgroundColor: COLORS.lightBlue,
    paddingVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    width: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.black,
  },
  descriptionTitle: {
    fontSize: 15,
    color: COLORS.black,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.black,
  },
});

export default GrowthMonitoringResultItem;
