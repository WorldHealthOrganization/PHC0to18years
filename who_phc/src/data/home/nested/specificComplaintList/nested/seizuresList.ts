import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const seizuresList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.SeizuresSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'seizures',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.SeizuresSubMenu.FebrileSeizures',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'febrile-seizure',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.SeizuresSubMenu.Epilepsy',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'epilepsy',
    id: 6,
  },
];

export default seizuresList;
