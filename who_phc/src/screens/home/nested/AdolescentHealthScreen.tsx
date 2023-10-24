import React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import adolescentHealthList from '../../../data/home/nested/adolescentHealthList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const AdolescentHealthScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.adolescent}
      backgroundColor={ACCENT_COLORS.adolescentBackground}>
      <ChapterMenuList
        list={adolescentHealthList}
        color={ACCENT_COLORS.adolescent}
      />
    </ScreenMenuLayout>
  );
};

export default AdolescentHealthScreen;
