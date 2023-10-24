import * as htmlparser2 from 'htmlparser2';
import he from 'he';
import { Document, Element, isText, isDirective, isDocument } from 'domhandler';

import ParsedHTMLNode from '../../domains/types/ParsedHTMLNode';

export const formatSentence = (sentence: string) => {
  const decodedString = he.decode(sentence);

  const formatedSentence = decodedString
    .trim()

    .replace(/\t/g, '')
    .replace(/\r/g, '')
    .replace(/\n{2,}/g, '\n');

  return formatedSentence;
};

export const createNodesTree = (htmlString: string) => {
  const nodesTree = htmlparser2.parseDocument(htmlString);
  return nodesTree;
};

const collectNodes = (node: Element, parsedNodeList: ParsedHTMLNode[]) => {
  const tagId = node.attribs && node.attribs.id ? node.attribs.id : null;

  const parsedNode = {
    tagName: node.name,
    content: '',
    tagId: tagId,
  };

  if (node.children) {
    for (const childNode of node.children) {
      if (isText(childNode)) {
        parsedNode.content = parsedNode.content + childNode.data;
      } else {
        collectNodes(childNode, parsedNodeList);
      }
    }
  }

  if (!isDirective(node) && !isDocument(node)) {
    const formattedSearchResult = {
      ...parsedNode,
      content: formatSentence(parsedNode.content),
    };

    if (
      formattedSearchResult.content &&
      formattedSearchResult.content.length > 2
    ) {
      parsedNodeList.push(formattedSearchResult);
    }
  }
};

export const extractNodes = (node: Document) => {
  const parsedNodeList: ParsedHTMLNode[] = [];
  collectNodes(node, parsedNodeList);

  return parsedNodeList;
};
