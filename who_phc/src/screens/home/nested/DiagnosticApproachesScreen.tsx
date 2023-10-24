import React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import diagnosticApproachesList from '../../../data/home/nested/diagnosticApproachesList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const DiagnosticApproachesScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.diagnostic}
      backgroundColor={ACCENT_COLORS.diagnosticBackground}>
      <ChapterMenuList
        list={diagnosticApproachesList}
        color={ACCENT_COLORS.diagnostic}
      />
    </ScreenMenuLayout>
  );
};

export default DiagnosticApproachesScreen;
