import React, {
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import SearchResultT from '../domains/types/SearchResultT';
import toolsList from '../data/tools/toolsList';
import SearchResultType from '../domains/enums/SearchResultType';
import SearchedIn from '../domains/enums/SearchedIn';
import { searchInApp } from '../utility/search/search';
import { useDebouncedCallback } from 'use-debounce';


interface ContextProps {
  children: ReactNode;
}

interface IContextType {
  searchModalOpen: boolean;
  setSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onSearchChange: (newSearch: string) => void;
  searchResults: SearchResultT[];
  handleSearchCancel: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  searchProgress: Record<SearchedIn, boolean>;
}

const contextDefaultValues: IContextType = {
  searchModalOpen: false,
  setSearchModalOpen: () => null,
  search: "",
  setSearch: () => null,
  onSearchChange: () => null,
  handleSearchCancel: () => null,
  searchResults: [],
  loading: false,
  setLoading: () => null,
  searchProgress: {
    [SearchedIn.Tools]: false,
    [SearchedIn.Chapters]: false,
    [SearchedIn.CounsellingBoxes]: false,
  },
};

export const SearchContext =
  React.createContext<IContextType>(contextDefaultValues);

export const SearchContextProvider = ({ children }: ContextProps) => {
  const { t } = useTranslation();

  const [searchModalOpen, setSearchModalOpen] = useState(
    contextDefaultValues.searchModalOpen,
  );
  const [searchResults, setSearchResults] = useState<
    SearchResultT[]
  >([]);
  const [search, setSearch] = useState(contextDefaultValues.search);
  const [loading, setLoading] = useState(contextDefaultValues.loading);
  const [searchCanceled, setSearchCanceled] = useState(false);
  const [searchProgress, setSearchProgress] = useState(contextDefaultValues.searchProgress);

  const updateSearchProgress = useCallback((searchedIn: SearchedIn) => {
    setSearchProgress((prevSearchProgress) => ({
      ...prevSearchProgress,
      [searchedIn]: true,
    }))
  }, []);

  const handleSearchStart = (newSearch: string) => {
    setSearch(newSearch);
    setSearchResults([]);

    let needSearch = true;

    if (!newSearch) return needSearch = false;

    if (!loading) setLoading(true);

    return needSearch;
  }

  const handleSearchEnd = () => {
    setLoading(false);
    setSearchProgress(contextDefaultValues.searchProgress);
    setSearchCanceled(false);
  }

  const handleSearchCancel = () => {
    if (loading) {
      setSearchCanceled(true);
    }

    setSearch("");
    setSearchResults([]);
    handleSearchEnd();
  }


  const handleSearch = async (newSearch: string) => {
    const translatedTools = toolsList.map(item => ({
      ...item,
      label: t(item.label),
    }));

    const setNewSearchResults = (newSearchResults: SearchResultT[], searchedIn: SearchedIn) => {
      if (search === newSearch) {
        setSearchResults((searchResults) =>
          [...searchResults, ...newSearchResults]
            .sort((a, b) => a.type === SearchResultType.ToolName ? 1 : b.score - a.score)
        );
      }

      updateSearchProgress(searchedIn);
    }

    searchInApp(newSearch, translatedTools, searchCanceled, setNewSearchResults);
  };

  const debouncedSearch = useDebouncedCallback(handleSearch, 1000);

  const onSearchChange = (newSearch: string) => {
    const needSearch = handleSearchStart(newSearch);

    if (needSearch) {
      debouncedSearch(newSearch);
    }
  };

  useEffect(() => {
    if (!Object.values(searchProgress).includes(false)) {
      handleSearchEnd();
    }
  }, [searchProgress]);

  return (
    <SearchContext.Provider
      value={{
        searchModalOpen,
        setSearchModalOpen,
        search,
        setSearch,
        onSearchChange,
        handleSearchCancel,
        searchResults,
        loading,
        setLoading,
        searchProgress,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default () => useContext(SearchContext);
