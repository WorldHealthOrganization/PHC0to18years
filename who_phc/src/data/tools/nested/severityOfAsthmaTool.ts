import AnchorType from '../../../domains/enums/AnchorType';
import SpecialTextType from '../../../domains/enums/SpecialTextType';
import SymbolType from '../../../domains/enums/SymbolType';
import { ToolResultItem } from '../../../domains/types/ToolResultItems';

export const severityOfAsthmaAgeData = [
  {
    id: '0',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Age.6more',
  },
  {
    id: '1',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Age.4_5years',
  },
  {
    id: '2',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Age.0_3years',
  },
];

export const symptomsAsthmaMainData = [
  {
    id: '3',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.Drowsy',
  },
  {
    id: '4',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.Confused',
  },
  {
    id: '5',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.SilentChest',
  },
];

export const symptomsAsthmaGeneralData = [
  {
    id: '6',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.GeneralCondition.UnableSpeak',
  },
  {
    id: '7',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.GeneralCondition.CentralCyanosis',
  },
  {
    id: '8',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.GeneralCondition.BreathlessAgitated',
  },
];

export const symptomsAsthmaMentalStateData = [
  {
    id: '9',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.MentalState.Agitated',
  },
  {
    id: '10',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.MentalState.Normal',
  },
];

export const symptomsAsthmaSittingData = [
  {
    id: '11',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.SittingAndSpeaking.PreferSitting',
  },
  {
    id: '12',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.SittingAndSpeaking.SitsHunched',
  },
];

export const symptomsAsthma6aboveRespiratoryData = [
  {
    id: '13',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.Above30',
  },
  {
    id: '14',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.30below',
  },
];

export const symptomsAsthma4_5_3belowRespiratoryData = [
  {
    id: '15',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.Above40',
  },
  {
    id: '16',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.RespiratoryRate.40below',
  },
];

export const symptomsAsthma6abovePulseData = [
  {
    id: '17',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Above120',
  },
  {
    id: '18',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.120below',
  },
];
export const symptomsAsthma4_5PulseData = [
  {
    id: '19',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Above150',
  },
  {
    id: '20',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.150below',
  },
];
export const symptomsAsthma3belowPulseData = [
  {
    id: '21',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.Above180',
  },
  {
    id: '22',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.PulseRate.180below',
  },
];

export const symptomsAsthma6aboveOxygenData = [
  {
    id: '23',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.Under90',
  },
  {
    id: '24',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.90Above',
  },
];

export const symptomsAsthma4_5_3belowOxygenData = [
  {
    id: '25',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.92Above',
  },
  {
    id: '26',
    text: 'AsthmaPage.SeverityOfAsthmaPage.Symptoms.OxygenSaturation.Under92',
  },
];

export const asthmaReferImmediatelyResult: ToolResultItem[] = [
  {
    id: 0,
    textStart:
      'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.Subtitle',
      symbolType: SymbolType.None
  },
  {
    id: 1,
    textStart:
      'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.Item1_1',
    linkText:
      'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.LinkTitle',
      linkName: '7/102table',
      linkType: AnchorType.Tables,
    textEnd: 'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.Item1_2',
  },
  {
    id: 2,
    textStart: 'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.Item2',
  },
  {
    id: 3,
    textStart:
      'AsthmaPage.SeverityOfAsthmaPage.Result.Common.GiveControlledOxygen',
  },
  {
    id: 4,
    textStart: 'AsthmaPage.SeverityOfAsthmaPage.Result.ReferImmediately.Item4',
  },
];

export const asthmaMildResult: ToolResultItem[] = [
  {
    id: 5,
    textStart: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Item1_1',
    linkText: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.LinkTitle',
    linkName: '7/102table',
    linkType: AnchorType.Tables,
    textEnd: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Item1_2',
  },
  {
    id: 6,
    textStart: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Item2',
  },
  {
    id: 7,
    textStart:
      'AsthmaPage.SeverityOfAsthmaPage.Result.Common.GiveControlledOxygen',
  },
  {
    id: 8,
    textStart: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.Item4',
    nested: [
      {
        id: 9,
        textStart:
          'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Title_2',
          symbolType: SymbolType.Hyphen,
          specialContent: {type: SpecialTextType.Bold, text: "AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Title_1"},
        nested: [
          {
            id: 10,
            symbolType: SymbolType.Dot,
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem1',
          },
          {
            id: 11,
            symbolType: SymbolType.Dot,
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem2',
          },
          {
            id: 12,
            symbolType: SymbolType.Dot,
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem3',
          },
          {
            id: 13,
            symbolType: SymbolType.Dot,
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem4_1',
              linkText: 'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.PageLink',
              linkName: '7/types-inhaler-devices',
              linkType: AnchorType.Info,
              textEnd:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem4_2',
          },
          {
            id: 14,
            symbolType: SymbolType.Dot,
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem5_1',
            linkText:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.AnnexTitle',
              linkName: '12/asthma-action-plan',
              linkType: AnchorType.Info,
            textEnd:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.GoodResponse.Subitem5_2',
          },
        ],
      },
      {
        id: 15,
        symbolType: SymbolType.Hyphen,
        specialContent: {type: SpecialTextType.Bold, text: "AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.Title_1"},
        textStart:
          'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.Title_2',
        nested: [
          {
            id: 16,
            symbolType: SymbolType.Dot,
            specialContent: {type: SpecialTextType.RedBold, text: "AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.Refer"},
            textStart:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.Subitem1_1',
            linkText:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.LinkTitle',
              linkName: '7/life-threatening-severe-exacerbation',
              linkType: AnchorType.Info,
            textEnd:
              'AsthmaPage.SeverityOfAsthmaPage.Result.MildSeverate.PoorResponse.Subitem1_2',
          },
        ],
      },
    ],
  },
];
