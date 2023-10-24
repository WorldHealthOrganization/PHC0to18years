import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';

import { COLORS } from '../../../styles/generalStyles.styles';
import ListItem from '../../UI/ListItem';
import CollapsibleListItem from '../../UI/CollapsibleListItem';
import { NavigateItem } from '../../../domains/types/MenuItemT';
import { MenuNavigationProp } from '../../../domains/types/Routing';

type MenuItemProps = {
  item: NavigateItem<any>;
  color: ColorValue;
  lightColor: ColorValue;
  listItemStyle?: ViewStyle;
  numOfNestedCol?: number;
  defaultOpen?: boolean;
};

const MenuItem = ({
  item,
  color,
  listItemStyle = {},
  numOfNestedCol,
  defaultOpen,
}: MenuItemProps) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<MenuNavigationProp>();
  const itemParams = item.params ?? {};

  const handlePress = () => {
    navigate(item.path, { ...itemParams, id: item.id });
  };

  return (
    <View key={item.label} style={styles.listItemContainer}>
      <View key={item.label} style={[styles.listItem, listItemStyle]}>
        {item.nested && !!item.nested.length ? (
          <CollapsibleListItem
            color={color}
            defaultOpen={defaultOpen}
            numColumns={numOfNestedCol}
            item={item}
          />
        ) : (
          <ListItem label={t(item.label)} onPress={handlePress} color={color} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  listItemContainer: {
    margin: 5,
    flex: 1,
  },
});

export default MenuItem;
