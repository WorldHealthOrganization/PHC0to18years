import counselingBoxesList from "../../data/counselingBoxes/counselingBoxesList";
import homeList from "../../data/home/homeList";
import CacheKey from "../../domains/enums/CacheKey";
import ParsedHTMLContent from "../../domains/types/ParsedHTMLContent";
import { getChapter } from "../chapter";
import { getCounsellingBox } from "../counsellingBoxes";
import { readAssetsFile } from "../files";
import { createNodesTree, extractNodes } from "./htmlParsing";


export const parseContentForSearch = async (
  key: CacheKey
) => {
  switch (key) {
    case CacheKey.ParsedChapters: {
      const result = await parseChaptersContent();

      return result;
    }
    case CacheKey.ParsedCounsellingBoxes: {
      const result = await parseCounsellingBoxesContent();
      return result;
    }
  }
};

export const parseChapter = async (id: number) => {
  const chapter = getChapter(id);

  const plainText = await readAssetsFile(
    `chapters/${chapter.fileName}.html`,
  );

  const nodesTree = createNodesTree(plainText);
  const parsedNodesArray = extractNodes(nodesTree);

  return parsedNodesArray;
};

export const parseCounsellingBox = async (id: number) => {
  const counsellingBox = getCounsellingBox(id);

  const plainText = await readAssetsFile(
    `counsellingBoxes/${counsellingBox.fileName}.html`,
  );

  const nodesTree = createNodesTree(plainText);
  const parsedNodesArray = extractNodes(nodesTree);

  return parsedNodesArray;
};


export const parseChaptersContent = async () => {
  const parsedChaptersContent: Partial<ParsedHTMLContent> = {};

  await Promise.all(homeList.map(async ({ id }) => {
    const parsedNodesArray = await parseChapter(id);

    return parsedChaptersContent[id as keyof ParsedHTMLContent] =
      parsedNodesArray;
  }));

  return parsedChaptersContent;
};

export const parseCounsellingBoxesContent = async () => {
  const parsedCounsellingBoxesContent: Partial<ParsedHTMLContent> = {};

  await Promise.all(counselingBoxesList.map(async ({ id }) => {
    const parsedNodesArray = await parseCounsellingBox(id);

    return parsedCounsellingBoxesContent[id as keyof ParsedHTMLContent] =
      parsedNodesArray;
  }));

  return parsedCounsellingBoxesContent;
};