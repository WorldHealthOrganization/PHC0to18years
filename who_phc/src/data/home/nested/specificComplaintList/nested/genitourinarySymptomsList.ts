import { ChapterItem } from '../../../../../domains/types/MenuItemT';
import Routes, { HomeRoutes } from '../../../../../routing/routing';

const genitourinarySymptomsList: ChapterItem[] = [
  {
    label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Dysuria',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'dysuria',
    id: 6,

    nested: [
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.UrinaryTractInfection',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'urinary-tract-infection',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.KidneyStones',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'kidney-stones',
        id: 6,
      },
    ],
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.UrinaryIncontinence',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'urinary-incontinence',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.BedWetting',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'bed-wetting',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Daytime',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'daytime-wetting',
        id: 6,
      },
    ],
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.ScrotalPainOrSwelling',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'scrotal-pain-swelling',
    id: 6,

    nested: [
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.TesticularTorsion',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'testicular-torsion',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.TorsionOfAppendix',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'torsion-appendix-testis',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.EpididymoOrchitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'epididymo-orchitis',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.ScrotalTrauma',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'scrotal-trauma',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Varicocele',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'varicocele',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Hydrocele',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'hydrocele',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.TesticularTumour',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'testicular-tumour',
        id: 6,
      },
    ],
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.AbsentOrUndescendedTestis',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'absent-undescended-testis',
    id: 6,
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.SwellingInTheGroin',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'swelling-in-groin',
    id: 6,

    nested: [
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.InguinalHernia',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'inguinal-hernia',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.IncarceratedHernia',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'incarcerated-hernia',
        id: 6,
      },
    ],
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.ComplaintsRelatedToThePenis',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'complaints-penis-foreskin',
    id: 6,

    nested: [
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Balanitis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'balanitis',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Phimosis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'phimosis',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Paraphimosis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'paraphimosis',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.HairTourniquet',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'hair-tourniquet',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.ZipperInjury',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'zipper-injury',
        id: 6,
      },
      {
        label: 'SpecificComplaintPage.GenitourinarySymptomsSubMenu.Priapism',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'priapism',
        id: 6,
      },
    ],
  },
  {
    label:
      'SpecificComplaintPage.GenitourinarySymptomsSubMenu.GynaecologicalComplaints',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'gynaecological-complaints',
    id: 6,

    nested: [
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.VaginalDischarge',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'vaginal-discharge',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.VaginalBleeding',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'vaginal-bleeding',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.LabialAdhesions',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'labial-adhesions',
        id: 6,
      },
      {
        label:
          'SpecificComplaintPage.GenitourinarySymptomsSubMenu.VulvarUlcers',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'vulvar-ulcers',
        id: 6,
      },
    ],
  },
];

export default genitourinarySymptomsList;
