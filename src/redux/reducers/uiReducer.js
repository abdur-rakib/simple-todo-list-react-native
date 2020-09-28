import {CLEAR_LOADING, SET_LOADING} from '../types';

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
