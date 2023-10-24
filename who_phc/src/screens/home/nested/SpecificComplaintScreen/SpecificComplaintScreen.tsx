import React from 'react';

import ChapterMenuList from '../../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../../components/layout/ScreenMenuLayout';
import specificComplaintList from '../../../../data/home/nested/specificComplaintList/specificComplaintList';
import { ACCENT_COLORS } from '../../../../styles/generalStyles.styles';

const SpecificComplaintScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.complaint}
      backgroundColor={ACCENT_COLORS.complaintBackground}>
      <ChapterMenuList
        list={specificComplaintList}
        color={ACCENT_COLORS.complaint}
        numColumns={2}
      />
    </ScreenMenuLayout>
  );
};

export default SpecificComplaintScreen;
