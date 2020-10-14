import React from 'react';
import Profile from '../screens/Profile';
import AppStack from './AppStack';
import ProfileStack from './ProfileStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={AppStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="face" color={color} size={35} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
