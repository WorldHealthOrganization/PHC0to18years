import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../../../styles/generalStyles.styles';

const DrugDosagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.darkGrey }}>Drug Dosages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
export default DrugDosagesScreen;
