import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts, shadows} from '../theme';

function TaskRateCard({rate, title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{rate}</Text>
      <Text style={styles.text2}>units/day</Text>
      <Text style={styles.text3}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: colors.white,
    ...shadows.cardShadow,
  },
  text1: {
    ...fonts.h20,
    color: colors.primary,
    paddingBottom: 6,
  },
  text2: {
    ...fonts.h14,
    color: colors.secondary,
    paddingBottom: 3,
  },
  text3: {
    ...fonts.h12,
    color: colors.lightBlack,
  },
});

export default TaskRateCard;
