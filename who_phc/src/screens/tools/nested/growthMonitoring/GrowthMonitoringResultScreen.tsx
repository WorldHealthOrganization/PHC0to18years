import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import GrowthMonitoringResultItem from '../../../../components/UI/tools/GrowthMonitoringResultItem';
import {
  GrowthMonitoringResultScreenParams,
  FormulaParams,
  LMSParams,
} from '../../../../domains/types/GrowthMonitoringResultScreenParams';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import GrowthMonitoringToolType from '../../../../domains/enums/GrowthMonitoringToolType';

import wfl_boys_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/wfl_boys_0_to_2_years_zscores.json';
import wfh_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfh_boys_2_to_5_years_zscores.json';
import wfl_girls_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/wfl_girls_0_to_2_years_zscores.json';
import wfh_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfh_girls_2_to_5_years_zscores.json';

import lhfa_boys_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_boys_0_to_2_years_zscores.json';
import lhfa_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_boys_2_to_5_years_zscores.json';
import lhfa_girls_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_girls_0_to_2_years_zscores.json';
import lhfa_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_girls_2_to_5_years_zscores.json';

import wfa_boys_0_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfa_boys_0_to_5_years_zscores.json';
import wfa_girls_0_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfa_girls_0_to_5_years_zscores.json';

import bmi_boys_0_to_2_years_zcores from '../../../../../assets/tools/growthmonitoring/bmi_boys_0_to_2_years_zcores.json';
import bmi_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/bmi_boys_2_to_5_years_zscores.json';
import bmi_girls_0_to_2_years_zcores from '../../../../../assets/tools/growthmonitoring/bmi_girls_0_to_2_years_zscores.json';
import bmi_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/bmi_girls_2_to_5_years_zscores.json';

import hcfa_boys_0_5_zscores from '../../../../../assets/tools/growthmonitoring/hcfa_boys_0_5_zscores.json';
import hcfa_girls_0_5_zscores from '../../../../../assets/tools/growthmonitoring/hcfa_girls_0_5_zscores.json';
import { t } from 'i18next';

