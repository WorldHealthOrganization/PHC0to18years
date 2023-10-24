import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import React from 'react';

import table137 from '../../../../../assets/tools/drugCalculator/137.json';
import table138 from '../../../../../assets/tools/drugCalculator/138.json';
import table146 from '../../../../../assets/tools/drugCalculator/146.json';
import table147 from '../../../../../assets/tools/drugCalculator/147.json';
import table149 from '../../../../../assets/tools/drugCalculator/149.json';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import Octicons from 'react-native-vector-icons/Octicons';

import { DrugCalculatorResultParams } from '../../../../domains/types/DrugDosageParams';
import { t } from 'i18next';
import useMainContext from '../../../../context/useMainContext';
import generalStyles, {
  ACCENT_COLORS,
  COLORS,
} from '../../../../styles/generalStyles.styles';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';
import { useNavigation } from '@react-navigation/native';
import useAppNavigation from '../../../../hooks/useAppNavigation';
import AnchorType from '../../../../domains/enums/AnchorType';
import { notationsResultData } from '../../../../data/tools/nested/drugCalculatorTool';
import { ToolsRoutes } from '../../../../routing/routing';
import { MenuNavigationProp } from '../../../../domains/types/Routing';

const DrugCalculatorResultScreen = ({ route }: NativeStackHeaderProps) => {
  const { params } = route;

  const weight = (params as DrugCalculatorResultParams).weight;
  const years = (params as DrugCalculatorResultParams).years;
  const months = (params as DrugCalculatorResultParams).months;
  const drugName = (params as DrugCalculatorResultParams).drugName;
  const tableCode = (params as DrugCalculatorResultParams).tableCode;

  const { fontSize } = useMainContext();
  const { goBack } = useNavigation();
  const { pushToChapterAnchor } = useAppNavigation();
  const { navigate } = useNavigation<MenuNavigationProp>();

  const getDrugAllInfo = () => {
    let drugInfo: any = null;
    switch (tableCode) {
      case 137:
        drugInfo = table137.find(el => el.Name.includes(drugName));
        break;
      case 138:
        drugInfo = table138.find(el => el.Name.includes(drugName));
        break;
      case 146:
        drugInfo = table146.find(el => el.Name.includes(drugName));
        break;
      case 147:
        drugInfo = table147.find(el => el.Name.includes(drugName));
        break;
      case 149:
        drugInfo = table149.find(el => el.Name.includes(drugName));
        break;
    }
    let valuesNum = 0;
    switch (tableCode) {
      case 137:
        {
          valuesNum =
            weight >= 3 && weight < 6
              ? 0
              : weight >= 6 && weight < 10
              ? 1
              : weight >= 10 && weight < 15
              ? 2
              : weight >= 15 && weight < 20
              ? 3
              : weight >= 20 && weight < 30
              ? 4
              : weight >= 30 && weight < 40
              ? 5
              : weight >= 40 && weight < 50
              ? 6
              : weight >= 50
              ? 7
              : -1;
        }
        break;
      case 138:
        {
          valuesNum =
            weight >= 2 && weight < 2.5
              ? 0
              : weight >= 2.5 && weight < 3
              ? 1
              : weight >= 3 && weight < 3.5
              ? 2
              : weight >= 3.5 && weight < 4
              ? 3
              : weight >= 4 && weight <= 4.5
              ? 4
              : -1;
        }
        break;
      case 146:
        {
          valuesNum =
            weight >= 2 && weight < 3
              ? 0
              : weight >= 3 && weight < 4
              ? 1
              : weight >= 4 && weight <= 5
              ? 2
              : -1;
        }
        break;
      case 147:
        {
          valuesNum =
            weight >= 3 && weight < 6
              ? 0
              : weight >= 6 && weight < 10
              ? 1
              : weight >= 10 && weight < 14
              ? 2
              : weight >= 14 && weight < 20
              ? 3
              : weight >= 20 && weight < 25
              ? 4
              : weight >= 25 && weight < 35
              ? 5
              : weight >= 35
              ? 6
              : -1;
        }
        break;
    }
    if (valuesNum == -1) {
      return (
        <Text style={{ color: COLORS.darkGrey, fontSize: fontSize }}>
          {drugName} {t`DrugCalculatorToolPage.Result.Error.NotAppropriateAge`}
        </Text>
      );
    } else {
      if (tableCode == 149) {
        return (
          <View>
            <Text style={[styles.text, { fontSize: fontSize }]}>
              <Text style={{ fontWeight: '600' }}>
                {t`DrugCalculatorToolPage.Result.Route`}:
              </Text>{' '}
              {t(drugInfo.Route)}
            </Text>
            <Text style={[styles.text, { fontSize: fontSize }]}>
              <Text style={{ fontWeight: '600' }}>
                {t`DrugCalculatorToolPage.Result.ModeOfAction`}:
              </Text>{' '}
              {t(drugInfo.ModeOfAction)}
            </Text>
            <Text style={[styles.text, { fontSize: fontSize }]}>
              <Text style={{ fontWeight: '600' }}>
                {t`DrugCalculatorToolPage.Result.DailyDose`}:
              </Text>{' '}
              {t(drugInfo.DailyDose)}
            </Text>
            <Text style={[styles.text, { fontSize: fontSize }]}>
              <Text style={{ fontWeight: '600' }}>
                {t`DrugCalculatorToolPage.Result.MaximumDose`}:
              </Text>{' '}
              {t(drugInfo.MaximumDose)}
            </Text>
            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                width: '100%',
                marginTop: 5,
              }}></View>
            <Text style={[styles.text, { fontSize: fontSize }]}>
              {t`DrugCalculatorToolPage.Result.149Note`}
            </Text>
            {drawNote(drugInfo)}
          </View>
        );
      } else {
        return (
          <View style={{backgroundColor: (drugInfo.BackColor!=null?(drugInfo.BackColor=='pink'? ACCENT_COLORS.drugDosagesLight: "lightblue"):'transparent')}}>
{drawNote(drugInfo)}

{drugInfo.BottomNotes != null ? drawBottomInfo() : null}

            {drugInfo.DefaultDisease != null ? (
              <View style={styles.defaultDiseaseContainer}>
                {drugInfo.DefaultDisease.Dosages.map(
                  (defaultDisease_Dosage: any) => {
                    return (
                      <View key={defaultDisease_Dosage.Name + Math.random()} >
                            {drawLink(drawLink(defaultDisease_Dosage))}
                        {getDiseaseInfo(defaultDisease_Dosage, valuesNum, true)}
                        <Text style={[styles.text, { fontSize: fontSize }]}>
                        {defaultDisease_Dosage.Name!=""? <Text>
                        {t`DrugCalculatorToolPage.Result.Dosage`}:{' '}
                          {defaultDisease_Dosage.Name}
                          </Text>: null}
                          </Text>
                      </View>
                    );
                  },
                )}
              </View>
            ) : null}

            {drugInfo.Diseases.length > 0 ? (
              <View>
                {drugInfo.Diseases.map((disease: any) => {
                  return (
                    <View
                      key={disease.Name + Math.random()}
                      style={[styles.dosageContainer, { marginTop: 15 }]}>
                      <Text
                        style={[
                          styles.description,
                          { fontSize: fontSize, fontWeight: '600' },
                        ]}>
                        {t`DrugCalculatorToolPage.Result.For`} {disease.Name}
                      </Text>
                      {disease.Dosages.map((disease_dosage: any) => {
                        return (
                          <View key={disease_dosage.Name + Math.random()} style={{backgroundColor: (disease_dosage.BackColor!=null?(disease_dosage.BackColor=='pink'? ACCENT_COLORS.drugDosagesLight: "lightblue"):'transparent')}}>
                            {getDiseaseInfo(disease_dosage, valuesNum, false)}
                            <Text style={[styles.text, { fontSize: fontSize }]}>
                              {disease_dosage.Name!=""? <Text>
                              {t`DrugCalculatorToolPage.Result.Dosage`}:{' '}
                              {disease_dosage.Name}
                              </Text>:null}
                             
                            </Text>
                            
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            ) : null}
          </View>
        );
      }
    }
  };

  const drawNote = (drugInfo: any) => {
    return (
      <View>
        {drugInfo.Note != null ? (
          <View>
            <Text
              style={{ fontSize: fontSize, paddingTop: 5, fontWeight: '400', color: COLORS.black }}>
              <Text style={{ fontWeight: '600' }}>
                {t`DrugCalculatorToolPage.Result.Note`}:{' '}
              </Text>
              {drugInfo.Note.Text}
              {drugInfo.Note.Link != null ? drawLink(drugInfo.Note.Link) : null}
             
              {drugInfo.Note2 != null ? (
                <Text
                  style={{
                    fontSize: fontSize,
                    fontWeight: '400',
                  }}>
                  {drugInfo.Note2.Text}
                  {drugInfo.Note2.Link != null
                    ? drawLink(drugInfo.Note2.Link)
                    : null}
                </Text>
              ) : null}
            </Text>
          </View>
        ) : null}
      </View>
    );
  };

  const drawBottomInfo = () => {
    return (
      <View>
        {notationsResultData.map(el => {
          return (
            <Text
              key={el.text}
              style={{
                fontSize: fontSize,
                color: COLORS.darkGrey,
                fontStyle: 'italic',
              }}>
              {t(el.text)}
            </Text>
          );
        })}
         <View
          style={{
            backgroundColor: COLORS.grey,
            height: 1,
            width: '100%',
            marginTop: 5,
          }}></View>
      </View>
    );
  };

  const drawLink = (link: any) => {
    return (
      <View>
        {link != null ? (
          <TouchableOpacity
            style={{
              height: fontSize * 1.1,
              justifyContent: 'center',
              marginBottom: (Platform.OS == 'ios')? -5: 0,
            }}
            onPress={() => {
              const linkNameArray = link.Path.split('/');
              let anchorType;
              if (linkNameArray[0] == 'drug') {
                navigate(ToolsRoutes.DrugCalculatorResultScreen, {
                  weight: Number(weight),
                  years: Number(years),
                  months: Number(months),
                  tableCode: 137,
                  drugName: linkNameArray[1],
                } as DrugCalculatorResultParams);
              } else {
                switch (linkNameArray[0]) {
                  case 'tables':
                    anchorType = AnchorType.Tables;
                    break;
                  case 'tools':
                    anchorType = AnchorType.Tools;
                    break;
                  case 'info':
                    anchorType = AnchorType.Info;
                    break;
                  case 'boxes':
                    anchorType = AnchorType.Boxes;
                    break;
                  case 'charts':
                    anchorType = AnchorType.Charts;
                    break;
                }
                pushToChapterAnchor({
                  id: Number(linkNameArray[1]),
                  anchor: linkNameArray[2],
                  anchorType: anchorType,
                  initial: true,
                });
              }
            }}>
            <Text
              style={[
                generalStyles.linkInsideText,
                { fontSize: fontSize * 0.95 },
              ]}>
              {' '}
              {t(link.Title)}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const getDiseaseInfo = (disease_dosage: any, valuesNum: number, isDefaultDisease: boolean) => {
    return (
      <View>
        {disease_dosage.Formulations[0].Name != '' ? (
          <View style={{ paddingBottom: 15 }}>
            {!isDefaultDisease? <View
                        style={{
                          width: '100%',
                          height: 1,
                          backgroundColor: COLORS.grey,
                          marginVertical: 5,
                        }}></View>: null}
             
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={[styles.description, { fontSize: fontSize }]}>
                  {t`DrugCalculatorToolPage.Result.Formulation`}:
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.description, { fontSize: fontSize }]}>
                  {t`DrugCalculatorToolPage.Result.DoseBodyWeight`}:
                </Text>
              </View>
            </View>

            {disease_dosage.Formulations.map(
              (disease_dosage_formulation: any) => {
                return (
                  <View
                    key={disease_dosage_formulation.Name + Math.random()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingVertical: 1,
                      backgroundColor: (disease_dosage_formulation.BackColor!=null?(disease_dosage_formulation.BackColor=='pink'? ACCENT_COLORS.drugDosagesLight: "lightblue"):'transparent')
                    }}>
                    <View style={{ flex: 2, paddingRight: 5 }}>
                      <Text style={[styles.text, { fontSize: fontSize }]}>
                        - {disease_dosage_formulation.Name}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.text, { fontSize: fontSize }]}>
                        {disease_dosage_formulation.Values[valuesNum]}
                        {(disease_dosage_formulation.Values[valuesNum] == null || 
                          disease_dosage_formulation.Values[valuesNum]=="-" || 
                          disease_dosage_formulation.Values[valuesNum]=="\u2013" || 
                          disease_dosage_formulation.Values[valuesNum]=="Off-label" ||
                          disease_dosage_formulation.Values[valuesNum]=="See dosage" )?null: <Text> ({disease_dosage.Dose})</Text>}
                      </Text>
                    </View>
                  </View>
                );
              },
            )}
          </View>
        ) : null}
      </View>
    );
  };

  const displayAgeBlock = () => {
    return (
      <View>
        {years == 0 && months == 0 ? null : (
          <Text style={[styles.text, { fontSize: fontSize }]}>
            {t`DrugCalculatorToolPage.Result.Patient.Age`}:
            {years == 0 ?null : (
              <Text style={[styles.text, { fontSize: fontSize }]}>
                {' '}
                {years}{' '}
                {years == 1
                  ? t`DrugCalculatorToolPage.Result.Patient.year`
                  : t`DrugCalculatorToolPage.Result.Patient.years`}
              </Text>
            )}
            {months == 0 ? null : (months>12)? <><Text style={[styles.text, { fontSize: fontSize }]}>
                {' '}
                {Math.floor(months/12)}{' '}
                {Math.floor(months/12) == 1
                  ? t`DrugCalculatorToolPage.Result.Patient.year`
                  : t`DrugCalculatorToolPage.Result.Patient.years`}
              </Text>
              <Text style={[styles.text, { fontSize: fontSize }]}>
                {' '}
                {months%12==0? null: 
                <Text>{months%12}{' '}
                {months%12 == 1
                  ? t`DrugCalculatorToolPage.Result.Patient.month`
                  : t`DrugCalculatorToolPage.Result.Patient.months`}</Text>}
              </Text>
              </>:(
              <Text style={[styles.text, { fontSize: fontSize }]}>
                {' '}
                {months}{' '}
                {months == 1
                  ? t`DrugCalculatorToolPage.Result.Patient.month`
                  : t`DrugCalculatorToolPage.Result.Patient.months`}
              </Text>
            )}
          </Text>
        )}
      </View>
    );
  };

  const patientDetailsBlock = () => {
    return (
      <View style={styles.patientContainer}>
        <Octicons
          name="feed-person"
          color={ACCENT_COLORS.other}
          size={fontSize * 3}
          style={{ padding: 5, marginRight: 10 }}
        />
        <View>
          <Text style={[styles.description, { fontSize: fontSize }]}>
            {t`DrugCalculatorToolPage.Result.Patient.Details`}:
          </Text>
          <View>
            {displayAgeBlock()}
            <Text style={[styles.text, { fontSize: fontSize }]}>
              {t`DrugCalculatorToolPage.Result.Patient.Weight`}: {weight}{' '}
              {t`DrugCalculatorToolPage.Result.Patient.kg`}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ToolScreenLayout
      result={drugName}
      accentColor={ACCENT_COLORS.other}
      form={
        <View>
          {getDrugAllInfo()}
          {patientDetailsBlock()}
        </View>
      }
      button={
        <TouchableOpacity
          style={[generalStyles.toolGetResultButton, {backgroundColor: ACCENT_COLORS.other}]}
          onPress={() => {
            goBack();
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`DrugCalculatorToolPage.RecalculateDosage`}</Text>
        </TouchableOpacity>
      }></ToolScreenLayout>
  );
};

const styles = StyleSheet.create({
  description: {
    color: COLORS.black,
    fontWeight: '500',
  },
  text: {
    color: COLORS.black,
  },
  containerWithPaddings: {
    paddingBottom: 5,
  },
  defaultDiseaseContainer: {
    borderWidth: 1,
    borderColor: ACCENT_COLORS.otherLight,
    backgroundColor: ACCENT_COLORS.otherBackground,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  dosageContainer: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bottomText: {
    color: COLORS.black,
  },
  patientContainer: {
    borderWidth: 1,
    borderColor: ACCENT_COLORS.procedures,
    backgroundColor: COLORS.drugDosageYellow,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});
export default DrugCalculatorResultScreen;