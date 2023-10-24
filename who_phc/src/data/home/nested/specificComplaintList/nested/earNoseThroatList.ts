import {
  ChapterItem,
  ChapterItemType,
} from '../../../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../../../routing/routing';

const earNoseThroatList: ChapterItem[] = [
  {
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'ear-nose-throat-problems',
    id: 6,
    label: 'SpecificComplaintPage.ApproachContent.EarNoseThroat',
    type: ChapterItemType.ApproachContent,
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.OtalgiaEarPain',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'ear-pain',
    id: 6,
    nested: [
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.OtitisExterna',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'otitis-externa',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.AcuteOtitisMedia',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'acute-otitis-media',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.EarNoseThroatSubMenu.OtitisMediaWithEffusion',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'otitis-media-effusion',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.ChronicOtitisMedia',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'chronic-otitis-media',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.Mastoiditis',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'mastoiditis',
    id: 6,
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.SoreThroat',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'sore-throat',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.Tonsillitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'tonsillitis',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.NasalDischarge',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'nasal-discharge',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.Sinusitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'sinusitis',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.NasalObstruction',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'nasal-obstruction',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.AdenoidHypertrophy',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'adenoid-hypertrophy',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.EarNoseThroatSubMenu.NasalSeptalDeviation',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'nasal-septal-deviation',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.EarNoseThroatSubMenu.NasalPolyps',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'nasal-polyps',
        id: 6,
      },
    ],
  },
  {
    label: 'SpecificComplaintPage.EarNoseThroatSubMenu.EpistaxisNoseBleeding',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'epistaxis',
    id: 6,
  },
];

export default earNoseThroatList;
