import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Avatar, Button, Icon, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/authActions';

const Profile = ({navigation, auth, logout}) => {
  const isFocused = useIsFocused();
  const {userImage, userName} = auth;
  useEffect(() => {
    if (isFocused) {
      console.log('Focused');
    }
  }, [isFocused]);
  // handle logout
  const handleLogout = () => {
    Alert.alert(
      '',
      'Are you sure to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: logout},
      ],
      {cancelable: true},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: `${userImage}`,
          }}
        />
        <Text h4 h4Style={{fontWeight: '300'}}>
          {userName}
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Logout"
          onPress={handleLogout}
          icon={
            <Icon
              name="logout"
              size={15}
              color="white"
              iconStyle={{paddingHorizontal: 6}}
            />
          }
        />
      </View>
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
    alignItems: 'center',
    marginTop: '35%',
  },
  userInfo: {
    width: '90%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',
    height: 30,
    marginVertical: 10,
  },
});
