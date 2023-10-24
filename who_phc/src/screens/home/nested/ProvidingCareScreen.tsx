import React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import providingCareList from '../../../data/home/nested/providingCareList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const ProvidingCareScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.providingCare}
      backgroundColor={ACCENT_COLORS.providingCareBackground}>
      <ChapterMenuList
        list={providingCareList}
        color={ACCENT_COLORS.providingCare}
      />
    </ScreenMenuLayout>
  );
};

export default ProvidingCareScreen;
