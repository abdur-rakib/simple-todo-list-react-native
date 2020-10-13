import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: true}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Your Tasks'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
