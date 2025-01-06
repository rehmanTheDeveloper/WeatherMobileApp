import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CityWeatherDetails from './CityWeatherDetails';

const {width} = Dimensions.get('window');

const CityScreen = ({ city }) => {
    return (
        <View
            style={{
                width: width,
            }}>
            <CityWeatherDetails city={city} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default CityScreen