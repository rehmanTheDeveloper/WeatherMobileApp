import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../../constants';
import {Input, Text} from '../../ui-components';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import CityCard from './CityCard';
import {useCity} from '../../hooks';

const SearchCity = () => {
  const [SearchValue, setSearchValue] = useState('');
  const [Cities, setCities] = useState([]);
  const [Message, setMessage] = useState("");
  const {searchCity} = useCity();

  useEffect(() => {
    const _fetchCities = async (controller) => {
      setMessage('');
      await searchCity(SearchValue, controller, setCities);
      SearchValue.length >= 3 && setMessage('No City Found!');
    }
    const controller = new AbortController();
    _fetchCities(controller);
    return () => controller.abort();
  }, [SearchValue]);

  return (
    <View style={s`flex-1 w-full px-3`}>
      <Input
        primaryIcon={
          <MagnifyingGlassIcon size={24} color={theme.colors.dark[400]} />
        }
        value={SearchValue}
        setValue={setSearchValue}
        placeholder="Search city..."
      />
      <ScrollView style={s`flex-1 w-full`} showsVerticalScrollIndicator={false}>
        <View style={s`justify-center`}>
          {Cities.length > 0 ? (
            Cities.map((city, index) => (
              <CityCard details={{...city, index: index}} key={city.id} />
            ))
          ) : (
            <View style={s`w-full flex-row justify-center py-3`}>
              <Text>{Message}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchCity;
