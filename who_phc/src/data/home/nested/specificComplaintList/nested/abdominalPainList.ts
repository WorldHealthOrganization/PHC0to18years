import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const abdominalPainList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.AbdominalPainSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'abdominal-pain',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.AbdominalPainSubMenu.Functional',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'functional-abdominal-pain',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.AbdominalPainSubMenu.Mesenteric',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'mesenteric-adenitis',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.AbdominalPainSubMenu.Constipation',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'constipation',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.AbdominalPainSubMenu.Peptic',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'peptic-ulcer-disease',
    id: 6,
  },
];

export default abdominalPainList;
