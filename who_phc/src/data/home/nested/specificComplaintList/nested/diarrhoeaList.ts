import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const diarrhoeaList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'diarrhoea',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.AcuteDiarrhoea',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'acute-diarrhoea-gastroenteritis',
    id: 6,
    nested: [
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.NoDehydration',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'no-dehydration',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.SomeDehydration',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'some-dehydration',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.SevereDehydration',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'severe-dehydration',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.DiarrhoeaSubMenu.DiarrhoeaAndPersistentVomiting',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'diarrhoea-persistent-vomiting',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.AntibioticAssociated',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'antibiotic-associated-diarrhoea',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.FoodPoisoning',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'food-poisoning',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Dysentery',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'dysentery',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.PersistentDiarrhoea',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'persistent-diarrhoea',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.PostInfectious',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'post-infectious-diarrhoea',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.FoodAllergy',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'food-allergy-intolerance',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.MilkAllergy',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'milk-allergy',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.LactoseIntolerance',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'lactose-intolerance',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Toddler',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'toddlers-diarrhoea',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Irritable',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'irritable-bowel-syndrome',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Giardiasis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'giardiasis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.CoeliacDisease',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'coeliac-disease',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.DiarrhoeaSubMenu.InflammatoryBowel',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'inflammatory-bowel-disease',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.DiarrhoeaSubMenu.Worms',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'worms',
    id: 6,
  },
];

export default diarrhoeaList;
