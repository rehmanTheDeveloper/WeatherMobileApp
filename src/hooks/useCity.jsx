import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { configs } from '../configs';
import AsyncHelper from '../asyncHelpers';
import { useNavigation } from '@react-navigation/native';

const useCity = () => {
    const {setObjectItem, getObjectItem} = AsyncHelper();
    const navigation = useNavigation();
    const searchCity = async (searchValue, controller, setCities) => {
        if (searchValue != null && searchValue.length >= 3) {
            try {
                await axios.get(`${configs.SearchAPI}&q=${searchValue}`, {
                    signal: controller.signal
                }).then(async (response) => {
                    const APICities = await response.data;
                    setCities(APICities)
                })
            } catch (error) {
                console.log(error.message)
            }
        } else {
            setCities([]);
        }
    }
    const fetchCities = () => {}
    const addCity = async (details) => {
        try {
            const cities = await getObjectItem('cities');
            if (cities === null) {
                const city = [details];
                const stringify = JSON.stringify(city);
                await setObjectItem('cities', stringify);
            } else {
                const parsed = JSON.parse(cities);
                const foundCity = parsed.filter((city) => city.id === details.id)
                if (foundCity.length === 0) {
                    parsed.push(details);
                    console.log(parsed);
                    const stringify = JSON.stringify(parsed);
                    await setObjectItem('cities', stringify);
                }
            }
            navigation.navigate('home');
        } catch (error) {
            console.log(error.message);
        }
    }
    const removeCity = () => {}

    return {
        searchCity,
        fetchCities,
        addCity,
        removeCity,
    }
}

export default useCity;