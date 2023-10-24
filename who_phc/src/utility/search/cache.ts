import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';

import CacheKey from '../../domains/enums/CacheKey';
import ParsedHTMLContent from '../../domains/types/ParsedHTMLContent';
import { parseContentForSearch } from './parsing';
import homeList from '../../data/home/homeList';
import counselingBoxesList from '../../data/counselingBoxes/counselingBoxesList';
import ParsedSentence from '../../domains/types/ParsedSentence';

const cache = new Cache({
  namespace: 'AppCache',
  policy: {
    maxEntries: 50000,
    stdTTL: 0,
  },
  backend: AsyncStorage,
});

const getCache = async (
  key: CacheKey,
  id: number,
) => await cache.get(`${key}-${id}`);

const multiGetCache = async (
  key: CacheKey,
  ids: { id: number }[],
) => {
  let result: Record<number, ParsedSentence[] | null> = {};

  await Promise.all(ids.map(async ({ id }) => {
    const content = await getCache(key, id);

    if (content) {
      const parsedContent = JSON.parse(content);
      result[id] = parsedContent;
    } else {
      result[id] = null;
    }
  }));

  return result;
};

const setCache = async (
  key: CacheKey,
  id: number,
  stringifiedContent: string,
) => await cache.set(`${key}-${id}`, stringifiedContent);


export const updateCacheForSearch = async (key: CacheKey) => {
  const parsedContent = await parseContentForSearch(key);

  for (const [id, sentences] of Object.entries(parsedContent)) {
    setCache(key, +id, JSON.stringify(sentences));
  }

  return parsedContent;
}

export const extractCacheForSearch = async (key: CacheKey) => {
  let data;

  switch (key) {
    case CacheKey.ParsedChapters: {
      data = await multiGetCache(key, [...homeList]);
      break;
    }

    case CacheKey.ParsedCounsellingBoxes: {
      data = await multiGetCache(key, [...counselingBoxesList]);
      break;
    }
  }

  const contents = Object.values(data);
  if (!data || !contents || contents.some((content) => !content)) {
    const parsedContent = await updateCacheForSearch(key);

    return parsedContent;
  }

  return data as ParsedHTMLContent;
};


export const clearCache = async () => await cache.clearAll();

export default cache;
