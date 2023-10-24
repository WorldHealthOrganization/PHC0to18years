import { View, Text } from 'react-native';
import React from 'react';
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout';
import { COLORS } from '../../../styles/generalStyles.styles';
import { avpuDataList } from '../../../data/tools/nested/avpuTool';
import AvpuItem from '../../../components/UI/tools/AvpuItem';
import { t } from 'i18next';
import ToolScreenLayout from '../../../components/layout/ToolScreenLayout';

const AVPUScaleToolScreen = () => {
  return (
    <ScreenMenuLayout
      color={COLORS.lightGrey}
      backgroundColor={COLORS.lightGrey}>
      <ToolScreenLayout
        result={t`AVPUToolPage.Description`}
        form={
          <View style={{ paddingHorizontal: 10 }}>
            {avpuDataList.map(item => {
              return (
                <AvpuItem
                  key={item.id}
                  letter={item.letter}
                  text={item.text}
                  descripton={item.description}
                />
              );
            })}
          </View>
        }
        button={null}
      />
    </ScreenMenuLayout>
  );
};

export default AVPUScaleToolScreen;
