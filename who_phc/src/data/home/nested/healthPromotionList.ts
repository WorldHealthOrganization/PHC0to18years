import { ChapterItem, ChapterItemType } from '../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../routing/routing';

const healthPromotionList: ChapterItem[] = [
  {
    label: 'HealthPromotionPage.Approach',
    path: HomeRoutes.ChapterScreen,
    id: 4,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'HealthPromotionPage.Menu.EarlyChildhoodDevelopment',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'early-childhood-development',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.Vaccinations',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'vaccinations',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.ScreeningTests',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'screening-tests-monitoring',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.NutritionalCounselling',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'nutritional-counselling',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.Micronutrient',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'micronutrient-vitamin-supplements',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.OralHealth',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'oral-health',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.Sleep',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sleep',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.SedentaryBehaviour',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sedentary-behaviour',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.PhysicalActivity',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'physical-activity',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.SunProtection',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sun-protection',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.UnintentionalInjuryPrevention',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'unintentional-injury-prevention',
    id: 4,
  },
  {
    label: 'HealthPromotionPage.Menu.SupportingMentalHealth',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'promoting-mental-health-well-being',
    id: 4,
  },
];

export default healthPromotionList;
