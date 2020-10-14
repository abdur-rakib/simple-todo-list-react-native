import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import UpdateForm from '../components/UpdateForm';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Update" component={UpdateForm} />
    </Stack.Navigator>
  );
};

export default AuthStack;
