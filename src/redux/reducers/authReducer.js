import {SET_LOGOUT, SET_USER} from '../types';

const initialState = {
  authenticated: false,
  userImage: null,
  userName: null,
  userId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload,
      };
    case SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
