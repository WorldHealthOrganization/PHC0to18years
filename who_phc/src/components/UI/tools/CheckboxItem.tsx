import { View, Text, StyleProp, TextStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../../../styles/generalStyles.styles';
import { t } from 'i18next';
import { ICheckboxButton } from 'react-native-bouncy-checkbox-group';
import useMainContext from '../../../context/useMainContext';

type ChechboxItemProps = PropsWithChildren<{
  item: ICheckboxButton;
 onPress: (selectedItem: ICheckboxButton) => void;
}>;

const CheckboxItem = ({ item, onPress }: ChechboxItemProps) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const { fontSize } = useMainContext();
  return (
    <BouncyCheckbox
      key={item.id}
      textStyle={{
        textDecorationLine: 'none',
        fontSize: fontSize,
        paddingRight: 5,
      }}
      fillColor={COLORS.blue}
      style={{ paddingVertical: 3, }}
      isChecked={isChecked}
      text={t(item.text)}
      onPress={() => {
        setIsChecked(!isChecked);
        onPress(item);
      }}
    />
  );
};

export default CheckboxItem;
