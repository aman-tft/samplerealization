import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {hamburgerIcon} from '../images';
import {fonts, colors, shadows} from '../theme';

function NavHeader({navigation, title}) {
  const onDrawerIconPress = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onDrawerIconPress}
        style={styles.iconContainer}>
        <Image source={hamburgerIcon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    ...shadows.headerShadow,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...fonts.h16,
    color: colors.secondary,
  },
});

export default NavHeader;
