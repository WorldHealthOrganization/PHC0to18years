import * as React from 'react';
import { useRef } from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg';
import { WebView } from 'react-native-webview';

import useMainContext from '../../context/useMainContext';
import { CounsellingBoxesRoutes } from '../../routing/routing';
import { CousellingBoxesStackParamList } from '../../domains/types/Routing';
import {
  defaultScriptsOnEnd,
  defaultScriptsOnStart,
  executeScrollToSentence,
  jscodeEnd,
  searchScriptsOnEnd,
} from '../../utility/webview/webView';
import {
  ANCHOR_ORIGIN,
  FILE_IMPORT_ORIGIN,
  IMAGE_ORIGIN,
  LINK_ORIGIN,
} from '../../constants/general';
import { getCounsellingBox } from '../../utility/counsellingBoxes';
import useAppNavigation from '../../hooks/useAppNavigation';
import { useTranslation } from 'react-i18next';
import CounsellingBoxScreenLayout from '../../components/layout/CounsellingBoxScreenLayout';

type CounsellingBoxScreenProps = NativeStackScreenProps<
  CousellingBoxesStackParamList,
  CounsellingBoxesRoutes.CounsellingBox
>;

const CounsellingBoxScreen = (props: CounsellingBoxScreenProps) => {
  const { route } = props;
  const myref = useRef<WebView>(null);
  const { fontSize } = useMainContext();
  const { onRedirectFromContent, openImageInModal } = useAppNavigation();
  const { t } = useTranslation();

  const { id, searchResultId } = route.params ?? {};
  const { fileName, icon, color, boxTitle } = getCounsellingBox(id);

  const onCounsellingBoxLoadStart = () => {
    defaultScriptsOnStart(myref);
  };

  const onCounsellingBoxLoadEnd = () => {
    defaultScriptsOnEnd(myref, { fontSize });
    searchScriptsOnEnd(myref, { searchResultId });
  };

  React.useEffect(() => {
    onCounsellingBoxLoadStart();
    onCounsellingBoxLoadEnd();
  }, [fontSize]);

  React.useEffect(() => {
    if (searchResultId) {
      myref.current.injectJavaScript(executeScrollToSentence(searchResultId));
    }
  }, [searchResultId]);

  return (
    <CounsellingBoxScreenLayout color={color}>
      <View style={styles.counsellingBoxContainer}>
        <View style={styles.titleWrapper}>
          <Text
            style={[styles.title, { color: color, fontSize: fontSize * 1.2 }]}>
            {t(boxTitle)}
          </Text>
          <SvgXml width={fontSize * 2} height={fontSize * 2} xml={icon} />
        </View>

        <WebView
          style={styles.webView}
          ref={myref}
          originWhitelist={[FILE_IMPORT_ORIGIN]}
          allowingReadAccessToURL={FILE_IMPORT_ORIGIN}
          onLoadStart={onCounsellingBoxLoadStart}
          onLoadEnd={onCounsellingBoxLoadEnd}
          source={{
            uri:
              Platform.OS === 'ios'
                ? 'assets/counsellingBoxes/' + fileName + '.html'
                : '/android_asset/counsellingBoxes/' + fileName + '.html',
          }}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={false}
          allowFileAccess={true}
          injectedJavaScript={jscodeEnd(fontSize)}
          onShouldStartLoadWithRequest={event => {
            if (event.url.includes(LINK_ORIGIN)) {
              onRedirectFromContent(event.url);
              return false;
            }
            if (event.url.includes(IMAGE_ORIGIN)) {
              openImageInModal(event.url, "counsellingBoxes");
              return false;
            }
            if (event.url.includes(ANCHOR_ORIGIN)) {
              return false;
            }
            return true;
          }}
        />
      </View>
    </CounsellingBoxScreenLayout>
  );
};

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: 'transparent',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  counsellingBoxContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 20,
  },
  titleWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  title: {
    flex: 1,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default CounsellingBoxScreen;
