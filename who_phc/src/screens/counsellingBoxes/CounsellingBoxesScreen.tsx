import * as React from 'react';

import counselingBoxesList from '../../data/counselingBoxes/counselingBoxesList';
import ScreenMenuLayout from '../../components/layout/ScreenMenuLayout';
import { COLORS } from '../../styles/generalStyles.styles';
import CounsellingBoxesMenuList from '../../components/counsellingBoxes/CounsellingBoxesMenuList';

const CounsellingBoxesScreen: React.FC = () => (
  <ScreenMenuLayout color={COLORS.lightGrey} backgroundColor={COLORS.lightGrey}>
    <CounsellingBoxesMenuList list={counselingBoxesList} />
  </ScreenMenuLayout>
);

export default CounsellingBoxesScreen;
