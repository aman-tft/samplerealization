import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {NavHeader, TaskCard, TaskRateCard} from '../../components';
import {colors, fonts, shadows} from '../../theme';
import {LineChart} from '../../components';
import sampleTaskData from './sampleData';

const getProgressChartData = (task) => {
  let progressChartData = {labels: [], datasets: []};
  let progressHoursData = {data: []};
  task.progresses.forEach((progress) => {
    progressChartData.labels.push(progress.day);
    progressHoursData.data.push(progress.hours);
  });
  progressChartData.datasets.push(progressHoursData);
  return progressChartData;
};

class Home extends React.Component {
  render() {
    let progressChartData = getProgressChartData(sampleTaskData);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <NavHeader {...this.props} title={'Progress Update'} />
        </View>
        <View style={styles.falseHeader} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.taskInfoContainer}>
            <TaskCard data={sampleTaskData} />
          </View>
          <View style={{padding: 6, flexDirection: 'row'}}>
            <TaskRateCard
              title={'Planned Rate'}
              rate={sampleTaskData.plannedRate}
            />
            <TaskRateCard
              title={'Actual Rate'}
              rate={sampleTaskData.currentRate}
            />
            <TaskRateCard
              title={'Required Rate'}
              rate={sampleTaskData.requiredRate}
            />
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportTitle}>Volume Analytics</Text>
            <View style={styles.chartContainer}>
              <LineChart data={progressChartData} />
            </View>
          </View>
          <View style={styles.reportCard}>
            <Text style={styles.reportTitle}>Resource Analytics</Text>
            <View style={styles.chartContainer}>
              <LineChart data={progressChartData} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  falseHeader: {
    height: 60,
  },
  taskInfoContainer: {
    margin: 10,
  },
  reportCard: {
    margin: 10,
    borderRadius: 16,
    paddingVertical: 8,
    backgroundColor: colors.white,
    ...shadows.cardShadow,
    overflow: "hidden",
  },
  reportTitle: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
    ...fonts.h14,
    color: colors.secondary,
    textTransform: 'uppercase',
  },
  chartContainer: {
    aspectRatio: 2,
  },
});

export default Home;
