import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import SwipeModal from '../SwipeModal';
import { ToolSymptomImageParams } from '../../../domains/types/ToolSymptomImageParams';
import { t } from 'i18next';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import useMainContext from '../../../context/useMainContext';
import useOrientation from '../../../hooks/useOrientation';

type SymptomImagesProps = PropsWithChildren<{
  imagesList: ToolSymptomImageParams[];
}>;
const SymptomImages = ({ imagesList }: SymptomImagesProps) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { fontSize } = useMainContext();
  const {isLnd} = useOrientation();
  return (
    <View>
      <TouchableOpacity
        style={styles.showSymptomsButton}
        onPress={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <Text
          style={[
            generalStyles.toolResultText,
            { fontSize: fontSize },
          ]}>{t`ToolsPage.General.SymptomImage.ImagesButton`}</Text>
      </TouchableOpacity>

      <SwipeModal
        modalVisible={isModalVisible}
        setModalVisible={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <ScrollView>
            {imagesList.map(item => {
              return (
                <View
                  style={[styles.imageContainer, styles.image] }
                  key={item.id}>
                    {isLnd? (<View style={[styles.image] }><Image
                    source={
                        item.fileName
                    }
                    style={{
                      width: item.width*3.5,
                      height: item.height,
                    }}
                  />
                  {item.additionalInfo ? (
                    <View style={{ width: '100%', paddingBottom: 10 }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <Text
                          style={{
                            fontSize: fontSize,
                            color: COLORS.darkGrey,
                          }}>
                          {t(item.additionalInfo[1])}
                        </Text>
                        <Text
                          style={{
                            fontSize: fontSize,
                            color: COLORS.darkGrey,
                          }}>
                          {t(item.additionalInfo[2])}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: fontSize,
                          textAlign: 'center',
                          color: COLORS.darkGrey,
                        }}>
                        {t(item.additionalInfo[0])}
                      </Text>
                    </View>
                  ) : null}
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: fontSize,
                      textAlign: 'center',
                      color: COLORS.darkGrey,
                    }}>
                    {t(item.textTitle)}
                  </Text>
                  <Text
                    style={{
                      fontSize: fontSize,
                      textAlign: 'center',
                      color: COLORS.darkGrey,
                    }}>
                    {t(item.textDescription)}
                  </Text></View>): 
                  (<><Image
                    source={
                        item.fileName
                    }
                    style={{
                      width: item.width+'%',
                      height: item.height,
                    }}
                  />
                  {item.additionalInfo ? (
                    <View style={styles.additionalContainer}>
                      <View
                        style={styles.additional}>
                        <Text
                          style={{
                            fontSize: fontSize,
                            color: COLORS.darkGrey,
                          }}>
                          {t(item.additionalInfo[1])}
                        </Text>
                        <Text
                          style={{
                            fontSize: fontSize,
                            color: COLORS.darkGrey,
                          }}>
                          {t(item.additionalInfo[2])}
                        </Text>
                      </View>
                      <Text
                        style={[styles.text, {fontSize: fontSize,}]}>
                        {t(item.additionalInfo[0])}
                      </Text>
                    </View>
                  ) : null}
                  <Text
                    style={[styles.titleText, {fontSize: fontSize,}]}>
                    {t(item.textTitle)}
                  </Text>
                  <Text
                    style={[styles.text, {fontSize: fontSize,}]}>
                    {t(item.textDescription)}
                  </Text></>)}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SwipeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 20,
    paddingBottom: 50
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  additionalContainer: { width: '100%', paddingBottom: 10 },
  additional: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    textAlign: 'center',
    color: COLORS.darkGrey,
  },
  titleText: {
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.darkGrey,
  },
  showSymptomsButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});

export default SymptomImages;
