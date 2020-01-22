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

const App: () => React$Node = () => {
  return (
    <AppNavigator/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
