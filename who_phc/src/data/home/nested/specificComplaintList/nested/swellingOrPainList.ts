import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const swellingOrPainList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.SwellingOrPainSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'swellig-pain-joints-bones',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.SwellingOrPainSubMenu.Rickets',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'rickets',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.SwellingOrPainSubMenu.Juvenile',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'juvenile-idiopathic-arthritis',
    id: 6,
  },
];

export default swellingOrPainList;
