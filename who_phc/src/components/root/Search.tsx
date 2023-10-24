import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, StyleSheet, View, Text, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDebouncedCallback } from 'use-debounce';

import { COLORS } from '../../styles/generalStyles.styles';
import Input from '../UI/Input';
import useSearchContext from '../../context/useSearchContext';
import SearchResult from './SearchResult';
import SearchResultT from '../../domains/types/SearchResultT';
import { GeneralNavigationProp } from '../../domains/types/Routing';
import DefaultModal from '../UI/DefaultModal';
import { useTranslation } from 'react-i18next';
import { getSearchSplashScreen } from '../../utility/search/searchSplashScreen';

const Search: React.FC = () => {
  const { navigate } = useNavigation<GeneralNavigationProp>();
  const { t } = useTranslation();

  const {
    searchModalOpen,
    setSearchModalOpen,
    search,
    onSearchChange,
    searchResults,
    handleSearchCancel,
    loading,
  } = useSearchContext();

  const closeModal = () => {
    handleSearchCancel();
    setSearchModalOpen(false);
  }

  const handleSearchRedirect = (item: SearchResultT) => {
    Keyboard.dismiss();
    navigate(item.path, item.params);
    setSearchModalOpen(false);
  };


  const searchSplashScreen = getSearchSplashScreen(loading, search);

  return (
    <DefaultModal
      modalVisible={searchModalOpen}
      setModalVisible={setSearchModalOpen}
      closeModal={closeModal}
      input={
        <Input
          value={search}
          placeholder={'Search'}
          autoFocus={true}
          onChange={onSearchChange}
          handleClear={handleSearchCancel}
          icon={
            <MaterialCommunityIcons
              name="magnify"
              color={COLORS.grey}
              size={20}
            />
          }
        />}>
      {searchResults.length ? (
        <>
          {loading && <Text style={styles.infoSearchProgress}>
            {t(searchSplashScreen.title)}
          </Text>}
          <FlatList
            data={searchResults}
            keyboardShouldPersistTaps="always"
            onScroll={event => event.stopPropagation()}
            renderItem={({ item }) => (
              <SearchResult
                key={item.id}
                item={item}
                handlePress={handleSearchRedirect}
              />
            )}
            style={styles.list}
          />
        </>

      ) : (
        <View style={styles.screenSaver}>
          <Text style={styles.screenSaverText}>
            {t(searchSplashScreen.title)}
          </Text>
          <MaterialCommunityIcons
            name={searchSplashScreen.icon}
            color={COLORS.darkGrey}
            size={100}
          />
        </View>
      )}
    </DefaultModal>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 15,
    flex: 1,
  },
  screenSaver: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenSaverText: {
    fontSize: 25,
    fontWeight: '600',
    color: COLORS.darkGrey,
  },
  infoSearchProgress: {
    paddingTop: 5,
  }
});

export default Search;
