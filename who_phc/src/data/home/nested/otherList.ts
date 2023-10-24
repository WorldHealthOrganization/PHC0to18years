import { ChapterItem } from '../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../routing/routing';

const otherList: ChapterItem[] = [
  {
    label: 'OtherPage.Menu.CreatingChildAdolescentFriendly',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'child-adolescent-friendly-environment',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.Triage',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'triage-at-the-first-point-contact',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.InfectionPrevention',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'infection-prevention-control',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.Equipment',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'equipment',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.EmergencyDrugs',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'emergency-drugs',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.LaboratoryTests',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'laboratory-tests-radiological-investigations',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.Referral',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'referral-newborns-children-adolescents',
    id: 12,
  },
  {
    label: 'OtherPage.Menu.CalculatingChildWeightForAge',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'calculating-weight-for-age',
    id: 12,
    nested: [
      {
        label: 'OtherPage.Menu.GirlsWeightForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'girls-weight-for-age',
        id: 12,
      },
      {
        label: 'OtherPage.Menu.BoysWeightForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boys-weight-for-age',
        id: 12,
      },
    ],
  },
  {
    label: 'OtherPage.Menu.CalculatingChildHeightForAge',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'calculating-length-height-for-age',
    id: 12,
    nested: [
      {
        label: 'OtherPage.Menu.GirlsHeightForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'girls-length-height-for-age',
        id: 12,
      },
      {
        label: 'OtherPage.Menu.BoysHeightForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boys-length-height-for-age',
        id: 12,
      },
    ],
  },
  {
    label: 'OtherPage.Menu.CalculatingChildWeightForLength',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'calculating-weight-for-length-height',
    id: 12,
    nested: [
      {
        label: 'OtherPage.Menu.GirlsWeightForLength',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'girls-weight-for-length-height',
        id: 12,
      },
      {
        label: 'OtherPage.Menu.BoysWeightForLength',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boys-weight-for-length-height',
        id: 12,
      },
    ],
  },
  {
    label: 'OtherPage.Menu.CalculatingChildBMIForAge',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'calculating-bmi-for-age',
    id: 12,
    nested: [
      {
        label: 'OtherPage.Menu.GirlsBMIForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'girls-bmi-for-age',
        id: 12,
      },
      {
        label: 'OtherPage.Menu.BoysBMIForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boys-bmi-for-age',
        id: 12,
      },
    ],
  },
  {
    label: 'OtherPage.Menu.CalculatingChildHeadCircumferenceForAge',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'calculating-head-circumference',
    id: 12,
    nested: [
      {
        label: 'OtherPage.Menu.GirlsHeadCircumferenceForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'girls-head-circumference',
        id: 12,
      },
      {
        label: 'OtherPage.Menu.BoysHeadCircumferenceForAge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'boys-head-circumference',
        id: 12,
      },
    ],
  },
];

export default otherList;
