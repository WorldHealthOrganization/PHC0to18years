import { ChapterItem } from '../../../../../domains/types/MenuItemT';
import Routes, { HomeRoutes } from '../../../../../routing/routing';

const injuriesList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.WoundsCuts',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'wounds-cuts-grazes',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.BluntInjuries',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'blunt-injuries',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.AnimalBites',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'animal-bites',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.InsectBites',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'insect-bites-stings',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.BurnsAndScalds',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'burns-scalds',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.HeadInjuries',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'head-injuries',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.Sprains',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sprains',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.PulledElbow',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'pulled-elbow',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.InjuriesSubMenu.Fractures',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fractures',
    id: 6,
  },
];

export default injuriesList;
