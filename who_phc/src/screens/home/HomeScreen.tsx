import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import DashboardCard from '../../components/home/DashboardCard';
import homeList from '../../data/home/homeList';
import { MenuNavigationProp } from '../../domains/types/Routing';
import { COLORS } from '../../styles/generalStyles.styles';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<MenuNavigationProp>();

  return (
    <ScrollView>
      <View
        style={[
          styles.list,
          DeviceInfo.isTablet() ? styles.tabletList : styles.mobileList,
        ]}>
        {homeList.map(item => (
          <DashboardCard
            key={item.id}
            title={t(item.label)}
            svgImage={item.svgImage}
            myBackgroundColor={item.myBackgroundColor}
            onPress={() =>
              navigate(item.path, { initial: false, ...item.params })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    justifyItems: 'space-between',
    backgroundColor: COLORS.lightGrey,
  },
  mobileList: {
    gap: 20,
    padding: 10,
    paddingTop: 20,
  },
  tabletList: {
    gap: 30,
    padding: 20,
    paddingTop: 30,
  },
});

export default HomeScreen;
