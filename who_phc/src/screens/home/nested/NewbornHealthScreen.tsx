import React from 'react';
import ChapterMenuList from '../../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import newbornHealthList from '../../../data/home/nested/newbornHealthList';
import { ACCENT_COLORS } from '../../../styles/generalStyles.styles';

const NewbornHealthScreen = () => {
  return (
    <ScreenMenuLayout
      color={ACCENT_COLORS.newborn}
      backgroundColor={ACCENT_COLORS.newbornBackground}>
      <ChapterMenuList
        list={newbornHealthList}
        color={ACCENT_COLORS.newborn}
        numOfNestedCol={2}
      />
    </ScreenMenuLayout>
  );
};

export default NewbornHealthScreen;
