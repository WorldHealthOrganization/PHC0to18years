import { StyleSheet } from 'react-native';

export const HEADER_HEIGHT = 60;

export const COLORS = {
  grey: '#D5D5D5',
  darkGrey: '#737373',
  graphite: '#373737',
  black: '#000000',
  white: '#FFFFFF',
  paperWhite: '#FCFCFC',
  blue: '#008DD1',

  lightBlue: '#5aaed6',
  lightGrey: '#F5F5F5',

  transparentWhite: 'rgba(255, 255, 255, 0.6)',
  transparentGrey: 'rgba(245, 245, 245, 0.7)',
  transparentBlue: 'rgba(0, 141, 209, 0.7)',

  blueBackground: 'rgba(0, 141, 209, 0.2)',

  chartRed: 'rgba(192, 53, 62, 1)',
  chartOrange: 'rgba(213, 113, 60, 1)',
  chartGreen: 'rgba(23, 120, 68, 1)',

  chartRedBackground: 'rgba(192, 53, 62, 0.4)',
  chartOrangeBackground: 'rgba(213, 113, 60, 0.4)',
  chartGreenBackground: 'rgba(23, 120, 68, 0.4)',

  drugDosageYellow: 'rgba(254, 247, 186, 0.8)',
};

export const ACCENT_COLORS = {
  providingCare: '#00885D',
  diagnostic: '#009BA4',
  wellChild: '#37AA49',
  healthPromotion: '#019FE3',
  newborn: '#005CA9',
  complaint: '#5C2583',
  disease: '#7C6EB0',
  adolescent: '#E63439',
  emergency: '#E75F9C',
  procedures: '#F5C116',
  drugDosages: '#F1B3D1',
  other: '#EC6708',

  providingCareLight: 'rgba(0, 136, 93, 0.7)',
  diagnosticLight: 'rgba(0, 155, 164, 0.7)',
  wellChildLight: 'rgba(55, 170, 73, 0.7)',
  healthPromotionLight: 'rgba(1, 159, 227, 0.7)',
  newbornLight: 'rgba(0, 92, 169, 0.7)',
  complaintLight: 'rgba(92, 37, 131, 0.7)',
  diseaseLight: 'rgba(124, 110, 176, 0.7)',
  adolescentLight: 'rgba(230, 52, 57, 0.7)',
  emergencyLight: 'rgba(231, 95, 156, 0.7)',
  proceduresLight: 'rgba(245, 193, 22, 0.7)',
  drugDosagesLight: 'rgba(241, 179, 209, 0.7)',
  otherLight: 'rgba(236, 103, 8, 0.7)',

  providingCareBackground: 'rgba(0, 136, 93, 0.2)',
  diagnosticBackground: 'rgba(0, 155, 164, 0.2)',
  wellChildBackground: 'rgba(55, 170, 73, 0.2)',
  healthPromotionBackground: 'rgba(1, 159, 227, 0.2)',
  newbornBackground: 'rgba(0, 92, 169, 0.2)',
  complaintBackground: 'rgba(92, 37, 131, 0.2)',
  diseaseBackground: 'rgba(124, 110, 176, 0.2)',
  adolescentBackground: 'rgba(230, 52, 57, 0.2)',
  emergencyBackground: 'rgba(231, 95, 156, 0.2)',
  proceduresBackground: 'rgba(245, 193, 22, 0.2)',
  drugDosagesBackground: 'rgba(241, 179, 209, 0.2)',
  otherBackground: 'rgba(236, 103, 8, 0.2)',
};

const generalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolGetResultButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  toolResultText: {
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  linkInsideText: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: COLORS.blue, 
    marginBottom: -5,
  },
  menuItem: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  }
});

export default generalStyles;
