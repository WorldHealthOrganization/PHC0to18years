import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const headacheList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.HeadacheSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'headache',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.HeadacheSubMenu.Temporomandibular',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'temporomandibular-joint-syndrome',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.HeadacheSubMenu.TensionType',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'tension-type-headache',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.HeadacheSubMenu.Migraine',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'migraine',
    id: 6,
  },
];

export default headacheList;
