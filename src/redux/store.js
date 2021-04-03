import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import uiReducer from './reducers/uiReducer';

// const initialState = {};

const reducers = combineReducers({
  auth: authReducer,
  data: dataReducer,
  UI: uiReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
