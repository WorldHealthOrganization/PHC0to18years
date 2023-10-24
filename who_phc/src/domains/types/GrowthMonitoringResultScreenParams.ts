import { PropsWithChildren } from 'react';
import GrowthMonitoringToolType from '../enums/GrowthMonitoringToolType';

export type GrowthMonitoringResultScreenParams = {
  age: string;
  sex: string;
  weight: string;
  height: string;
  headCircumference?: string;
};

export type FormulaParams = PropsWithChildren<{
  L: string;
  M: string;
  S: string;
  value1: string;
  value2: string;
}>;

export type LMSParams = PropsWithChildren<{
  toolType: GrowthMonitoringToolType;
  value: string;
}>;

export type GrowthMonitoringResultItemProps = PropsWithChildren<{
  title: string;
  zscore: string;
  percentile: string;
  toolType: GrowthMonitoringToolType;
  sex: string;
  age: string;
  bottomParameter: string;
  leftParameter: string;
  nutritionalStatus?: string;
}>;

export type GrowthMonitoringChartParams = PropsWithChildren<{
  toolType: GrowthMonitoringToolType;
  zscore: number;
  sex: string;
  age: string;
  bottomParameter: string;
  leftParameter: string;
}>;
