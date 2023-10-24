import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const feverList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.FeverSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fever',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.FeverSubMenu.FeverLasting7Days',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fever-7-days',
    id: 6,
    nested: [
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Meningitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'meningitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Influenza',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'influenza',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Mumps',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'mumps',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.HerpeticGingivostomatitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'herpetic-gingivostomatitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Herpangina',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'herpangina',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.AcuteRheumaticFever',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'acute-rheumatic-fever',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.FeverSubMenu.FeverWithRash',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fever-with-rash',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Measles',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'measles',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.ScarletFever',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'scarlet-fever',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Rubella',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'rubella',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Erythema',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'erythema-infectiosum',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.ExanthemaSubitum',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'exanthema-subitum-roseola',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.InfectiousMononucleosis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'infectious-mononucleosis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.KawasakiDisease',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'kawasaki-disease',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Varicella',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'varicella',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.HandFoot',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'hand-foot-mouth-disease',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.FeverSubMenu.FeverLastingLongerThan7',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fever-longer-7-days',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Abscess',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'abscess',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Brucellosis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'brucellosis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.LymeDisease',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'lyme-disease',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.TickBorne',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'tick-borne-fever',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.FeverSubMenu.Boutonneuse',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boutonneuse-fever',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.FeverSubMenu.RecurrentFever',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'recurrent-fever',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.FeverSubMenu.FamilialMediterraneanFever',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'familial-mediterranean-fever',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.FeverSubMenu.FeverInTheChildComingFromAbroad',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fever-child-from-abroad',
    id: 6,
  },
];

export default feverList;
