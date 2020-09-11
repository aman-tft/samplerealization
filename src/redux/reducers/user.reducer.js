import {SET_IS_LOGGED_IN, SET_USER_INFO} from '../actionTypes';

const initialState = {
  isLoggedIn: null,
  info: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_IS_LOGGED_IN:
      return {...state, isLoggedIn: payload};
    case SET_USER_INFO:
      return {...state, info: payload};
    default:
      return state;
  }
};
