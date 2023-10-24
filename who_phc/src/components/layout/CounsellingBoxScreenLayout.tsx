import { View, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';
import DeviceInfo from 'react-native-device-info';

import { COLORS } from '../../styles/generalStyles.styles';

type CounsellingBoxScreenLayoutProps = PropsWithChildren<{
  color: string;
  backgroundColor?: string;
  children: React.ReactNode;
}>;

const CounsellingBoxScreenLayout: React.FC<CounsellingBoxScreenLayoutProps> = ({
  color,
  backgroundColor = COLORS.white,
  children,
}) => {
  const isTablet = DeviceInfo.isTablet();

  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: isTablet ? 10 : 5,
          paddingBottom: isTablet ? 10 : 5,
          backgroundColor: color,
        },
      ]}>
      <View style={[styles.content, styles.roundPart]}>
        <View style={[styles.container, styles.roundPart, { backgroundColor }]}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  roundPart: {
    borderRadius: 20,
  },
  container: {
    flex: 1,
  },
});

export default CounsellingBoxScreenLayout;
