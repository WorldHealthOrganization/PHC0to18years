import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import ScreenParams from './ScreenParams';
import ChapterScreenParams from './ChapterScreenParams';
import Routes, {
  CounsellingBoxesRoutes,
  HomeRoutes,
  SpecificComplaintRoutes,
  ToolsRoutes,
} from '../../routing/routing';
import ToolsResultScreenParams from './ToolsResultScreenParams';
import ContentScreenParams from './ContentScreenParams';
import { GrowthMonitoringChartParams, GrowthMonitoringResultScreenParams } from './GrowthMonitoringResultScreenParams';
import { DrugCalculatorResultParams } from './DrugDosageParams';

export type RootStackParamList = {
  [Routes.BookScreen]: ScreenParams;

  [Routes.FavouritesScreen]: ScreenParams;
  [Routes.HomeScreen]: ScreenParams;
  [Routes.MaterialsScreen]: ScreenParams;
  [Routes.NotesScreen]: ScreenParams;
  [Routes.OnlyMaterials]: ScreenParams;
  [Routes.SettingsScreen]: ScreenParams;
  [Routes.CounsellingBoxes]: ScreenParams;
  [Routes.ToolsScreen]: ScreenParams;
};

export type HomeStackParamList = {
  [HomeRoutes.DefaultHomeScreen]: ScreenParams;

  [HomeRoutes.ProvidingCareScreen]: ScreenParams;
  [HomeRoutes.DiagnosticApproachesScreen]: ScreenParams;
  [HomeRoutes.WellChildVisitScreen]: ScreenParams;
  [HomeRoutes.HealthPromotionScreen]: ScreenParams;
  [HomeRoutes.NewbornHealthScreen]: ScreenParams;
  [HomeRoutes.SpecificComplaintScreen]: ScreenParams;
  [HomeRoutes.SpecificDiseaseScreen]: ScreenParams;
  [HomeRoutes.AdolescentHealthScreen]: ScreenParams;
  [HomeRoutes.EmergencyScreen]: ScreenParams;
  [HomeRoutes.PracticalProceduresScreen]: ScreenParams;
  [HomeRoutes.DrugDosagesScreen]: ScreenParams;
  [HomeRoutes.OtherScreen]: ScreenParams;

  [HomeRoutes.ChapterScreen]: ChapterScreenParams;
};

export type ToolStackParamList = {
  [ToolsRoutes.DefaultToolsScreen]: ScreenParams;
  [ToolsRoutes.DrugCalculatorToolScreen]: ScreenParams;
  [ToolsRoutes.DrugCalculatorResultScreen]: DrugCalculatorResultParams;
  [ToolsRoutes.BMIToolScreen]: ScreenParams;
  [ToolsRoutes.GrowthMonitoringToolScreen]: ScreenParams;
  [ToolsRoutes.BodySurfaceAreaToolScreen]: ScreenParams;
  [ToolsRoutes.PneumoniaToolScreen]: ScreenParams;
  [ToolsRoutes.DehydrationToolScreen]: ScreenParams;
  [ToolsRoutes.CroupToolScreen]: ScreenParams;
  [ToolsRoutes.OtitisMediaToolScreen]: ScreenParams;
  [ToolsRoutes.AsthmaToolScreen]: ScreenParams;
  [ToolsRoutes.ApgarScoreToolScreen]: ScreenParams;
  [ToolsRoutes.JaundiceToolScreen]: ScreenParams;
  [ToolsRoutes.PainScaleToolScreen]: ScreenParams;
  [ToolsRoutes.AVPUScaleToolScreen]: ScreenParams;
  [ToolsRoutes.ToolsResultScreen]: ToolsResultScreenParams;
  [ToolsRoutes.GrowthMonitoringResultScreen]: GrowthMonitoringResultScreenParams;
  [ToolsRoutes.GrowthMonitoringChartScreen]: GrowthMonitoringChartParams; 
};

export type CousellingBoxesStackParamList = {
  [CounsellingBoxesRoutes.DefaultCounsellingBoxes]: ContentScreenParams;
  [CounsellingBoxesRoutes.CounsellingBox]: ContentScreenParams;
};

export type SpecificComplaintStackParamList = Record<
  SpecificComplaintRoutes,
  ScreenParams
>;

export type GeneralNavigationProp = CompositeNavigationProp<
  BotomTabBarNavigatorProp,
  MenuNavigationProp
>;

export type MenuNavigationProp = NativeStackNavigationProp<
  HomeStackParamList &
    SpecificComplaintStackParamList &
    ToolStackParamList &
    CousellingBoxesStackParamList
>;

export type BotomTabBarNavigatorProp =
  BottomTabNavigationProp<RootStackParamList>;
