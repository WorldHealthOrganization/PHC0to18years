import { Alert, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { t } from 'i18next';
import {
  otitisDonotSupportiveResultData,
  otitisGeneralSupportiveResultData,
  otitisMediaAgeData,
  otitisPresribe2moreResultData,
  otitisPresribe6_23ResultData,
  otitisPresribeGeneralResultData,
  otitisPresribeUnder6ResultData,
  otitisPusSupportiveResultData,
  otitisSymptomsData,
} from '../../../data/tools/nested/otitisMediaTool';
import CheckboxGroup from '../../../components/UI/CheckboxGroup';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import RatioButtonsGroup from '../../../components/UI/RatioButtonsGroup';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import { ToolsRoutes } from '../../../routing/routing';
import { useNavigation } from '@react-navigation/native';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import generalStyles from '../../../styles/generalStyles.styles';
import {
  removeSelectedSymptom,
  addSelectedSymptom,
} from '../../../utility/arrays';
import useMainContext from '../../../context/useMainContext';
import { MenuNavigationProp } from '../../../domains/types/Routing';

const OtitisMediaToolScreen = () => {
  const [ageValue, setAgeValue] = React.useState(-1);
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [isAntibiotics, setIsAntibiotics] = React.useState(true);

  const [otitisResultTreatment, setOtitisResultTreatment] = React.useState([]);

  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  useEffect(() => {
    if (ageValue == 0) {
      setSelectedSymptoms([]);
    }
    showSymptoms();
  }, [ageValue]);

  useEffect(() => {
    showResult();
  }, [ageValue, selectedSymptoms]);

  const showResult = () => {
    if (ageValue == 0) {
      setIsAntibiotics(true);
      setOtitisResultTreatment(
        otitisPresribeUnder6ResultData
          .concat(otitisPresribeGeneralResultData)
          .concat(otitisGeneralSupportiveResultData)
          .concat(otitisPusSupportiveResultData),
      );
    } else {
      if (ageValue == 1) {
        if (selectedSymptoms.length >= 1) {
          setIsAntibiotics(true);
          setOtitisResultTreatment(
            otitisPresribe6_23ResultData
              .concat(otitisPresribeGeneralResultData)
              .concat(otitisGeneralSupportiveResultData)
              .concat(otitisPusSupportiveResultData),
          );
        } else {
          setIsAntibiotics(false);
          setOtitisResultTreatment(
            otitisDonotSupportiveResultData.concat(
              otitisGeneralSupportiveResultData,
            ),
          );
        }
      } else {
        if (ageValue == 2) {
          if (
            (selectedSymptoms.length >= 2 && selectedSymptoms.includes('0')) ||
            (selectedSymptoms.length >= 1 && !selectedSymptoms.includes('0'))
          ) {
            setIsAntibiotics(true);
            setOtitisResultTreatment(

              otitisPresribe2moreResultData
                .concat(otitisPresribeGeneralResultData)
                .concat(otitisGeneralSupportiveResultData)
                .concat(otitisPusSupportiveResultData),
            );
          } else {
            setIsAntibiotics(false);
            setOtitisResultTreatment(
              otitisDonotSupportiveResultData.concat(
                otitisGeneralSupportiveResultData,
              ),
            );
          }
        }
      }
    }
  };

  const showSymptoms = () => {
    if (ageValue == 0 || ageValue == -1) {
      return null;
    } else {
      return (
        <CheckboxGroup
          title="ToolsPage.General.Symptoms.SelectSymptoms"
          data={otitisSymptomsData}
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
            showResult();
          }}
        />
      );
    }
  };

  return (
    <ToolScreenLayout
      result={t`OtitisMediaToolPage.MainTitle`}
      form={
        <>
          <RatioButtonsGroup
            title="ToolsPage.General.Age.SelectAge"
            data={otitisMediaAgeData}
            onChange={(selectedItem: ICheckboxButton) => {
              setAgeValue(selectedItem.id as number);
              showResult();
            }}
          />
          {showSymptoms()}
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            if(ageValue == -1)
            {
              Alert.alert(t`Alert.SelectAge`, '', [
                { text: t`Alert.Okbutton`, onPress: () => {} },
              ]);
            }
            else{
            let otitisMediaResultTitle = '';
            if (isAntibiotics == true) {
              otitisMediaResultTitle = t`OtitisMediaToolPage.Result.PrescribeAntibiotics.Title`;
            } else {
              otitisMediaResultTitle = t`OtitisMediaToolPage.Result.SupportiveCareAtHome.Title`;
            }
            const symptomsArray: string[] = [];
            selectedSymptoms.map(item => {
              symptomsArray.push(otitisSymptomsData[item].text);
            });
            navigate(ToolsRoutes.ToolsResultScreen, {
              age: otitisMediaAgeData[ageValue].text,
              symptoms: symptomsArray,
              result: otitisMediaResultTitle,
              treatment: otitisResultTreatment,
              title: t`ToolsPage.Menu.OtitisMedia`,
            } as ToolsResultScreenParams);
          }}}>
          <Text
            style={
              [generalStyles.toolResultText, {fontSize: fontSize}]
            }>{t`OtitisMediaToolPage.Result.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default OtitisMediaToolScreen;
