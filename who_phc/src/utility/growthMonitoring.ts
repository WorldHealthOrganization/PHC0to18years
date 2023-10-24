import { COLORS } from "../styles/generalStyles.styles";

export const getNutritionalStatusColor = (isBackground: boolean, zscore: string) => {
    const numZscore = Number(zscore);
    if (numZscore > 3) {
      return isBackground ? COLORS.chartRedBackground : COLORS.chartRed;
    }
    if (numZscore > 2 && numZscore <= 3) {
      return isBackground ? COLORS.chartOrangeBackground : COLORS.chartOrange;
    }
    if (numZscore >= -2 && numZscore <= 2) {
      return isBackground ? COLORS.chartGreenBackground : COLORS.chartGreen;
    }
    if (numZscore < -2 && numZscore >= -3) {
      return isBackground ? COLORS.chartOrangeBackground : COLORS.chartOrange;
    }
    if (numZscore < -3) {
      return isBackground ? COLORS.chartRedBackground : COLORS.chartRed;
    }
  };