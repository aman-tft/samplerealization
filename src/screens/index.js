import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {AbsoluteCenteredActivityIndicator} from '../components';
import {checkUserLoggedIn} from '../utils/user.utils';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';

const Stack = createStackNavigator();

class Root extends React.Component {
  componentDidMount() {
    checkUserLoggedIn();
  }

  render() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn === null) {
      return <AbsoluteCenteredActivityIndicator />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={'Home'} component={Home} />
              <Stack.Screen name={'Logout'} component={Logout} />
            </>
          ) : (
            <Stack.Screen name={'Login'} component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(Root);
