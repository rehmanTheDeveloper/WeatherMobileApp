import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';

const App = () => {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.blue[600]} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
