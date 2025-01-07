import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { configs } from '../configs';

const useCity = () => {
    const searchCity = async (searchValue, controller, setCities) => {
        if (searchValue != null && searchValue.length >= 3) {
            try {
                await axios.get(`${configs.SearchAPI}&q=${searchValue}`, {
                    signal: controller.signal
                }).then((response) => setCities(response.data))
            } catch (error) {
                console.log(error.message)
            }
        } else {
            setCities([]);
        }
    }
    const fetchCities = () => {}
    const addCity = () => {}
    const removeCity = () => {}

    return {
        searchCity,
        fetchCities,
        addCity,
        removeCity,
    }
}

export default useCity;