import { ToolResultItem } from '../../../domains/types/ToolResultItems';
import { ToolSymptomImageParams } from '../../../domains/types/ToolSymptomImageParams';

export const ageData = [
  {
    id: '0',
    text: 'PneumoniaToolPage.Age.2_11month',
  },
  {
    id: '1',
    text: 'PneumoniaToolPage.Age.1_5years',
  },
];

export const respiratoryRateData = [
  {
    id: '0',
    text: 'PneumoniaToolPage.RespiratoryRate.RespiratoryRate1',
  },
  {
    id: '1',
    text: 'PneumoniaToolPage.RespiratoryRate.RespiratoryRate2',
  },
  {
    id: '2',
    text: 'PneumoniaToolPage.RespiratoryRate.RespiratoryRate3',
  },
];

export const pneumoniaSymptomsData = [
  {
    id: '0',
    text: 'PneumoniaToolPage.Symptoms.LowerChest',
  },
  {
    id: '1',
    text: 'PneumoniaToolPage.Symptoms.OxygenSaturation',
  },
  {
    id: '2',
    text: 'PneumoniaToolPage.Symptoms.CentralCyanosis',
  },
  {
    id: '3',
    text: 'PneumoniaToolPage.Symptoms.SevereRespiratoryDistress',
  },
  {
    id: '4',
    text: 'PneumoniaToolPage.Symptoms.AlteredConsciousness',
  },
  {
    id: '5',
    text: 'PneumoniaToolPage.Symptoms.Inability',
  },
  {
    id: '6',
    text: 'PneumoniaToolPage.Symptoms.Vomiting',
  },
  {
    id: '7',
    text: 'PneumoniaToolPage.Symptoms.Lethargy',
  },
  {
    id: '8',
    text: 'PneumoniaToolPage.Symptoms.Convulsions',
  },
];

export const severePneumoniaResultData: ToolResultItem[] = [
  {
    id: 0,
    textStart: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.Item1_1',
    linkText: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.ChartTitle',
    linkName: '9/8chart',
    linkType: AnchorType.Charts,
    textEnd: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.Item1_2',
  },
  {
    id: 1,
    textStart: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.Item2',
  },
  {
    id: 2,
    textStart: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.Item3_1',
    linkText:
      'PneumoniaToolPage.Result.SeverePneumoniaTreatment.AnnexLinkTitle',
    linkName: 'DrugCalculatorToolScreen',
    linkType: AnchorType.Tools,
    textEnd: 'PneumoniaToolPage.Result.SeverePneumoniaTreatment.Item3_2',
  },
];

export const pneumoniaResultTreatmentData: ToolResultItem[] = [
  {
    id: 1,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item1',
    linkText:
      'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.AnnexLinkTitle',
    linkName: 'DrugCalculatorToolScreen',
    linkType: AnchorType.Tools,
    textEnd: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item2',
  },
  {
    id: 2,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item3_1',
    specialContent: {type: SpecialTextType.Italic, text: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.ItalicText'},
    textEnd: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item3_2',
  },
  {
    id: 3,
    textStart:
      'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item4.Main',
    linkText:
      'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item4.AnnexLinkTitle',
    linkName: '12/hypersensitivity-reactions',
    linkType: AnchorType.Info,
    textEnd:
      'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item4.SubItem1',
    nested: [
      {
        id: 4,
        symbolType: SymbolType.Hyphen,
        textStart:
          'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item4.SubItem2',
      },
      {
        id: 5,
        symbolType: SymbolType.Hyphen,
        textStart:
          'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item4.SubItem3',
      },
    ],
  },
  {
    id: 6,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item5',
  },
  {
    id: 7,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item6',
  },
  {
    id: 8,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item7',
  },
  {
    id: 9,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item8_1',
    linkText:
      'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.CounsellingBoxLinkTitle1',
    linkName: '23',
    linkType: AnchorType.Boxes,
    textEnd: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item8_2',
    nested: [
      {
        id: 10,
        textStart:
          'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item9',
        linkText:
          'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.CounsellingBoxLinkTitle2',
        linkName: '25',
        linkType: AnchorType.Boxes,
        symbolType: SymbolType.None,
        textEnd: 'PneumoniaToolPage.Result.PneumoniaTreatment.Treatment.Item10',
      },
    ],
  },
  {
    id: 11,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Title',
    symbolType: SymbolType.None,
  },
  {
    id: 12,
    textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Item1',
    linkText:
      'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.CounsellingBoxLinkTitle',
    linkName: '23',
    linkType: AnchorType.Boxes,
    symbolType: SymbolType.None,
    textEnd: 'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Item2',
  
        nested: [
          {
            id: 14,
            textStart:
              'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Item3',
              symbolType: SymbolType.Dot,
          },
          {
            id: 15,
            textStart:
              'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Item4',
              symbolType: SymbolType.Dot,
          },
        ],
      },
      {
        id: 16,
        symbolType: SymbolType.None,
        textStart: 'PneumoniaToolPage.Result.PneumoniaTreatment.FollowUp.Item5',
      },
  
];

export const noPneumoniaResultData: ToolResultItem[] = [
  {
    id: 1,
    specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
    textStart: 'PneumoniaToolPage.Result.NoPneumoniaTreatment.Item1',
    linkType: AnchorType.Info,
    symbolType: SymbolType.None,
  },
  {
    id: 2,
    textStart: 'PneumoniaToolPage.Result.NoPneumoniaTreatment.Item2',
    linkText: 'PneumoniaToolPage.Result.NoPneumoniaTreatment.LinkTitle',
    linkName: '6/cough-common-cold',
    linkType: AnchorType.Info,
    symbolType: SymbolType.Hyphen,
  },
];

import pneumoniaImage from '../../../../assets/chapters/pneumonia/10.png';
import AnchorType from '../../../domains/enums/AnchorType';
import SymbolType from '../../../domains/enums/SymbolType';
import SpecialTextType from '../../../domains/enums/SpecialTextType';

export const pneumoniaSymptomImagesData: ToolSymptomImageParams[] = [
  {
    id: 0,
    fileName: pneumoniaImage,
    textTitle: 'PneumoniaToolPage.SymptomImage.Title',
    textDescription: 'PneumoniaToolPage.SymptomImage.Description',
    additionalInfo: [
      'PneumoniaToolPage.SymptomImage.AdditionalInfo.0',
      'PneumoniaToolPage.SymptomImage.AdditionalInfo.1',
      'PneumoniaToolPage.SymptomImage.AdditionalInfo.2',
    ],
    width: 100,
    height: 220,
  },
];