const GrowthMonitoringResultScreen = ({ route }: NativeStackHeaderProps) => {
  const { params } = route;

  const weight = (params as GrowthMonitoringResultScreenParams).weight;
  const age = (params as GrowthMonitoringResultScreenParams).age;
  const sex = (params as GrowthMonitoringResultScreenParams).sex;
  const height = (params as GrowthMonitoringResultScreenParams).height;
  const headCircumference = (params as GrowthMonitoringResultScreenParams)
    .headCircumference;

  const getL = ({ toolType, value }: LMSParams) => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForAge:
        return sex == '0'
          ? wfa_boys_0_to_5_years_zscores.data.find(item => item.Month == value)
              .L
          : wfa_girls_0_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).L;
      case GrowthMonitoringToolType.HeightForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? lhfa_boys_0_to_2_years_zscores.data.find(
                item => item.Month == value,
              ).L
            : lhfa_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).L
          : Number(age) <= 24
          ? lhfa_girls_0_to_2_years_zscores.data.find(
              item => item.Month == value,
            ).L
          : lhfa_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).L;
      case GrowthMonitoringToolType.WeightForLength:
        return sex == '0'
          ? Number(age) <= 24
            ? wfl_boys_0_to_2_years_zscores.data.find(
                item => item.Length == value,
              ).L
            : wfh_boys_2_to_5_years_zscores.data.find(
                item => item.Height == value,
              ).L
          : Number(age) <= 24
          ? wfl_girls_0_to_2_years_zscores.data.find(
              item => item.Length == value,
            ).L
          : wfh_girls_2_to_5_years_zscores.data.find(
              item => item.Height == value,
            ).L;
      case GrowthMonitoringToolType.BMIForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? bmi_boys_0_to_2_years_zcores.data.find(
                item => item.Month == value,
              ).L
            : bmi_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).L
          : Number(age) <= 24
          ? bmi_girls_0_to_2_years_zcores.data.find(item => item.Month == value)
              .L
          : bmi_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).L;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return sex == '0'
          ? hcfa_boys_0_5_zscores.data.find(item => item.Month == value).L
          : hcfa_girls_0_5_zscores.data.find(item => item.Month == value).L;
    }
  };
  const getM = ({ toolType, value }: LMSParams) => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForAge:
        return sex == '0'
          ? wfa_boys_0_to_5_years_zscores.data.find(item => item.Month == value)
              .M
          : wfa_girls_0_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).M;
      case GrowthMonitoringToolType.HeightForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? lhfa_boys_0_to_2_years_zscores.data.find(
                item => item.Month == value,
              ).M
            : lhfa_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).M
          : Number(age) <= 24
          ? lhfa_girls_0_to_2_years_zscores.data.find(
              item => item.Month == value,
            ).M
          : lhfa_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).M;
      case GrowthMonitoringToolType.WeightForLength:
        return sex == '0'
          ? Number(age) <= 24
            ? wfl_boys_0_to_2_years_zscores.data.find(
                item => item.Length == value,
              ).M
            : wfh_boys_2_to_5_years_zscores.data.find(
                item => item.Height == value,
              ).M
          : Number(age) <= 24
          ? wfl_girls_0_to_2_years_zscores.data.find(
              item => item.Length == value,
            ).M
          : wfh_girls_2_to_5_years_zscores.data.find(
              item => item.Height == value,
            ).M;
      case GrowthMonitoringToolType.BMIForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? bmi_boys_0_to_2_years_zcores.data.find(
                item => item.Month == value,
              ).M
            : bmi_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).M
          : Number(age) <= 24
          ? bmi_girls_0_to_2_years_zcores.data.find(item => item.Month == value)
              .M
          : bmi_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).M;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return sex == '0'
          ? hcfa_boys_0_5_zscores.data.find(item => item.Month == value).M
          : hcfa_girls_0_5_zscores.data.find(item => item.Month == value).M;
    }
  };
  const getS = ({ toolType, value }: LMSParams) => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForAge:
        return sex == '0'
          ? wfa_boys_0_to_5_years_zscores.data.find(item => item.Month == value)
              .S
          : wfa_girls_0_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).S;
      case GrowthMonitoringToolType.HeightForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? lhfa_boys_0_to_2_years_zscores.data.find(
                item => item.Month == value,
              ).S
            : lhfa_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).S
          : Number(age) <= 24
          ? lhfa_girls_0_to_2_years_zscores.data.find(
              item => item.Month == value,
            ).S
          : lhfa_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).S;
      case GrowthMonitoringToolType.WeightForLength:
        return sex == '0'
          ? Number(age) <= 24
            ? wfl_boys_0_to_2_years_zscores.data.find(
                item => item.Length == value,
              ).S
            : wfh_boys_2_to_5_years_zscores.data.find(
                item => item.Height == value,
              ).S
          : Number(age) <= 24
          ? wfl_girls_0_to_2_years_zscores.data.find(
              item => item.Length == value,
            ).S
          : wfh_girls_2_to_5_years_zscores.data.find(
              item => item.Height == value,
            ).S;
      case GrowthMonitoringToolType.BMIForAge:
        return sex == '0'
          ? Number(age) <= 24
            ? bmi_boys_0_to_2_years_zcores.data.find(
                item => item.Month == value,
              ).S
            : bmi_boys_2_to_5_years_zscores.data.find(
                item => item.Month == value,
              ).S
          : Number(age) <= 24
          ? bmi_girls_0_to_2_years_zcores.data.find(item => item.Month == value)
              .S
          : bmi_girls_2_to_5_years_zscores.data.find(
              item => item.Month == value,
            ).S;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return sex == '0'
          ? hcfa_boys_0_5_zscores.data.find(item => item.Month == value).S
          : hcfa_girls_0_5_zscores.data.find(item => item.Month == value).S;
    }
  };

  const getWeightForAgeValue = () => {
    const L = getL({
      toolType: GrowthMonitoringToolType.WeightForAge,
      value: age,
    });
    const M = getM({
      toolType: GrowthMonitoringToolType.WeightForAge,
      value: age,
    });
    const S = getS({
      toolType: GrowthMonitoringToolType.WeightForAge,
      value: age,
    });

    return calculateFromFormula({
      L: L,
      M: M,
      S: S,
      value1: weight,
      value2: age,
    });
  };
  const getHeightForAgeValue = () => {
    const L = getL({
      toolType: GrowthMonitoringToolType.HeightForAge,
      value: age,
    });
    const M = getM({
      toolType: GrowthMonitoringToolType.HeightForAge,
      value: age,
    });
    const S = getS({
      toolType: GrowthMonitoringToolType.HeightForAge,
      value: age,
    });

    return calculateFromFormula({
      L: L,
      M: M,
      S: S,
      value1: height,
      value2: age,
    });
  };
  const getWeightForLengthValue = () => {
    const L = getL({
      toolType: GrowthMonitoringToolType.WeightForLength,
      value: height,
    });
    const M = getM({
      toolType: GrowthMonitoringToolType.WeightForLength,
      value: height,
    });
    const S = getS({
      toolType: GrowthMonitoringToolType.WeightForLength,
      value: height,
    });

    return calculateFromFormula({
      L: L,
      M: M,
      S: S,
      value1: weight,
      value2: height,
    });
  };
  const getBMIorAgeValue = () => {
    const L = getL({
      toolType: GrowthMonitoringToolType.BMIForAge,
      value: age,
    });
    const M = getM({
      toolType: GrowthMonitoringToolType.BMIForAge,
      value: age,
    });
    const S = getS({
      toolType: GrowthMonitoringToolType.BMIForAge,
      value: age,
    });
    const bmi = Number(weight) / Math.pow(Number(height) / 100, 2);
    return calculateFromFormula({
      L: L,
      M: M,
      S: S,
      value1: bmi.toString(),
      value2: age,
    });
  };
  const getHeadCircumferenceForAgeValue = () => {
    const L = getL({
      toolType: GrowthMonitoringToolType.HeadCircumferenceForAge,
      value: age,
    });
    const M = getM({
      toolType: GrowthMonitoringToolType.HeadCircumferenceForAge,
      value: age,
    });
    const S = getS({
      toolType: GrowthMonitoringToolType.HeadCircumferenceForAge,
      value: age,
    });

    return calculateFromFormula({
      L: L,
      M: M,
      S: S,
      value1: headCircumference,
      value2: age,
    });
  };

  const getNutritionalStatus = (
    zscore: string,
    type: GrowthMonitoringToolType,
  ) => {
    const numZscore = Number(zscore);
    switch (type) {
      case GrowthMonitoringToolType.WeightForLength: {
        if (numZscore > 3) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Obesity`;
        }
        if (numZscore > 2 && numZscore <= 3) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Overweight`;
        }
        if (numZscore >= -2 && numZscore <= 2) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Normal`;
        }
        if (numZscore < -2 && numZscore >= -3) {
          return t`GrowthMonitoringToolPage.Result.WeightForLength.NutritionalStatus.ModerateAcutemalnutrition`;
        }
        if (numZscore < -3) {
          return t`GrowthMonitoringToolPage.Result.WeightForLength.NutritionalStatus.SevereAcuteMalnutrition`;
        }
      }
      case GrowthMonitoringToolType.HeightForAge: {
        if (numZscore > 3) {
          return '-';
        }
        if (numZscore > 2 && numZscore <= 3) {
          return '-';
        }
        if (numZscore >= -2 && numZscore <= 2) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Normal`;
        }
        if (numZscore < -2 && numZscore >= -3) {
          return t`GrowthMonitoringToolPage.Result.HeightForAge.NutritionalStatus.ModerateStunting`;
        }
        if (numZscore < -3) {
          return t`GrowthMonitoringToolPage.Result.HeightForAge.NutritionalStatus.SevereStunting`;
        }
      }
      case GrowthMonitoringToolType.WeightForAge: {
        if (numZscore > 3) {
          return '-';
        }
        if (numZscore > 2 && numZscore <= 3) {
          return '-';
        }
        if (numZscore >= -2 && numZscore <= 2) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Normal`;
        }
        if ((numZscore < -2 && numZscore >= -3) || numZscore < -3) {
          return t`GrowthMonitoringToolPage.Result.WeightForAge.NutritionalStatus.Underweight`;
        }
      }
      case GrowthMonitoringToolType.BMIForAge: {
        if (numZscore > 3) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Obesity`;
        }
        if (numZscore > 2 && numZscore <= 3) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Obesity`;
        }
        if (numZscore > 1 && numZscore <= 2) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Overweight`;
        }
        if (numZscore >= -2 && numZscore <= 1) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Normal`;
        }
        if (numZscore < -2 && numZscore >= -3) {
          return t`GrowthMonitoringToolPage.Result.BMIForAge.NutritionalStatus.Thinness`;
        }
        if (numZscore < -3) {
          return t`GrowthMonitoringToolPage.Result.BMIForAge.NutritionalStatus.SevereThinness`;
        }
      }
      case GrowthMonitoringToolType.HeadCircumferenceForAge: {
        if (numZscore > 3) {
          return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.NutritionalStatus.Macrocephaly`;
        }
        if (numZscore > 2 && numZscore <= 3) {
          return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.NutritionalStatus.Macrocephaly`;
        }
        if (numZscore >= -2 && numZscore <= 2) {
          return t`GrowthMonitoringToolPage.Result.NutritionalStatus.Normal`;
        }
        if (numZscore < -2 && numZscore >= -3) {
          return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.NutritionalStatus.Microcephaly`;
        }
        if (numZscore < -3) {
          return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.NutritionalStatus.Microcephaly`;
        }
      }
    }
  };

  const calculateFromFormula = ({ L, M, S, value1, value2 }: FormulaParams) => {
    const val1 = Number(value1) / Number(M);
    const val2 = Math.pow(val1, Number(L));
    const val3 = val2 - 1;
    const val4 = Number(L) * Number(S);
    const zscore = val3 / val4;
    return zscore.toFixed(3);
  };

  return (
    <ScrollView>
    <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
    {height==''?null:
      <GrowthMonitoringResultItem
        title="GrowthMonitoringToolPage.Result.WeightForLength.Title"
        zscore={getWeightForLengthValue()}
        percentile="0"
        toolType={GrowthMonitoringToolType.WeightForLength}
        sex={sex}
        age={age}
        leftParameter={weight}
        bottomParameter={height}
        nutritionalStatus={getNutritionalStatus(
          getWeightForLengthValue(),
          GrowthMonitoringToolType.WeightForLength,
        )}
      />}

{height==''?null:
      <GrowthMonitoringResultItem
        title="GrowthMonitoringToolPage.Result.HeightForAge.Title"
        zscore={getHeightForAgeValue()}
        percentile="0"
        toolType={GrowthMonitoringToolType.HeightForAge}
        sex={sex}
        age={age}
        leftParameter={height}
        bottomParameter={age}
        nutritionalStatus={getNutritionalStatus(
          getHeightForAgeValue(),
          GrowthMonitoringToolType.HeightForAge,
        )}
      />
        }

      <GrowthMonitoringResultItem
        title="GrowthMonitoringToolPage.Result.WeightForAge.Title"
        zscore={getWeightForAgeValue()}
        percentile="0"
        toolType={GrowthMonitoringToolType.WeightForAge}
        sex={sex}
        age={age}
        leftParameter={weight}
        bottomParameter={age}
        nutritionalStatus={getNutritionalStatus(
          getWeightForAgeValue(),
          GrowthMonitoringToolType.WeightForAge,
        )}
      />
      {height==''?null:
      <GrowthMonitoringResultItem
        title="GrowthMonitoringToolPage.Result.BMIForAge.Title"
        zscore={getBMIorAgeValue()}
        percentile="0"
        toolType={GrowthMonitoringToolType.BMIForAge}
        sex={sex}
        age={age}
        leftParameter={(Number(weight) / Math.pow(Number(height) / 100, 2)).toString()} //TODO
        bottomParameter={age}
        nutritionalStatus={getNutritionalStatus(
          getBMIorAgeValue(),
          GrowthMonitoringToolType.BMIForAge,
        )}
      />
        }
      {(headCircumference!="")? <GrowthMonitoringResultItem
        title="GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.Title"
        zscore={getHeadCircumferenceForAgeValue()}
        percentile="0"
        toolType={GrowthMonitoringToolType.HeadCircumferenceForAge}
        sex={sex}
        age={age}
        leftParameter={headCircumference}
        bottomParameter={age}
        nutritionalStatus={getNutritionalStatus(
          getHeadCircumferenceForAgeValue(),
          GrowthMonitoringToolType.HeadCircumferenceForAge,
        )}
      />: null}
     
    </View>
    </ScrollView>
  );
};

export default GrowthMonitoringResultScreen;
