import {
  ChapterItem,
  ChapterItemType,
} from '../../../../domains/types/MenuItemT';
import {
  HomeRoutes,
  SpecificComplaintRoutes,
} from '../../../../routing/routing';

import abdominalPainList from './nested/abdominalPainList';
import coughList from './nested/coughList';
import diarrhoeaList from './nested/diarrhoeaList';
import difficultiesWithSocialList from './nested/difficultiesWithSocialList';
import earNoseThroatList from './nested/earNoseThroatList';
import eyeProblemsList from './nested/eyeProblemsList';
import feverList from './nested/feverList';
import genitourinarySymptomsList from './nested/genitourinarySymptomsList';
import headacheList from './nested/headacheList';
import heartMurmurList from './nested/heartMurmurList';
import injuriesList from './nested/injuriesList';
import jaundiceList from './nested/jaundiceList';
import pallorList from './nested/pallorList';
import palpitationsList from './nested/palpitationsList';
import rashesItchList from './nested/rashesItchList';
import renalProblemsList from './nested/renalProblemsList';
import seizuresList from './nested/seizuresList';
import swellingOrPainList from './nested/swellingOrPainList';
import vomitingList from './nested/vomitingList';
import weightGrowthProblemsList from './nested/weightGrowthProblemsList';

const specificComplaintList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.Approach',
    path: HomeRoutes.ChapterScreen,
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.Menu.CoughDifficultyBreathing',
    path: SpecificComplaintRoutes.CoughScreen,
    idSubchapterInHTML: 'cough-difficulty-breathing',
    id: 6,

    nestedScreenList: coughList,
  },
  {
    label: 'SpecificComplaintPage.Menu.EarNoseThroat',
    path: SpecificComplaintRoutes.EarNoseThroatScreen,
    idSubchapterInHTML: 'ear-nose-throat-problems',
    id: 6,

    nestedScreenList: earNoseThroatList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Fever',
    path: SpecificComplaintRoutes.FeverScreen,
    idSubchapterInHTML: 'fever',
    id: 6,

    nestedScreenList: feverList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Diarrhoea',
    path: SpecificComplaintRoutes.DiarrhoeaScreen,
    idSubchapterInHTML: 'diarrhoea',
    id: 6,

    nestedScreenList: diarrhoeaList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Vomiting',
    path: SpecificComplaintRoutes.VomitingScreen,
    idSubchapterInHTML: 'vomiting',
    id: 6,

    nestedScreenList: vomitingList,
  },
  {
    label: 'SpecificComplaintPage.Menu.AbdominalPain',
    path: SpecificComplaintRoutes.AbdominalPainScreen,
    idSubchapterInHTML: 'abdominal-pain',
    id: 6,

    nestedScreenList: abdominalPainList,
  },
  {
    label: 'SpecificComplaintPage.Menu.ChestPain',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'chest-pain',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.HeartMurmur',
    path: SpecificComplaintRoutes.HeartMurmurScreen,
    idSubchapterInHTML: 'heart-murmur',
    id: 6,

    nestedScreenList: heartMurmurList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Palpitations',
    path: SpecificComplaintRoutes.PalpitationsScreen,
    idSubchapterInHTML: 'palpitations',
    id: 6,

    nestedScreenList: palpitationsList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Syncope',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'syncope',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.HighBlood',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'high-blood-pressure',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.RenalProblems',
    path: SpecificComplaintRoutes.RenalProblemsScreen,
    idSubchapterInHTML: 'renal-problems',
    id: 6,

    nestedScreenList: renalProblemsList,
  },
  {
    label: 'SpecificComplaintPage.Menu.GenitourinarySymptoms',
    path: SpecificComplaintRoutes.GenitourinarySymptomsScreen,
    idSubchapterInHTML: 'genitourinary-symptoms',
    id: 6,

    nestedScreenList: genitourinarySymptomsList,
  },
  {
    label: 'SpecificComplaintPage.Menu.RashesItch',
    path: SpecificComplaintRoutes.RashesItchScreen,
    idSubchapterInHTML: 'rashes-itch-skin-problems',
    id: 6,

    nestedScreenList: rashesItchList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Pallor',
    path: SpecificComplaintRoutes.PallorScreen,
    idSubchapterInHTML: 'pallor',
    id: 6,

    nestedScreenList: pallorList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Jaundice',
    path: SpecificComplaintRoutes.JaundiceScreen,
    idSubchapterInHTML: 'jaundice',
    id: 6,

    nestedScreenList: jaundiceList,
  },
  {
    label: 'SpecificComplaintPage.Menu.SwellingOrPain',
    path: SpecificComplaintRoutes.SwellingOrPainScreen,
    idSubchapterInHTML: 'swellig-pain-joints-bones',
    id: 6,

    nestedScreenList: swellingOrPainList,
  },
  {
    label: 'SpecificComplaintPage.Menu.LumpsSwellings',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'lumps-swellings',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.EyeProblems',
    path: SpecificComplaintRoutes.EyeProblemsScreen,
    idSubchapterInHTML: 'eye-problems',
    id: 6,

    nestedScreenList: eyeProblemsList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Headache',
    path: SpecificComplaintRoutes.HeadacheScreen,
    idSubchapterInHTML: 'headache',
    id: 6,

    nestedScreenList: headacheList,
  },
  {
    label: 'SpecificComplaintPage.Menu.Seizures',
    path: SpecificComplaintRoutes.SeizuresScreen,
    idSubchapterInHTML: 'seizures',
    id: 6,

    nestedScreenList: seizuresList,
  },
  {
    label: 'SpecificComplaintPage.Menu.LowFloppyMuscle',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'low-floppy-muscle-tone',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.Injuries',
    path: SpecificComplaintRoutes.InjuriesScreen,
    idSubchapterInHTML: 'injuries',
    id: 6,

    nestedScreenList: injuriesList,
  },
  {
    label: 'SpecificComplaintPage.Menu.ForeignBodies',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'foreign-bodies',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.Pain',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'pain',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.WeightGrowthProblems',
    path: SpecificComplaintRoutes.WeightGrowthProblemsScreen,
    idSubchapterInHTML: 'weight-growth-problems',
    id: 6,

    nestedScreenList: weightGrowthProblemsList,
  },
  {
    label: 'SpecificComplaintPage.Menu.HeadSizeVariations',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'head-size-variations',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.LowMoodDepression',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'low-mood-depression',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.SuicidalThoughts',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'suicidal-thoughts-self-harm',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.FearAnxiety',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'fear-anxiety-avoidance',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.InattentionOveractivity',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'inattention-overactivity',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.AngerTemper',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'anger-temper-tantrums-disobedience',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.DifficultiesSocialInteraction',
    path: SpecificComplaintRoutes.DifficultiesSocialInteractionScreen,
    idSubchapterInHTML: 'social-interaction-difficulties',
    id: 6,
    nestedScreenList: difficultiesWithSocialList,
  },
  {
    label: 'SpecificComplaintPage.Menu.SleepingProblems',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sleeping-problems',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.EatingProblems',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'eating-problems-fear',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.Menu.RecurrentUnexplained',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'recurrent-physical-symptoms',
    id: 6,
  },
];

export default specificComplaintList;
