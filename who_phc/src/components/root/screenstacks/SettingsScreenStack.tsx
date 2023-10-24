import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { SettingsRoutes } from "../../../routing/routing";
import SettingsScreen from "../../../screens/settings/SettingsScreen";
import { COLORS } from "../../../styles/generalStyles.styles";
import ScreenMenuHeader from "../../home/ScreenMenuHeader";

const SettingsStack = createNativeStackNavigator();

function SettingsScreenStack() {
    const { t } = useTranslation();
    return (
      <SettingsStack.Navigator
        initialRouteName={SettingsRoutes.DefaultSettingsScreen}
        screenOptions={{
          header: ScreenMenuHeader,
          headerTintColor: COLORS.lightGrey,
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        }}>
        <SettingsStack.Screen
          name={SettingsRoutes.DefaultSettingsScreen}
          component={SettingsScreen}
          options={{
            title: t`SettingsPage.PageTitle` as string,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.darkGrey,
          }}
        />
      </SettingsStack.Navigator>
    );
  }
  
  export default SettingsScreenStack;
  