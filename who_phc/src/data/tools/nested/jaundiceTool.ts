import AnchorType from "../../../domains/enums/AnchorType";
import SpecialTextType from "../../../domains/enums/SpecialTextType";
import { ToolResultItem } from "../../../domains/types/ToolResultItems";

export const jaundiceAgeData = [
    {
        id: '0',
        text: 'JaundiceToolPage.InfantAge.24h'
    },
    {
        id: '1',
        text: 'JaundiceToolPage.InfantAge.48h'
    },
    {
        id: '2',
        text: 'JaundiceToolPage.InfantAge.72h'
    },
    {
        id: '3',
        text: 'JaundiceToolPage.InfantAge.96h'
    },
    {
        id: '4',
        text: 'JaundiceToolPage.InfantAge.more120h'
    },
]

export const jaundiceWeekData = [
    {
        id: '0',
        text: 'JaundiceToolPage.GestationsWeeks.35_38'
    },
    {
        id: '1',
        text: 'JaundiceToolPage.GestationsWeeks.more38'
    }
]

export const jaundiceRiskFactorsData = [
    {
        id: '0',
        text: 'JaundiceToolPage.RiskFactors.Item1'
    },
    {
        id: '1',
        text: 'JaundiceToolPage.RiskFactors.Item2'
    },
    {
        id: '2',
        text: 'JaundiceToolPage.RiskFactors.Item3'
    },
    {
        id: '3',
        text: 'JaundiceToolPage.RiskFactors.Item4'
    },
    {
        id: '4',
        text: 'JaundiceToolPage.RiskFactors.Item5'
    },
    {
        id: '5',
        text: 'JaundiceToolPage.RiskFactors.Item6'
    },
    {
        id: '6',
        text: 'JaundiceToolPage.RiskFactors.Item7'
    },
    {
        id: '7',
        text: 'JaundiceToolPage.RiskFactors.Item8'
    }
]

export const jaundiceUnitsData = [
    {
        id: '0',
        text: 'JaundiceToolPage.Units.mg_dl'
    },
    {
        id: '1',
        text: 'JaundiceToolPage.Units.mol_l'
    }
]

export const jaundiceReferUrgentlyResultData: ToolResultItem[] = [
    {
        id: 0,
        specialContent: {type: SpecialTextType.RedBold, text: "JaundiceToolPage.Result.ReferUrgently.ReferUrgentlyTitle"},
        textStart: 'JaundiceToolPage.Result.ReferUrgently.Item1_1',
        linkText: 'JaundiceToolPage.Result.ReferUrgently.Link',
        linkName: 'DrugCalculatorToolScreen',
        linkType: AnchorType.Tools,
        textEnd: 'JaundiceToolPage.Result.ReferUrgently.Item1_2'
    }
]

export const jaundiceMonitorResultData: ToolResultItem[] = [
    {
        id: 0,
        textStart: 'JaundiceToolPage.Result.MonitorClosely',
    }
]

export const jaundiceCounselResultData: ToolResultItem[] = [
    {
        id: 0,
        textStart: 'JaundiceToolPage.Result.CounselTo.Item1_1',
        linkText: 'JaundiceToolPage.Result.CounselTo.Link',
        linkName: '4/assessing-breastfeed',
        linkType: AnchorType.Info,
        textEnd: 'JaundiceToolPage.Result.CounselTo.Item1_2'
    }
]