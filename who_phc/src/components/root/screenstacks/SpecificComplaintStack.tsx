import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { SpecificComplaintRoutes } from '../../../routing/routing';
import SpecificComplaintScreen from '../../../screens/home/nested/SpecificComplaintScreen/SpecificComplaintScreen';
import { ACCENT_COLORS, COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuHeader from '../../home/ScreenMenuHeader';
import specificComplaintList from '../../../data/home/nested/specificComplaintList/specificComplaintList';
import ScreenMenuLayout from '../../layout/ScreenMenuLayout';
import ChapterMenuList from '../../home/menu/ChapterMenuList';

const SpecificComplaintStack = createNativeStackNavigator();

function SpecificComplaintScreenStack() {
  const { t } = useTranslation();

  return (
    <SpecificComplaintStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        header: ScreenMenuHeader,
        headerStyle: {
          backgroundColor: ACCENT_COLORS.complaint,
        },
      }}
      initialRouteName={SpecificComplaintRoutes.DefaultSpecificComplaintScreen}>
      <SpecificComplaintStack.Screen
        name={SpecificComplaintRoutes.DefaultSpecificComplaintScreen}
        component={SpecificComplaintScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`SpecificComplaintPage.Title` as string,
        }}
      />

      {specificComplaintList.map(
        screen =>
          screen.nestedScreenList && (
            <SpecificComplaintStack.Screen
              name={screen.path}
              initialParams={{ sorted: true }}
              options={{ title: t(screen.label) }}>
              {() => (
                <ScreenMenuLayout
                  color={ACCENT_COLORS.complaint}
                  backgroundColor={ACCENT_COLORS.complaintBackground}>
                  <ChapterMenuList
                    list={screen.nestedScreenList}
                    color={ACCENT_COLORS.complaint}
                    lightColor={ACCENT_COLORS.complaintLight}
                  />
                </ScreenMenuLayout>
              )}
            </SpecificComplaintStack.Screen>
          ),
      )}
    </SpecificComplaintStack.Navigator>
  );
}

export default SpecificComplaintScreenStack;
