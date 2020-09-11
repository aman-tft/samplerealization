import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../theme';

function AbsoluteCenteredActivityIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color={colors.white}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlay,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default AbsoluteCenteredActivityIndicator;
