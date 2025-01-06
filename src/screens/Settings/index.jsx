import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {Text} from '../../ui-components';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../constants';
import {SettingsHeader} from '../../Layouts';
import {
  ArrowPathIcon,
  ChevronRightIcon,
  SunIcon,
} from 'react-native-heroicons/solid';

const Settings = ({navigation}) => {
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={[theme.colors.darkBlue[50], theme.colors.blue[100]]}>
      <SettingsHeader />
      <ScrollView
        style={s`flex-1 w-full px-3`}
        showsVerticalScrollIndicator={false}>
        <SettingsItemsList />
      </ScrollView>
    </LinearGradient>
  );
};

const SettingsItemsList = () => {
  return (
    <>
      <SettingsItem
        title={'Light/Dark Mode'}
        icon={<SunIcon size={30} color={theme.colors.yellow[500]} />}
      />
      <SettingsItem
        title={'Reset Data'}
        icon={<ArrowPathIcon size={30} color={theme.colors.dark[500]} />}
      />
    </>
  );
};

const SettingsItem = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity
      style={s`w-full flex-row items-center px-3 py-4`}
      onPress={onPress}>
      {icon}
      <Text className="flex-1 pl-3" weight="Medium">
        {title}
      </Text>
      <ChevronRightIcon size={24} color={theme.colors.dark[600]} />
    </TouchableOpacity>
  );
};

export default Settings;
