import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';
import { RefreshProvider } from './src/contexts/RefreshContext';
import { PaginationRefreshProvider } from './src/contexts/PaginationRefreshContext';

const App = () => {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.blue[600]} />
    <PaginationRefreshProvider>
      <RefreshProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </RefreshProvider>
    </PaginationRefreshProvider>
    </>
  );
}

export default App;
