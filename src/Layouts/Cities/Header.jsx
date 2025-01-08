import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  ChevronLeftIcon,
  PlusCircleIcon,
} from 'react-native-heroicons/solid';
import {s} from 'react-native-wind';
import {constants} from '../../constants';
import {Text} from '../../ui-components';
import {useTheme} from '../../contexts/ThemeContext';

const CitiesHeader = () => {
  const {Theme} = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        s`w-full flex-row items-center justify-start px-3 py-2`,
        {backgroundColor: constants.theme[Theme].header},
      ]}>
      <TouchableOpacity style={s`pr-2 py-2`} onPress={() => navigation.pop()}>
        <ChevronLeftIcon size={24} color={constants.theme[Theme].text} />
      </TouchableOpacity>
      <Text
        weight="Medium"
        size={20}
        className="flex-1">
        Cities Management
      </Text>
      <TouchableOpacity
        style={s`pr-2 py-2`}
        onPress={() => navigation.navigate('search')}>
        <PlusCircleIcon size={30} color={constants.theme[Theme].text} />
      </TouchableOpacity>
    </View>
  );
};

export default CitiesHeader;
