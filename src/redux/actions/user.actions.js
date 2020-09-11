import {SET_IS_LOGGED_IN, SET_USER_INFO} from '../actionTypes';

export const setIsLoggedIn = (payload) => ({
  type: SET_IS_LOGGED_IN,
  payload,
});

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});
