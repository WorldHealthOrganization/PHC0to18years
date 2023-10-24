import Fuse from 'fuse.js';

import ResultText from '../../domains/enums/ResultText';
import SearchResultT, { RangeTuple } from '../../domains/types/SearchResultT';
import { ChapterItem, NavigateItem } from '../../domains/types/MenuItemT';
import { getChapter } from '../chapter';
import Routes, { CounsellingBoxesRoutes, HomeRoutes } from '../../routing/routing';
import SearchResultType from '../../domains/enums/SearchResultType';
import ChapterScreenParams from '../../domains/types/ContentScreenParams';
import ParsedHTMLContent from '../../domains/types/ParsedHTMLContent';
import ParsedSentence from '../../domains/types/ParsedSentence';
import { COLORS } from '../../styles/generalStyles.styles';
import { getCounsellingBox } from '../counsellingBoxes';
import ScreenParams from '../../domains/types/ScreenParams';
import ParsedHTMLNode from '../../domains/types/ParsedHTMLNode';
import CacheKey from '../../domains/enums/CacheKey';
import { extractCacheForSearch } from './cache';
import SearchedIn from '../../domains/enums/SearchedIn';

export const getSearchResultIcon = (type: SearchResultType) => {
  switch (type) {
    case SearchResultType.ChapterName:
      return 'table-of-contents';

    case SearchResultType.SubChapterName:
      return 'format-list-bulleted';

    case SearchResultType.ChapterContent:
      return 'text';

    case SearchResultType.CounsellingBoxContent:
      return 'chat-processing-outline';

    case SearchResultType.ToolName:
      return 'ruler';

    default:
      return 'book-open-outline';
  }
};

export const searchFromText = (
  sentences: ParsedHTMLNode[],
  textToSearch: string,
) => {
  const options = {
    threshold: textToSearch.length < 6 ? 0.1 : 0.2,
    ignoreLocation: true,
    includeScore: true,
    includeMatches: true,
    isCaseSensitive: false,
    findAllMatches: true,
    ignoreFieldNorm: true,
    minMatchCharLength: textToSearch.length - 1,
    keys: ['content'],
  };

  const fuse = new Fuse(sentences, options);
  const searchResults = fuse.search(textToSearch);

  return searchResults;
};

export const searchFromList = (
  list: ChapterItem[] | NavigateItem<any>[],
  textToSearch: string,
) => {
  const options = {
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: textToSearch.length - 1,
    keys: ['label'],
  };

  const fuse = new Fuse(list, options);
  const searchResults = fuse.search('=' + textToSearch);

  return searchResults;
};

export const highLightMatches = (
  matches: readonly RangeTuple[],
  content: string,
) => {
  const result: { text: string; type: ResultText }[] = [];
  let indexTest = 0;

  matches.forEach(([start, end], indexOfMatch) => {
    const match = content.substring(start, end + 1);
    if (match) {
      result.push(
        {
          text: content.slice(indexTest, start),
          type: ResultText.Default,
        },
        {
          text: match,
          type: ResultText.Highlighted,
        },
      );
      indexTest = end + 1;
    }
    if (indexOfMatch === matches.length - 1) {
      result.push({
        text: content.slice(indexTest),
        type: ResultText.Default,
      });
    }
  });

  return result;
};

const searchInChaptersContent = async (
  search: string,
  searchCanceled: boolean,
  setNewSearchResults: (newSearchResults: SearchResultT[], searchedIn: SearchedIn) => void
) => {
  if (searchCanceled) return;

  let generalResult: SearchResultT[] = [];
  const parsedChaptersContent = await extractCacheForSearch(CacheKey.ParsedChapters);

  for (const [id, sentences] of Object.entries(
    parsedChaptersContent as ParsedHTMLContent,
  )) {
    if (searchCanceled) return;

    const results = searchFromText(sentences as ParsedSentence[], search);
    const chapter = getChapter(+id);

    const newSearchResuts = results.map(fuseResult => ({
      id: `${SearchResultType.ChapterContent}-${fuseResult.item.tagId}`,
      title: chapter.title,
      content: fuseResult.item.content,
      color: chapter.color,
      path: HomeRoutes.ChapterScreen,
      type: SearchResultType.ChapterContent,
      score: fuseResult.score,
      params: {
        id: +id,
        searchResultId: fuseResult.item.tagId,
      } as ChapterScreenParams,
      matches: fuseResult.matches[0].indices,
    }));

    generalResult = [...generalResult, ...newSearchResuts];
  }

  return setNewSearchResults(generalResult, SearchedIn.Chapters);
};

const searchInCounsellingBoxes = async (
  search: string,
  searchCanceled: boolean,
  setNewSearchResults: (newSearchResults: SearchResultT[], searchedIn: SearchedIn) => void,
) => {
  if (searchCanceled) return;

  let generalResult: SearchResultT[] = [];
  const parsedCounsellingBoxesContent = await extractCacheForSearch(CacheKey.ParsedCounsellingBoxes);

  for (const [id, sentences] of Object.entries(
    parsedCounsellingBoxesContent as ParsedHTMLContent,
  )) {
    if (searchCanceled) return;

    const results = searchFromText(sentences as ParsedSentence[], search);
    const counsellingBox = getCounsellingBox(+id);

    const newSearchResuts = results.map(fuseResult => ({
      id: `${SearchResultType.CounsellingBoxContent}-${fuseResult.item.tagId}`,
      title: counsellingBox.title,
      content: fuseResult.item.content,
      color: counsellingBox.color,
      path: Routes.CounsellingBoxes,
      type: SearchResultType.CounsellingBoxContent,
      score: fuseResult.score,
      params: {
        initial: false,
        screen: CounsellingBoxesRoutes.CounsellingBox,
        params: {
          id: +id,
          initial: false,
          searchResultId: fuseResult.item.tagId,
        } as ScreenParams,
      },
      matches: fuseResult.matches[0].indices,
    }));

    generalResult = [...generalResult, ...newSearchResuts];
  }

  return setNewSearchResults(generalResult, SearchedIn.CounsellingBoxes);
};

const searchInTools = (
  translatedList: NavigateItem<any>[],
  search: string,
  setNewSearchResults: (newSearchResults: SearchResultT[], searchedIn: SearchedIn) => void,
) => {
  const results = searchFromList(translatedList, search);

  const newSearchResuts = results.map(fuseResult => ({
    id: `${SearchResultType.ToolName}-${fuseResult.refIndex}`,
    title: fuseResult.item.label,
    content: fuseResult.item.label,
    color: COLORS.blue,
    path: Routes.ToolsScreen,
    type: SearchResultType.ToolName,
    params: {
      screen: fuseResult.item.path,
      initial: false,
      params: {
        initial: false,
      },
    } as ChapterScreenParams,
    matches: fuseResult.matches[0].indices,
  }));

  return setNewSearchResults(newSearchResuts, SearchedIn.Tools);
};

export const searchInApp = (
  newSearch: string,
  translatedTools: NavigateItem<any>[],
  searchCanceled: boolean,
  setNewSearchResults: (newSearchResults: SearchResultT[], searchedIn: SearchedIn) => void,
) => {
  searchInTools(translatedTools, newSearch, setNewSearchResults);
  searchInChaptersContent(newSearch, searchCanceled, setNewSearchResults);
  searchInCounsellingBoxes(newSearch, searchCanceled, setNewSearchResults);
}
