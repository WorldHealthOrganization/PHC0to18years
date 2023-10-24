import AnchorType from "../../../domains/enums/AnchorType";
import SpecialTextType from "../../../domains/enums/SpecialTextType";
import SymbolType from "../../../domains/enums/SymbolType";
import { ToolResultItem } from "../../../domains/types/ToolResultItems";

export const otitisMediaAgeData = [
  {
    id: '0',
    text: 'OtitisMediaToolPage.Age.Under6months',
  },
  {
    id: '1',
    text: 'OtitisMediaToolPage.Age.6_23months',
  },
  {
    id: '2',
    text: 'OtitisMediaToolPage.Age.2yearsmore',
  }
];

export const otitisSymptomsData = [
    {
      id: '0',
      text: 'OtitisMediaToolPage.Symptoms.BilateralAcuteOtitisMedia',
    },
    {
      id: '1',
      text: 'OtitisMediaToolPage.Symptoms.MarkedPusDraining',
    },
    {
      id: '2',
      text: 'OtitisMediaToolPage.Symptoms.Fever',
    },
    {
      id: '3',
      text: 'OtitisMediaToolPage.Symptoms.IntenseEarPain',
    },
    {
      id: '4',
      text: 'OtitisMediaToolPage.Symptoms.SickAppearance',
    },
    {
      id: '5',
      text: 'OtitisMediaToolPage.Symptoms.PresenceSeriousIllness',
    },
    {
      id: '6',
      text: 'OtitisMediaToolPage.Symptoms.RecurrentAcuteOtitisMedia',
    }
];

export const otitisPresribeUnder6ResultData: ToolResultItem[] = [
{
  id: 0,
  textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.Antibiotic_Under6Months.Item1',
  linkText: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.Antibiotic_Under6Months.LinkTitle',
  linkName: 'DrugCalculatorToolScreen',
  linkType: AnchorType.Tools,
  textEnd: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.Antibiotic_Under6Months.Item2'
}
];

export const otitisPresribe6_23ResultData: ToolResultItem[] = [
  {
    id: 1,
    textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.Antibiotic_6_23Months'
  }
];

export const otitisPresribe2moreResultData: ToolResultItem[] = [
  {
    id: 2,
    textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.Antibiotic_2more'
  }
];

export const otitisPresribeGeneralResultData: ToolResultItem[] = [
{
  id: 3,
  textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.BetaLactamAllergy.Title',
  linkText: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.BetaLactamAllergy.AnnexLinkTitle',
  linkName: '12/hypersensitivity-reactions',
  linkType: AnchorType.Info,
  textEnd: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.BetaLactamAllergy.Item1',
  nested: [
    {
      id: 4,
      textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.BetaLactamAllergy.SubItem1',
      symbolType: SymbolType.Hyphen
    },
    {
      id: 5,
      textStart: 'OtitisMediaToolPage.Result.PrescribeAntibiotics.BetaLactamAllergy.SubItem2',
      symbolType: SymbolType.Hyphen
    }
  ]
}
];

export const otitisGeneralSupportiveResultData: ToolResultItem[] = [
  {
    id: 6,
    textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Title',
    nested: [
      {
        id: 7,
        textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item1',
        symbolType: SymbolType.Hyphen
      },
      {
        id: 8,
        textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item2',
        symbolType: SymbolType.Hyphen
      },
      {
        id: 9,
        textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item4',
        specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
        symbolType: SymbolType.Hyphen
      },
      {
        id: 10,
        textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item5',
        specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
        symbolType: SymbolType.Hyphen
      },
      {
        id: 11,
        textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item6',
        symbolType: SymbolType.Hyphen
      }
    ]
  }
];

export const otitisDonotSupportiveResultData: ToolResultItem[] = [
  {
    id: 5,
    specialContent: {type: SpecialTextType.RedBold, text: "ToolsPage.General.DoNotText"},
    textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.DoNotGiveAntibiotics'
  }
];

export const otitisPusSupportiveResultData: ToolResultItem[] = [
  {
    id: 5,
    textStart: 'OtitisMediaToolPage.Result.SupportiveCareAtHome.Item1.Item3',
    symbolType: SymbolType.Hyphen
  }
];


