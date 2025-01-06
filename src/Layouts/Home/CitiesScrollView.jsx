import React from 'react';
import {FlatList} from 'react-native';
import {constants} from '../../constants';
import CityScreen from './CityScreen';

const cities = constants.cities;

const HomeCitiesScrollView = () => {
    
    return (
        <FlatList
        data={cities}
        renderItem={({ item, index }) => <CityScreen city={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true} 
        />
    )
}

export default HomeCitiesScrollView