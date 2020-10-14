import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/authActions';
import UserInfo from '../components/UserInfo';
import UpdateForm from '../components/UpdateForm';

const Profile = () => {
  const [update, setUpdate] = useState(false);
  return (
    <View style={styles.container}>
      {update ? (
        <UpdateForm setUpdate={setUpdate} />
      ) : (
        <UserInfo setUpdate={setUpdate} />
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapActionsToProps = {logout};

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
