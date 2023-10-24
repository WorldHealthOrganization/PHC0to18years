import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { SvgXml } from 'react-native-svg';

type Style = {
  button: ViewStyle;
  buttonLabel: TextStyle;
};

type DashboardCardProps = PropsWithChildren<{
  title: string;
  svgImage: any;
  styles?: Style;
  myBackgroundColor: string;
  onPress: () => void;
}>;

const DashboardCard = ({
  title,
  svgImage,
  onPress,
  myBackgroundColor,
  styles = { button: {}, buttonLabel: {} },
}: DashboardCardProps) => (
  <TouchableOpacity
    key={title}
    onPress={onPress}
    style={[
      cardStyles.button,
      DeviceInfo.isTablet() ? cardStyles.tabletSize : cardStyles.mobileSize,
      styles.button,
      { backgroundColor: myBackgroundColor },
    ]}>
    <Text
      style={[
        cardStyles.buttonLabel,
        { fontSize: DeviceInfo.isTablet() ? 20 : 12 },
        styles.buttonLabel,
      ]}>
      {title}
    </Text>
    <View style={cardStyles.imageWrapper}>
      <SvgXml
        preserveAspectRatio="xMidYMax meet"
        width="100%"
        height="100%"
        xml={svgImage}
      />
    </View>
  </TouchableOpacity>
);

const cardStyles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    flex: 1,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.4,
    aspectRatio: '3/4',
    elevation: 5
  },
  tabletSize: {
    maxWidth: 210,
    minWidth: 180,
  },
  mobileSize: {
    maxWidth: 110,
    minWidth: 95,
  },
  buttonLabel: {
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
    padding: 5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default DashboardCard;
