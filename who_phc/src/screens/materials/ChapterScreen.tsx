import * as React from 'react';
import { useRef } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { WebView } from 'react-native-webview';
import ScreenMenuLayout from '../../components/layout/ScreenMenuLayout';
import useMainContext from '../../context/useMainContext';
import { HomeRoutes } from '../../routing/routing';
import { HomeStackParamList } from '../../domains/types/Routing';
import {
  jscodeEnd,
  executeScrollToAnchor,
  defaultScriptsOnStart,
  defaultScriptsOnEnd,
  chapterScriptsOnEnd,
  searchScriptsOnEnd,
  executeScrollToSentence,
} from '../../utility/webview/webView';
import {
  ANCHOR_ORIGIN,
  FILE_IMPORT_ORIGIN,
  IMAGE_ORIGIN,
  LINK_ORIGIN,
} from '../../constants/general';
import AnchorType from '../../domains/enums/AnchorType';
import useAppNavigation from '../../hooks/useAppNavigation';
import { getChapter } from '../../utility/chapter';
import { useTranslation } from 'react-i18next';

type ChapterScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  HomeRoutes.ChapterScreen
>;

const ChapterScreen = (props: ChapterScreenProps) => {
  const { route } = props;
  const myref = useRef<WebView>(null);
  const { fontSize } = useMainContext();
  const { onRedirectFromContent, openImageInModal } = useAppNavigation();
  const { t } = useTranslation();

  const { id, anchor, anchorType, searchResultId } = route.params ?? {};

  const { color, fileName } = getChapter(id);

  React.useEffect(() => {
    onChapterLoadStart();
    onChapterLoadEnd();
  }, [fontSize]);

  React.useEffect(() => {
    if (anchor) {
      myref.current.injectJavaScript(executeScrollToAnchor(anchorType, anchor));
    }
  }, [anchor, anchorType]);

  React.useEffect(() => {
    if (searchResultId) {
      myref.current.injectJavaScript(executeScrollToSentence(searchResultId));
    }
  }, [searchResultId]);

  const onChapterLoadStart = () => {
    defaultScriptsOnStart(myref);
  };

  const onChapterLoadEnd = () => {
    defaultScriptsOnEnd(myref, { fontSize });
    chapterScriptsOnEnd(myref, {
      anchor,
      anchorType,
    });
    searchScriptsOnEnd(myref, { searchResultId });
  };

  const onRedirectToSameAnchor = (
    paramAnchorType: AnchorType,
    paramAnchorName: string,
  ) => {
    myref.current.injectJavaScript(
      executeScrollToAnchor(paramAnchorType, paramAnchorName),
    );
  };

  return (
    <ScreenMenuLayout color={color}>
      <WebView
        style={styles.webView}
        ref={myref}
        originWhitelist={[FILE_IMPORT_ORIGIN]}
        allowingReadAccessToURL={FILE_IMPORT_ORIGIN}
        onLoadStart={onChapterLoadStart}
        onLoadEnd={onChapterLoadEnd}
        source={{
          uri:
            Platform.OS === 'ios'
              ? 'assets/chapters/' + fileName + '.html'
              : '/android_asset/chapters/' + fileName + '.html',
        }}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={false}
        allowFileAccess={true}
        injectedJavaScript={jscodeEnd(fontSize)}
        onShouldStartLoadWithRequest={event => {
          if (event.url.includes(LINK_ORIGIN)) {
            onRedirectFromContent(event.url, onRedirectToSameAnchor);
            return false;
          }
          if (event.url.includes(IMAGE_ORIGIN)) {
            openImageInModal(event.url, "chapters");
            return false;
          }
          if (event.url.includes(ANCHOR_ORIGIN)) {
            return false;
          }
          return true;
        }}
      />
    </ScreenMenuLayout>
  );
};

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
});

export default ChapterScreen;
