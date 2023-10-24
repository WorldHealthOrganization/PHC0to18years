import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  croupSymptomsData,
  mildCroupResultData,
  noCroupResultData,
  severeCroupResultData,
} from '../../../data/tools/nested/croupTool';
import { t } from 'i18next';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import CheckboxGroup from '../../../components/UI/CheckboxGroup';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import { ToolsRoutes } from '../../../routing/routing';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import { useNavigation } from '@react-navigation/native';
import {
  removeSelectedSymptom,
  addSelectedSymptom,
} from '../../../utility/arrays';
import useMainContext from '../../../context/useMainContext';
import { MenuNavigationProp } from '../../../domains/types/Routing';

const CroupToolScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [croupResult, setCroupResult] = React.useState(
    t`CroupToolPage.Result.NoCroup`,
  );
  const [croupTreatment, setCroupTreatmentResult] = React.useState(noCroupResultData);
  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  const croupClassify = () => {
    if (
      selectedSymptoms.includes('4') ||
      selectedSymptoms.includes('5') ||
      selectedSymptoms.includes('6')
    ) {
      setCroupResult(t`CroupToolPage.Result.SevereCroup`);
      setCroupTreatmentResult(severeCroupResultData);
    } else {
      if (
        selectedSymptoms.includes('0') ||
        selectedSymptoms.includes('1') ||
        selectedSymptoms.includes('2') ||
        selectedSymptoms.includes('3')
      ) {
        setCroupTreatmentResult(mildCroupResultData);
        setCroupResult(t`CroupToolPage.Result.MildCroup`);
      } else {
        setCroupResult(t`CroupToolPage.Result.NoCroup`);
        setCroupTreatmentResult(noCroupResultData);
      }
    }
  };

  return (
    <ToolScreenLayout
      result={t`CroupToolPage.MainTitle`}
      form={
        <>
          <CheckboxGroup
            title="ToolsPage.General.Symptoms.SelectSymptoms"
            data={croupSymptomsData}
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
              croupClassify();
            }}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            croupClassify();
            const symptomsArray: string[] = [];
            selectedSymptoms.map(item => {
              symptomsArray.push(croupSymptomsData[Number(item)].text);
            });
            navigate(ToolsRoutes.ToolsResultScreen, {
              symptoms: symptomsArray,
              result: croupResult,
              treatment: croupTreatment,
              title: t`ToolsPage.Menu.Croup`,
            } as ToolsResultScreenParams);
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`CroupToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default CroupToolScreen;
