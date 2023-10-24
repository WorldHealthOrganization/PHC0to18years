import { useNavigation, useRoute } from '@react-navigation/native';
import { Platform } from 'react-native';

import AnchorType from '../domains/enums/AnchorType';
import Routes, {
  CounsellingBoxesRoutes,
  HomeRoutes,
  ToolsRoutes,
} from '../routing/routing';
import ChapterScreenParams from '../domains/types/ChapterScreenParams';
import { GeneralNavigationProp } from '../domains/types/Routing';
import ScreenParams from '../domains/types/ScreenParams';
import { IMAGE_ORIGIN, LINK_ORIGIN } from '../constants/general';

import {
  checkAnchorIsSame,
  getNewChapterParams,
  parseParamsOfUrl,
  parseParamsOfUrlForImageModal,
} from '../utility/url';
import { getNumberFromString } from '../utility/numbers';
import useMainContext from '../context/useMainContext';

const useAppNavigation = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const { setImageSrc } = useMainContext();
  const route = useRoute();

  const openImageInModal = (url: string, imageOrigin: "chapters" | "counsellingBoxes") => {
    if (url && url.includes(IMAGE_ORIGIN)) {
      const { src } = parseParamsOfUrlForImageModal(url);

      const generalsrc = Platform.OS === 'ios'
        ? `assets/${imageOrigin}/` + src
        : `asset:/${imageOrigin}/` + src;

      setImageSrc(generalsrc);
    }
  }

  const onRedirectFromContent = (
    url: string,
    onRedirectToSameAnchor?: (
      paramAnchorType: AnchorType,
      paramAnchorName: string,
    ) => void,
  ) => {
    if (url && url.includes(LINK_ORIGIN)) {
      const { paramAnchorType, paramAnchorName } = parseParamsOfUrl(url);
      switch (paramAnchorType) {
        case AnchorType.Boxes: {
          const boxNumber = getNumberFromString(paramAnchorName);
          navigateToCounsellingBox(boxNumber);
          return;
        }

        case AnchorType.Info:
        case AnchorType.Tables:
        case AnchorType.Charts:
        case AnchorType.Fig: {
          const newParams = getNewChapterParams(url);
          if (
            checkAnchorIsSame(newParams, route.params as ChapterScreenParams) &&
            onRedirectToSameAnchor
          ) {
            onRedirectToSameAnchor(paramAnchorType, paramAnchorName);
          } else {
            navigateToChapterAnchor(newParams);
          }
          return;
        }

        case AnchorType.Tools:
          navigateToTools(paramAnchorName as ToolsRoutes);
          return;
      }
    }
  };

  const navigateToChapterAnchor = (params: ChapterScreenParams) => {
    if (params) {
      navigation.push(HomeRoutes.ChapterScreen, params);
    }
  };

  const pushToChapterAnchor = (params: ChapterScreenParams) => {
    if (params) {
      navigation.navigate(HomeRoutes.ChapterScreen, params);
    }
  };

  const navigateToCounsellingBox = (boxNumber: number) => {
    if (boxNumber) {
      navigation.navigate(Routes.CounsellingBoxes, {
        initial: false,
        screen: CounsellingBoxesRoutes.CounsellingBox,
        params: { id: boxNumber, initial: false } as ScreenParams,
      });
    }
  };

  const navigateToTools = (toolsScreenName: ToolsRoutes) => {
    if (toolsScreenName) {
      navigation.navigate(Routes.ToolsScreen, {
        screen: toolsScreenName as ToolsRoutes,
        initial: false,
      });
    }
  };

  const navigationInTools = (linkType: AnchorType, linkName: string) => {
    switch (linkType) {
      case AnchorType.Info:
        {
        const linkNameArray = linkName.split('/');
        pushToChapterAnchor({
          id: Number(linkNameArray[0]),
          anchor: linkNameArray[1],
          anchorType: AnchorType.Info,
          initial: true,
        });
        break;
      }
      case AnchorType.Tools:
        navigateToTools(linkName as ToolsRoutes);
        break;
      case AnchorType.Charts:
        {
        const linkNameArray = linkName.split('/');
        pushToChapterAnchor({
          id: Number(linkNameArray[0]),
          anchor: linkNameArray[1],
          anchorType: AnchorType.Charts,
          initial: true,
        });
        break;
      }
      case AnchorType.Boxes:
        navigateToCounsellingBox(Number(linkName));
        break;
      case AnchorType.Tables: {
        const linkNameArray = linkName.split('/');
        pushToChapterAnchor({
          id: Number(linkNameArray[0]),
          anchor: linkNameArray[1],
          anchorType: AnchorType.Tables,
          initial: false,
        });
        break;
      }
    }
  }

  return {
    onRedirectFromContent,
    navigateToChapterAnchor,
    navigateToCounsellingBox,
    navigateToTools,
    openImageInModal,
    pushToChapterAnchor,
    navigationInTools
  };
};

export default useAppNavigation;
