import { Button, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { t } from 'i18next';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import RatioButtonsGroup from '../../../components/UI/RatioButtonsGroup';
import {
  activityData,
  appearanceData,
  grimaceData,
  pulseData,
  respirationData,
} from '../../../data/tools/nested/apgarScoreTool';
import generalStyles from '../../../styles/generalStyles.styles';
import useMainContext from '../../../context/useMainContext';

const ApgarScoreToolScreen = () => {
  const [appearanceValue, setAppearanceValue] = React.useState(0);
  const [pulseValue, setPulseValue] = React.useState(0);
  const [grimaceValue, setGrimaceValue] = React.useState(0);
  const [activityValue, setActivityValue] = React.useState(0);
  const [respirationValue, setRespirationValue] = React.useState(0);
  const [ApgarScoreResult, setApgarScoreResult] = React.useState(-1);

  const { fontSize } = useMainContext();

  const getApgarScore = () => {
    const appearanceNum = Number(appearanceValue);
    const pulseNum = Number(pulseValue);
    const grimaceNum = Number(grimaceValue);
    const activityNum = Number(activityValue);
    const respirationNum = Number(respirationValue);

    setApgarScoreResult(
      appearanceNum + pulseNum + grimaceNum + activityNum + respirationNum,
    );
  };

  return (
    <ToolScreenLayout
      result={
        ApgarScoreResult != -1
          ? t`ApgarScoreToolPage.ButtonText` + ApgarScoreResult
          : t`ToolsPage.General.Symptoms.SelectSymptoms`
      }
      form={
        <View style={{paddingRight: 10}}>
          <RatioButtonsGroup
            title="ApgarScoreToolPage.Appearance.Title"
            data={appearanceData}
            onChange={(selectedItem: ICheckboxButton) => {
              setAppearanceValue(selectedItem.id as number);
            }}
          />
          <RatioButtonsGroup
            title="ApgarScoreToolPage.Pulse.Title"
            data={pulseData}
            onChange={(selectedItem: ICheckboxButton) => {
              setPulseValue(selectedItem.id as number);
            }}
          />
          <RatioButtonsGroup
            title="ApgarScoreToolPage.Grimace.Title"
            data={grimaceData}
            onChange={(selectedItem: ICheckboxButton) => {
              setGrimaceValue(selectedItem.id as number);
            }}
          />
          <RatioButtonsGroup
            title="ApgarScoreToolPage.Activity.Title"
            data={activityData}
            onChange={(selectedItem: ICheckboxButton) => {
              setActivityValue(selectedItem.id as number);
            }}
          />
          <RatioButtonsGroup
            title="ApgarScoreToolPage.Respiration.Title"
            data={respirationData}
            onChange={(selectedItem: ICheckboxButton) => {
              setRespirationValue(selectedItem.id as number);
            }}
          />
        </View>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={getApgarScore}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`ApgarScoreToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default ApgarScoreToolScreen;
