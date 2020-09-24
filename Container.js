import React, {useEffect, useState} from 'react';
import MainStackNavigator from './navigation/MainStackNavigator';
import Login from './screens/Login';
import {auth} from './firebase/utils';
import store from './redux/store';
import {SET_USER} from './redux/types';
import {Text} from 'react-native-elements';
import {View} from 'react-native';

const Container = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (user) {
      store.dispatch({
        type: SET_USER,
        payload: {
          authenticated: true,
          userName: user.disaplayName,
          uaerImage: user.photoUrl,
        },
      });
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  // const renderScreen = auth.authenticated ? <MainStackNavigator /> : <Login />;

  if (initializing) return null;

  if (!user) {
    return <Login />;
  }

  return <MainStackNavigator />;
};

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

export default Container;
