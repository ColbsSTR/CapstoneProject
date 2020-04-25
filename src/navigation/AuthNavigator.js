import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import CreateNew from '../screens/CreateNew';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  CreateNew: {
    screen: CreateNew,
  },
});

export default AuthNavigator;
