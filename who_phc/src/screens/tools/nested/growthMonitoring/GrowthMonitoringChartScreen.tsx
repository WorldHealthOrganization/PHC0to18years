import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import generalStyles, { COLORS } from '../../../../styles/generalStyles.styles';
import { LineChart } from 'react-native-chart-kit';
import { t } from 'i18next';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';

import wfl_boys_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/wfl_boys_0_to_2_years_zscores.json';
import wfh_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfh_boys_2_to_5_years_zscores.json';
import wfl_girls_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/wfl_girls_0_to_2_years_zscores.json';
import wfh_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfh_girls_2_to_5_years_zscores.json';

import lhfa_boys_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_boys_0_to_2_years_zscores.json';
import lhfa_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_boys_2_to_5_years_zscores.json';
import lhfa_girls_0_to_2_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_girls_0_to_2_years_zscores.json';
import lhfa_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/lhfa_girls_2_to_5_years_zscores.json';

import wfa_boys_0_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfa_boys_0_to_5_years_zscores.json';
import wfa_girls_0_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/wfa_girls_0_to_5_years_zscores.json';

import bmi_boys_0_to_2_years_zcores from '../../../../../assets/tools/growthmonitoring/bmi_boys_0_to_2_years_zcores.json';
import bmi_boys_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/bmi_boys_2_to_5_years_zscores.json';
import bmi_girls_0_to_2_years_zcores from '../../../../../assets/tools/growthmonitoring/bmi_girls_0_to_2_years_zscores.json';
import bmi_girls_2_to_5_years_zscores from '../../../../../assets/tools/growthmonitoring/bmi_girls_2_to_5_years_zscores.json';

import hcfa_boys_0_5_zscores from '../../../../../assets/tools/growthmonitoring/hcfa_boys_0_5_zscores.json';
import hcfa_girls_0_5_zscores from '../../../../../assets/tools/growthmonitoring/hcfa_girls_0_5_zscores.json';

import { GrowthMonitoringChartParams } from '../../../../domains/types/GrowthMonitoringResultScreenParams';
import GrowthMonitoringToolType from '../../../../domains/enums/GrowthMonitoringToolType';
import ToolScreenLayout from '../../../../components/layout/ToolScreenLayout';

const screenWidth = Dimensions.get('window').width;

const getStringArrayFromNumbers = (
  from: number,
  to: number,
  between: number,
  countSpace: number,
) => {
  const arr = [];
  arr.push(from.toString());
  for (let i = from + between; i < to; i += between) {
    for (let j = 0; j < countSpace; j++) {
      arr.push('');
    }
    arr.push(i.toString());
  }
  for (let j = 0; j < countSpace; j++) {
    arr.push('');
  }
  arr.push(to.toString());
  return arr;
};

