import {SET_LOGOUT, SET_USER} from '../types';

const initialState = {
  authenticated: false,
  userImage: null,
  userName: null,
  userId: null,
  birthdate: null,
  gender: null,
  location: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      // console.log('gender', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
