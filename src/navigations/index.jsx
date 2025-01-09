import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, OnBoard, Settings, Cities, Search} from '../screens';
import AsyncHelper from '../asyncHelpers';
import { getStackConfigs, stackConfigs } from './config';
import { useTheme } from '../contexts/ThemeContext';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const RootNavigator = () => {
  const [InitialRouteName, setInitialRouteName] = useState(null);
  const {getItem} = AsyncHelper();
  const {Theme} = useTheme();
  const stackConfigs = getStackConfigs(Theme)

  const onBoardCheck = async () => {
    try {
      const checked = await getItem('onBoard');
      if (checked) {
        setInitialRouteName('app');
      } else {
        setInitialRouteName('onBoard');
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    onBoardCheck();
  }, []);
  if (InitialRouteName === null) {
    return;
  }

  return (
    <Stack.Navigator
      initialRouteName={InitialRouteName}
      screenOptions={stackConfigs.screenOptions}>
      <Stack.Screen name="onBoard" component={OnBoard} />
      <Stack.Screen name="app" component={MainStackNavigator} />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  const {Theme} = useTheme();
  const stackConfigs = getStackConfigs(Theme)
  return (
    <MainStack.Navigator
      initialRouteName="home"
      screenOptions={stackConfigs.screenOptions}>
      <MainStack.Screen
        name="home"
        component={Home}
      />
      <MainStack.Screen
        name="cities"
        component={Cities}
      />
      <MainStack.Screen
        name="settings"
        component={Settings}
      />
      <MainStack.Screen
        name="search"
        component={Search}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigator;
