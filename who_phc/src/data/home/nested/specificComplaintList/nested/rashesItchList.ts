import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const rashesItchList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.Approach',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'rashes-itch-skin-problems',
    id: 6,
    type: ChapterItemType.ApproachBtn,
  },
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.MaculopapularRash',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'maculopapular-rash-fever',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.AtopicDermatitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'atopic-dermatitis-eczema',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Impetigo',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'impetigo',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Cellulitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'cellulitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.SkinAbscess',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'skin-abscess',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.FungalInfection',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'fungal-infection',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Sunburn',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'sunburn',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Urticaria',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'urticaria',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.AllergicReactions',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'allergic-reactions-contact-dermatitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Scabies',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'scabies',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.MolluscumContagiosum',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'molluscum-contagiosum',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.Erysipelas',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'erysipelas',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.VesicularOrBullous',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'vesicular-bullous-rash',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.HerpeticInfection',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'herpetic-infection',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.PurpuricOrPetechial',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'purpuric-petechial-rash',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.RashesItchSubMenu.HenochSchönleinPurpura',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'henoch-schonlein-purpura',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.Warts',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'warts',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.RashesItchSubMenu.Lice',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'lice',
    id: 6,
  },
];

export default rashesItchList;
