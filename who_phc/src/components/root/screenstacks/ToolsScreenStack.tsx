import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { HomeRoutes, ToolsRoutes } from '../../../routing/routing';
import HomeScreen from '../../../screens/home/HomeScreen';

import { ACCENT_COLORS, COLORS } from '../../../styles/generalStyles.styles';
import ScreenMenuHeader from '../../home/ScreenMenuHeader';
import DrugCalculatorToolScreen from '../../../screens/tools/nested/drugCalculator/DrugCalculatorToolScreen';
import BMIToolScreen from '../../../screens/tools/nested/BMIToolScreen';
import ToolsScreen from '../../../screens/tools/ToolsScreen';
import AVPUScaleToolScreen from '../../../screens/tools/nested/AVPUScaleToolScreen';
import PainScaleToolScreen from '../../../screens/tools/nested/PainScaleToolScreen';
import JaundiceToolScreen from '../../../screens/tools/nested/JaundiceToolScreen';
import ApgarScoreToolScreen from '../../../screens/tools/nested/ApgarScoreToolScreen';
import AsthmaToolScreen from '../../../screens/tools/nested/AsthmaToolScreen';
import OtitisMediaToolScreen from '../../../screens/tools/nested/OtitisMediaToolScreen';
import CroupToolScreen from '../../../screens/tools/nested/CroupToolScreen';
import DehydrationToolScreen from '../../../screens/tools/nested/DehydrationToolScreen';
import PneumoniaToolScreen from '../../../screens/tools/nested/PneumoniaToolScreen';
import BodySurfaceAreaToolScreen from '../../../screens/tools/nested/BodySurfaceAreaToolScreen';
import GrowthMonitoringToolScreen from '../../../screens/tools/nested/growthMonitoring/GrowthMonitoringToolScreen';
import ToolsResultScreen from '../../../screens/tools/result/ToolsResultScreen';
import ToolsResultScreenParams from '../../../domains/types/ToolsResultScreenParams';
import SeverityOfAsthmaScreen from '../../../screens/tools/nested/asthmaNested/SeverityOfAsthmaScreen';
import AssessmentOfSymptomsScreen from '../../../screens/tools/nested/asthmaNested/AssessmentOfSymptomsScreen';
import GrowthMonitoringResultScreen from '../../../screens/tools/nested/growthMonitoring/GrowthMonitoringResultScreen';
import GrowthMonitoringChartScreen from '../../../screens/tools/nested/growthMonitoring/GrowthMonitoringChartScreen';
import DrugCalculatorResultScreen from '../../../screens/tools/nested/drugCalculator/DrugCalculatorResultScreen';

const ToolsStack = createNativeStackNavigator();

function ToolsScreenStack() {
  const { t } = useTranslation();
  return (
    <ToolsStack.Navigator
      initialRouteName={ToolsRoutes.DefaultToolsScreen}
      screenOptions={{
        header: ScreenMenuHeader,
        headerTintColor: COLORS.lightGrey,
        headerStyle: {
          backgroundColor: COLORS.blue,
        },
      }}>
      <ToolsStack.Screen
        name={ToolsRoutes.DefaultToolsScreen}
        component={ToolsScreen}
        options={{
          title: t`ToolsPage.Title` as string,
          headerStyle: {
            backgroundColor: COLORS.lightGrey,
          },
          headerTintColor: COLORS.darkGrey,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.DrugCalculatorToolScreen}
        component={DrugCalculatorToolScreen}
        options={{
          title: t`ToolsPage.Menu.DrugCalculator` as string,
          headerTintColor: COLORS.lightGrey,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.other,
          },
        }}
      />
       <ToolsStack.Screen
        name={ToolsRoutes.DrugCalculatorResultScreen}
        component={DrugCalculatorResultScreen}
        options={{
          title: t`ToolsPage.Menu.DrugCalculator` as string,
          headerTintColor: COLORS.lightGrey,
          headerStyle: {
            backgroundColor: ACCENT_COLORS.other,
          },
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.BMIToolScreen}
        component={BMIToolScreen}
        options={{
          title: t`ToolsPage.Menu.BMI` as string,
          headerTintColor: COLORS.lightGrey,
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.GrowthMonitoringToolScreen}
        component={GrowthMonitoringToolScreen}
        options={{
          title: t`ToolsPage.Menu.GrowthMonitoring` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.BodySurfaceAreaToolScreen}
        component={BodySurfaceAreaToolScreen}
        options={{
          title: t`ToolsPage.Menu.BodySurfaceArea` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.PneumoniaToolScreen}
        component={PneumoniaToolScreen}
        options={{
          title: t`ToolsPage.Menu.Pneumonia` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.DehydrationToolScreen}
        component={DehydrationToolScreen}
        options={{
          title: t`ToolsPage.Menu.Dehydration` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.CroupToolScreen}
        component={CroupToolScreen}
        options={{
          title: t`ToolsPage.Menu.Croup` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.OtitisMediaToolScreen}
        component={OtitisMediaToolScreen}
        options={{
          title: t`ToolsPage.Menu.OtitisMedia` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.AsthmaToolScreen}
        component={AsthmaToolScreen}
        options={{
          title: t`ToolsPage.Menu.Asthma` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.ApgarScoreToolScreen}
        component={ApgarScoreToolScreen}
        options={{
          title: t`ToolsPage.Menu.ApgarScore` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.JaundiceToolScreen}
        component={JaundiceToolScreen}
        options={{
          title: t`ToolsPage.Menu.Jaundice` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.PainScaleToolScreen}
        component={PainScaleToolScreen}
        options={{
          title: t`ToolsPage.Menu.PainScale` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.AVPUScaleToolScreen}
        component={AVPUScaleToolScreen}
        options={{
          title: t`ToolsPage.Menu.AVPUScale` as string,
        }}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.ToolsResultScreen}
        component={ToolsResultScreen}
        options={({ route }) => ({
          title: (route.params as ToolsResultScreenParams).title as string,
        })}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.GrowthMonitoringResultScreen}
        component={GrowthMonitoringResultScreen}
        options={({ route }) => ({
          title: t`ToolsPage.Menu.GrowthMonitoring` as string,
        })}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.GrowthMonitoringChartScreen}
        component={GrowthMonitoringChartScreen}
        options={({ route }) => ({
          title: t`ToolsPage.Menu.GrowthMonitoring` as string,
        })}
      />
      <ToolsStack.Screen
        name={ToolsRoutes.SeverityOfAsthmaScreen}
        component={SeverityOfAsthmaScreen}
        options={{
          title: t`ToolsPage.Menu.Asthma` as string,
        }}
      />
       <ToolsStack.Screen
        name={ToolsRoutes.AssessmentOfSymptomsScreen}
        component={AssessmentOfSymptomsScreen}
        options={{
          title: t`ToolsPage.Menu.Asthma` as string,
        }}
      />
    </ToolsStack.Navigator>
  );
}

export default ToolsScreenStack;
