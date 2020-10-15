import React, {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {logout, getAuthenticatedUser} from '../redux/actions/authActions';
import UserInfo from '../components/UserInfo';

const Profile = ({logout, auth, getAuthenticatedUser}) => {
  useEffect(() => {
    getAuthenticatedUser(auth.userId);
  }, []);
  return (
    <View style={styles.container}>
      <UserInfo auth={auth} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapActionsToProps = {logout, getAuthenticatedUser};

export default connect(mapStateToProps, mapActionsToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
    alignSelf: 'center',
    borderBottomWidth: 2,
  },
  userInfo: {},
  properties: {
    fontSize: 20,
    backgroundColor: 'lightgray',
    marginVertical: 5,
    paddingVertical: 5,
    width: '100%',
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: 'teal',
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
