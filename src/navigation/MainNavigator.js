import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CreateNewEvent from '../screens/CreateNewEvent';

const MainNavigator = createBottomTabNavigator({
    Home: Home,
    CreateNewEvent: CreateNewEvent,
    Profile: Profile,
    }, {
    tabBarOptions: {
        showLabel: false
    }
});

export default MainNavigator;