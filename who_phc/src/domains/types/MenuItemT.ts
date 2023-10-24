import { ImageSourcePropType } from 'react-native';
import Routes, {
  CounsellingBoxesRoutes,
  HomeRoutes,
  SpecificComplaintRoutes,
  ToolsRoutes,
} from '../../routing/routing';
import ScreenParams from './ScreenParams';
import ChapterScreenParams from './ChapterScreenParams';

export interface NavigateItem<NestedItem extends NavigateItem<any>> {
  path:
    | Routes
    | HomeRoutes
    | SpecificComplaintRoutes
    | ToolsRoutes
    | CounsellingBoxesRoutes;
  params?: ScreenParams | ChapterScreenParams;
  label: string;
  nested?: NestedItem[];
  id: number;
}

export interface ChapterItem extends NavigateItem<ChapterItem> {
  idSubchapterInHTML?: string;
  chapterTitle?: string;
  color?: string;
  nestedScreenList?: ChapterItem[];
  type?: ChapterItemType;
}

export interface HomePageItem extends NavigateItem<ChapterItem> {
  svgImage: ImageSourcePropType;
  myBackgroundColor: string;
}

export enum ChapterItemType {
  ApproachContent = 1,
  ApproachBtn,
  Default,
}
