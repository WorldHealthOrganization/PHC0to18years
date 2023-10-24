import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { CounsellingBoxesRoutes } from '../../../routing/routing';
import { COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuHeader from '../../home/ScreenMenuHeader';
import CounsellingBoxesScreen from '../../../screens/counsellingBoxes/CounsellingBoxesScreen';
import CounsellingBoxScreen from '../../../screens/counsellingBoxes/CounsellingBoxScreen';
import { getCounsellingBox } from '../../../utility/counsellingBoxes';
import ScreenParams from '../../../domains/types/ScreenParams';

const CounsellingBoxesStack = createNativeStackNavigator();

function CounsellingBoxesScreenStack() {
  const { t } = useTranslation();
  return (
    <CounsellingBoxesStack.Navigator
      initialRouteName={CounsellingBoxesRoutes.DefaultCounsellingBoxes}
      screenOptions={{
        header: ScreenMenuHeader,
        headerTintColor: COLORS.white,
      }}>
      <CounsellingBoxesStack.Screen
        name={CounsellingBoxesRoutes.DefaultCounsellingBoxes}
        component={CounsellingBoxesScreen}
        options={{
          title: t`CounsellingBoxesPage.Title` as string,
          headerStyle: {
            backgroundColor: COLORS.lightGrey,
          },
          headerTintColor: COLORS.darkGrey,
        }}
      />
      <CounsellingBoxesStack.Screen
        name={CounsellingBoxesRoutes.CounsellingBox}
        component={CounsellingBoxScreen}
        options={({ route }) => {
          const box = getCounsellingBox((route.params as ScreenParams)?.id);
          return {
            title:
              t`CounsellingBoxesPage.BoxHeaderTitle` +
              ' ' +
              (route.params as ScreenParams)?.id,
            // title: t(box.boxTitle),
            headerStyle: {
              backgroundColor: box.color,
              // backgroundColor: COLORS.white,
            },
            // headerTintColor: box.color,
          };
        }}
      />
    </CounsellingBoxesStack.Navigator>
  );
}

export default CounsellingBoxesScreenStack;
