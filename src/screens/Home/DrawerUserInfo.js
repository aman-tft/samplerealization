import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {colors, fonts} from '../../theme';

function DrawerUserInfo() {
  const user = useSelector((state) => state.user && state.user.info);
  if (!user) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>J</Text>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    ...fonts.h30_bold,
    color: colors.white,
  },
  name: {
    ...fonts.h20,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 5,
  },
  email: {
    ...fonts.h16,
    color: colors.white,
  },
});

export default DrawerUserInfo;
