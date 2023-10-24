import * as React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import emergencyList from '../../../data/home/nested/emergencyList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const EmergencyScreen: React.FC = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.emergency}
      backgroundColor={ACCENT_COLORS.emergencyBackground}>
      <ChapterMenuList list={emergencyList} color={ACCENT_COLORS.emergency} />
    </ScreenMenuLayout>
  );
};

export default EmergencyScreen;
