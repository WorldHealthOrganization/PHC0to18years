import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';

import generalStyles, {
  ACCENT_COLORS,
  COLORS,
} from '../../../../styles/generalStyles.styles';
import InputWithLabel from '../../../../components/UI/InputWithLabel';
import useMainContext from '../../../../context/useMainContext';
import { MenuNavigationProp } from '../../../../domains/types/Routing';
import { ToolsRoutes } from '../../../../routing/routing';
import { DrugCalculatorResultParams } from '../../../../domains/types/DrugDosageParams';

import table137 from '../../../../../assets/tools/drugCalculator/137.json';
import table138 from '../../../../../assets/tools/drugCalculator/138.json';
import table146 from '../../../../../assets/tools/drugCalculator/146.json';
import table147 from '../../../../../assets/tools/drugCalculator/147.json';
import table149 from '../../../../../assets/tools/drugCalculator/149.json';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';

type drugParam = {
  label: string;
  value: string;
  parent?: string;
  backColor?: string;
};

const DrugCalculatorToolScreen = () => {
  const [weight, setWeight] = React.useState('');
  const [months, setAgeMonths] = React.useState('');
  const [years, setAgeYears] = React.useState('');

  const { fontSize } = useMainContext();
  const { navigate } = useNavigation<MenuNavigationProp>();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([]);
  
  const getDrugNames = () => {
    let names137: drugParam[] = [];
    table137.map(el => {
      names137.push({
        label: el.Name,
        value: '137_' + el.Name,
        backColor: el.BackColor,
      });
    });

    const names138: drugParam[] = [];
    table138.map(el => {
      names138.push({
        label: el.Name,
        value: '138_' + el.Name,
        backColor: el.BackColor,
      });
    });

    const names146: drugParam[] = [];
    table146.map(el => {
      names146.push({ label: el.Name, value: '146_' + el.Name });
    });

    const names147: drugParam[] = [];
    table147.map(el => {
      names147.push({ label: el.Name, value: '147_' + el.Name });
    });

    const names149: drugParam[] = [];
    table149.map(el => {
      names149.push({ label: el.Name, value: '149_' + el.Name });
    });

    const arr = names137
      .concat(names138)
      .concat(names146)
      .concat(names147)
      .concat(names149);
    arr.sort((a: drugParam, b: drugParam) => {
      if (a.label === b.label) return 0;
      return a.label > b.label ? 1 : -1;
    });

    return arr;
  };

  const ageLimitation = () => {
    if (Number(years) > 150) {
      Alert.alert(t`Alert.Title`, t`DrugCalculatorToolPage.Alert.AgeYears150`, [
        { text: t`Alert.Okbutton`, onPress: () => {} },
      ]);
      return false;
    }

    if (isNaN(Number(years)) || Number(years) < 0) {
      Alert.alert(
        t`Alert.Title`,
        t`DrugCalculatorToolPage.Alert.AgeYearsLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (isNaN(Number(months)) || Number(months) < 0) {
      Alert.alert(
        t`Alert.Title`,
        t`DrugCalculatorToolPage.Alert.AgeMonthsLimits`,
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
      if (Number(months) > 11) {
        Alert.alert(
          t`Alert.Title`,
          t`DrugCalculatorToolPage.Alert.AgeCorrect`,
          [{ text: t`Alert.Okbutton`, onPress: () => {} }],
        );
        return false;
      }
      return true;
    } else {
      if (Number(years) == 0 && (Number(months) < 0 || Number(months) > 60)) {
        Alert.alert(
          t`Alert.Title`,
          t`DrugCalculatorToolPage.Alert.AgeCorrect`,
          [{ text: t`Alert.Okbutton`, onPress: () => {} }],
        );
        return false;
      }
      return true;
    }
  };

  const fieldsLimitation = () => {
    if(weight.includes(",")){
      Alert.alert(
        t`Alert.Title`,
        t`DrugCalculatorToolPage.Alert.WeightWithoutComa`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (
      weight == '' ||
      isNaN(Number(weight)) ||
      Number(weight) <= 0
    ) {
      Alert.alert(
        t`Alert.Title`,
        t`DrugCalculatorToolPage.Alert.WeightLimits`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
      return false;
    }

    if (!ageLimitation()) return false;

    if (value == null) {
      Alert.alert(t`Alert.Title`, t`DrugCalculatorToolPage.Alert.SelectDrug`, [
        { text: t`Alert.Okbutton`, onPress: () => {} },
      ]);
      return false;
    }
    return true;
  };
  return (
    <ToolScreenLayout
      result={t`DrugCalculatorToolPage.MainTitle`}
      accentColor={ACCENT_COLORS.other}
      form={
        <View>
          <InputWithLabel
            value={weight}
            onChange={setWeight}
            label={t`DrugCalculatorToolPage.Fields.Weight.Label`}
            placeholder={t`DrugCalculatorToolPage.Fields.Weight.Placeholder`}
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

          <Text
            style={{
              fontSize: fontSize,
              color: COLORS.darkGrey,
              paddingLeft: fontSize / 3,
              paddingBottom: 5,
            }}>
            {t`DrugCalculatorToolPage.Fields.Drug.SelectDrug`}
          </Text>
          <View style={{ zIndex: 100 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={getDrugNames()}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholderStyle={{ color: COLORS.darkGrey }}
              textStyle={{ color: COLORS.darkGrey, fontSize: fontSize }}
              placeholder={t`DrugCalculatorToolPage.Fields.Drug.SelectDrugPlaceholder`}
              searchable={true}
              searchPlaceholder={t`DrugCalculatorToolPage.Fields.Drug.SearchPlaceholder`}
              searchTextInputStyle={{
                borderColor: ACCENT_COLORS.otherLight,
                borderRadius: 5,
                color: COLORS.darkGrey,
              }}
              searchPlaceholderTextColor={COLORS.darkGrey}
              translation={{
                NOTHING_TO_SHOW: t`DrugCalculatorToolPage.Fields.Drug.SearchError`,
              }}
              style={{ borderColor: 'transparent' }}
              listMode="SCROLLVIEW"
              scrollViewProps={{
                nestedScrollEnabled: true,
              }}
              dropDownContainerStyle={{
                position: 'relative',
                top: 0,
                borderColor: 'transparent',
              }}
              listParentLabelStyle={{
                color: COLORS.black,
                backgroundColor: COLORS.grey,
                padding: 5,
              }}
              listParentContainerStyle={{ flexWrap: 'wrap' }}
              renderListItem={props => {
                if (props.value.length == 3) {
                  return (
                    <Text
                      numberOfLines={2}
                      style={[
                        props.listItemLabelStyle,
                        {
                          paddingHorizontal: 5,
                          paddingVertical: 5,
                          color: COLORS.graphite,
                          backgroundColor: ACCENT_COLORS.otherLight,
                          fontWeight: '600',
                        },
                      ]}>
                      {props.label}
                    </Text>
                  );
                } else {
                  if (props.value.includes('sub_')) {
                    return (
                      <Text
                        numberOfLines={2}
                        style={[
                          props.listItemLabelStyle,
                          {
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            color: COLORS.darkGrey,
                            backgroundColor: COLORS.lightGrey,
                            fontWeight: '500',
                          },
                        ]}>
                        {t(props.label)}
                      </Text>
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        {...props}
                        style={[
                          props.listItemContainerStyle,
                          {
                            backgroundColor: props.isSelected
                              ? COLORS.drugDosageYellow
                              : (props.item as drugParam).backColor != null
                              ? (props.item as drugParam).backColor == 'pink'
                                ? ACCENT_COLORS.drugDosagesLight
                                : COLORS.blueBackground
                              : 'transparent',
                            paddingLeft: 15,
                            height: fontSize * 2.5,
                          },
                        ]}
                        onPress={() => {
                          setValue(props.value);
                          setOpen(false);
                        }}>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={props.listItemLabelStyle}>
                          {props.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                }
              }}
            />
            <View style={{ paddingTop: 10 }}>
              <Text
                style={{
                  fontSize: fontSize,
                  backgroundColor: ACCENT_COLORS.drugDosagesLight,
                  color: COLORS.darkGrey,
                }}>{t`DrugCalculatorToolPage.Fields.Drug.PinkCellsTitle`}</Text>
              <Text
                style={{
                  fontSize: fontSize,
                  backgroundColor: ACCENT_COLORS.healthPromotionBackground,
                  color: COLORS.darkGrey,
                }}>{t`DrugCalculatorToolPage.Fields.Drug.BlueCellsTitle`}</Text>
            </View>
          </View>
        </View>
      }
      button={
        <TouchableOpacity
          style={[
            generalStyles.toolGetResultButton,
            { marginVertical: 15, backgroundColor: ACCENT_COLORS.other },
          ]}
          onPress={() => {
            if (fieldsLimitation()) {
              navigate(ToolsRoutes.DrugCalculatorResultScreen, {
                weight: Number(weight),
                years: Number(years),
                months: Number(months),
                tableCode: Number(value.substring(0, 3)),
                drugName: value.substring(4),
              } as DrugCalculatorResultParams);
            }
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`DrugCalculatorToolPage.ButtonTitle`}</Text>
        </TouchableOpacity>
      }></ToolScreenLayout>
  );
};

export default DrugCalculatorToolScreen;
