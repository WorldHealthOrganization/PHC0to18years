import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const pallorList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.PallorSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'pallor',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.PallorSubMenu.Anaemia',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'anaemia',
    id: 6,
  },
];

export default pallorList;
