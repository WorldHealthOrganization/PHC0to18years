import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const eyeProblemsList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'eye-problems',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.ReducedVision',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'reduced-vision',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.RedEyes',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'red-eyes',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.InflammationsAroundTheEye',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'inflammation-around-eye',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.InflammationOfTheEyelid',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'inflammation-of-eyelid',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.ExcessiveWatering',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'excessive-watering-of-eye',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EyeProblemsSubMenu.WhitePupil',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'leukocoria',
    id: 6,
  },
];

export default eyeProblemsList;
