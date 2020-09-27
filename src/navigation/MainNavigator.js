import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native-elements';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {SET_USER} from '../redux/types';

const MainNavigator = () => {
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

  const renderScreen = initializing ? (
    <Text h2>Loading</Text>
  ) : !user ? (
    <AuthStack />
  ) : (
    <AppStack />
  );
  return <NavigationContainer>{renderScreen}</NavigationContainer>;
};

export default MainNavigator;
