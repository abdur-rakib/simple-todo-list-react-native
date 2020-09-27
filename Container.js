import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import {auth} from './src/firebase/utils';
import store from './src/redux/store';
import {SET_USER} from './src/redux/types';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const Container = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (user) {
      // console.log('user from container', user);
      store.dispatch({
        type: SET_USER,
        payload: {
          authenticated: true,
          userName: user.displayName,
          userImage: user.photoURL,
          userId: user.uid,
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
