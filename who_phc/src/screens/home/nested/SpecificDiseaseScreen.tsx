import * as React from 'react';

import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import specificDiseaseList from '../../../data/home/nested/specificDiseaseList';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';

const SpecificDiseaseScreen = () => (
  <ScreenMenuLayout
    color={ACCENT_COLORS.disease}
    backgroundColor={ACCENT_COLORS.diseaseBackground}>
    <ChapterMenuList list={specificDiseaseList} color={ACCENT_COLORS.disease} />
  </ScreenMenuLayout>
);

export default SpecificDiseaseScreen;
