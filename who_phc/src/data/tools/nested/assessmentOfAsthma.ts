import AnchorType from '../../../domains/enums/AnchorType';
import SymbolType from '../../../domains/enums/SymbolType';
import { ToolResultItem } from '../../../domains/types/ToolResultItems';

export const assessmentOfAsthmaAgeData = [
  {
    id: '0',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Age.6more',
  },
  {
    id: '1',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Age.5less',
  },
];

export const symptomsAsthmaAssessment6more = [
  {
    id: '0',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.6more.Item1',
  },
  {
    id: '1',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.6more.Item2',
  },
  {
    id: '2',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.NightWalking',
  },
  {
    id: '3',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.ActivityLimitation',
  },
];

export const symptomsAsthmaAssessment5less = [
  {
    id: '5',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.5less.Item1',
  },
  {
    id: '6',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.5less.Item2',
  },
  {
    id: '7',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.NightWalking',
  },
  {
    id: '8',
    text: 'AsthmaPage.AssessmentOfSymptomsPage.Symptoms.ActivityLimitation',
  },
];

const riskFactorsItem: ToolResultItem = {
  id: 1,
  textStart:
    'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactorsTitle',
  nested: [
    {
      id: 2,
      symbolType: SymbolType.Hyphen,
      textStart:
        'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactors.Item1',
    },
    {
      id: 3,
      symbolType: SymbolType.Hyphen,
      textStart:
        'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactors.Item2',
    },
    {
      id: 4,
      symbolType: SymbolType.Hyphen,
      textStart:
        'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactors.Item3',
    },
    {
      id: 5,
      symbolType: SymbolType.Hyphen,
      textStart:
        'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactors.Item4',
    },
    {
      id: 6,
      symbolType: SymbolType.Hyphen,
      textStart:
        'AsthmaPage.AssessmentOfSymptomsPage.Result.General.RiskFactors.Item5',
    },
  ],
};

const poorAdherenceItem: ToolResultItem = {
  id: 7,
  textStart: 'AsthmaPage.AssessmentOfSymptomsPage.Result.General.PoorAdherence',
};

const actionPlanItem: ToolResultItem = {
  id: 8,
  textStart: 'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item4',
  linkText:
    'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.AnnexLink',
  linkName: '12/asthma-action-plan',
  linkType: AnchorType.Info ,
  textEnd: 'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item5',
};

export const asthmaAssessmentWellControlledResult: ToolResultItem[] = [
  riskFactorsItem,
  poorAdherenceItem,
  {
    id: 9,
    textStart:
      'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.Title',
    nested: [
      {
        id: 10,
        symbolType: SymbolType.Hyphen,
        textStart:
          'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.Subitem1',
      },
      {
        id: 11,
        symbolType: SymbolType.Hyphen,
        textStart:
          'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.Subitem2',
      },
      {
        id: 12,
        symbolType: SymbolType.Hyphen,
        textStart:
          'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.SubItem3_1',
          textEnd:
          'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.SubItem3_2',
        linkText:
          'AsthmaPage.AssessmentOfSymptomsPage.Result.WellControlled.Item3.LinkTitle',
        linkName: '7/initial-controller-treatment',
        linkType: AnchorType.Info
      },
    ],
  },
  actionPlanItem,
];

export const asthmaAssessmentPartlyControlledResult: ToolResultItem[] = [
  riskFactorsItem,
  poorAdherenceItem,
  {
    id: 13,
    textStart:
      'AsthmaPage.AssessmentOfSymptomsPage.Result.PartlyControlled.Item3',
  },
  actionPlanItem,
];

export const asthmaAssessmentUncontrolledResult: ToolResultItem[] = [
  riskFactorsItem,
  poorAdherenceItem,
  {
    id: 14,
    textStart: 'AsthmaPage.AssessmentOfSymptomsPage.Result.Uncontrolled.Item3',
    linkText:
      'AsthmaPage.AssessmentOfSymptomsPage.Result.Uncontrolled.LinkTitle',
    linkName: '7/initial-controller-treatment',
    linkType: AnchorType.Info
  },
  {
    id: 15,
    textStart: 'AsthmaPage.AssessmentOfSymptomsPage.Result.Uncontrolled.Item4',
  },
  actionPlanItem,
];
