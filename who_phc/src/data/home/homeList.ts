import { HomeRoutes } from '../../routing/routing';
import { ACCENT_COLORS } from '../../styles/generalStyles.styles';

import ImageAdolescentHealth from '../../../assets/landingPage/ImageAdolescentHealth.svg';
import ImageDiagnosticApproaches from '../../../assets/landingPage/ImageDiagnosticApproaches.svg';
import ImageDrugDosages from '../../../assets/landingPage/Image Drug dosages.svg';
import ImageEmergency from '../../../assets/landingPage/Image Emergency.svg';
import ImageHealthPromotion from '../../../assets/landingPage/Image Health promotion.svg';
import ImageNewbornHealth from '../../../assets/landingPage/Image Newborn health.svg';
import ImageOther from '../../../assets/landingPage/Image Other.svg';
import ImagePracticalProcedures from '../../../assets/landingPage/Image Practical procedures.svg';
import ImageProvidingCare from '../../../assets/landingPage/Image Providing care.svg';
import ImageSpecificComplaint from '../../../assets/landingPage/Image Specific complaint.svg';
import ImageSpecificDisease from '../../../assets/landingPage/Image Specific disease.svg';
import ImageWellChild from '../../../assets/landingPage/Image Well-child.svg';
import { HomePageItem } from '../../domains/types/MenuItemT';
import { getChapter } from '../../utility/chapter';

const homeList: HomePageItem[] = [
  {
    id: 1,
    label: `ProvidingCarePage.Title`,
    svgImage: ImageProvidingCare,
    myBackgroundColor: ACCENT_COLORS.providingCare,
    path: HomeRoutes.ProvidingCareScreen,
  },
  {
    id: 2,
    label: `DiagnosticApproachesPage.Title`,
    svgImage: ImageDiagnosticApproaches,
    myBackgroundColor: ACCENT_COLORS.diagnostic,
    path: HomeRoutes.DiagnosticApproachesScreen,
  },
  {
    id: 3,
    label: `WellChildVisitPage.Title`,
    svgImage: ImageWellChild,
    myBackgroundColor: ACCENT_COLORS.wellChild,
    path: HomeRoutes.WellChildVisitScreen,
  },
  {
    id: 4,
    label: `HealthPromotionPage.Title`,
    svgImage: ImageHealthPromotion,
    myBackgroundColor: ACCENT_COLORS.healthPromotion,
    path: HomeRoutes.HealthPromotionScreen,
  },
  {
    id: 5,
    label: `NewbornHealthPage.Title`,
    svgImage: ImageNewbornHealth,
    myBackgroundColor: ACCENT_COLORS.newborn,
    path: HomeRoutes.NewbornHealthScreen,
  },
  {
    id: 6,
    label: `SpecificComplaintPage.Title`,
    svgImage: ImageSpecificComplaint,
    myBackgroundColor: ACCENT_COLORS.complaint,
    path: HomeRoutes.SpecificComplaintScreen,
  },
  {
    id: 7,
    label: `SpecificDiseasePage.Title`,
    svgImage: ImageSpecificDisease,
    myBackgroundColor: ACCENT_COLORS.disease,
    path: HomeRoutes.SpecificDiseaseScreen,
  },
  {
    id: 8,
    label: `AdolescentHealthPage.Title`,
    svgImage: ImageAdolescentHealth,
    myBackgroundColor: ACCENT_COLORS.adolescent,
    path: HomeRoutes.AdolescentHealthScreen,
  },
  {
    id: 9,
    label: `EmergencyPage.Title`,
    svgImage: ImageEmergency,
    myBackgroundColor: ACCENT_COLORS.emergency,
    path: HomeRoutes.EmergencyScreen,
  },
  {
    id: 10,
    label: `PracticalProceduresPage.Title`,
    svgImage: ImagePracticalProcedures,
    myBackgroundColor: ACCENT_COLORS.procedures,
    path: HomeRoutes.PracticalProceduresScreen,
  },
  {
    id: 11,
    label: `DrugDosagesPage.Title`,
    svgImage: ImageDrugDosages,
    myBackgroundColor: ACCENT_COLORS.drugDosages,
    path: HomeRoutes.ChapterScreen,
    params: {
      // Need to redirect to Drug dosages chapter from landing page
      id: 11,
    }
  },
  {
    id: 12,
    label: `OtherPage.Title`,
    svgImage: ImageOther,
    myBackgroundColor: ACCENT_COLORS.other,
    path: HomeRoutes.OtherScreen,
  },
];

export default homeList;
