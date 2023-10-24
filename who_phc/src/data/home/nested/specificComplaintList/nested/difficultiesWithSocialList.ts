import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const difficultiesWithSocialList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.DifficultiesWithSocialSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'social-interaction-difficulties',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.DifficultiesWithSocialSubMenu.Schizophrenia',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'schizophrenia',
    id: 6,
  },
];

export default difficultiesWithSocialList;
