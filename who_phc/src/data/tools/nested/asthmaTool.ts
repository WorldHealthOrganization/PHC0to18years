import { NavigateItem } from "../../../domains/types/MenuItemT";
import { ToolsRoutes } from "../../../routing/routing";

const asthmaList: NavigateItem<any>[] = [
    {
      path: ToolsRoutes.SeverityOfAsthmaScreen,
      label: 'AsthmaPage.Menu.SeverityOfAsthma',
      nested: []
    },
    {
        path: ToolsRoutes.AssessmentOfSymptomsScreen,
        label: 'AsthmaPage.Menu.AssessmentOfSymptoms',
        nested: []
    }
]


export default asthmaList