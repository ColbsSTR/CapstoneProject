import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
//import LoginNavigator from './LoginNavigator';

export default createAppContainer (
  createSwitchNavigator({
    //Login: LoginNavigator,
    Main: BottomTabNavigator
  })
);