/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import MainStackNavigator from './navigation/MainStackNavigator';
import store from './redux/store';
import Login from './screens/Login';

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainStackNavigator /> */}
      <Login />
    </Provider>
  );
};

export default App;
