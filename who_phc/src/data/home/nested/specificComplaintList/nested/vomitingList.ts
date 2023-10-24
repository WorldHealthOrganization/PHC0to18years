import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const vomitingList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.VomitingSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'vomiting',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.VomitingSubMenu.Motion',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'motion-travel-sickness',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.VomitingSubMenu.Gastroesophageal',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'gastroesophageal-reflux-disease',
    id: 6,
  },
];

export default vomitingList;
