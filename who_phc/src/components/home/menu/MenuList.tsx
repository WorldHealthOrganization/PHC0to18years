import React, { useMemo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';

import List from '../../UI/List';
import useMainContext from '../../../context/useMainContext';
import SortBy from '../../../domains/enums/SortBy';
import { sortInAlphabeticalOrder } from '../../../utility/sorting';
import { ChapterItem, NavigateItem } from '../../../domains/types/MenuItemT';
import MenuItem from './MenuItem';

type MenuListProps = {
  list: NavigateItem<any>[];
  color: ColorValue;
  lightColor?: ColorValue;
  defaultOpen?: boolean;
  numColumns?: number;
  numOfNestedCol?: number;
  listItemStyle?: ViewStyle;
  firstItem?: React.ReactNode;
};

const MenuList = ({
  list,
  color,
  lightColor = color,
  defaultOpen,
  numColumns,
  numOfNestedCol,
  listItemStyle = {},
}: MenuListProps) => {
  const { sortBy } = useMainContext();

  const sortedList = useMemo(() => {
    const listToSort = [...list];

    return sortBy === SortBy.Alphabet
      ? listToSort.sort((a, b) => sortInAlphabeticalOrder(a.label, b.label))
      : list;
  }, [list, sortBy]);

  return (
    <View style={menuListStyles.listWrapper}>
      <List
        list={sortedList}
        numColumns={numColumns}
        renderItem={({ item }: { item: ChapterItem }) => (
          <MenuItem
            item={item}
            color={color}
            listItemStyle={listItemStyle}
            numOfNestedCol={numOfNestedCol}
            defaultOpen={defaultOpen}
            lightColor={lightColor}
          />
        )}
      />
    </View>
  );
};

const menuListStyles = StyleSheet.create({
  listWrapper: {
    padding: 15,
    flex: 1,
  },
});

export default MenuList;
