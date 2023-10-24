import { ChapterItem, ChapterItemType } from '../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../routing/routing';

const wellChildList: ChapterItem[] = [
  {
    label: 'WellChildVisitPage.Approach',
    path: HomeRoutes.ChapterScreen,
    id: 3,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'WellChildVisitPage.Menu.GrowthMonitoring',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'growth-monitoring',
    id: 3,
    nested: [
      {
        label: 'WellChildVisitPage.Menu.ChildLessThan5',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'children-less-than-5',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.ChildMoreThan5',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'children-greater-than-5',
        id: 3,
      },
    ],
  },
  {
    label: 'WellChildVisitPage.Menu.AgeOfWellChildVisits',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'well-child-visit-birth-72',
    id: 3,
    nested: [
      {
        label: 'WellChildVisitPage.Menu.Birth72hours',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-birth-72',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.1Week',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-1-week',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.1Month',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-1-month',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.3Month',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-3-months',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.6Month',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-6-months',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.1Year',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-1-year',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.2Year',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-2-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.3Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-3-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.4Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-4-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.5Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-5-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.8Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-8-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.10Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-10-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.12Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-12-years',
        id: 3,
      },
      {
        label: 'WellChildVisitPage.Menu.14Years',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'well-child-visit-14-years',
        id: 3,
      },
    ],
  },
];

export default wellChildList;
