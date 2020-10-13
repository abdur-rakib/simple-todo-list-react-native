import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SocialIcon, Icon, Text} from 'react-native-elements';
// redux stuff
import {connect} from 'react-redux';
import {loginWithGoogle} from '../../src/redux/actions/authActions';

const LoginScreen = ({UI, auth, loginWithGoogle}) => {
  const {loading} = UI;
  const handleLogin = () => {
    console.log('pressed');
    loginWithGoogle();
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.titleArea}>
        <Text
          h3
          h3Style={{
            fontWeight: '200',
            borderBottomWidth: 3,
          }}>
          Task Manager
        </Text>
      </View>
      <View style={styles.loginArea}>
        <Icon
          name="firebase"
          type="material-community"
          color="orange"
          size={200}
          iconStyle={{marginVertical: 20}}
        />
        <SocialIcon
          button
          style={styles.loginButton}
          title="Sign In With Google"
          raised
          type="google"
          onPress={handleLogin}
          loading={loading}
          iconSize={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
  },
  loginArea: {
    width: '60%',
    marginTop: '20%',
  },
  loginButton: {
    // borderRadius: 20,
  },
  titleArea: {
    marginTop: 100,
  },
});
const mapStateToProps = (state) => {
  return {
    UI: state.UI,
    user: state.user,
  };
};
const mapActionsToProps = {loginWithGoogle};

export default connect(mapStateToProps, mapActionsToProps)(LoginScreen);
