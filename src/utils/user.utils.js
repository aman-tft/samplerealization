import AsyncStorage from '@react-native-community/async-storage';
import store from '../redux/store';
import {setIsLoggedIn, setUserInfo} from '../redux/actions/user.actions';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const checkUserLoggedIn = async () => {
  try {
    await delay(500);
    let userToken = await AsyncStorage.getItem('userToken');
    // authorize using token and retrieve info
    // for now, get user info from storage
    let userInfo = await AsyncStorage.getItem('userInfo');
    let isLoggedIn = !!(userToken && userInfo);
    if (userInfo) {
      let parsedUserInfo = JSON.parse(userInfo);
      store.dispatch(setUserInfo(parsedUserInfo));
    }
    store.dispatch(setIsLoggedIn(isLoggedIn));
    return isLoggedIn;
  } catch (err) {
    return null;
  }
};

const authenticateAndSetUser = async ({username, password}) => {
  try {
    // authenticate using username, password and retrieve token and info
    let userToken = 'test-token';
    let userInfo = {id: 'test', email: 'john.doe@gmail.com', name: 'John Doe'};
    await AsyncStorage.setItem('userToken', userToken);
    // for now, we are saving user info in storage so that
    // we can access this in a later session when we are already logged in
    await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    store.dispatch(setUserInfo(userInfo));
    store.dispatch(setIsLoggedIn(true));
  } catch (err) {}
};

const logout = async () => {
  try {
    // logout on server
    await delay(500);
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userInfo');
    store.dispatch(setIsLoggedIn(false));
    store.dispatch(setUserInfo(null));
  } catch (err) {}
};

export {checkUserLoggedIn, authenticateAndSetUser, logout};
