import React, { PropsWithChildren, useState } from 'react';
import {
  StyleSheet,
  Text,
  ColorValue,
  Pressable,
  View,
  ViewStyle,
  LayoutAnimation,
  UIManager,
  Platform,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../styles/generalStyles.styles';
import { ChapterItem, NavigateItem } from '../../domains/types/MenuItemT';
import ButtonWithDot from './ButtonWithDot';
import ChapterScreenParams from '../../domains/types/ChapterScreenParams';
import { MenuNavigationProp } from '../../domains/types/Routing';
import { HomeRoutes } from '../../routing/routing';
import AnchorType from '../../domains/enums/AnchorType';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
interface CollapsibleListItemProps extends PropsWithChildren {
  item: ChapterItem | NavigateItem<any>;
  color?: ColorValue;
  buttonStyle?: ViewStyle;
  numColumns?: number;
  defaultOpen?: boolean;
}

const CollapsibleListItem = ({
  item,
  buttonStyle = {},
  numColumns = 1,
  color,
  defaultOpen = false,
}: CollapsibleListItemProps) => {
  const { navigate } = useNavigation<MenuNavigationProp>();
  const { t } = useTranslation();
  const [open, setOpen] = useState(defaultOpen);

  const toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View>
      <Pressable
        key={item.label}
        onPress={() => {
          navigate(
            item.path as HomeRoutes.ChapterScreen,
            {
              id: (item as ChapterItem).id,
              anchor: (item as ChapterItem).idSubchapterInHTML,
              anchorType: AnchorType.Info,
              initial: false,
            } as ChapterScreenParams,
          );
        }}
        style={[styles.button, buttonStyle]}>
        <Text style={[styles.label, { color }]}>{t(item.label)}</Text>
        <MaterialCommunityIcons
          name={open ? 'arrow-top-left' : 'arrow-bottom-right'}
          color={color}
          size={30}
          onPress={toggleItem}
        />
      </Pressable>

      {open && (
        <FlatList
          scrollEnabled={false}
          numColumns={numColumns}
          keyExtractor={nestedItem => nestedItem.label}
          horizontal={false}
          data={item.nested}
          renderItem={({ item: nestedItem }) => (
            <View style={{ flex: 1 }}>
              <ButtonWithDot
                label={t(nestedItem.label)}
                color={color}
                onPress={() => {
                  navigate(
                    nestedItem.path as HomeRoutes.ChapterScreen,
                    {
                      id: nestedItem.id,
                      anchor: nestedItem.idSubchapterInHTML,
                      anchorType: AnchorType.Info,
                      initial: false,
                    } as ChapterScreenParams,
                  );
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.darkGrey,
    flex: 1,
    padding: 5,
  },
  nestedList: {
    marginRight: 20,
    gap: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default CollapsibleListItem;
