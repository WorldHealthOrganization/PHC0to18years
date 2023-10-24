import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';

import { COLORS } from '../../../styles/generalStyles.styles';
import ListItem from '../../UI/ListItem';
import CollapsibleListItem from '../../UI/CollapsibleListItem';
import { ChapterItem, ChapterItemType } from '../../../domains/types/MenuItemT';
import ChapterScreenParams from '../../../domains/types/ChapterScreenParams';
import { MenuNavigationProp } from '../../../domains/types/Routing';
import AnchorType from '../../../domains/enums/AnchorType';

type MenuItemProps = {
  item: ChapterItem;
  color: ColorValue;
  lightColor: ColorValue;
  listItemStyle?: ViewStyle;
  numOfNestedCol?: number;
  defaultOpen?: boolean;
};

const ChapterMenuItem = ({
  item,
  color,
  lightColor,
  listItemStyle = {},
  numOfNestedCol,
  defaultOpen,
}: MenuItemProps) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<MenuNavigationProp>();

  const paramsToNavigateForChapter: ChapterScreenParams = {
    id: item.id,
    anchor: item.idSubchapterInHTML,
    anchorType: AnchorType.Info,
    initial: false,
  };

  const handlePress = () => {
    navigate(item.path, paramsToNavigateForChapter);
  };

  return (
    <View key={item.label} style={styles.listItemContainer}>
      {item.type && item.type === ChapterItemType.ApproachContent && (
        <ListItem
          label={t(item.label)}
          onPress={handlePress}
          color={color}
          buttonStyle={styles.approachContent}
          labelStyle={styles.approachContentLabel}
        />
      )}

      {item.type && item.type === ChapterItemType.ApproachBtn && (
        <ListItem
          label={t(item.label)}
          onPress={handlePress}
          color={color}
          buttonStyle={[styles.approachBtn, { borderColor: lightColor }]}
        />
      )}

      {(!item.type || item.type === ChapterItemType.Default) && (
        <View key={item.label} style={[styles.listItem, listItemStyle]}>
          {item.nested && !!item.nested.length ? (
            <CollapsibleListItem
              color={color}
              defaultOpen={defaultOpen}
              numColumns={numOfNestedCol}
              item={item}
            />
          ) : (
            <ListItem
              label={t(item.label)}
              onPress={handlePress}
              color={color}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 5,
  },
  listWrapper: {
    padding: 15,
    flex: 1,
  },
  listItem: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  approachContent: {
    flex: 1,
    backgroundColor: COLORS.transparentWhite,
    borderRadius: 20,
    padding: 10,
  },
  approachContentLabel: {
    fontSize: 15,
    color: COLORS.graphite,
    fontWeight: '400',
  },
  approachBtn: {
    borderWidth: 2,
    backgroundColor: COLORS.white,
  },
  listItemContainer: {
    margin: 5,
    flex: 1,
  },
});

export default ChapterMenuItem;
