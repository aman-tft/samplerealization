import React from 'react';
import {View, Image, TextInput, StyleSheet, Platform} from 'react-native';
import {colors, fonts} from '../theme';

function LoginTextInput({isPassword, icon, placeholder, value, onChange}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode={'contain'} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword}
          placeholderTextColor={colors.lightBlack}
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  icon: {
    height: 16,
    width: 16,
  },
  inputContainer: {
    paddingHorizontal: 8,
    flex: 1,
  },
  input: {
    ...fonts.h16,
    lineHeight: Platform.OS === 'ios' ? undefined : 16,
    color: colors.lightBlack,
    textAlignVertical: 'center',
    padding: 0,
    height: undefined,
  },
});

export default LoginTextInput;
