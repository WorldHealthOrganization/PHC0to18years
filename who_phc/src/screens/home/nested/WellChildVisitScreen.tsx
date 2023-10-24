import * as React from 'react';

import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import wellChildList from '../../../data/home/nested/wellChildList';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';

const WellChildVisitScreen = () => (
  <ScreenMenuLayout
    color={ACCENT_COLORS.wellChild}
    backgroundColor={ACCENT_COLORS.wellChildBackground}>
    <ChapterMenuList
      list={wellChildList}
      color={ACCENT_COLORS.wellChild}
      defaultOpen={true}
      numOfNestedCol={2}
    />
  </ScreenMenuLayout>
);

export default WellChildVisitScreen;
