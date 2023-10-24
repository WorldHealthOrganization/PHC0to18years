import React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import healthPromotionList from '../../../data/home/nested/healthPromotionList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const HealthPromotionScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.healthPromotion}
      backgroundColor={ACCENT_COLORS.healthPromotionBackground}>
      <ChapterMenuList
        list={healthPromotionList}
        color={ACCENT_COLORS.healthPromotion}
      />
    </ScreenMenuLayout>
  );
};

export default HealthPromotionScreen;
