import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const palpitationsList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.PalpitationsSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'palpitations',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.PalpitationsSubMenu.Arrhythmias',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'arrhythmias',
    id: 6,
  },
];

export default palpitationsList;
