import React, { useEffect, useState } from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {theme} from '../../constants';
import {Text} from '../../ui-components';
import {s} from 'react-native-wind';
import Pagination from './Pagination';
import {Cog6ToothIcon, MapIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import { useCity } from '../../hooks';
import { useRefresh } from '../../contexts/RefreshContext';
import { usePaginationRefresh } from '../../contexts/PaginationRefreshContext';

const HomeHeader = () => {
  const navigation = useNavigation();
  const [Loading, setLoading] = useState(true);
  const [Cities, setCities] = useState([]);
  const [ActiveId, setActiveId] = useState(0);
  const {fetchPaginationCities} = useCity();
  const {Refresh} = useRefresh();
  const {setPaginationCity, PaginationCity} = usePaginationRefresh();

  useEffect(() => {
    const _fetchcities = async () => {
      setLoading(true);
      try {
        await fetchPaginationCities(setCities);
        setActiveId(PaginationCity.id)
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    _fetchcities();
  }, [Refresh, PaginationCity]);
  
  return (
    <View
      style={s`w-full flex-row items-center justify-between p-3 py-2 pb-3 border-b border-b-gray-200 bg-white`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('settings')}
        style={s`p-2`}>
        <Cog6ToothIcon size={30} color={theme.colors.darkBlue[700]} />
      </TouchableOpacity>
      <View style={s`flex-1 items-center justify-center`}>
        {!Loading ? (<>
            <Text
            weight="Medium"
            size={20}
            className="text-center"
            color={theme.colors.blue[600]}>
            {PaginationCity != "" && `${PaginationCity.name}, ${PaginationCity.region}`}
          </Text>
          <Text
            size={16}
            weight="Light"
            className="text-center"
            color={theme.colors.dark[800]}>
            {moment().format('ddd, DD MMMM')}
          </Text>
          <Pagination Cities={Cities} ActiveId={ActiveId} />
        </>) : (<ActivityIndicator size={'large'} color={theme.colors.blue[600]} />)}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('cities')}
        style={s`p-2`}>
        <MapIcon size={30} color={theme.colors.darkBlue[700]} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;