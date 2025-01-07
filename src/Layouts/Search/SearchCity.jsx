import React, { useEffect, useState } from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import {Input} from '../../ui-components';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import CityCard from './CityCard';
import { useCity } from '../../hooks';

const SearchCity = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [Cities, setCities] = useState([]);
  const {searchCity} = useCity();

  useEffect(() => {
    const controller = new AbortController();
    searchCity(SearchValue, controller, setCities);
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
          <ScrollView
          style={s`flex-1 w-full`}
          showsVerticalScrollIndicator={false}>
          <View style={s`justify-center`}>
              {Cities.map((city, index) => <CityCard details={city} key={city.id} />)}
          </View>
        </ScrollView>
      </View>
    );
  };

export default SearchCity