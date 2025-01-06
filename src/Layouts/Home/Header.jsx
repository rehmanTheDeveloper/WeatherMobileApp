import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {theme} from '../../constants';
import {Text} from '../../ui-components';
import {s} from 'react-native-wind';
import Pagination from './Pagination';
import {Cog6ToothIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={s`w-full flex-row items-center justify-between p-3 py-2`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('settings')}
        style={s`p-2`}>
        <Cog6ToothIcon size={30} color={theme.colors.darkBlue[700]} />
      </TouchableOpacity>
      <View style={s`items-center justify-center`}>
        <Text
          weight="Medium"
          size={20}
          className="text-center"
          color={theme.colors.blue[600]}>
          New Mexico
        </Text>
        <Text
          size={16}
          weight="Light"
          className="text-center"
          color={theme.colors.dark[800]}>
          {moment().format('ddd, DD MMMM')}
        </Text>
        <Pagination />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('cities')}
        style={s`p-2`}>
        <PlusCircleIcon size={30} color={theme.colors.darkBlue[700]} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
