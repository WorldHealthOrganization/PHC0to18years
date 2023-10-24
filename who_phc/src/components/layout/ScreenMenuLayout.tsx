import { View, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { COLORS } from '../../styles/generalStyles.styles';

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

type ScreenMenuLayoutProps = PropsWithChildren<{
  color: string;
  backgroundColor?: string;
  children: React.ReactNode;
}>;

const ScreenMenuLayout: React.FC<ScreenMenuLayoutProps> = ({
  color,
  backgroundColor = COLORS.white,
  children,
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <View style={[styles.content, styles.roundPart]}>
      <View style={[styles.container, styles.roundPart, { backgroundColor }]}>
        {children}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  roundPart: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  container: {
    flex: 1,
  },
});

export default ScreenMenuLayout;
