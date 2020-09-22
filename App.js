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

const App = () => {
  return (
    <>
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
    </>
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
