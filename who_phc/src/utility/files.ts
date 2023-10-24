import { Platform } from "react-native";
import RNFS from 'react-native-fs';

export const readAssetsFile = async (filePath: string) => {
    let fileContent;

    if (Platform.OS === "ios") {
        const absoluteFilePath = RNFS.MainBundlePath + '/assets/' + filePath;
        fileContent = await RNFS.readFile(absoluteFilePath, 'utf8');
    } else {
        fileContent = await RNFS.readFileAssets(filePath, 'utf8');
    }

    return fileContent;
};
