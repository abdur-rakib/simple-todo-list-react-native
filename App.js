/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
