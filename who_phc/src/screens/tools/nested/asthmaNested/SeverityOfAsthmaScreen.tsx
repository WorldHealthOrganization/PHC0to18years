import { Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { t } from 'i18next';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';
import CheckboxGroup from '../../../../components/UI/CheckboxGroup';
import RatioButtonsGroup from '../../../../components/UI/RatioButtonsGroup';
import generalStyles, { COLORS } from '../../../../styles/generalStyles.styles';
import {
  asthmaMildResult,
  asthmaReferImmediatelyResult,
  severityOfAsthmaAgeData,
  symptomsAsthma3belowPulseData,
  symptomsAsthma4_5PulseData,
  symptomsAsthma4_5_3belowOxygenData,
  symptomsAsthma4_5_3belowRespiratoryData,
  symptomsAsthma6aboveOxygenData,
  symptomsAsthma6abovePulseData,
  symptomsAsthma6aboveRespiratoryData,
  symptomsAsthmaGeneralData,
  symptomsAsthmaMainData,
  symptomsAsthmaMentalStateData,
  symptomsAsthmaSittingData,
} from '../../../../data/tools/nested/severityOfAsthmaTool';
import ToolsResultScreenParams from '../../../../domains/types/ToolsResultScreenParams';
import { ToolsRoutes } from '../../../../routing/routing';
import { useNavigation } from '@react-navigation/native';
import {
  addSelectedSymptom,
  removeSelectedSymptom,
} from '../../../../utility/arrays';
import useMainContext from '../../../../context/useMainContext';
import { MenuNavigationProp } from '../../../../domains/types/Routing';

const SeverityOfAsthmaScreen = () => {
  const [ageValue, setAgeValue] = React.useState('-1');

  const [mainSelectedSymptoms, setMainSelectedSymptoms] = React.useState([]);
  const [generalSelectedSymptoms, setGeneralSelectedSymptoms] = React.useState(
    [],
  );
  const [mentalStateSymptomsValue, setMentalStateSymptomsValue] =
    React.useState(-1);
  const [sittingSymptomsValue, setSittingSymptomsValue] = React.useState(-1);
  const [respiratorySymptomsValue, setRespiratorySymptomsValue] =
    React.useState(-1);
  const [pulseSymptomsValue, setPulseSymptomsValue] = React.useState(-1);
  const [oxygenSymptomsValue, setOxygenSymptomsValue] = React.useState(-1);

  const [asthmaResult, setAsthmaResult] = React.useState(
    t`AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.TitleInRed`,
  );
  const [asthmaResultTreatment, setAsthmaResultTreatment] =
    React.useState(asthmaMildResult);

  const { navigate } = useNavigation<MenuNavigationProp>();
  const { fontSize } = useMainContext();

  useEffect(() => {
    switch (ageValue) {
      case '0':
        setGeneralSelectedSymptoms([]);
        break;
      case '1':
        setMentalStateSymptomsValue(-1);
        setSittingSymptomsValue(-1);
        break;
      case '2':
        setMentalStateSymptomsValue(-1);
        setSittingSymptomsValue(-1);
        break;
    }
    setRespiratorySymptomsValue(-1);
    setPulseSymptomsValue(-1);
    setOxygenSymptomsValue(-1);
  }, [ageValue]);

  useEffect(() => {
    asthmaClassify();
  }, [
    mainSelectedSymptoms,
    generalSelectedSymptoms,
    mentalStateSymptomsValue,
    sittingSymptomsValue,
    respiratorySymptomsValue,
    pulseSymptomsValue,
    oxygenSymptomsValue,
  ]);
  const asthmaClassify = () => {
    if (mainSelectedSymptoms.length > 0) {
      setAsthmaResult(
        t`AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.TitleInRed`,
      );
      setAsthmaResultTreatment(asthmaReferImmediatelyResult);
    } else {
      switch (ageValue) {
        case '0':
          if (
            sittingSymptomsValue == 12 ||
            mentalStateSymptomsValue == 9 ||
            respiratorySymptomsValue == 13 ||
            pulseSymptomsValue == 17 ||
            oxygenSymptomsValue == 23
          ) {
            setAsthmaResult(
              t`AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.TitleInRed`,
            );
            setAsthmaResultTreatment(asthmaReferImmediatelyResult);
          } else {
            if (
              sittingSymptomsValue == 11 ||
              mentalStateSymptomsValue == 10 ||
              respiratorySymptomsValue == 14 ||
              pulseSymptomsValue == 18 ||
              oxygenSymptomsValue == 24
            ) {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Title`,
              );
              setAsthmaResultTreatment(asthmaMildResult);
            } else {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.NoSigns.Title`,
              );
              setAsthmaResultTreatment(null);
            }
          }
          break;
        case '1':
          if (
            generalSelectedSymptoms.length > 0 ||
            respiratorySymptomsValue == 15 ||
            pulseSymptomsValue == 19 ||
            oxygenSymptomsValue == 26
          ) {
            setAsthmaResult(
              t`AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.TitleInRed`,
            );
            setAsthmaResultTreatment(asthmaReferImmediatelyResult);
          } else {
            if (
              respiratorySymptomsValue == 16 ||
              pulseSymptomsValue == 20 ||
              oxygenSymptomsValue == 25
            ) {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Title`,
              );
              setAsthmaResultTreatment(asthmaMildResult);
            } else {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.NoSigns.Title`,
              );
              setAsthmaResultTreatment(null);
            }
          }
          break;
        case '2':
          if (
            generalSelectedSymptoms.length > 0 ||
            respiratorySymptomsValue == 15 ||
            pulseSymptomsValue == 21 ||
            oxygenSymptomsValue == 26
          ) {
            setAsthmaResult(
              t`AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.TitleInRed`,
            );
            setAsthmaResultTreatment(asthmaReferImmediatelyResult);
          } else {
            if (
              respiratorySymptomsValue == 16 ||
              pulseSymptomsValue == 22 ||
              oxygenSymptomsValue == 25
            ) {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Title`,
              );
              setAsthmaResultTreatment(asthmaMildResult);
            } else {
              setAsthmaResult(
                t`AsthmaPage.SeverityOfAsthmaPage.Result.NoSigns.Title`,
              );
              setAsthmaResultTreatment(null);
            }
          }
          break;
      }
    }
  };

  const getSymptomsArray = () => {
    const symptomsArray: string[] = [];
    mainSelectedSymptoms.map(item => {
      symptomsArray.push(
        symptomsAsthmaMainData.find(el => el.id == (item as string)).text,
      );
    });
    generalSelectedSymptoms.map(item => {
      symptomsArray.push(
        symptomsAsthmaGeneralData.find(el => el.id == (item as string)).text,
      );
    });

    if (mentalStateSymptomsValue != -1) {
      symptomsArray.push(
        symptomsAsthmaMentalStateData.find(
          el => el.id == mentalStateSymptomsValue.toString(),
        ).text,
      );
    }
    if (sittingSymptomsValue != -1) {
      symptomsArray.push(
        symptomsAsthmaSittingData.find(
          el => el.id == sittingSymptomsValue.toString(),
        ).text,
      );
    }
    if (respiratorySymptomsValue != -1) {
      switch (ageValue) {
        case '0':
          symptomsArray.push(
            symptomsAsthma6aboveRespiratoryData.find(
              el => el.id == respiratorySymptomsValue.toString(),
            ).text,
          );
          break;
        case '1':
        case '2':
          symptomsArray.push(
            symptomsAsthma4_5_3belowRespiratoryData.find(
              el => el.id == respiratorySymptomsValue.toString(),
            ).text,
          );
          break;
      }
    }
    if (pulseSymptomsValue != -1) {
      switch (ageValue) {
        case '0':
          symptomsArray.push(
            symptomsAsthma6abovePulseData.find(
              el => el.id == [pulseSymptomsValue].toString(),
            ).text,
          );
          break;
        case '1':
          symptomsArray.push(
            symptomsAsthma4_5PulseData.find(
              el => el.id == [pulseSymptomsValue].toString(),
            ).text,
          );
          break;
        case '2':
          symptomsArray.push(
            symptomsAsthma3belowPulseData.find(
              el => el.id == [pulseSymptomsValue].toString(),
            ).text,
          );
          break;
      }
    }
    if (oxygenSymptomsValue != -1) {
      switch (ageValue) {
        case '0':
          symptomsArray.push(
            symptomsAsthma6aboveOxygenData.find(
              el => el.id == [oxygenSymptomsValue].toString(),
            ).text,
          );
          break;
        case '1':
        case '2':
          symptomsArray.push(
            symptomsAsthma4_5_3belowOxygenData.find(
              el => el.id == [oxygenSymptomsValue].toString(),
            ).text,
          );
          break;
      }
    }
    return symptomsArray;
  };

  const showSymptoms = () => {
    if (!ageValue.includes('-1')) {
      return (
        <>
          <CheckboxGroup
            title="ToolsPage.General.Symptoms.SelectSymptoms"
            data={symptomsAsthmaMainData}
            onPress={(selectedItem: ICheckboxButton) => {
              let newSelectedSymptomsArray: string[] = [];
              if (mainSelectedSymptoms.includes(selectedItem.id)) {
                newSelectedSymptomsArray = removeSelectedSymptom(
                  mainSelectedSymptoms,
                  selectedItem.id as string,
                );
              } else {
                newSelectedSymptomsArray = addSelectedSymptom(
                  mainSelectedSymptoms,
                  selectedItem.id as string,
                );
              }
              setMainSelectedSymptoms(newSelectedSymptomsArray);
              asthmaClassify();
            }}
          />

          {ageValue == '0' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.MentalState.Title"
              data={symptomsAsthmaMentalStateData}
              onChange={(selectedItem: ICheckboxButton) => {
                setMentalStateSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : null}

          {ageValue == '1' || ageValue == '2' ? (
            <CheckboxGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.GeneralCondition.Title"
              data={symptomsAsthmaGeneralData}
              onPress={(selectedItem: ICheckboxButton) => {
                let newSelectedSymptomsArray: string[] = [];
                if (generalSelectedSymptoms.includes(selectedItem.id)) {
                  newSelectedSymptomsArray = removeSelectedSymptom(
                    generalSelectedSymptoms,
                    selectedItem.id as string,
                  );
                } else {
                  newSelectedSymptomsArray = addSelectedSymptom(
                    generalSelectedSymptoms,
                    selectedItem.id as string,
                  );
                }
                setGeneralSelectedSymptoms(newSelectedSymptomsArray);
              }}
            />
          ) : null}

          {ageValue == '0' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.SittingAndSpeaking.Title"
              data={symptomsAsthmaSittingData}
              onChange={(selectedItem: ICheckboxButton) => {
                setSittingSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : null}

          {ageValue == '0' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.Title"
              data={symptomsAsthma6aboveRespiratoryData}
              onChange={(selectedItem: ICheckboxButton) => {
                setRespiratorySymptomsValue(selectedItem.id as number);
              }}
            />
          ) : ageValue == '1' || ageValue == '2' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.Title"
              data={symptomsAsthma4_5_3belowRespiratoryData}
              onChange={(selectedItem: ICheckboxButton) => {
                setRespiratorySymptomsValue(selectedItem.id as number);
              }}
            />
          ) : null}

          {ageValue == '0' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Title"
              data={symptomsAsthma6abovePulseData}
              onChange={(selectedItem: ICheckboxButton) => {
                setPulseSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : ageValue == '1' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Title"
              data={symptomsAsthma4_5PulseData}
              onChange={(selectedItem: ICheckboxButton) => {
                setPulseSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : ageValue == '2' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Title"
              data={symptomsAsthma3belowPulseData}
              onChange={(selectedItem: ICheckboxButton) => {
                setPulseSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : null}

          {ageValue == '0' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.Title"
              data={symptomsAsthma6aboveOxygenData}
              onChange={(selectedItem: ICheckboxButton) => {
                setOxygenSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : ageValue == '1' || ageValue == '2' ? (
            <RatioButtonsGroup
              title="AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.Title"
              data={symptomsAsthma4_5_3belowOxygenData}
              onChange={(selectedItem: ICheckboxButton) => {
                setOxygenSymptomsValue(selectedItem.id as number);
              }}
            />
          ) : null}
        </>
      );
    }
  };
  return (
    <ToolScreenLayout
      result={t`AsthmaPage.SeverityOfAsthmaPage.MainTitle`}
      form={
        <>
          <RatioButtonsGroup
            title="ToolsPage.General.Age.SelectAge"
            data={severityOfAsthmaAgeData}
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
              asthmaClassify();
              navigate(ToolsRoutes.ToolsResultScreen, {
                age: severityOfAsthmaAgeData[Number(ageValue)].text,
                symptoms: getSymptomsArray(),
                result: asthmaResult,
                treatment: asthmaResultTreatment,
                title: t`ToolsPage.Menu.Asthma`,
              } as ToolsResultScreenParams);
            } else {
              Alert.alert(t`Alert.SelectAge`, '', [
                { text: t`Alert.Okbutton`, onPress: () => {} },
              ]);
            }
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`AsthmaPage.SeverityOfAsthmaPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default SeverityOfAsthmaScreen;
