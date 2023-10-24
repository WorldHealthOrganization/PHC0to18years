import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

import smallLineImageIOS from '../../../../assets/tools/6hor.png';
import smallVerLineImageIOS from '../../../../assets/tools/6ver.png';
import { COLORS } from '../../../styles/generalStyles.styles';
import { t } from 'i18next';
import {
  emojiData,
  emojiTextData,
  endTextData,
  firstNumbersData,
} from '../../../data/tools/nested/painMeasurementTool';
import useOrientation from '../../../hooks/useOrientation';

const PainScaleToolScreen = () => {
  const {isLnd} = useOrientation();

  if (!isLnd) {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: '2%',
          paddingVertical: '5%',
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          {emojiData.map(item => {
            return <Image key={item.id} source={item.image} />;
          })}
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {firstNumbersData.map(item => {
            return (
              <Text key={item.id} style={styles.firstText}>
                {item.text}
              </Text>
            );
          })}
        </View>

        <View style={styles.categoryGeneralContainer}>
          {emojiTextData.map(item => {
            return (
              <Text key={item.id} style={styles.secondText}>
                {t(item.text)}
              </Text>
            );
          })}
        </View>

        <View style={styles.categoryGeneralContainer}>
          {[...new Array(11)].map((item, index) => (
            <Image key={index} source={smallLineImageIOS} style={{}} />
          ))}
        </View>

        <View style={styles.verticalLine} />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {[...new Array(11)].map((item, index) => (
            <Text key={index} style={styles.firstText}>
              {index}
            </Text>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'column',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {endTextData.map(item => {
            return (
              <Text key={item.id} style={styles.thirdText}>
                {t(item.text)}
              </Text>
            );
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: '6%',
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {emojiData.map(item => {
            return <Image key={item.id} source={item.image} />;
          })}
        </View>

        <View
          style={[styles.categoryGeneralContainer, { flexDirection: 'row' }]}>
          {firstNumbersData.map(item => {
            return (
              <Text key={item.id} style={styles.firstText}>
                {item.text}
              </Text>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {emojiTextData.map(item => {
            return (
              <Text key={item.id} style={styles.secondText}>
                {t(item.text)}
              </Text>
            );
          })}
        </View>

        <View
          style={[styles.categoryGeneralContainer, { flexDirection: 'row' }]}>
          {[...new Array(11)].map((item, index) => (
            <Image key={index} source={smallVerLineImageIOS} style={{}} />
          ))}
        </View>

        <View style={[styles.horizontalLine]} />

        <View
          style={[styles.categoryGeneralContainer, { flexDirection: 'row' }]}>
          {[...new Array(11)].map((item, index) => (
            <Text key={index} style={styles.firstText}>
              {index}
            </Text>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {endTextData.map(item => {
            return (
              <Text key={item.id} style={styles.thirdText}>
                {t(item.text)}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryGeneralContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  firstText: {
    fontSize: 23,
    color: COLORS.darkGrey,
  },
  secondText: {
    textAlign: 'center',
    fontSize: 15,
    maxWidth: 70,
    color: COLORS.darkGrey,
  },
  thirdText: {
    textAlign: 'center',
    fontSize: 15,
    maxWidth: 80,
    color: COLORS.darkGrey,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.black,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.black,
  },
});

export default PainScaleToolScreen;
