import { ACCENT_COLORS } from '../styles/generalStyles.styles';
import BoxChapter4 from '../../assets/counsellingBoxes/icon-CB-1-16.svg';
import BoxChapter5 from '../../assets/counsellingBoxes/icon-CB-17-21.svg';
import BoxChapter6 from '../../assets/counsellingBoxes/icon-CB-22-40.svg';
import BoxChapter7 from '../../assets/counsellingBoxes/icon-CB-41-42.svg';

export const getCounsellingBox = (counsellingBoxId: number) => {
  let icon = BoxChapter4;
  let color = ACCENT_COLORS.healthPromotion;
  let lightColor = ACCENT_COLORS.healthPromotionLight;

  switch (true) {
    case counsellingBoxId >= 1 && counsellingBoxId <= 16: {
      icon = BoxChapter4;
      color = ACCENT_COLORS.healthPromotion;
      lightColor = ACCENT_COLORS.healthPromotionLight;
      break;
    }
    case counsellingBoxId >= 17 && counsellingBoxId <= 21: {
      icon = BoxChapter5;
      color = ACCENT_COLORS.newborn;
      lightColor = ACCENT_COLORS.newbornLight;
      break;
    }
    case counsellingBoxId >= 22 && counsellingBoxId <= 40: {
      icon = BoxChapter6;
      color = ACCENT_COLORS.complaint;
      lightColor = ACCENT_COLORS.complaintLight;
      break;
    }
    case counsellingBoxId >= 41 && counsellingBoxId <= 42: {
      icon = BoxChapter7;
      color = ACCENT_COLORS.disease;
      lightColor = ACCENT_COLORS.diseaseLight;
      break;
    }
  }

  if (counsellingBoxId) {
    return {
      fileName: `PB_CB_${counsellingBoxId}`,
      title: `CounsellingBoxesPage.Menu.${counsellingBoxId}`,
      boxTitle: `CounsellingBoxesPage.BoxTitle.${counsellingBoxId}`,
      icon,
      color,
      lightColor,
    };
  }

  return {
    fileName: `PB_CB_1`,
    title: `CounsellingBoxesPage.Menu.1`,
    boxTitle: `CounsellingBoxesPage.BoxTitle.1`,
    icon,
    color,
    lightColor,
  };
};
