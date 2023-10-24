import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const coughList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.CoughSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'cough-difficulty-breathing',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.CoughOrCommonCold',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'cough-common-cold',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.AcuteBronchitis',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'acute-bronchitis',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.Pneumonia',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'pneumonia',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.COVID19',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'covid-19',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.Wheeze',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'wheeze',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.CoughSubMenu.Bronchiolitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'bronchiolitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.CoughSubMenu.Recurrent',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'recurrent-wheezing',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.Stridor',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'stridor',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.CoughSubMenu.ViralCroup',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'viral-croup',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.CoughSubMenu.RetropharyngealAbscess',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'retropharyngeal-abscess',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.CoughSubMenu.Diphtheria',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'diphtheria',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.CoughSubMenu.Epiglottitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'epiglottitis',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.CoughSubMenu.ChronicCough',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'chronic-cough',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.CoughSubMenu.Pertussis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'pertussis',
        id: 6,
      },
    ],
  },
];

export default coughList;
