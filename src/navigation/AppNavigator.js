import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      auth: AuthNavigator,
      main: MainNavigator
    },
    {
      initialRouteName: 'main'
    }
  );
}