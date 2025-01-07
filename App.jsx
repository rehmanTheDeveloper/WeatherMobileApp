import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';
import { RefreshProvider } from './src/contexts/RefreshContext';

const App = () => {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.blue[600]} />
    <RefreshProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RefreshProvider>
    </>
  );
}

export default App;
