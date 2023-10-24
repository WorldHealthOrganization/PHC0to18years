import { View, StyleSheet, Text, Pressable, SafeAreaView, Image, Platform } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';

import { COLORS, HEADER_HEIGHT } from '../../styles/generalStyles.styles';
import useMainContext from '../../context/useMainContext';
import useDimensions from '../../hooks/useDimensions';
import ScreenParams from '../../domains/types/ScreenParams';
import SortBy from '../../domains/enums/SortBy';
import useSearchContext from '../../context/useSearchContext';
import { HomeRoutes } from '../../routing/routing';

const WHOLogo = Platform.OS === "android" ? 'asset:/genericImages/WHO.png' : 'assets/genericImages/WHO.png'

export enum HomePage {
  ProvidingCare = 1,
  DiagnosticApproaches,
  WellChildVisit,
  HealthPromotion,
  NewbornHealth,
  SpecificComplaint,
  SpecificDisease,
  AdolescentHealth,
  Emergency,
  PracticalProcedures,
  DrugDosages,
  Other,
}

const ScreenMenuHeader = ({
  navigation,
  options,
  route,
}: NativeStackHeaderProps) => {
  const { sortBy, setSortBy } = useMainContext();
  const { setSearchModalOpen } = useSearchContext();
  const { window } = useDimensions();
  const { params } = route;

  const handleSort = () => {
    const newSortBy =
      sortBy === SortBy.Alphabet ? SortBy.Default : SortBy.Alphabet;

    setSortBy(newSortBy);
  };

  const getSortIcon = () => {
    if (sortBy === SortBy.Alphabet) {
      return 'sort-alphabetical-variant';
    }
    return 'format-list-bulleted';
  };

  const canGoBack = navigation.canGoBack();

  return (
    <SafeAreaView style={[options.headerStyle]}>
      <View style={[styles.container, { width: window.width }]}>
        <View style={[styles.header, options.headerStyle]}>
          <View style={styles.back}>
            {route.name === HomeRoutes.DefaultHomeScreen &&
              <Image
                source={{ uri: WHOLogo }}
                style={{ tintColor: COLORS.darkGrey, height: HEADER_HEIGHT - 5, width: 150 }}
              />}

            {(route.name !== HomeRoutes.DefaultHomeScreen && canGoBack) &&
              <Pressable onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color={options.headerTintColor ?? COLORS.graphite}
                  size={30}
                  style={styles.icon}
                />
              </Pressable>
            }
          </View>

          <View style={styles.title}>
            {route.name !== HomeRoutes.DefaultHomeScreen &&
              <Text
                numberOfLines={2}
                style={[
                  styles.label,
                  { color: options.headerTintColor ?? COLORS.graphite },
                ]}>
                {options.title}
              </Text>
            }
          </View>

          <View style={styles.buttonsGroup}>
            {(params as ScreenParams)?.sorted && (
              <Pressable onPress={handleSort} style={styles.button}>
                <MaterialCommunityIcons
                  name={getSortIcon()}
                  color={options.headerTintColor ?? COLORS.graphite}
                  size={30}
                  style={styles.icon}
                />
              </Pressable>
            )}
            <Pressable
              onPress={() => setSearchModalOpen(opened => !opened)}
              style={[styles.button]}>
              <MaterialCommunityIcons
                name="magnify"
                color={options.headerTintColor ?? COLORS.graphite}
                size={30}
                style={styles.icon}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  button: {
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyItems: 'center',
  },
  title: {
    flex: 2,
    alignItems: 'center',
  },
  buttonsGroup: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  icon: {
    padding: 5,
  },
  back: {
    width: 40,
  },
});

export default ScreenMenuHeader;
