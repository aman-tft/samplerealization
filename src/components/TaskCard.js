import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors, shadows} from '../theme';

function TaskCard({data}) {
  let {
    task,
    parentTask,
    project,
    plannedRate,
    requiredRate,
    remainingDays,
  } = data;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            requiredRate > plannedRate ? colors.red : colors.green,
        },
      ]}>
      <View style={styles.status} />
      <View style={styles.dataContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRowContainer}>
            <Text style={styles.infoRowLabel}>Project: </Text>
            <Text numberOfLines={1} style={styles.infoRowValue}>
              {project.name}
            </Text>
          </View>
          <View style={styles.infoRowContainer}>
            <Text style={styles.infoRowLabel}>Task: </Text>
            <Text numberOfLines={1} style={styles.infoRowValue}>
              {parentTask.task}
            </Text>
          </View>
          <View style={styles.infoRowContainer}>
            <Text style={styles.infoRowLabel}>Subtask: </Text>
            <Text numberOfLines={1} style={styles.infoRowValue}>
              {task}
            </Text>
          </View>
        </View>
        <View style={styles.remainingDaysContainer}>
          <Text style={styles.remainingDays}>{`${remainingDays} d`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: colors.white,
    ...shadows.cardShadow,
  },
  status: {
    width: 16,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
  },
  infoContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    flex: 1,
  },
  infoRowContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  infoRowLabel: {
    ...fonts.h12,
    color: colors.lightBlack,
  },
  infoRowValue: {
    ...fonts.h12,
    color: colors.secondary,
    flex: 1,
  },
  remainingDaysContainer: {
    margin: 6,
    padding: 24,
    backgroundColor: colors.primary,
    borderRadius: 16,
  },
  remainingDays: {
    ...fonts.h20_bold,
    color: colors.white,
  },
});

export default TaskCard;
