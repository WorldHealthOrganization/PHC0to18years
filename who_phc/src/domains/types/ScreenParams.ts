import Routes, {
  CounsellingBoxesRoutes,
  HomeRoutes,
  ToolsRoutes,
} from '../../routing/routing';
import ChapterScreenParams from './ChapterScreenParams';

type ScreenParams = {
  sorted?: boolean;
  screen?: HomeRoutes | ToolsRoutes | Routes | CounsellingBoxesRoutes;
  initial?: boolean;
  id?: number;
  params?: ScreenParams | ChapterScreenParams;
};

export default ScreenParams;
