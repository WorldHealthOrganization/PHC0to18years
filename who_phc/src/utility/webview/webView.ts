import WebView from 'react-native-webview';

import AnchorType from '../../domains/enums/AnchorType';

export const defaultScriptsOnStart = (
  myref: React.MutableRefObject<WebView<object>>,
) => {
  myref.current.injectJavaScript(jscodeStart());
};

export const defaultScriptsOnEnd = (
  myref: React.MutableRefObject<WebView<object>>,
  { fontSize }: { fontSize: number },
) => {
  myref.current.injectJavaScript(jscodeEnd(fontSize));
  myref.current.injectJavaScript(initScrollToSentence());
};

export const chapterScriptsOnEnd = (
  myref: React.MutableRefObject<WebView<object>>,
  { anchor, anchorType }: { anchor: string; anchorType: AnchorType },
) => {
  myref.current.injectJavaScript(initScrollToAnchor());
  if (anchor) {
    myref.current.injectJavaScript(executeScrollToAnchor(anchorType, anchor));
  }
};

export const searchScriptsOnEnd = (
  myref: React.MutableRefObject<WebView<object>>,
  { searchResultId }: { searchResultId: string },
) => {
  if (searchResultId) {
    myref.current.injectJavaScript(executeScrollToSentence(searchResultId));
  }
};

export const initScrollToAnchor = () => ` 
  function scrollToAnchorFn (anchorType, anchor) {
    const anchorLink = "/anchor?type=" + anchorType + "&name=" + anchor;
    const links = document.getElementsByTagName("a");

    if (links.length !== 0) {
      let anchorElement = null;
    
      for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") 
          && links[i].getAttribute("href").trim() === anchorLink) {
          anchorElement = links.item(i)
        }
      }
    
      if (anchorElement !== null) {
        const anchor = anchorElement.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: anchor,
            behavior: "auto"
        });
      }
    }
  }
  true; 
`;

export const initScrollToSentence = () => `
function scrollToSentenceFn (id) {
  const element = document.getElementById(id);

  if (element) {
    const anchor = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: anchor,
        behavior: "auto"
    });
  }
}
true; 
`;

export const executeScrollToAnchor = (
  anchorType: AnchorType,
  anchor: string,
) => `
  scrollToAnchorFn("${anchorType}", "${anchor}");
  true; 
`;

export const executeScrollToSentence = (id: string) => `
  scrollToSentenceFn("${id}");
  true; 
`;

export const jscodeStart = () => `
  document.getElementsByTagName('body')[0].style.display = 'none';
  true;
`;

export const jscodeEnd = (fontSize: number) => `
  var metaTag=document.createElement('meta');
  metaTag.name = "viewport"
  metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  document.getElementsByTagName('head')[0].appendChild(metaTag);

  for (const el of document.getElementsByTagName("p")) {
    if (!el.classList.contains("warning-icon") && !el.classList.contains("help-icon") && !el.classList.contains("hospital-icon")) {
      el.style.fontSize = "${fontSize}px";
    }
  }
  for (const el of document.getElementsByTagName("li")) {
      el.style.fontSize = "${fontSize}px";
  }
  for (const el of document.getElementsByTagName("span")) {
      el.style.fontSize = "${fontSize}px";
  }

  for (const el of document.getElementsByClassName("head-A")) {
    el.style.fontSize = "${fontSize * 1.3}px";
  }

  for (const el of document.getElementsByClassName("head-B")) {
    el.style.fontSize = "${fontSize * 1.12}px";
  }
  
  for (const el of document.getElementsByClassName("head-T")) {
    el.style.fontSize = "${fontSize * 0.88}px";
    el.style.fontWeight = "500";
  }

  for (const el of document.getElementsByClassName("head-T2")) {
    el.style.fontSize = "${fontSize * 0.88}px";
    el.style.fontWeight = "500";
  }

  for (const el of document.getElementsByClassName("head-T3")) {
    el.style.fontSize = "${fontSize * 0.88}px";
    el.style.fontWeight = "500";
  }

  for (const el of document.getElementsByClassName("head-D")) {
    el.style.fontSize = "${fontSize}px";
    el.style.fontWeight = "500";
  }

  for (const el of document.getElementsByClassName("head-E")) {
    el.style.fontSize = "${fontSize}px";
    el.style.fontWeight = "500";
  }

  for (const el of document.getElementsByClassName("table-note-indented")) {
    el.style.fontSize = "${fontSize * 0.75}px";
    el.style.paddingTop = "5px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }

  for (const el of document.getElementsByClassName("table-note")) {
    el.style.fontSize = "${fontSize * 0.75}px";
    el.style.paddingTop = "5px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }

  for (const el of document.getElementsByClassName("table-drug-tables")) {
    el.style.fontSize = "${fontSize * 0.75}px";
    el.style.paddingTop = "5px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }


  for (const el of document.getElementsByClassName("charts-notes")) {
    el.style.fontSize = "${fontSize * 0.75}px !important";
    el.style.paddingTop = "5px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }

  for (const el of document.getElementsByClassName("caption")) {
    el.style.fontSize = "${fontSize * 0.75}px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }

  for (const el of document.getElementsByClassName("caption-medium")) {
    el.style.fontSize = "${fontSize * 0.75}px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
  }
  
  for (const el of document.getElementsByClassName("caption-medium-italic")) {
    el.style.fontSize = "${fontSize * 0.75}px";

    const childrens = el.children;
    for (const el of childrens) {
      el.style.fontSize = "${fontSize * 0.75}px";
    }
    el.style.fontStyle = "italic";
  }

  document.getElementsByTagName('body')[0].style.display = 'block';
  true;
`;
