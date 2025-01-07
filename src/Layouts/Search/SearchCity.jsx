import React, { useState } from 'react';
import {ScrollView, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import {Input} from '../../ui-components';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import CityCard from './CityCard';

const cities = constants.cities;

const SearchCity = () => {
  const [SearchValue, setSearchValue] = useState("");
    return (
      <ScrollView
        style={s`flex-1 w-full px-1`}
        showsVerticalScrollIndicator={false}>
        <Input
          primaryIcon={
            <MagnifyingGlassIcon size={24} color={theme.colors.dark[400]} />
          }
          value={SearchValue}
          setValue={setSearchValue}
          placeholder="Search city..."
        />
        <View style={s`justify-center`}>
            {cities.map((city, index) => <CityCard name={city} />)}
        </View>
      </ScrollView>
    );
  };

export default SearchCity