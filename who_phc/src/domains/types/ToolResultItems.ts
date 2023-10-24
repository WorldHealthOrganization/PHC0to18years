import AnchorType from "../enums/AnchorType";
import SymbolType from "../enums/SymbolType";
import { SpecialContent } from "./SpecialContent";

export type ToolResultItem = {
  id: number;
  textStart: string;
  linkText?: string;
  linkName?: string;
  linkType?: AnchorType; 
  textEnd?: string;
  specialContent?: SpecialContent;
  symbolType?: SymbolType;
  nested?: ToolResultItem[]
};
