import { ChapterItem } from '../../../domains/types/MenuItemT';
import { HomeRoutes } from '../../../routing/routing';

const diagnosticApproachesList: ChapterItem[] = [
  {
    label: 'DiagnosticApproachesPage.Menu.WellChildVisits',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'well-child-visits-problem-follow-up',
    id: 2,
  },
  {
    label: 'DiagnosticApproachesPage.Menu.TakingPaediatricHistory',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'taking-paediatric-history',
    id: 2,
  },
  {
    label: 'DiagnosticApproachesPage.Menu.ApproachToTheChild',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'approach-child-physical-examination',
    id: 2,
  },
  {
    label: 'DiagnosticApproachesPage.Menu.DifferentialDiagnoses',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'differential-diagnoses',
    id: 2,
  },
  {
    label: 'DiagnosticApproachesPage.Menu.FollowUpCare',
    path: HomeRoutes.ChapterScreen,
    idSubchapterInHTML: 'follow-up-care',
    id: 2,
  },
];

export default diagnosticApproachesList;
