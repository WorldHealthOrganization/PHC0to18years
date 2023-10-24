import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const renalProblemsList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.RenalProblemsSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'renal-problems',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.RenalProblemsSubMenu.Proteinuria',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'proteinuria',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.Nephrotic',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'nephrotic-syndrome',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.RenalProblemsSubMenu.Haematuria',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'haematuria',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.NephriticSyndrome',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'nephritic-syndrome',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.Poststreptococcal',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'poststreptococcal-glomerulonephritis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.Haemolytic',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'haemolytic-uraemic-syndrome',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.RenalTumour',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'renal-tumour',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.RenalProblemsSubMenu.RenalFailure',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'renal-failure',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RenalProblemsSubMenu.AcuteKidneyInjury',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'acute-kidney-injury',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.RenalProblemsSubMenu.ChronicKidneyDisease',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'chronic-kidney-disease',
        id: 6,
      },
    ],
  },
];

export default renalProblemsList;
