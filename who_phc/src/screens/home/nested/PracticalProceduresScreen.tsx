import React from 'react';

import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import practicalProceduresList from '../../../data/home/nested/practicalProceduresList';

const PracticalProceduresScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.procedures}
      backgroundColor={ACCENT_COLORS.proceduresBackground}>
      <ChapterMenuList
        list={practicalProceduresList}
        color={ACCENT_COLORS.procedures}
      />
    </ScreenMenuLayout>
  );
};

export default PracticalProceduresScreen;
