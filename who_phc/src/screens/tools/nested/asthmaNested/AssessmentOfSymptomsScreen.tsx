import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import generalStyles, { COLORS } from '../../../../styles/generalStyles.styles';
import { t } from 'i18next';
import {
  assessmentOfAsthmaAgeData,
  asthmaAssessmentPartlyControlledResult,
  asthmaAssessmentUncontrolledResult,
  asthmaAssessmentWellControlledResult,
  symptomsAsthmaAssessment5less,
  symptomsAsthmaAssessment6more,
} from '../../../../data/tools/nested/assessmentOfAsthma';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import RatioButtonsGroup from '../../../../components/UI/RatioButtonsGroup';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';
import {
  addSelectedSymptom,
  removeSelectedSymptom,
} from '../../../../utility/arrays';
import { useNavigation } from '@react-navigation/native';
import CheckboxGroup from '../../../../components/UI/CheckboxGroup';
import { ToolsRoutes } from '../../../../routing/routing';
import ToolsResultScreenParams from '../../../../domains/types/ToolsResultScreenParams';
import useMainContext from '../../../../context/useMainContext';
import { MenuNavigationProp } from '../../../../domains/types/Routing';

const AssessmentOfSymptomsScreen = () => {
  const [ageValue, setAgeValue] = React.useState('-1');
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [asthmaAssessmentResult, setAsthmaAssessmentResult] = React.useState(
    t`AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Title`,
  );
  const [asthmaAssessmentTreatmentResult, setAsthmaAssessmentTreatmentResult] = React.useState(asthmaAssessmentWellControlledResult);

  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();
  useEffect(() => {
    setSelectedSymptoms([]);
  }, [ageValue]);
  const getSymptomsArray = () => {
    const symptomsArray: string[] = [];
    if (ageValue == '0') {
      selectedSymptoms.map(item =>
        symptomsArray.push(symptomsAsthmaAssessment6more.find(el=>el.id==item as string).text)
      );
    } else {
      selectedSymptoms.map(item =>
        symptomsArray.push(symptomsAsthmaAssessment5less.find(el=>el.id==item as string).text)
      );
    }
    return symptomsArray;
  };

  const asthmaAssesstment = () => {
    if(selectedSymptoms.length == 0){
      setAsthmaAssessmentResult(t`AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Title`);
      setAsthmaAssessmentTreatmentResult(asthmaAssessmentWellControlledResult);
    }
    else{
      if(selectedSymptoms.length == 1 || selectedSymptoms.length == 2){
        setAsthmaAssessmentResult(t`AsthmaPage.AssessmentOfSymptomsPage.Result.PartlyControlled.Title`);
        setAsthmaAssessmentTreatmentResult(asthmaAssessmentPartlyControlledResult);
      }
      else{
        if(selectedSymptoms.length == 3 || selectedSymptoms.length == 4){
          setAsthmaAssessmentResult(t`AsthmaPage.AssessmentOfSymptomsPage.Result.Uncontrolled.Title`);
          setAsthmaAssessmentTreatmentResult(asthmaAssessmentUncontrolledResult);
        }
      }
    }
  };

  const showSymptoms = () => {
    if (!ageValue.includes('-1')) {
      return (
        <>
          {ageValue == '0' ? (
            <CheckboxGroup
              title="AsthmaPage.AssessmentOfSymptomsPage.Symptoms.Title"
              data={symptomsAsthmaAssessment6more}
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
                asthmaAssesstment();
              }}
            />
          ) : (
            <CheckboxGroup
              title="AsthmaPage.AssessmentOfSymptomsPage.Symptoms.Title"
              data={symptomsAsthmaAssessment5less}
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
                asthmaAssesstment();
              }}
            />
          )}
        </>
      );
    }
  };
  return (
    <ToolScreenLayout
      result={t`AsthmaPage.AssessmentOfSymptomsPage.MainTitle`}
      form={
        <>
          <RatioButtonsGroup
            title="ToolsPage.General.Age.SelectAge"
            data={assessmentOfAsthmaAgeData}
            onChange={(selectedItem: ICheckboxButton) => {
              setAgeValue(selectedItem.id as string);
            }}
          />
          {showSymptoms()}
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            if (!ageValue.includes('-1')) {
              asthmaAssesstment();
              navigate(ToolsRoutes.ToolsResultScreen, {
                age: assessmentOfAsthmaAgeData[Number(ageValue)].text,
                symptoms: getSymptomsArray(),
                result: asthmaAssessmentResult,
                treatment: asthmaAssessmentTreatmentResult,
                title: t`ToolsPage.Menu.Asthma`,
              } as ToolsResultScreenParams);
            } else {
              Alert.alert(t`Alert.SelectAge`, '', [
                { text: t`Alert.Okbutton`, onPress: () => {} },
              ]);
            }
          }}>
          <Text
            style={
              [generalStyles.toolResultText, {fontSize: fontSize}]
            }>{t`AsthmaPage.AssessmentOfSymptomsPage.Result.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default AssessmentOfSymptomsScreen;
