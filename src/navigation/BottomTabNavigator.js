import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const BottomTabNavigator = createBottomTabNavigator({
    Home: Home,
    Profile: Profile
    }, {
    tabBarOptions: {
        showLabel: false
    }
});

export default BottomTabNavigator;