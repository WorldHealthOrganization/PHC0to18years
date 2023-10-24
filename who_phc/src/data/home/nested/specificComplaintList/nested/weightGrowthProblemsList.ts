import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const weightGrowthProblemsList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.WeightGrowthProblemsSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'weight-growth-problems',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.WeightGrowthProblemsSubMenu.Malnutrition',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'malnutrition-thinness',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.WeightGrowthProblemsSubMenu.Overweight',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'overweight-obesity',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.WeightGrowthProblemsSubMenu.ShortStature',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'short-stature',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.WeightGrowthProblemsSubMenu.TallStature',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'tall-stature',
    id: 6,
  },
];

export default weightGrowthProblemsList;
