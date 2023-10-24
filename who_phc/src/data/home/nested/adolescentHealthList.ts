import { ChapterItem, ChapterItemType } from '../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../routing/routing';

const adolescentHealthList: ChapterItem[] = [
  {
    path: HomeRoutes.ChapterScreen,
    id: 8,
    label: 'AdolescentHealthPage.ApproachContent',
    type: ChapterItemType.ApproachContent,
  },
  {
    label: 'AdolescentHealthPage.Menu.DevelopmentAdolescent',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'development-of-adolescent',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.CompetenceConsentConfidentiality',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'competence-consent-confidentiality',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.DiagnosticApproaches',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'diagnostic-approaches-adolescent',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentWithDelayed',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'adolescent-delayed-puberty',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentWithConcerns',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'adolescent-concerns-sexual-matters',
    id: 8,
    nested: [
      {
        label: 'AdolescentHealthPage.Menu.SexualAndReproductiveHealth',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'sexual-reproductive-health-assessment',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.SexualEducationAndCounselling',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'sexual-education-counselling',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.Contraception',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'contraception',
        id: 8,
      },
    ],
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentWhoReports',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'unprotected-sexual-intercourse',
    id: 8,
    nested: [
      {
        label: 'AdolescentHealthPage.Menu.EmergencyContraception',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'emergency-contraception',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.PostHIVExposureProphylaxis',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'post-hiv',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.SexuallyTransmittedInfections',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'sexually-transmitted-infections',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.Pregnancy',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'pregnancy',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.Abortion',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'abortion',
        id: 8,
      },
    ],
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentGirl',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'adolescent-menstrual-cycle-problems',
    id: 8,
    nested: [
      {
        label: 'AdolescentHealthPage.Menu.Hypermenorrhoea',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'hypermenorrhoea',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.Dysmenorrhoea',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'dysmenorrhoea',
        id: 8,
      },
      {
        label: 'AdolescentHealthPage.Menu.Amenorrhoea',
        path: HomeRoutes.ChapterScreen,
        idSubchapterInHTML: 'amenorrhoea',
        id: 8,
      },
    ],
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentWithSkin',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'adolescent-skin-problems',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentWithEmotional',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'adolescent-emotional-behavioural-problems',
    id: 8,
  },
  {
    label: 'AdolescentHealthPage.Menu.AdolescentLiving',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'chronic-conditions',
    id: 8,
  },
];
export default adolescentHealthList;
