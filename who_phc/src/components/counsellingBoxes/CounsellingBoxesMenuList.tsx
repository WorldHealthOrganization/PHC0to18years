import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../UI/List';
import useMainContext from '../../context/useMainContext';
import SortBy from '../../domains/enums/SortBy';
import { sortInAlphabeticalOrder } from '../../utility/sorting';
import { ChapterItem, NavigateItem } from '../../domains/types/MenuItemT';
import MenuItem from '../home/menu/MenuItem';
import { getCounsellingBox } from '../../utility/counsellingBoxes';
import { COLORS } from '../../styles/generalStyles.styles';

type CounsellingBoxesMenuListProps = {
  list: NavigateItem<any>[];
  defaultOpen?: boolean;
  numColumns?: number;
  numOfNestedCol?: number;
};

const CounsellingBoxesMenuList = ({
  list,
  defaultOpen,
  numColumns,
  numOfNestedCol,
}: CounsellingBoxesMenuListProps) => {
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
        renderItem={({ item }: { item: ChapterItem }) => {
          return (
            <MenuItem
              item={item}
              color={COLORS.white}
              listItemStyle={{
                backgroundColor: getCounsellingBox(item.id).lightColor,
              }}
              numOfNestedCol={numOfNestedCol}
              defaultOpen={defaultOpen}
              lightColor={COLORS.black}
            />
          );
        }}
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

export default CounsellingBoxesMenuList;
