import {theme} from '../constants';
import {Text} from '../ui-components';
import {
  Cog6ToothIcon,
  HomeIcon,
  MapIcon,
} from 'react-native-heroicons/solid';

export const stackConfigs = {
  screenOptions: {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.blue[50],
    },
  },
};
export const tabConfigs = {
  screenOptions: {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.blue[50],
    },
    tabBarStyle: {
      height: 70,
      justifyContent: 'center',
      marginHorizontal: 14,
      marginBottom: 14,
      borderRadius: 40,
      paddingTop: 3,
      shadowColor: theme.colors.blue[300],
    },
  },
  tabOptions: {
    home: {
      tabBarIcon: ({focused}) => (
        <HomeIcon
          size={24}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}
        />
      ),
      tabBarLabel: ({focused}) => (
        <Text
          size={15}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}>
          Home
        </Text>
      ),
    },
    cities: {
      tabBarIcon: ({focused}) => (
        <MapIcon
          size={24}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}
        />
      ),
      tabBarLabel: ({focused}) => (
        <Text
          size={15}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}>
          Cities
        </Text>
      ),
    },
    settings: {
      tabBarIcon: ({focused}) => (
        <Cog6ToothIcon
          size={24}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}
        />
      ),
      tabBarLabel: ({focused}) => (
        <Text
          size={15}
          color={focused ? theme.colors.blue[600] : theme.colors.dark[500]}>
          Settings
        </Text>
      ),
    },
  },
};
