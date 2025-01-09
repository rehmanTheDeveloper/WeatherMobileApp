import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {s} from 'react-native-wind';
import {Text} from '../../ui-components';
import LinearGradient from 'react-native-linear-gradient';
import {constants, theme} from '../../constants';
import {SettingsHeader} from '../../Layouts';
import {
  ArrowPathIcon,
  ChevronRightIcon,
  SunIcon,
} from 'react-native-heroicons/solid';
import { useTheme } from '../../contexts/ThemeContext';
import { useCity } from '../../hooks';
import AsyncHelper from '../../asyncHelpers';

const Settings = ({navigation}) => {
  const {Theme} = useTheme();
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={constants.theme[Theme].gradientColor}>
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
  const {setTheme, Theme} = useTheme();
  const {resetApp} = useCity();
  const {setItem} = AsyncHelper();

  const toggleTheme = async (themeValue) => {
    await setItem('theme', themeValue);
    setTheme(themeValue);
  }

  return (
    <>
      <SettingsItem
        title={'Light/Dark Mode'}
        icon={<SunIcon size={30} color={theme.colors.yellow[500]} />}
        onPress={() => toggleTheme(Theme === "light" ? "dark" : "light")}
      />
      <SettingsItem
        title={'Reset Data'} onPress={resetApp}
        icon={<ArrowPathIcon size={30} color={constants.theme[Theme].text} />}
      />
    </>
  );
};

const SettingsItem = ({icon, title, onPress}) => {
  const {Theme} = useTheme();
  return (
    <TouchableOpacity
      style={s`w-full flex-row items-center px-3 py-4`}
      onPress={onPress}>
      {icon}
      <Text className="flex-1 pl-3" weight="Medium">
        {title}
      </Text>
      <ChevronRightIcon size={24} color={constants.theme[Theme].text} />
    </TouchableOpacity>
  );
};

export default Settings;
