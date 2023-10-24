import { ColorValue } from "react-native";
import { ToolResultItem } from "./ToolResultItems";

type ToolsResultScreenParams = {
  title: string;
  age?: string;
  respiratoryRate?: string;
  symptoms: [];
  result: string;
  treatment?: ToolResultItem[];
  color?: ColorValue;
};

export default ToolsResultScreenParams;