import { ColorValue } from 'react-native';
import AnchorType from '../enums/AnchorType';
import ContentScreenParams from './ContentScreenParams';

interface ChapterScreenParams extends ContentScreenParams {
  id: number;
  idSubchapterInHTML?: string;
  anchor?: string;
  anchorType?: AnchorType;
}

export default ChapterScreenParams;
