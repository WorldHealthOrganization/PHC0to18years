import { View, Text } from 'react-native';
import React from 'react';
import { t } from 'i18next';
import useMainContext from '../../../context/useMainContext';
import { COLORS } from '../../../styles/generalStyles.styles';

type AvpuItemProps = {
  letter: string;
  text: string;
  descripton: string;
};

const AvpuItem: React.FC<AvpuItemProps> = ({ letter, text, descripton }) => {
  const { fontSize } = useMainContext();
  return (
    <View style={{ paddingBottom: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: fontSize * 1.2,
            color: COLORS.darkGrey,
          }}>
          {t(letter)}
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: fontSize * 1.2,
            color: COLORS.darkGrey,
          }}>
          {t(text)}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '300',
          fontSize: fontSize,
          color: COLORS.darkGrey,
        }}>
        {t(descripton)}
      </Text>
    </View>
  );
};

export default AvpuItem;
