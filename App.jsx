import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';
import { RefreshProvider } from './src/contexts/RefreshContext';
import { PaginationRefreshProvider } from './src/contexts/PaginationRefreshContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

const App = () => {
  return (
    <>
    <PaginationRefreshProvider>
      <ThemeProvider>
        <RefreshProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.blue[950]} />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </RefreshProvider>
      </ThemeProvider>
    </PaginationRefreshProvider>
    </>
  );
}

export default App;
