import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../styles/generalStyles.styles';
import SearchResultT from '../../domains/types/SearchResultT';
import ResultText from '../../domains/enums/ResultText';
import { getSearchResultIcon, highLightMatches } from '../../utility/search/search';

interface SearchResultProps {
  item: SearchResultT;
  handlePress: (item: SearchResultT) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ item, handlePress }) => {
  const { t } = useTranslation();

  const { content, matches, color, title, type } = item;

  const formattedContent = useMemo(
    () => highLightMatches(matches, content),
    [content, matches],
  );

  return (
    <Pressable onPress={() => handlePress(item)}>
      <View style={[styles.container, { borderColor: color }]}>
        <View style={[styles.colorLabel, { backgroundColor: color }]}>
          <MaterialCommunityIcons
            name={getSearchResultIcon(type)}
            color={COLORS.white}
            size={30}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[styles.title, { color: color }]}>{t(title)}</Text>
          <Text style={styles.contentText}>
            {formattedContent.map(textItem =>
              textItem.type === ResultText.Highlighted ? (
                <Text style={styles.highLightedText}>{textItem.text}</Text>
              ) : (
                <Text style={styles.contentText}>{textItem.text}</Text>
              ),
            )}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
  },
  colorLabel: {
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    color: COLORS.graphite,
    fontSize: 18,
    marginBottom: 10,
  },
  contentText: {
    color: COLORS.darkGrey,
    fontSize: 16,
  },
  highLightedText: {
    color: COLORS.graphite,
    backgroundColor: COLORS.blueBackground,
    fontSize: 16,
  },
  contentWrapper: {
    padding: 5,
    flex: 1,
  },
});

export default SearchResult;
