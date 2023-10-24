import React from 'react';
import ChapterMenuList from '../../components/home/menu/ChapterMenuList';
import ScreenMenuLayout from '../../components/layout/ScreenMenuLayout';
import toolsList from '../../data/tools/toolsList';
import { COLORS } from '../../styles/generalStyles.styles';

const ToolsScreen = () => {
  return (
    <ScreenMenuLayout
      color={COLORS.lightGrey}
      backgroundColor={COLORS.lightGrey}>
      <ChapterMenuList
        list={toolsList}
        color={COLORS.blue}
        listItemStyle={{ backgroundColor: COLORS.white }}
      />
    </ScreenMenuLayout>
  );
};

export default ToolsScreen;
