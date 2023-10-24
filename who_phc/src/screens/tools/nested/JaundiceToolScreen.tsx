import { Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import {
  jaundiceAgeData,
  jaundiceCounselResultData,
  jaundiceMonitorResultData,
  jaundiceReferUrgentlyResultData,
  jaundiceRiskFactorsData,
  jaundiceUnitsData,
  jaundiceWeekData,
} from '../../../data/tools/nested/jaundiceTool';
import CheckboxGroup from '../../../components/UI/CheckboxGroup';
import RatioButtonsGroup from '../../../components/UI/RatioButtonsGroup';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import {
  addSelectedSymptom,
  removeSelectedSymptom,
} from '../../../utility/arrays';
import InputWithLabel from '../../../components/UI/InputWithLabel';
import { ToolsRoutes } from '../../../routing/routing';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import useMainContext from '../../../context/useMainContext';
import { MenuNavigationProp } from '../../../domains/types/Routing';

const JaundiceToolScreen = () => {
  const [ageValue, setAgeValue] = React.useState('-1');
  const [weekValue, setWeekValue] = React.useState(-1);
  const [selectedRiskFactors, setSelectedRiskFactors] = React.useState([]);
  const [tsbValue, setTSBvalue] = React.useState('');
  const [unitsValue, setUnitsValue] = React.useState('0');

  const [thresholdResultValue, setThresholdResultValue] = React.useState(0);
  const [jaundiceTreatmentResult, setJaundiceTreatmentResult] = React.useState(
    jaundiceReferUrgentlyResultData,
  );
  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();
  const [tsbPlaceholder, setTsbPlaceholder] = React.useState(
    t`JaundiceToolPage.TSB.Placeholder` +
    t(jaundiceUnitsData[Number(unitsValue)].text),
  );

  useEffect(() => {
    const threshold = getThresholdNumber();
    setThresholdResultValue(threshold);
    getThresholdText(Number(tsbValue), threshold);
  }, [ageValue, weekValue, tsbValue, unitsValue]);

  useEffect(() => {
    getThresholdText(Number(tsbValue), thresholdResultValue);
  }, [thresholdResultValue]);

  const getThresholdNumber = () => {
    switch (ageValue) {
      case '0':
        if (weekValue == 0) {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 8 : 140;
          } else {
            return unitsValue == '0' ? 10 : 170;
          }
        } else {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 10 : 170;
          } else {
            return unitsValue == '0' ? 12 : 200;
          }
        }
        break;

      case '1':
        if (weekValue == 0) {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 11 : 190;
          } else {
            return unitsValue == '0' ? 13 : 220;
          }
        } else {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 13 : 220;
          } else {
            return unitsValue == '0' ? 15 : 260;
          }
        }
        break;
      case '2':
        if (weekValue == 0) {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 13.5 : 230;
          } else {
            return unitsValue == '0' ? 15 : 260;
          }
        } else {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 15 : 260;
          } else {
            return unitsValue == '0' ? 18 : 310;
          }
        }
        break;
      case '3':
        if (weekValue == 0) {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 14.5 : 250;
          } else {
            return unitsValue == '0' ? 17 : 290;
          }
        } else {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 17 : 290;
          } else {
            return unitsValue == '0' ? 20 : 340;
          }
        }
        break;
      case '4':
        if (weekValue == 0) {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 15 : 260;
          } else {
            return unitsValue == '0' ? 18 : 310;
          }
        } else {
          if (selectedRiskFactors.length > 0) {
            return unitsValue == '0' ? 18 : 310;
          } else {
            return unitsValue == '0' ? 21 : 360;
          }
        }
        break;
    }
  };

  const getThresholdText = (tsbParam: number, thresholdParam: number) => {
    if (Number(tsbParam) >= thresholdParam) {
      setJaundiceTreatmentResult(jaundiceReferUrgentlyResultData);
    } else {
      switch (unitsValue) {
        case '0':
          if (
            Number(tsbParam) < thresholdParam &&
            Number(tsbParam) >= thresholdParam - 2.9
          ) {
            setJaundiceTreatmentResult(jaundiceMonitorResultData);
          } else {
            setJaundiceTreatmentResult(jaundiceCounselResultData);
          }
          break;
        case '1':
          if (
            Number(tsbParam) < thresholdParam &&
            Number(tsbParam) >= thresholdParam - 50
          ) {
            setJaundiceTreatmentResult(jaundiceMonitorResultData);
          } else {
            setJaundiceTreatmentResult(jaundiceCounselResultData);
          }
          break;
      }
    }
  };

  const getSymptoms = () => {
    const symptomsArray: string[] = [];
    symptomsArray.push(
      t`JaundiceToolPage.GestationsWeeks.Title` +
      t(jaundiceWeekData[weekValue].text),
    );
    selectedRiskFactors.map(item => {
      symptomsArray.push(jaundiceRiskFactorsData[item].text);
    });
    symptomsArray.push(
      t`JaundiceToolPage.TSB.TextForResult` +
      tsbValue +
      ' ' +
      t(jaundiceUnitsData[Number(unitsValue)].text),
    );
    return symptomsArray;
  };

  return (
    <ToolScreenLayout
      result={t`JaundiceToolPage.MainTitle`}
      form={
        <>
          <RatioButtonsGroup
            title="ToolsPage.General.Age.SelectAge"
            data={jaundiceAgeData}
            onChange={(selectedItem: ICheckboxButton) => {
              setAgeValue(selectedItem.id as string);
            }}
          />
          <RatioButtonsGroup
            title="JaundiceToolPage.GestationsWeeks.Title"
            data={jaundiceWeekData}
            onChange={(selectedItem: ICheckboxButton) => {
              setWeekValue(selectedItem.id as number);
            }}
          />
          <CheckboxGroup
            title="JaundiceToolPage.RiskFactors.Title"
            data={jaundiceRiskFactorsData}
            onPress={(selectedItem: ICheckboxButton) => {
              let newSelectedSymptomsArray: string[] = [];
              if (selectedRiskFactors.includes(selectedItem.id)) {
                newSelectedSymptomsArray = removeSelectedSymptom(
                  selectedRiskFactors,
                  selectedItem.id as string,
                );
              } else {
                newSelectedSymptomsArray = addSelectedSymptom(
                  selectedRiskFactors,
                  selectedItem.id as string,
                );
              }
              setSelectedRiskFactors(newSelectedSymptomsArray);
              setThresholdResultValue(getThresholdNumber());
            }}
          />
          <RatioButtonsGroup
            initial={'0'}
            title="JaundiceToolPage.Units.Title"
            data={jaundiceUnitsData}
            onChange={(selectedItem: ICheckboxButton) => {
              setUnitsValue(selectedItem.id as string);
              setTsbPlaceholder(
                t`JaundiceToolPage.TSB.Placeholder` +
                t(jaundiceUnitsData[selectedItem.id as number].text),
              );
            }}
          />
          <InputWithLabel
            value={tsbValue}
            onChange={item => {
              setTSBvalue(item);
              const threshold = getThresholdNumber();
              setThresholdResultValue(threshold);
            }}
            label={t`JaundiceToolPage.TSB.Title`}
            placeholder={tsbPlaceholder}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            if (ageValue == '-1' || weekValue == -1 || tsbValue == '') {
              Alert.alert(t`Alert.EnterAll`, '', [
                { text: t`Alert.Okbutton`, onPress: () => { } },
              ]);
            } else {
              navigate(ToolsRoutes.ToolsResultScreen, {
                age: jaundiceAgeData[Number(ageValue)].text,
                symptoms: getSymptoms(),
                result:
                  t`JaundiceToolPage.Result.ThresholdTitle` +
                  thresholdResultValue +
                  ' ' +
                  t(jaundiceUnitsData[Number(unitsValue)].text),
                treatment: jaundiceTreatmentResult,
                title: t`ToolsPage.Menu.Jaundice`,
              } as ToolsResultScreenParams);
            }
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`JaundiceToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default JaundiceToolScreen;
