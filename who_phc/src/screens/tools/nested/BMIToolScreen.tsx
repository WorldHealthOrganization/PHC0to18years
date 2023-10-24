import { Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import { t } from 'i18next';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import InputWithLabel from '../../../components/UI/InputWithLabel';
import { roundNumber } from '../../../utility/numbers';
import useMainContext from '../../../context/useMainContext';

const BMIToolScreen = () => {
  const [weight, onChangeWeight] = React.useState('');
  const [height, onChangeHeight] = React.useState('');
  const [BMIresult, setBMIresult] = React.useState(0.0);

  const { fontSize } = useMainContext();

  const calculateBMI = () => {
    const weightValueInKg = Number(weight);
    const heightValueInM = Number(height) / 100;
    const BMIResult = roundNumber(
      weightValueInKg / Math.pow(heightValueInM, 2),
    );
    setBMIresult(BMIResult);
  };

  return (
    <ToolScreenLayout
      result={
        BMIresult
          ? t`BMIToolPage.ResultText` + BMIresult
          : t`BMIToolPage.ResultPlaceholder`
      }
      form={
        <>
          <InputWithLabel
            value={weight}
            onChange={onChangeWeight}
            label={t`BMIToolPage.Fields.Weight.Label`}
            placeholder={t`BMIToolPage.Fields.Weight.Placeholder`}
          />
          <InputWithLabel
            value={height}
            onChange={onChangeHeight}
            label={t`BMIToolPage.Fields.Height.Label`}
            placeholder={t`BMIToolPage.Fields.Height.Placeholder`}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={calculateBMI}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`BMIToolPage.Fields.ButtonCalculateBMI`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default BMIToolScreen;
