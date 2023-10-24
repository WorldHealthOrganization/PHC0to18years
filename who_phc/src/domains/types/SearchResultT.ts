import { ColorValue } from 'react-native';

import ScreenParams from './ScreenParams';
import SearchResultType from '../enums/SearchResultType';

export type RangeTuple = [number, number];

type SearchResultT = {
  id: string;
  title: string;
  content: string;
  color: ColorValue;
  type: SearchResultType;
  path: any;
  score?: number;
  params?: ScreenParams;
  matches: readonly RangeTuple[];
};

export default SearchResultT;
