import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const jaundiceList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.JaundiceSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'jaundice',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.JaundiceSubMenu.Viral',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'viral-hepatitis',
    id: 6,
  },
];

export default jaundiceList;
