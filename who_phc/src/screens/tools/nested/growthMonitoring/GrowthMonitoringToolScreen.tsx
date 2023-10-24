import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React from 'react';
import generalStyles from '../../../../styles/generalStyles.styles';
import { t } from 'i18next';
import useMainContext from '../../../../context/useMainContext';
import { useNavigation } from '@react-navigation/native';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';
import InputWithLabel from '../../../../components/UI/InputWithLabel';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import { growthMonitoringSexData } from '../../../../data/tools/nested/growthMonitoringTool';
import RatioButtonsGroup from '../../../../components/UI/RatioButtonsGroup';
import { ToolsRoutes } from '../../../../routing/routing';
import { MenuNavigationProp } from '../../../../domains/types/Routing';
import { GrowthMonitoringResultScreenParams } from '../../../../domains/types/GrowthMonitoringResultScreenParams';

const GrowthMonitoringToolScreen = () => {
  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  const [sexValue, setSex] = React.useState(-1);
  const [weightValue, setWeight] = React.useState('');
  const [months, setAgeMonths] = React.useState('');
  const [years, setAgeYears] = React.useState('');
  const [heightValue, setHeight] = React.useState('');
  const [headCircumferenceValue, setHeadCircumference] = React.useState('');

  const checkParameters = () => {
    if (sexValue == -1) {
      Alert.alert(t`Alert.Title`, t`GrowthMonitoringToolPage.Alert.SetSex`, [
        { text: t`Alert.Okbutton`, onPress: () => {} },
      ]);
      return false;
    }

    if (isNaN(Number(years)) || Number(years) < 0 || Number(years) > 5) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.AgeYearsLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (isNaN(Number(months))) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.AgeMonthsLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (!Number.isInteger(Number(years)) || !Number.isInteger(Number(months))) {
      Alert.alert(t`Alert.Title`, t`DrugCalculatorToolPage.Alert.AgeInteger`, [
        { text: t`Alert.Okbutton`, onPress: () => {} },
      ]);
      return false;
    }

    if (Number(years) > 0) {
      if (Number(years) == 5 && Number(months) > 0) {
        Alert.alert(
          t`Alert.Title`,
          t`GrowthMonitoringToolPage.Alert.AgeCorrect`,
          [{ text: t`Alert.Okbutton`, onPress: () => {} }],
        );
        return false;
      }
      else{
        if(Number(months) > 11)
        {
          Alert.alert(
            t`Alert.Title`,
            t`GrowthMonitoringToolPage.Alert.AgeCorrect`,
            [{ text: t`Alert.Okbutton`, onPress: () => {} }],
          );
          return false;
        }
      }
    } else {
      if (Number(years) == 0 && (Number(months) < 0 || Number(months) > 60)) {
        Alert.alert(
          t`Alert.Title`,
          t`GrowthMonitoringToolPage.Alert.AgeCorrect`,
          [{ text: t`Alert.Okbutton`, onPress: () => {} }],
        );
        return false;
      }
    }

    if (weightValue.includes(',')) {
      Alert.alert(
        t`Alert.Title`,
        t`DrugCalculatorToolPage.Alert.WeightWithoutComa`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (
      weightValue == '' ||
      isNaN(Number(weightValue)) ||
      Number(weightValue) <= 0
    ) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.WeightLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (heightValue == '') {
      return true;
    }
    if (
      isNaN(Number(heightValue)) ||
      Number(heightValue) < 45 ||
      Number(heightValue) > 120
    ) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.HeightLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (
      Number(heightValue) < 65 &&
      (Number(months) > 24 || Number(years) >= 2)
    ) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.ErrToMuchLengthForAge`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (headCircumferenceValue == '') {
      return true;
    }
    if (
      isNaN(Number(headCircumferenceValue)) ||
      Number(headCircumferenceValue) <= 0
    ) {
      Alert.alert(
        t`Alert.Title`,
        t`GrowthMonitoringToolPage.Alert.HeadCircumferenceLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }
    return true;
  };

  const roundAgeValue = () => {
    let tmpYears = Number(Math.floor(Number(years))) * 12;
    let age = Math.floor(tmpYears + Number(months)).toString();
    return age;
  };

  const roundHeightValue = () => {
    if (Number(heightValue) % 1 != 0) {
      if (Number(heightValue) % 1 >= 0.1 && Number(heightValue) % 1 < 0.5) {
        return Math.floor(Number(heightValue)).toString();
      } else {
        if (Number(heightValue) % 1 >= 0.5 && Number(heightValue) % 1 <= 0.99) {
          return (Math.floor(Number(heightValue)) + 0.5).toString();
        }
      }
    } else {
      return heightValue;
    }
  };

  return (
    <ToolScreenLayout
      result={t`GrowthMonitoringToolPage.MainTitle`}
      form={
        <ScrollView>
          <View>
            <RatioButtonsGroup
              title="GrowthMonitoringToolPage.Sex.Label"
              data={growthMonitoringSexData}
              onChange={(selectedItem: ICheckboxButton) => {
                setSex(selectedItem.id as number);
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, marginRight: 5 }}>
                <InputWithLabel
                  value={years}
                  onChange={setAgeYears}
                  label={
                    t`DrugCalculatorToolPage.Fields.Age.Label` +
                    ' (' +
                    t`DrugCalculatorToolPage.Fields.Age.LabelYears` +
                    '):'
                  }
                  placeholder={'-'}
                />
              </View>
              <View style={{ flex: 1 }}>
                <InputWithLabel
                  value={months}
                  onChange={setAgeMonths}
                  label={
                    t`DrugCalculatorToolPage.Fields.Age.Label` +
                    ' (' +
                    t`DrugCalculatorToolPage.Fields.Age.LabelMonths` +
                    '):'
                  }
                  placeholder={'-'}
                />
              </View>
            </View>
            <InputWithLabel
              value={weightValue}
              onChange={setWeight}
              label={t`GrowthMonitoringToolPage.Weight.Label`}
              placeholder={t`GrowthMonitoringToolPage.Weight.Placeholder`}
            />
            <InputWithLabel
              value={heightValue}
              onChange={setHeight}
              label={t`GrowthMonitoringToolPage.Height.Label`}
              placeholder={t`GrowthMonitoringToolPage.Height.Placeholder`}
            />
            <InputWithLabel
              value={headCircumferenceValue}
              onChange={setHeadCircumference}
              label={t`GrowthMonitoringToolPage.HeadCircumference.Label`}
              placeholder={t`GrowthMonitoringToolPage.HeadCircumference.Placeholder`}
            />
          </View>
        </ScrollView>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            if (checkParameters()) {
              navigate(ToolsRoutes.GrowthMonitoringResultScreen, {
                age: roundAgeValue(),
                sex: sexValue.toString(),
                weight: weightValue,
                height: roundHeightValue(),
                headCircumference: headCircumferenceValue,
              } as GrowthMonitoringResultScreenParams);
            }
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`GrowthMonitoringToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default GrowthMonitoringToolScreen;
