import React from 'react';
import { configs } from '../configs';
import AsyncHelper from '../asyncHelpers';
import { useNavigation } from '@react-navigation/native';
import { useRefresh } from '../contexts/RefreshContext';
import axios from 'axios';
import { usePaginationRefresh } from '../contexts/PaginationRefreshContext';
import { Alert } from 'react-native';

const useCity = () => {
    const navigation = useNavigation();
    const {setObjectItem, getObjectItem, removeAllItems} = AsyncHelper();
    const {setRefresh} = useRefresh();
    const {setPaginationCity} = usePaginationRefresh();

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
    const fetchCities = async (setCities) => {
        try {
            const cities = await getObjectItem('cities');
            cities === null ? setCities([]) : setCities(cities)
        } catch (error) {
            console.log(error.message);
        }
    }
    const addCity = async (details) => {
        try {
            const cities = await getObjectItem('cities');
            if (cities === null) {
                const city = [details];
                await setObjectItem('cities', city);
            } else {
                const foundCity = cities.filter((city) => city.id === details.id)
                if (foundCity.length === 0) {
                    cities.push(details);
                    await setObjectItem('cities', cities);
                }
            }
            navigation.pop();
            setPaginationCity(details);
            setRefresh(prev => !prev);
        } catch (error) {
            console.log(error.message);
        }
    }
    const removeCity = async (id) => {
        try {
            const cities = await getObjectItem("cities");
            const updatedCities = cities.filter((city) => city.id != id)
            await setObjectItem("cities", updatedCities)
            setPaginationCity(updatedCities?.length > 0 ? updatedCities[0] : {})
            setRefresh(prev => !prev)
        } catch (error) {
            console.error(error.message);
            setRefresh(prev => !prev)
        }
    }
    const fetchPaginationCities = async (setPagination, setActiveId) => {
        try {
            const cities = await getObjectItem("cities");
            const paginationCities = [];
            cities.map((city, index) => {
                paginationCities.push({
                    id: city.id,
                    name: city.name,
                    region: city.region,
                })
            })
            await setPagination(paginationCities);
        } catch (error) {
            console.log(error.message);
        }
    }
    const resetApp = async () => {
        try {
            Alert.alert("Reset App", "Are you Sure to Reset all Data?", [{
                text: "Cancel",
                onPress: () => {}
            }, {
                text: "Delete",
                style: "destructive",
                onPress: async () => {
                    const response = await removeAllItems();
                    if (response) {
                        throw {};
                    }
                }
            }])
        } catch (error) {
            console.log(error.message);
        }
    }
    const fetchPaginationCity = async () => {
        try {
            const cities = await getObjectItem("cities");
            const city = cities[0]
            return city;
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        searchCity,
        fetchCities,
        addCity,
        removeCity,
        fetchPaginationCities,
        fetchPaginationCity,
        resetApp
    }
}

export default useCity;