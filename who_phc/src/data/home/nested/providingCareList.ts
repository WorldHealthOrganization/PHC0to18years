import { ChapterItem } from '../../../domains/types/MenuItemT';
import Routes, { HomeRoutes } from '../../../routing/routing';

const providingCareList: ChapterItem[] = [
  {
    label: 'ProvidingCarePage.Menu.TheRoleOfThePrimaryHealthCareProvider',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'primary-health-care-provider',
    id: 1,
  },
  {
    label: 'ProvidingCarePage.Menu.GeneralStandards',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'general-standarts-principles',
    id: 1,
    nested: [
      {
        label: 'ProvidingCarePage.Menu.WHOQuality',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'who-quality-care-standards',
        id: 1,
      },
      {
        label: 'ProvidingCarePage.Menu.ConventionRightsChild',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'convention-rights-child',
        id: 1,
      },
    ],
  },
  {
    label: 'ProvidingCarePage.Menu.DeliveringCare',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'delivering-effective-care',
    id: 1,
    nested: [
      {
        label:
          'ProvidingCarePage.Menu.ChildrenAndAdolescentsInVulnerableSituations',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'children-adolescents-vulnerable-situations',
        id: 1,
      },
      {
        label: 'ProvidingCarePage.Menu.MigrantAndRefugee',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'migrant-refugee-children-adolescents',
        id: 1,
      },
    ],
  },
];

export default providingCareList;
