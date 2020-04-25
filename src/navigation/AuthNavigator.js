import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import CreateNew from '../screens/CreateNew';

const AuthNavigator = createStackNavigator({
  CreateNew: {
    screen: CreateNew,
  },
  Login: {
    screen: Login,
  },
});

export default AuthNavigator;
