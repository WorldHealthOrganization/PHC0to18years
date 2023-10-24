import SeverityOfAsthma from "../screens/tools/nested/asthmaNested/SeverityOfAsthmaScreen";

enum Routes {
  HomeScreen = 'HomeScreen',
  CounsellingBoxes = 'CounsellingBoxes',
  MaterialsScreen = 'MaterialsScreen',
  OnlyMaterials = 'OnlyMaterials',
  BookScreen = 'BookScreen',
  ToolsScreen = 'ToolsScreen',
  NotesScreen = 'NotesScreen',
  FavouritesScreen = 'FavouritesScreen',
  SettingsScreen = 'SettingsScreen',
}

export const DEFAULT_ROUTE = Routes.HomeScreen;

export enum HomeRoutes {
  DefaultHomeScreen = 'DefaultHomeScreen',
  ProvidingCareScreen = 'ProvidingCareScreen',
  AdolescentHealthScreen = 'AdolescentHealthScreen',
  DiagnosticApproachesScreen = 'DiagnosticApproachesScreen',
  DrugDosagesScreen = 'DrugDosagesScreen',
  EmergencyScreen = 'EmergencyScreen',
  HealthPromotionScreen = 'HealthPromotionScreen',
  NewbornHealthScreen = 'NewbornHealthScreen',
  OtherScreen = 'OtherScreen',
  PracticalProceduresScreen = 'PracticalProceduresScreen',
  SpecificComplaintScreen = 'SpecificComplaintScreen',
  SpecificDiseaseScreen = 'SpecificDiseaseScreen',
  WellChildVisitScreen = 'WellChildVisitScreen',

  ChapterScreen = 'ChapterScreen',
}

export enum CounsellingBoxesRoutes {
  DefaultCounsellingBoxes = 'DefaultCounsellingBoxes',
  CounsellingBox = 'CounsellingBox',
}

export enum SpecificComplaintRoutes {
  DefaultSpecificComplaintScreen = 'DefaultSpecificComplaintScreen',
  CoughScreen = 'CoughScreen',
  EarNoseThroatScreen = 'EarNoseThroatScreen',
  FeverScreen = 'FeverScreen',
  DiarrhoeaScreen = 'DiarrhoeaScreen',
  VomitingScreen = 'VomitingScreen',
  AbdominalPainScreen = 'AbdominalPainScreen',
  // ChestPainScreen = 'ChestPainScreen',
  HeartMurmurScreen = 'HeartMurmurScreen',
  PalpitationsScreen = 'PalpitationsScreen',
  // SyncopeScreen = 'SyncopeScreen',
  // HighBloodScreen = 'HighBloodScreen',
  RenalProblemsScreen = 'RenalProblemsScreen',
  GenitourinarySymptomsScreen = 'GenitourinarySymptomsScreen',
  RashesItchScreen = 'RashesItchScreen',
  PallorScreen = 'PallorScreen',
  JaundiceScreen = 'JaundiceScreen',
  SwellingOrPainScreen = 'SwellingOrPainScreen',
  // LumpsSwellingsScreen = 'LumpsSwellingsScreen',
  EyeProblemsScreen = 'EyeProblemsScreen',
  HeadacheScreen = 'HeadacheScreen',
  SeizuresScreen = 'SeizuresScreen',
  // LowFloppyMuscleScreen = 'LowFloppyMuscleScreen',
  InjuriesScreen = 'InjuriesScreen',
  // ForeignBodiesScreen = 'ForeignBodiesScreen',
  // PainScreen = 'PainScreen',
  WeightGrowthProblemsScreen = 'WeightGrowthProblemsScreen',
  // HeadSizeVariationsScreen = 'HeadSizeVariationsScreen',
  // LowMoodDepressionScreen = 'LowMoodDepressionScreen',
  // SuicidalThoughtsScreen = 'SuicidalThoughtsScreen',
  // FearAnxietyScreen = 'FearAnxietyScreen',
  // InattentionOveractivityScreen = 'InattentionOveractivityScreen',
  // AngerTemperScreen = 'AngerTemperScreen',
  DifficultiesSocialInteractionScreen = 'DifficultiesSocialInteractionScreen',
  // SleepingProblemsScreen = 'SleepingProblemsScreen',
  // EatingProblemsScreen = 'EatingProblemsScreen',
  // RecurrentUnexplainedScreen = 'RecurrentUnexplainedScreen',
}

//IMPORTANT: Do not change names of screens!
export enum ToolsRoutes {
  DefaultToolsScreen = 'DefaultToolsScreen',
  DrugCalculatorToolScreen = 'DrugCalculatorToolScreen',
  DrugCalculatorResultScreen = 'DrugCalculatorResultScreen',
  BMIToolScreen = 'BMIToolScreen',
  GrowthMonitoringToolScreen = 'GrowthMonitoringToolScreen',
  BodySurfaceAreaToolScreen = 'BodySurfaceAreaToolScreen',
  PneumoniaToolScreen = 'PneumoniaToolScreen',
  DehydrationToolScreen = 'DehydrationToolScreen',
  CroupToolScreen = 'CroupToolScreen',
  OtitisMediaToolScreen = 'OtitisMediaToolScreen',
  AsthmaToolScreen = 'AsthmaToolScreen',
  ApgarScoreToolScreen = 'ApgarScoreToolScreen',
  JaundiceToolScreen = 'JaundiceToolScreen',
  PainScaleToolScreen = 'PainScaleToolScreen',
  AVPUScaleToolScreen = 'AVPUScaleToolScreen',
  ToolsResultScreen = 'ToolsResultScreen',
  GrowthMonitoringResultScreen = 'GrowthMonitoringResultScreen',

  GrowthMonitoringChartScreen = 'GrowthMonitoringChartScreen',

  SeverityOfAsthmaScreen = 'SeverityOfAsthmaScreen',
  AssessmentOfSymptomsScreen = 'AssessmentOfSymptomsScreen'
}

export enum SettingsRoutes {
  DefaultSettingsScreen = 'DefaultSettingsScreen',
}
export default Routes;
