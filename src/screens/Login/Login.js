import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  loginLogo,
  loginNameLogo,
  usernameIcon,
  passwordIcon,
} from '../../images';
import {colors, fonts} from '../../theme';
import {LoginTextInput} from '../../components';
import {authenticateAndSetUser} from '../../utils/user.utils';

class Login extends React.Component {
  state = {username: '', password: ''};

  onUsernameChange = (username) => {
    this.setState({username});
  };

  onPasswordChange = (password) => {
    this.setState({password});
  };

  onSubmit = () => {
    authenticateAndSetUser({
      username: this.state.username,
      password: this.state.password,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.emptyView} />
          <View style={styles.logoContainer}>
            <Image source={loginLogo} />
          </View>
          <View style={styles.nameLogoContainer}>
            <Image source={loginNameLogo} />
          </View>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.textInputContainer}>
            <LoginTextInput
              icon={usernameIcon}
              placeholder={'Username'}
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </View>
          <View style={styles.textInputContainer}>
            <LoginTextInput
              isPassword={true}
              icon={passwordIcon}
              placeholder={'Password'}
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </View>
          <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
            <Text style={styles.buttonLabel}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  emptyView: {
    flex: 1,
  },
  logoContainer: {
    padding: 8,
  },
  nameLogoContainer: {
    padding: 8,
  },
  lowerContainer: {
    padding: 8,
    justifyContent: "flex-end"
  },
  textInputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  button: {
    width: 200,
    margin: 24,
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    ...fonts.h16,
    color: colors.white,
  },
});

export default Login;
