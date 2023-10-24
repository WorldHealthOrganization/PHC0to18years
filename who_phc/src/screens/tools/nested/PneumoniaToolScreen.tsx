import { Alert, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import { t } from 'i18next';
import RatioButtonsGroup from '../../../components/UI/RatioButtonsGroup';
import {
  ageData,
  respiratoryRateData,
  pneumoniaSymptomsData,
  pneumoniaResultTreatmentData,
  noPneumoniaResultData,
  severePneumoniaResultData,
  pneumoniaSymptomImagesData,
} from '../../../data/tools/nested/pneumoniaTool';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import CheckboxGroup from '../../../components/UI/CheckboxGroup';
import { useNavigation } from '@react-navigation/native';
import { ToolsRoutes } from '../../../routing/routing';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import {
  removeSelectedSymptom,
  addSelectedSymptom,
} from '../../../utility/arrays';
import SymptomImages from '../../../components/UI/tools/SymptomImages';
import useMainContext from '../../../context/useMainContext';
import { MenuNavigationProp } from '../../../domains/types/Routing';

const PneumoniaToolScreen = () => {
  const [ageValue, setAgeValue] = React.useState(-1);
  const [respiratoryRateValue, setRespiratoryRateValue] = React.useState(-1);
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);

  const [pneumoniaResult, setPneumoniaResult] = React.useState(
    t`PneumoniaToolPage.Result.NoPneumonia`,
  );
  const [pneumoniaResultTreatment, setPneumoniaResultTreatment] =
    React.useState(noPneumoniaResultData);

  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  useEffect(() => {
    pneumoniaClassify();
  }, [ageValue, respiratoryRateValue]);

  const pneumoniaClassify = () => {
    if (selectedSymptoms.includes('0') && selectedSymptoms.length == 1) {
      setPneumoniaResult(t`PneumoniaToolPage.Result.Pneumonia`);
      setPneumoniaResultTreatment(pneumoniaResultTreatmentData);
    } else {
      if (selectedSymptoms.length >= 1) {
        setPneumoniaResultTreatment(severePneumoniaResultData);
        setPneumoniaResult(t`PneumoniaToolPage.Result.SeverePneumonia`);
      } else {
        if (
          (ageValue == 0 && respiratoryRateValue == 2) ||
          (ageValue == 1 &&
            (respiratoryRateValue == 2 || respiratoryRateValue == 1)) ||
          selectedSymptoms.includes('0')
        ) {
          setPneumoniaResultTreatment(pneumoniaResultTreatmentData);
          setPneumoniaResult(t`PneumoniaToolPage.Result.Pneumonia`);
        } else {
          setPneumoniaResultTreatment(noPneumoniaResultData);
          setPneumoniaResult(t`PneumoniaToolPage.Result.NoPneumonia`);
        }
      }
    }
  };
  return (
    <ToolScreenLayout
      result={
        t`PneumoniaToolPage.MainTitle`
      }
      form={
        <>
        <SymptomImages imagesList={pneumoniaSymptomImagesData}/>
          <RatioButtonsGroup
            title="ToolsPage.General.Age.SelectAge"
            data={ageData}
            onChange={(selectedItem: ICheckboxButton) => {
              setAgeValue(selectedItem.id as number);
              pneumoniaClassify();
            }}
          />
          <RatioButtonsGroup
            title="PneumoniaToolPage.RespiratoryRate.SelectRespiratoryRate"
            data={respiratoryRateData}
            onChange={(selectedItem: ICheckboxButton) => {
              setRespiratoryRateValue(selectedItem.id as number);
              pneumoniaClassify();
            }}
          />
          <CheckboxGroup
            title="ToolsPage.General.Symptoms.SelectSymptoms"
            data={pneumoniaSymptomsData}
            onPress={(selectedItem: ICheckboxButton) => {
              let newSelectedSymptomsArray: string[] = [];
              if (selectedSymptoms.includes(selectedItem.id)) {
                newSelectedSymptomsArray = removeSelectedSymptom(
                  selectedSymptoms,
                  selectedItem.id as string,
                );
              } else {
                newSelectedSymptomsArray = addSelectedSymptom(
                  selectedSymptoms,
                  selectedItem.id as string,
                );
              }
              setSelectedSymptoms(newSelectedSymptomsArray);
              pneumoniaClassify();
            }}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            if (ageValue == -1) {
              Alert.alert(t`Alert.SelectAge`, '', [
                { text: t`Alert.Okbutton`, onPress: () => {} },
              ]);
            } else {
              if (respiratoryRateValue == -1) {
                Alert.alert(t`Alert.SelectRespiratoryRate`, '', [
                  { text: t`Alert.Okbutton`, onPress: () => {} },
                ]);
              } else {
                pneumoniaClassify();
                const symptomsArray: string[] = [];
                selectedSymptoms.map(item => {
                  symptomsArray.push(pneumoniaSymptomsData[item].text);
                });
                navigate(ToolsRoutes.ToolsResultScreen, {
                  age: ageData[ageValue].text,
                  respiratoryRate:
                    respiratoryRateData[respiratoryRateValue].text,
                  symptoms: symptomsArray,
                  result: pneumoniaResult,
                  treatment: pneumoniaResultTreatment,
                  title: t`ToolsPage.Menu.Pneumonia`,
                } as ToolsResultScreenParams);
              }
            }
          }}>
          <Text
            style={
              [generalStyles.toolResultText, {fontSize: fontSize}]
            }>{t`PneumoniaToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default PneumoniaToolScreen;
