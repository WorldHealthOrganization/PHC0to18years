import { NavigateItem } from '../../domains/types/MenuItemT';
import { ToolsRoutes } from '../../routing/routing';

const toolsList: NavigateItem<any>[] = [
  {
    path: ToolsRoutes.DrugCalculatorToolScreen,
    label: 'ToolsPage.Menu.DrugCalculator',
  },
  {
    path: ToolsRoutes.BMIToolScreen,
    label: 'ToolsPage.Menu.BMI',
  },
  {
    path: ToolsRoutes.GrowthMonitoringToolScreen,
    label: 'ToolsPage.Menu.GrowthMonitoring',
  },
  {
    path: ToolsRoutes.BodySurfaceAreaToolScreen,
    label: 'ToolsPage.Menu.BodySurfaceArea',
  },
  {
    path: ToolsRoutes.PneumoniaToolScreen,
    label: 'ToolsPage.Menu.Pneumonia',
  },
  {
    path: ToolsRoutes.DehydrationToolScreen,
    label: 'ToolsPage.Menu.Dehydration',
  },
  {
    path: ToolsRoutes.CroupToolScreen,
    label: 'ToolsPage.Menu.Croup',
  },
  {
    path: ToolsRoutes.OtitisMediaToolScreen,
    label: 'ToolsPage.Menu.OtitisMedia',
  },
  {
    path: ToolsRoutes.AsthmaToolScreen,
    label: 'ToolsPage.Menu.Asthma',
  },
  {
    path: ToolsRoutes.ApgarScoreToolScreen,
    label: 'ToolsPage.Menu.ApgarScore',
  },
  {
    path: ToolsRoutes.JaundiceToolScreen,
    label: 'ToolsPage.Menu.Jaundice',
  },
  {
    path: ToolsRoutes.PainScaleToolScreen,
    label: 'ToolsPage.Menu.PainScale',
  },
  {
    path: ToolsRoutes.AVPUScaleToolScreen,
    label: 'ToolsPage.Menu.AVPUScale',
  },
];

export default toolsList;
