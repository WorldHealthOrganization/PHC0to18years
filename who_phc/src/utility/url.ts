import queryString from 'query-string';
import ChapterScreenParams from '../domains/types/ChapterScreenParams';
import AnchorType from '../domains/enums/AnchorType';
import { getChapter } from './chapter';

export const checkAnchorIsSame = (
  newParams: ChapterScreenParams,
  currentParams: ChapterScreenParams,
) => {
  let result = true;

  if (!currentParams.anchor || currentParams.anchor !== newParams.anchor) {
    result = false;
  }
  if (
    !currentParams.anchorType ||
    currentParams.anchorType !== newParams.anchorType
  ) {
    result = false;
  }
  if (
    !currentParams.id ||
    +currentParams.id !== +newParams.id
  ) {
    result = false;
  }

  return result;
};

export const parseParamsOfUrl = (url: string) => {
  const params = queryString.parseUrl(url).query;
  const paramAnchorType = (params.type as AnchorType) ?? null;
  const paramAnchorName = (params.name as string) ?? null;
  const paramChapterNumber = +params.number ?? null;

  return {
    paramAnchorType,
    paramAnchorName,
    paramChapterNumber,
  };
};

export const parseParamsOfUrlForImageModal = (url: string) => {
  const params = queryString.parseUrl(url).query;
  const src = (params.src as string) ?? null;

  return {
    src,
  };
};

export const getNewChapterParams = (url: string) => {
  const { paramAnchorType, paramAnchorName, paramChapterNumber } =
    parseParamsOfUrl(url);

  const newParams = {
    id: paramChapterNumber,
    anchorType: paramAnchorType,
    anchor: paramAnchorName,
    initial: false,
  } as ChapterScreenParams;

  return newParams;
};
