import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

//Importing navigation.
import {createAppContainer, createStackNavigator} from 'react-navigation';
//Importing routes
import Main from './app/components/Main';
import Complete from './app/components/Complete';
import Ticket from './app/components/Ticket';
import Client from './app/components/Client';

const MainNavigator = createStackNavigator({
  Home:{
    screen:Main,
  },
  Complete:{
    screen:Complete,
  },
  Ticket:{
    screen:Ticket,
  },
  Client: {
    screen:Client,
  },
})
//Creating the app container
const App = createAppContainer(MainNavigator);

export default App;
