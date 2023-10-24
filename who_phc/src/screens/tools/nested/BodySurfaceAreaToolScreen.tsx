import { Alert, Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { t } from 'i18next';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';
import InputWithLabel from '../../../components/UI/InputWithLabel';
import { roundNumber } from '../../../utility/numbers';
import useMainContext from '../../../context/useMainContext';

const BodySurfaceAreaToolScreen = () => {
  const [weight, onChangeWeight] = React.useState('');
  const [height, onChangeHeight] = React.useState('');
  const [BodySurfaceAreaResult, setBodySurfaceAreaResult] = React.useState(0.0);

  const { fontSize } = useMainContext();

  const calculateBodySurfaceArea = () => {
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if(weightValue<=0 || weight == ''){
      Alert.alert(
        t`Alert.Title`,
        t`Alert.BodySurfaceArea.PositiveWeight`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
    }
    if(heightValue<=0 || height == ''){
      Alert.alert(
        t`Alert.Title`,
        t`Alert.BodySurfaceArea.PositiveHeight`,
        [{ text: t`Alert.Okbutton`, onPress: () => {} }],
      );
    }

    const result = roundNumber(Math.sqrt((heightValue * weightValue) / 3600));
    setBodySurfaceAreaResult(result);
  };

  return (
    <ToolScreenLayout
      result={
        BodySurfaceAreaResult
          ? `${BodySurfaceAreaResult} m\u00B2`
          : t`BMIToolPage.ResultPlaceholder`
      }
      form={
        <>
          <InputWithLabel
            value={weight}
            onChange={onChangeWeight}
            label={t`BodySurfaceAreaToolPage.Fields.Weight.Label`}
            placeholder={t`BodySurfaceAreaToolPage.Fields.Weight.Placeholder`}
          />
          <InputWithLabel
            value={height}
            onChange={onChangeHeight}
            label={t`BodySurfaceAreaToolPage.Fields.Height.Label`}
            placeholder={t`BodySurfaceAreaToolPage.Fields.Height.Placeholder`}
          />
        </>
      }
      button={
        <TouchableOpacity
          style={generalStyles.toolGetResultButton}
          onPress={calculateBodySurfaceArea}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: fontSize },
            ]}>{t`BodySurfaceAreaToolPage.Fields.ButtonCalculateBodySurfaceArea`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default BodySurfaceAreaToolScreen;
