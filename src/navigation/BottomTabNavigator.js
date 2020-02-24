import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Create from '../screens/Create';

const BottomTabNavigator = createBottomTabNavigator({
    Login: Login,
    Home: Home,
    Create: Create,
    Profile: Profile
    }, {
    tabBarOptions: {
        showLabel: true
    }
});

export default BottomTabNavigator;