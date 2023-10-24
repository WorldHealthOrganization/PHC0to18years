import { ToolResultItem } from "../../../domains/types/ToolResultItems";
import { ToolSymptomImageParams } from "../../../domains/types/ToolSymptomImageParams";

export const dehydrationSymptomsData = [
  {
    id: '0',
    text: 'DehydrationToolPage.Symptoms.Restlessness',
  },
  {
    id: '1',
    text: 'DehydrationToolPage.Symptoms.Lethargy',
  },
  {
    id: '2',
    text: 'DehydrationToolPage.Symptoms.SunkenEyes',
  },
  {
    id: '3',
    text: 'DehydrationToolPage.Symptoms.DrinksEagerly',
  },
  {
    id: '4',
    text: 'DehydrationToolPage.Symptoms.UnableToDrink',
  },
  {
    id: '5',
    text: 'DehydrationToolPage.Symptoms.SkinPinchSlowly',
  },
  {
    id: '6',
    text: 'DehydrationToolPage.Symptoms.SkinPinchVerySlowly'
  },
];

export const noDehydrationResultData: ToolResultItem[] = [
  {
    id: 0,
    textStart: 'DehydrationToolPage.Result.NoDehydrationTreatment',
    linkText: 'DehydrationToolPage.Result.NoDehydrationTreatmentLink',
    linkName: '6/1Achart',
    linkType: AnchorType.Charts
  }
]

export const someDehydrationResultData: ToolResultItem[] = [
  {
    id: 0,
    textStart: 'DehydrationToolPage.Result.SomeDehydrationTreatment',
    linkText: 'DehydrationToolPage.Result.SomeDehydrationTreatmentLink',
    linkName: '6/1Bchart',
    linkType: AnchorType.Charts
  }
]

export const severeDehydrationResultData: ToolResultItem[] = [
  {
    id: 0,
    textStart: 'DehydrationToolPage.Result.SevereDehydrationTreatment',
    linkText: 'DehydrationToolPage.Result.SevereDehydrationTreatmentLink',
    linkName: '6/1Cchart',
    linkType: AnchorType.Charts
  }
]


import dehydrationImage1 from '../../../../assets/chapters/dehydration/7A.png';
import dehydrationImage2 from '../../../../assets/chapters/dehydration/7B.png';
import dehydrationImage3 from '../../../../assets/chapters/dehydration/Sunken_eyes.jpg';

import AnchorType from "../../../domains/enums/AnchorType";

export const dehydrationSymptomImagesData: ToolSymptomImageParams[] = [
  {
    id: 0,
    fileName: dehydrationImage1,
    textDescription: 'DehydrationToolPage.SymptomImage.Item1.Title',
    width: 50,
    height: 120,
  },
  {
    id: 1,
    fileName: dehydrationImage2,
    textDescription: 'DehydrationToolPage.SymptomImage.Item2.Title',
    width: 50,
    height: 120,
  },
  {
    id: 2,
    fileName: dehydrationImage3,
    textDescription: 'DehydrationToolPage.SymptomImage.Item3.Title',
    width: 40,
    height: 150,
  }
]