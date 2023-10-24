import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const heartMurmurList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.HeartMurmurSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'heart-murmur',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.HeartMurmurSubMenu.Innocent',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'innocent-murmur',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.HeartMurmurSubMenu.Pathological',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'pathological-murmur',
    id: 6,
  },
];

export default heartMurmurList;
