import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import { t } from 'i18next';
import CheckboxGroup from '../../../components/UI/CheckboxGroup';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import {
  dehydrationSymptomImagesData,
  dehydrationSymptomsData,
  noDehydrationResultData,
  severeDehydrationResultData,
  someDehydrationResultData,
} from '../../../data/tools/nested/dehydrationTool';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import { ToolsRoutes } from '../../../routing/routing';
import { useNavigation } from '@react-navigation/native';
import { removeSelectedSymptom, addSelectedSymptom } from '../../../utility/arrays';
import SymptomImages from '../../../components/UI/tools/SymptomImages';
import useMainContext from '../../../context/useMainContext';
import { MenuNavigationProp } from '../../../domains/types/Routing';

const DehydrationToolScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);

  const [dehydrationResult, setDehydrationResult] = React.useState(
    t`DehydrationToolPage.Result.NoDehydration`,
  );
  const [dehydrationTreatment, setDehydrationTreatmentResult] = React.useState(
    noDehydrationResultData,
  );

  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  React.useEffect(() => {
    dehydrationClassify();
  }, [selectedSymptoms]);

  const countSelectedSymptomsDehydration = (values: boolean[]) => {
    const someDehydrationSymptoms: boolean[] = [];
    values.map(item => {
      someDehydrationSymptoms.push(item);
    });
    let count = 0;
    someDehydrationSymptoms.map(el => {
      if (el == true) count++;
    });
    return count;
  };

  const dehydrationClassify = () => {
    if (selectedSymptoms.length == 0) {
      setDehydrationResult(t`DehydrationToolPage.Result.NoDehydration`);
      setDehydrationTreatmentResult(noDehydrationResultData);
    } else {
      const arrSevereSymptoms: boolean[] = [];
      arrSevereSymptoms.push(
        selectedSymptoms.includes('1'),
        selectedSymptoms.includes('2'),
        selectedSymptoms.includes('4'),
        selectedSymptoms.includes('6'),
      );
      if (countSelectedSymptomsDehydration(arrSevereSymptoms) >= 2) {
        setDehydrationResult(t`DehydrationToolPage.Result.SevereDehydration`);
        setDehydrationTreatmentResult(severeDehydrationResultData);
      } else {
        const arrSomeSymptoms: boolean[] = [];
        arrSomeSymptoms.push(
          selectedSymptoms.includes('0'),
          selectedSymptoms.includes('2'),
          selectedSymptoms.includes('3'),
          selectedSymptoms.includes('5'),
        );
        if (countSelectedSymptomsDehydration(arrSomeSymptoms) >= 2) {
          setDehydrationResult(t`DehydrationToolPage.Result.SomeDehydration`);
          setDehydrationTreatmentResult(someDehydrationResultData);
        } else {
          setDehydrationResult(t`DehydrationToolPage.Result.NoDehydration`);
          setDehydrationTreatmentResult(noDehydrationResultData);
        }
      }
    }
  };

  return (
    <ToolScreenLayout
      result={t`DehydrationToolPage.MainTitle`}
      form={
        <>
          <SymptomImages imagesList={dehydrationSymptomImagesData} />
          <CheckboxGroup
            title="DehydrationToolPage.Symptoms.SelectSymptoms"
            data={dehydrationSymptomsData}
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
              dehydrationClassify();
            }}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={() => {
            const symptomsArray: string[] = [];
            selectedSymptoms.map(item => {
              symptomsArray.push(dehydrationSymptomsData[Number(item)].text);
            });
            navigate(ToolsRoutes.ToolsResultScreen, {
              symptoms: symptomsArray,
              result: dehydrationResult,
              treatment: dehydrationTreatment,
              title: t`ToolsPage.Menu.Dehydration`,
            } as ToolsResultScreenParams);
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`DehydrationToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default DehydrationToolScreen;
