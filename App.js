/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import Welcome from './src/screens/Welcome/Welcome.js';
import Login from './src/screens/Login/Login.js';
import SignUp from './src/screens/SignUp/SignUp.js';
import Flexbox from './src/screens/Flexbox/Flexbox.js';
import DataFetch from './src/screens/UserData/data.js';
import Profile from './src/screens/Profile/Profile.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="data"
        component={DataFetch}
        options={{
          headerShown: false,

          tabBarActiveTintColor: '#e84393',

          // tabBarActiveBackgroundColor: '#9C2C77',

          tabBarIcon: ({focused}) => (
            <Icon
              name="align-center"
              size={30}
              color={focused ? '#9C2C77' : '#2c3e50'}
              light
            />
          ),
        }}
      />
      <Tab.Screen
        name="flexbox"
        component={Flexbox}
        options={{
          headerShown: false,

          tabBarActiveTintColor: '#e84393',

          // tabBarActiveBackgroundColor: '#9C2C77',

          tabBarIcon: ({focused}) => (
            <Icon
              name="files-o"
              size={30}
              color={focused ? '#9C2C77' : '#2c3e50'}
              light
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,

          tabBarActiveTintColor: '#e84393',

          // tabBarActiveBackgroundColor: '#9C2C77',

          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={30}
              color={focused ? '#9C2C77' : '#2c3e50'}
              light
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
