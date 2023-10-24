import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import bulletPink from '../../../../assets/genericImages/triangle.svg';
import generalStyles, { COLORS } from '../../../styles/generalStyles.styles';
import { t } from 'i18next';
import useMainContext from '../../../context/useMainContext';
import useAppNavigation from '../../../hooks/useAppNavigation';
import AnchorType from '../../../domains/enums/AnchorType';
import SymbolType from '../../../domains/enums/SymbolType';
import { SpecialContent } from '../../../domains/types/SpecialContent';
import SpecialTextType from '../../../domains/enums/SpecialTextType';

type ItemWithTriangleProps = {
  textStart: string;
  linkText?: string;
  linkName?: string;
  linkType?: AnchorType;
  textEnd?: string;
  specialContent?: SpecialContent;
  fontSize?: number;
  paddingLeft?: number;
  symbolType?: SymbolType;
};

const ItemWithTriangle = ({
  textStart,
  linkText = null,
  linkName = null,
  linkType = null,
  textEnd = null,
  specialContent = null,
  paddingLeft = 0,
  symbolType = SymbolType.Triangle,
}: ItemWithTriangleProps) => {
  const { fontSize } = useMainContext();
  const { navigationInTools} =
    useAppNavigation();

  const drawSymbol = () => {
    switch (symbolType) {
      case SymbolType.None:
        return null;
      case SymbolType.Triangle:
        return (
          <SvgXml
            width={fontSize + 'px'}
            height={fontSize + 'px'}
            xml={bulletPink}
            style={styles.bulletPink}
          />
        );
      case SymbolType.Hyphen:
        return (
          <Text style={{ fontSize: fontSize, color: COLORS.darkGrey }}>- </Text>
        );
      case SymbolType.Dot:
        return (
          <Text style={{ fontSize: fontSize, color: COLORS.darkGrey }}>• </Text>
        );
    }
  };

  const renderSpecialContent = () =>{
    switch(specialContent.type)
    {
      case SpecialTextType.RedBold:
        return (
          <>
          <Text
          style={{
            fontSize: fontSize,
            color: COLORS.chartRed,
            fontWeight: '600',
          }}>
          {t(specialContent.text)}
        </Text>
        <Text>{t(textStart)}</Text>
        </>
        );
      case SpecialTextType.Italic:
        return (
          <>
          <Text>{t(textStart)}</Text>
          <Text
          style={{
            fontSize: fontSize,
            color: COLORS.darkGrey,
            fontStyle: 'italic',
          }}>
          {' '}
          {t(specialContent.text)}{' '}
        </Text>
        </>
        );
      case SpecialTextType.Bold:
        return (
          <>
          <Text
            style={{
              fontSize: fontSize,
              color: COLORS.darkGrey,
              fontWeight: '700',
            }}>
            {t(specialContent.text)}
          </Text>
           <Text>{t(textStart)}</Text>
           </>
        );
    }
  }
  return (
    <View style={[styles.itemContainer, { paddingLeft: paddingLeft }]}>
      <>{drawSymbol()}</>
      <Text style={{ fontSize: fontSize, color: COLORS.darkGrey }}>

        {specialContent!=null? renderSpecialContent(): t(textStart)}
          
        {linkText != null ? (
          <View>
            <TouchableOpacity
            style={{ height: fontSize * 1.1, justifyContent: 'center'}}
            onPress={()=>{
              navigationInTools(linkType, linkName);
            }}>
            <Text
              style={[
                generalStyles.linkInsideText,
                { fontSize: fontSize * 0.95, },
              ]}>
              {t(linkText)}
            </Text>
          </TouchableOpacity>

          </View>
        ) : null}

        
        {textEnd != null ? (
          <Text style={{ fontSize: fontSize, color: COLORS.darkGrey }}>
            {t(textEnd)}
          </Text>
        ) : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
  },
  bulletPink: {
    marginTop: 2,
    marginRight: 1,
  },
});

export default ItemWithTriangle;
