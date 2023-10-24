import React from 'react';

import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';
import otherList from '../../../data/home/nested/otherList';

const OtherScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.other}
      backgroundColor={ACCENT_COLORS.otherBackground}>
      <ChapterMenuList list={otherList} color={ACCENT_COLORS.other} />
    </ScreenMenuLayout>
  );
};

export default OtherScreen;
