import { ACCENT_COLORS } from '../styles/generalStyles.styles';

export const getChapter = (id: number) => {
  switch (id) {
    case 1:
      return {
        fileName: 'PB_Primary_care_Ch1',
        title: `ProvidingCarePage.Title`,
        color: ACCENT_COLORS.providingCare,
      };
    case 2:
      return {
        fileName: 'PB_Primary_care_Ch2',
        title: `DiagnosticApproachesPage.Title`,
        color: ACCENT_COLORS.diagnostic,
      };
    case 3:
      return {
        fileName: 'PB_Primary_care_Ch3',
        title: `WellChildVisitPage.Title`,
        color: ACCENT_COLORS.wellChild,
      };
    case 4:
      return {
        fileName: 'PB_Primary_care_Ch4',
        title: `HealthPromotionPage.Title`,
        color: ACCENT_COLORS.healthPromotion,
      };
    case 5:
      return {
        fileName: 'PB_Primary_care_Ch5',
        title: `NewbornHealthPage.Title`,
        color: ACCENT_COLORS.newborn,
      };
    case 6:
      return {
        fileName: 'PB_Primary_care_Ch6',
        title: `SpecificComplaintPage.Title`,
        color: ACCENT_COLORS.complaint,
      };
    case 7:
      return {
        fileName: 'PB_Primary_care_Ch7',
        title: `SpecificDiseasePage.Title`,
        color: ACCENT_COLORS.disease,
      };
    case 8:
      return {
        fileName: 'PB_Primary_care_Ch8',
        title: `AdolescentHealthPage.Title`,
        color: ACCENT_COLORS.adolescent,
      };
    case 9:
      return {
        fileName: 'PB_Primary_care_Ch9',
        title: `EmergencyPage.Title`,
        color: ACCENT_COLORS.emergency,
      };
    case 10:
      return {
        fileName: 'PB_Primary_care_Ch10',
        title: `PracticalProceduresPage.Title`,
        color: ACCENT_COLORS.procedures,
      };
    case 11:
      return {
        fileName: 'PB_Primary_care_Ch11',
        title: `DrugDosagesPage.Title`,
        color: ACCENT_COLORS.drugDosages,
      };
    case 12:
      return {
        fileName: 'PB_Primary_care_Ch12',
        title: `OtherPage.Title`,
        color: ACCENT_COLORS.other,
      };

    default:
      return {
        fileName: 'PB_Primary_care_Ch1',
        title: `ProvidingCarePage.Title`,
        color: ACCENT_COLORS.providingCare,
      };
  }
};
