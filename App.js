import React, { Component } from 'react';
import {
  Plateform,
  StyleSheet,
  View,
  Text, 
  TextInput,
  Button
} from 'react-native'; 

import {StackNavigator} from 'react-navigation';

import Splash from './Splash.js'
import Main from './Main.js'
import Login from './Login.js'
import Register from './Register.js'

const Navigation = StackNavigator({
  Home: {
    screen: Splash
    },
    Main: {
      screen: Main
    },
    Login: {
      screen: Login
    },
    Register: {
      screen:Register
    }
});

export default Navigation;