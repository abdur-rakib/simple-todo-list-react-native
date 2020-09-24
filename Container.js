import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import MainStackNavigator from './navigation/MainStackNavigator';
import Login from './screens/Login';

const Container = ({auth}) => {
  useEffect(() => {}, [auth]);
  const renderScreen = auth.authenticated ? <MainStackNavigator /> : <Login />;
  return renderScreen;
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Container);
