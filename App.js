/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import store from './redux/store';
// console.log(store.getState().auth.authenticated);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text style={styles.text}>Welcome to React Native </Text>
        <Button
          buttonStyle={{width: '40%'}}
          title="Sign in with google"
          type="outline"
        />
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Button with icon component"
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'teal',
    marginVertical: 20,
  },
});

export default App;
