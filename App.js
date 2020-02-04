/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons'

const App: () => React$Node = () => {
  Icon.loadFont();

  return (
    <AppNavigator/>
  );
};

export default App;
