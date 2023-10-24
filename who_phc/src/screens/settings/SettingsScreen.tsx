import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import i18n from '../../locales/i18n.config';
import { useTranslation } from 'react-i18next';
import Slider from '@react-native-community/slider';
import useMainContext from '../../context/useMainContext';
import generalStyles, { COLORS } from '../../styles/generalStyles.styles';
import ScreenMenuLayout from '../../components/layout/ScreenMenuLayout';
import DropDownPicker from 'react-native-dropdown-picker';

const SettingsScreen = () => {
  const { fontSize, setFontSize, language, setLanguage } = useMainContext();
  const [myFontSize, setMyFontSize] = useState(fontSize);
  const [open, setOpen] = React.useState(false);
  const [myLanguage, setMyLanguage] = React.useState(language);
  const [items, setItems] = React.useState([{label: 'English', value:'en'}, {label: 'Українська', value:'ua'}]);

  const { t } = useTranslation();

  return (
    <ScreenMenuLayout
      color={COLORS.lightGrey}
      backgroundColor={COLORS.lightGrey}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.heading, {fontSize: fontSize}]}>
            {t`SettingsPage.FontTitle`} {myFontSize}{' '}
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.defaultText}>10 </Text>
            <Slider
              style={styles.fontSizeSlider}
              step={1}
              minimumValue={10}
              maximumValue={30}
              value={myFontSize}
              onValueChange={(newValue: number) => {
                setMyFontSize(newValue);
              }}
            />
            <Text style={styles.defaultText}> 30</Text>
          </View>
        </View>
          <Text style={[styles.heading, {fontSize: fontSize}]}>{t`SettingsPage.LanguageTitle`}</Text>
          <DropDownPicker
        open={open}
        value={myLanguage}
        items={items}
        setOpen={setOpen}
        setValue={setMyLanguage}
        setItems={setItems}
        placeholderStyle={{ color: COLORS.darkGrey }}
        textStyle={{ color: COLORS.darkGrey, fontSize: fontSize }}
        dropDownContainerStyle={{ borderColor: 'transparent' }}
        placeholder={t`DrugCalculatorToolPage.SelectDrugPlaceholder`}
        style={{ borderColor: 'transparent' }}
      />
       
         <TouchableOpacity
        style={[generalStyles.toolGetResultButton, { marginVertical: 15 }]}
        onPress={() => {
          setFontSize(myFontSize);
            setLanguage(myLanguage);
            i18n.changeLanguage(myLanguage);
            Alert.alert('Alert', 'Successfully saved!');
        }}>
        <Text
          style={[
            generalStyles.toolResultText,
            { fontSize: fontSize },
          ]}>{t`SettingsPage.ButtonTitle`}</Text>
      </TouchableOpacity>
      </View>
    </ScreenMenuLayout>
  );
};

export default SettingsScreen;

const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    color: COLORS.darkGrey,
  },
  defaultText: {
    color: COLORS.darkGrey,
    paddingTop: 10,
  },
  languagePicker: {
    height: 200,
    color: COLORS.darkGrey,
  },
  fontSizeSlider: {
    width: SCREEN_WIDTH - 70,
    height: 40,
  },
});
