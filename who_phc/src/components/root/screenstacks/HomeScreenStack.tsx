import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { HomeRoutes } from '../../../routing/routing';
import HomeScreen from '../../../screens/home/HomeScreen';
import ProvidingCareScreen from '../../../screens/home/nested/ProvidingCareScreen';
import DiagnosticApproachesScreen from '../../../screens/home/nested/DiagnosticApproachesScreen';
import AdolescentHealthScreen from '../../../screens/home/nested/AdolescentHealthScreen';
import DrugDosagesScreen from '../../../screens/home/nested/DrugDosagesScreen';
import EmergencyScreen from '../../../screens/home/nested/EmergencyScreen';
import HealthPromotionScreen from '../../../screens/home/nested/HealthPromotionScreen';
import NewbornHealthScreen from '../../../screens/home/nested/NewbornHealthScreen';
import OtherScreen from '../../../screens/home/nested/OtherScreen';
import PracticalProceduresScreen from '../../../screens/home/nested/PracticalProceduresScreen';
import SpecificDiseaseScreen from '../../../screens/home/nested/SpecificDiseaseScreen';
import WellChildVisitScreen from '../../../screens/home/nested/WellChildVisitScreen';
import { ACCENT_COLORS, COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuHeader from '../../home/ScreenMenuHeader';
import ChapterScreen from '../../../screens/materials/ChapterScreen';
import SpecificComplaintScreenStack from './SpecificComplaintStack';
import { HomeStackParamList } from '../../../domains/types/Routing';
import { getChapter } from '../../../utility/chapter';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeScreenStack() {
  const { t } = useTranslation();
  return (
    <HomeStack.Navigator
      initialRouteName={HomeRoutes.DefaultHomeScreen}
      screenOptions={{
        headerTintColor: COLORS.white,
        header: ScreenMenuHeader,
      }}>
      <HomeStack.Screen
        name={HomeRoutes.DefaultHomeScreen}
        component={HomeScreen}
        options={{
          title: t`HomePage.Title` as string,
          headerTintColor: COLORS.darkGrey,
          headerStyle: {
            backgroundColor: COLORS.lightGrey,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.ChapterScreen}
        component={ChapterScreen}
        options={({ route }) => {
          const chapter = getChapter(route.params?.id);
          return {
            title: t(route.params.title ?? chapter.title),
            headerStyle: {
              backgroundColor: route.params.color ?? chapter.color,
            },
          };
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.ProvidingCareScreen}
        component={ProvidingCareScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`ProvidingCarePage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.providingCare,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.DiagnosticApproachesScreen}
        component={DiagnosticApproachesScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`DiagnosticApproachesPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.diagnostic,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.AdolescentHealthScreen}
        component={AdolescentHealthScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`AdolescentHealthPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.adolescent,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.DrugDosagesScreen}
        component={DrugDosagesScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`DrugDosagesPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.drugDosages,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.EmergencyScreen}
        component={EmergencyScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`EmergencyPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.emergency,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.HealthPromotionScreen}
        component={HealthPromotionScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`HealthPromotionPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.healthPromotion,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.NewbornHealthScreen}
        component={NewbornHealthScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`NewbornHealthPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.newborn,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.OtherScreen}
        component={OtherScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`OtherPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.other,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.PracticalProceduresScreen}
        component={PracticalProceduresScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`PracticalProceduresPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.procedures,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.SpecificComplaintScreen}
        component={SpecificComplaintScreenStack}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomeRoutes.SpecificDiseaseScreen}
        component={SpecificDiseaseScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`SpecificDiseasePage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.disease,
          },
        }}
      />
      <HomeStack.Screen
        name={HomeRoutes.WellChildVisitScreen}
        component={WellChildVisitScreen}
        initialParams={{ sorted: true }}
        options={{
          title: t`WellChildVisitPage.Title` as string,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.wellChild,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;
