import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { MainContextProvider } from '../../context/useMainContext';
import i18n from '../../locales/i18n.config';
import Routes from '../../routing/routing';
import TestPage from '../../screens/test/testPage';
import HomeScreenStack from './screenstacks/HomeScreenStack';
import Search from './Search';
import { RootStackParamList } from '../../domains/types/Routing';
import ToolsScreenStack from './screenstacks/ToolsScreenStack';
import CounsellingBoxesScreenStack from './screenstacks/CounsellingBoxesScreenStack';
import { SearchContextProvider } from '../../context/useSearchContext';
import ImageModal from '../UI/ImageModal';
import SettingsScreenStack from './screenstacks/SettingsScreenStack';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppRoot = () => {
  return (
    <SafeAreaProvider>
      <MainContextProvider>
        <SearchContextProvider>
          <I18nextProvider i18n={i18n}>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  tabBarStyle: {
                    //height: DeviceInfo.isTablet() ? 80 : 50,
                  },
                  tabBarItemStyle: {
                    flex: 1,
                  },
                }}>
                <Tab.Screen
                  name={Routes.HomeScreen}
                  component={HomeScreenStack}
                  options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <SimpleLineIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                  }}
                />
                <Tab.Screen
                  name={Routes.CounsellingBoxes}
                  component={CounsellingBoxesScreenStack}
                  options={{
                    tabBarLabel: 'Counselling boxes',
                    tabBarIcon: ({ color, size }) => (
                      <Fontisto name="commenting" color={color} size={size} />
                    ),
                    headerShown: false,
                  }}
                />
                <Tab.Screen
                  name={Routes.ToolsScreen}
                  component={ToolsScreenStack}
                  options={{
                    tabBarLabel: 'Tools & Scales',
                    tabBarIcon: ({ color, size }) => (
                      <FontAwesome5
                        name="ruler-combined"
                        color={color}
                        size={size}
                      />
                    ),
                    headerShown: false,
                  }}
                />
                <Tab.Screen
                  name={Routes.FavouritesScreen}
                  component={TestPage}
                  options={{
                    tabBarLabel: 'Favourites & Notes',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="folder-star-multiple-outline"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name={Routes.SettingsScreen}
                  component={SettingsScreenStack}
                  options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="edit" color={color} size={size} />
                    ),
                    headerShown: false,
                  }}
                />
              </Tab.Navigator>
              <Search />
              <ImageModal />
            </NavigationContainer>
          </I18nextProvider>
        </SearchContextProvider>
      </MainContextProvider>
    </SafeAreaProvider>
  );
};

export default AppRoot;