const GrowthMonitoringChartScreen = ({ route }: NativeStackHeaderProps) => {
  const ref = React.useRef<View>(null);

  const { params } = route;

  const toolType = (params as GrowthMonitoringChartParams).toolType;
  const sex = (params as GrowthMonitoringChartParams).sex;
  const age = (params as GrowthMonitoringChartParams).age;
  const zscore = (params as GrowthMonitoringChartParams).zscore;
  const bottomParameter = (params as GrowthMonitoringChartParams)
    .bottomParameter;
  const leftParameter = (params as GrowthMonitoringChartParams).leftParameter;

  const SD3neg: number[] = [];
  const SD2neg: number[] = [];
  const SD1neg: number[] = [];
  const SD0: number[] = [];
  const SD1: number[] = [];
  const SD2: number[] = [];
  const SD3: number[] = [];

  const getBottomTitle = () => {
    var title = '';
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForAge:
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        title = 'GrowthMonitoringToolPage.Age.0_5z';
        break;
      case GrowthMonitoringToolType.BMIForAge:
      case GrowthMonitoringToolType.HeightForAge:
      case GrowthMonitoringToolType.WeightForLength:
        title =
          Number(age) <= 24
            ? 'GrowthMonitoringToolPage.Age.0_2z'
            : 'GrowthMonitoringToolPage.Age.2_5z';
        break;
    }
    return title;
  };
  const getMainTitle = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return 'GrowthMonitoringToolPage.Result.WeightForLength.Title';
      case GrowthMonitoringToolType.HeightForAge:
        return 'GrowthMonitoringToolPage.Result.HeightForAge.Title';
      case GrowthMonitoringToolType.WeightForAge:
        return 'GrowthMonitoringToolPage.Result.WeightForAge.Title';
      case GrowthMonitoringToolType.BMIForAge:
        return 'GrowthMonitoringToolPage.Result.BMIForAge.Title';
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return 'GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.Title';
    }
  };
  const getSexTitle = () => {
    if (sex == '0') {
      return 'GrowthMonitoringToolPage.Sex.Boys';
    } else {
      return 'GrowthMonitoringToolPage.Sex.Girls';
    }
  };

  const getYAxisInterval = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return Number(age) <= 24 ? 10 : 5;
      case GrowthMonitoringToolType.HeightForAge:
        return 2;
      case GrowthMonitoringToolType.WeightForAge:
        return 6;
      case GrowthMonitoringToolType.BMIForAge:
        return Number(age) <= 24 ? 2 : 6;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return 6;
    }
  };
  const getSegments = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return Number(age) <= 24 ? 12 : 14; 
      case GrowthMonitoringToolType.HeightForAge:
        return Number(age) <= 24 ? 18 : 12;
      case GrowthMonitoringToolType.WeightForAge:
        return 14;
      case GrowthMonitoringToolType.BMIForAge:
        return Number(age) <= 24 ? 14 : 12;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return 13;
    }
  };
  const getBottomValues = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return Number(age) <= 24
          ? getStringArrayFromNumbers(45, 110, 5, 4)
          : getStringArrayFromNumbers(65, 120, 5, 4);
      case GrowthMonitoringToolType.HeightForAge:
        return Number(age) <= 24
          ? getStringArrayFromNumbers(0, 24, 2, 1)
          : getStringArrayFromNumbers(2, 5, 1, 11);
      case GrowthMonitoringToolType.WeightForAge:
        return getStringArrayFromNumbers(0, 5, 1, 11);
      case GrowthMonitoringToolType.BMIForAge:
        return Number(age) <= 24
          ? getStringArrayFromNumbers(0, 24, 2, 1)
          : getStringArrayFromNumbers(2, 5, 1, 11);
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return getStringArrayFromNumbers(0, 5, 1, 11);
    }
  };

  const getYaxisDescription = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return t`GrowthMonitoringToolPage.Result.WeightForLength.YAxis`;
      case GrowthMonitoringToolType.HeightForAge:
        return t`GrowthMonitoringToolPage.Result.HeightForAge.YAxis`;
      case GrowthMonitoringToolType.WeightForAge:
        return t`GrowthMonitoringToolPage.Result.WeightForAge.YAxis`;
      case GrowthMonitoringToolType.BMIForAge:
        return t`GrowthMonitoringToolPage.Result.BMIForAge.YAxis`;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.YAxis`;
    }
  };
  const getXaxisDescription = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return Number(age) <= 24
          ? t`GrowthMonitoringToolPage.Result.WeightForLength.XAxis_0_2`
          : t`GrowthMonitoringToolPage.Result.WeightForLength.XAxis_2_5`;
      case GrowthMonitoringToolType.HeightForAge:
        return Number(age) <= 24
          ? t`GrowthMonitoringToolPage.Result.HeightForAge.XAxis_0_2`
          : t`GrowthMonitoringToolPage.Result.HeightForAge.XAxis_2_5`;
      case GrowthMonitoringToolType.WeightForAge:
        return t`GrowthMonitoringToolPage.Result.WeightForAge.XAxis`;
      case GrowthMonitoringToolType.BMIForAge:
        return Number(age) <= 24
          ? t`GrowthMonitoringToolPage.Result.BMIForAge.XAxis_0_2`
          : t`GrowthMonitoringToolPage.Result.BMIForAge.XAxis_2_5`;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.XAxis`;
    }
  };

  const getSDs = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        if (sex == '0') {
          if (Number(age) <= 24) {
            wfl_boys_0_to_2_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            wfh_boys_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        } else {
          if (Number(age) <= 24) {
            wfl_girls_0_to_2_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            wfh_girls_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        }
        break;
      case GrowthMonitoringToolType.HeightForAge:
        if (sex == '0') {
          if (Number(age) <= 24) {
            lhfa_boys_0_to_2_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            lhfa_boys_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        } else {
          if (Number(age) <= 24) {
            lhfa_girls_0_to_2_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            lhfa_girls_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        }
        break;
      case GrowthMonitoringToolType.WeightForAge:
        if (sex == '0') {
          wfa_boys_0_to_5_years_zscores.data.forEach(item => {
            SD3neg.push(Number(item.SD3neg));
            SD2neg.push(Number(item.SD2neg));
            SD1neg.push(Number(item.SD1neg));
            SD0.push(Number(item.SD0));
            SD1.push(Number(item.SD1));
            SD2.push(Number(item.SD2));
            SD3.push(Number(item.SD3));
          });
        } else {
          wfa_girls_0_to_5_years_zscores.data.forEach(item => {
            SD3neg.push(Number(item.SD3neg));
            SD2neg.push(Number(item.SD2neg));
            SD1neg.push(Number(item.SD1neg));
            SD0.push(Number(item.SD0));
            SD1.push(Number(item.SD1));
            SD2.push(Number(item.SD2));
            SD3.push(Number(item.SD3));
          });
        }
        break;
      case GrowthMonitoringToolType.BMIForAge:
        if (sex == '0') {
          if (Number(age) <= 24) {
            bmi_boys_0_to_2_years_zcores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            bmi_boys_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        } else {
          if (Number(age) <= 24) {
            bmi_girls_0_to_2_years_zcores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          } else {
            bmi_girls_2_to_5_years_zscores.data.forEach(item => {
              SD3neg.push(Number(item.SD3neg));
              SD2neg.push(Number(item.SD2neg));
              SD1neg.push(Number(item.SD1neg));
              SD0.push(Number(item.SD0));
              SD1.push(Number(item.SD1));
              SD2.push(Number(item.SD2));
              SD3.push(Number(item.SD3));
            });
          }
        }
        break;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        if (sex == '0') {
          hcfa_boys_0_5_zscores.data.forEach(item => {
            SD3neg.push(Number(item.SD3neg));
            SD2neg.push(Number(item.SD2neg));
            SD1neg.push(Number(item.SD1neg));
            SD0.push(Number(item.SD0));
            SD1.push(Number(item.SD1));
            SD2.push(Number(item.SD2));
            SD3.push(Number(item.SD3));
          });
        } else {
          hcfa_girls_0_5_zscores.data.forEach(item => {
            SD3neg.push(Number(item.SD3neg));
            SD2neg.push(Number(item.SD2neg));
            SD1neg.push(Number(item.SD1neg));
            SD0.push(Number(item.SD0));
            SD1.push(Number(item.SD1));
            SD2.push(Number(item.SD2));
            SD3.push(Number(item.SD3));
          });
        }
        break;
    }
  };

  const getPointData = () => {
    const len = SD0.length;
    return Array(len).fill(Number(leftParameter));
  };

  const getHiddenData = () => {
    let minValue = Math.min(...SD3neg);
    let maxValue = Math.max(...SD3);
    minValue = Math.floor(minValue);
    maxValue = Math.floor(maxValue)+1;

    const arr = [];
    for(let i=minValue; i<=maxValue; i+=3){
      arr.push(i);
    }

    if(minValue%2!=maxValue%2){
      arr.push(maxValue+1);
    }

    return arr;
  }

  getSDs();
  const data = {
    labels: getBottomValues(),
    datasets: [
      {
        data: SD3neg,
        color: () => COLORS.black,
        strokeWidth: 1,
        key: 'sd3neg',
      },
      {
        data: SD2neg,
        color: () => COLORS.chartRed,
        strokeWidth: 1,
        key: 'sd2neg',
      },
      {
        data: SD1neg,
        color: () => COLORS.chartOrange,
        strokeWidth: 1,
        key: 'sd1neg',
      },
      {
        data: SD0,
        color: () => COLORS.chartGreen,
        strokeWidth: 1,
        key: 'sd0',
      },
      {
        data: SD1,
        color: () => COLORS.chartOrange,
        strokeWidth: 1,
        key: 'sd1',
      },
      {
        data: SD2,
        color: () => COLORS.chartRed,
        strokeWidth: 1,
        key: 'sd2',
      },
      {
        data: SD3,
        color: () => COLORS.black,
        strokeWidth: 1,
        key: 'sd3',
      },
      {
        data: getPointData(),
        color: () => 'transparent',
        key: 'line',
      },
      {
        data: getHiddenData(), 
        color: () => 'transparent',
        key: 'hidden' 
      }
    ],
  };

  const chartConfig = {
    strokeWidth: 2,
    backgroundGradientFrom: COLORS.white,
    backgroundGradientTo: COLORS.white,
    color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: () => COLORS.black,
    decimalPlaces: 0,
    propsForDots: {
      r: '1.1',
    },
    propsForVerticalLabels: {
      fontSize: 13,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      strokeWidth: 0.5,
    }
  };

  const getFirstBottomLabel = () => {
    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        return Number(age) <= 24 ? 45 : 65;
      case GrowthMonitoringToolType.HeightForAge:
        return Number(age) <= 24 ? 0 : 24;
      case GrowthMonitoringToolType.WeightForAge:
        return 0;
      case GrowthMonitoringToolType.BMIForAge:
        return Number(age) <= 24 ? 0 : 24;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        return 0;
    }
  };

  const getPDFFileName = () => {
    var filename = '';

    switch (toolType) {
      case GrowthMonitoringToolType.WeightForLength:
        filename += t`GrowthMonitoringToolPage.Result.WeightForLength.TitleForFile`;
        break;
      case GrowthMonitoringToolType.HeightForAge:
        filename += t`GrowthMonitoringToolPage.Result.HeightForAge.TitleForFile`;
        break;
      case GrowthMonitoringToolType.WeightForAge:
        filename += t`GrowthMonitoringToolPage.Result.WeightForAge.TitleForFile`;
        break;
      case GrowthMonitoringToolType.BMIForAge:
        filename += t`GrowthMonitoringToolPage.Result.BMIForAge.TitleForFile`;
        break;
      case GrowthMonitoringToolType.HeadCircumferenceForAge:
        filename += t`GrowthMonitoringToolPage.Result.HeadCircumferenceForAge.TitleForFile`;
        break;
    }
    filename += '_';
    filename +=
      sex == '0'
        ? t`GrowthMonitoringToolPage.Sex.Boys`
        : t`GrowthMonitoringToolPage.Sex.Girls`;
    filename += '_';
    filename += Number(age) <= 24 ? '0-2years' : '2-5years';

    return filename;
  };

  const takeScreenShot = () => {
    captureRef(ref, {
      format: 'jpg',
      quality: 1.0,
    }).then(
      uri => {
        generatePDF(uri);
      },
      error => console.error('Oops, Something Went Wrong', error),
    );
  };

  const generatePDF = async (uri: string) => {
    try {
      const html = `
        <html>
          <body>
          <h2 style="text-align: center; font-weight: 700;">${t(getMainTitle())}</h2>
          <h4 style="text-align: center;">${t(getSexTitle())} ${t(getBottomTitle())}</h4>
          <h4 style="text-align: center;">${t`GrowthMonitoringToolPage.Result.ZscoreFileTitle`} ${zscore}</p>
            <img src=${uri} style="
            width: 650px; 
            height: '100%';
            display: block;
            display: block;
            margin-left: auto;
            margin-right: auto;"
              />
              <h4 style="text-align: center;">${t`GrowthMonitoringToolPage.Result.XaxisTitle`}: ${t(
        getXaxisDescription(),
      )}</h4>
              <h4 style="text-align: center;">${t`GrowthMonitoringToolPage.Result.YaxisTitle`}: ${t(
        getYaxisDescription(),
      )}</h4>
          </body>
        </html>
      `;
      const options = {
        html,
        fileName: getPDFFileName(),
        directory: 'Invoices',
      };
      const file = await await RNHTMLtoPDF.convert(options);

      const fileName = getPDFFileName();
      const fileExtention = 'pdf';

      if (Platform.OS === 'android') {
        let downloadPath =
          RNFS.DownloadDirectoryPath +
          '/who-phc/' +
          fileName +
          '_' +
          Date.now() +
          '.' +
          fileExtention;
        RNFS.mkdir(RNFS.DownloadDirectoryPath + '/who-phc');
        const exists = await RNFS.exists(downloadPath);
        if (exists) {
          downloadPath =
            RNFS.DownloadDirectoryPath +
            '/who-phc/' +
            fileName +
            '_' +
            Date.now() +
            '.' +
            fileExtention;
        }
        RNFS.copyFile(file.filePath, downloadPath).then(() => {
          Alert.alert(
            t`Alert.Title`,
            t`GrowthMonitoringToolPage.Alert.PDFSaved`,
            [{ text: t`Alert.Okbutton`, onPress: () => {} }],
          );
        });
      } else {
        await Share.open({
          title: fileName,
          filename: fileName,
          url: `file://${file.filePath}`,
          type: 'application/pdf',
          saveToFiles: true,
        });
      }
    } catch (error) {
      console.log('Download file failed:', error);
    }
  };

  return (
    <ToolScreenLayout
      result={t(getMainTitle())}
      padding={0}
      form={
        <ScrollView>
          <View
            style={{
              display: 'flex',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                paddingTop: 10,
                paddingHorizontal: 5,
                textAlign: 'center',
                color: COLORS.black,
              }}>
              {t(getSexTitle())} {t(getBottomTitle())}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                paddingTop: 5,
                paddingHorizontal: 5,
                textAlign: 'center',
                color: COLORS.black,
              }}>
              {zscore}
            </Text>
            <View ref={ref}>
              <LineChart
                data={data}
                width={screenWidth + 22} //TODO
                height={450} //
                chartConfig={chartConfig}
                style={{
                  marginLeft: -30,
                  paddingTop: 10,
                  paddingBottom: -50,
                  marginRight: -8,
                }}
                renderDotContent={({ x, y, index, indexData }) => {
                  if (
                    toolType == GrowthMonitoringToolType.WeightForLength
                      ? getFirstBottomLabel() + index * 0.5 ==
                          Number(bottomParameter) &&
                        indexData == Number(leftParameter)
                      : index + getFirstBottomLabel() ==
                          Number(bottomParameter) &&
                        indexData == Number(leftParameter)
                  ) {
                    return (
                      <View
                      key={indexData}
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: COLORS.blue,
                          position: 'absolute',
                          top: y - 2.5,
                          left: x - 2.5,
                          borderRadius: 50,
                        }}></View>
                    );
                  }
                }}
                segments={getSegments()}
                yAxisInterval={getYAxisInterval()}
                withShadow={false}
              />
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingRight: 20,
                  marginRight: 20,
                }}>
                <Text style={styles.axisTitle}>
                  {t`GrowthMonitoringToolPage.Result.XaxisTitle`}:{' '}
                </Text>
                <Text style={styles.axisDescription}>
                  {t(getXaxisDescription())}
                </Text>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.axisTitle}>
                  {t`GrowthMonitoringToolPage.Result.YaxisTitle`}:{' '}
                </Text>
                <Text style={styles.axisDescription}>
                  {getYaxisDescription()}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      }
      button={
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            takeScreenShot();
          }}>
          <Text
            style={[
              generalStyles.toolResultText,
              { fontSize: 20 },
            ]}>{t`GrowthMonitoringToolPage.Result.SaveButtonTitle`}</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  axisTitle: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '500',
  },
  axisDescription: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '300',
    paddingBottom: 5,
  },
  saveButton: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
export default GrowthMonitoringChartScreen;
