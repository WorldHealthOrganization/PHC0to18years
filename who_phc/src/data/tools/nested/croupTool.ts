import AnchorType from '../../../domains/enums/AnchorType';
import SpecialTextType from '../../../domains/enums/SpecialTextType';
import SymbolType from '../../../domains/enums/SymbolType';
import { ToolResultItem } from '../../../domains/types/ToolResultItems';

export const croupSymptomsData = [
  {
    id: '0',
    text: 'CroupToolPage.Symptoms.Fever',
  },
  {
    id: '1',
    text: 'CroupToolPage.Symptoms.HoarseVoice',
  },
  {
    id: '2',
    text: 'CroupToolPage.Symptoms.BarkingCough',
  },
  {
    id: '3',
    text: 'CroupToolPage.Symptoms.StridorAgitated',
  },
  {
    id: '4',
    text: 'CroupToolPage.Symptoms.StridorAtRest',
  },
  {
    id: '5',
    text: 'CroupToolPage.Symptoms.RapidBreathing',
  },
  {
    id: '6',
    text: 'CroupToolPage.Symptoms.Cyanosis',
  },
];

export const mildCroupResultData: ToolResultItem[] = [
  {
    id: 1,
    specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
    textStart: 'CroupToolPage.Result.MildCroupTreatment.Item1',
  },
  {
    id: 2,
    specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
    textStart: 'CroupToolPage.Result.MildCroupTreatment.Item2',
  },
  {
    id: 3,
    textStart: 'CroupToolPage.Result.MildCroupTreatment.Item3',
  },
  {
    id: 4,
    textStart: 'CroupToolPage.Result.MildCroupTreatment.Item4.Main1_1',
    linkText: 'CroupToolPage.Result.MildCroupTreatment.Item4.LinkTitle',
    linkName: '22',
    linkType: AnchorType.Boxes,
    textEnd: 'CroupToolPage.Result.MildCroupTreatment.Item4.Main1_2',
    nested: [
      {
        id: 5,
        symbolType: SymbolType.Hyphen,
        textStart: 'CroupToolPage.Result.MildCroupTreatment.Item4.SubItem1',
      },
      {
        id: 6,
        symbolType: SymbolType.Hyphen,
        textStart: 'CroupToolPage.Result.MildCroupTreatment.Item4.SubItem2',
      },
    ],
  },
];

export const severeCroupResultData: ToolResultItem[] = [
  {
    id: 7,
    textStart: 'CroupToolPage.Result.SevereCroupTreatment.Item1',
  },
  {
    id: 8,
    textStart: 'CroupToolPage.Result.SevereCroupTreatment.Item2.Main',
    nested: [
      {
        id: 9,
        textStart: 'CroupToolPage.Result.SevereCroupTreatment.Item2.SubItem1',
      },
      {
        id: 10,
        textStart: 'CroupToolPage.Result.SevereCroupTreatment.Item2.SubItem2',
      },
      {
        id: 11,
        textStart: 'CroupToolPage.Result.SevereCroupTreatment.Item2.SubItem3',
      },
    ],
  },
];

export const noCroupResultData: ToolResultItem[] = [
  {
    id: 12,
    symbolType: SymbolType.None,
    textStart: 'CroupToolPage.Result.NoCroupTreatment'
  }
]
