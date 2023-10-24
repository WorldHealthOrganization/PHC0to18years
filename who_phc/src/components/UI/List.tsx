import React from 'react';
import { FlatList, StyleSheet, ListRenderItem } from 'react-native';

type ListProps<Item> = {
  list: Item[];
  renderItem: ListRenderItem<Item>;
  renderFirstItem?: ListRenderItem<Item>;
  numColumns?: number;
};

const List = <Item,>({
  list,
  renderItem,
  renderFirstItem,
  numColumns = 1,
}: ListProps<Item>) => (
  <FlatList
    renderItem={item =>
      item.index === 0 && renderFirstItem
        ? renderFirstItem(item)
        : renderItem(item)
    }
    data={list}
    style={listStyles.view}
    numColumns={numColumns}
    keyExtractor={item => item.label}
  />
);

const listStyles = StyleSheet.create({
  view: {
    flex: 1,
    rowGap: 10,
    columnGap: 10,
  },
});

export default List;
