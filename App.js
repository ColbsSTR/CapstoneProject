import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './src/navigation/AppNavigator';

const RootNavigator = createRootNavigator();
const AppContainer = createAppContainer(RootNavigator);

const App: () => React$Node = () => {
  Icon.loadFont();

  return (
	<AppContainer />
  );
};

export default App;
