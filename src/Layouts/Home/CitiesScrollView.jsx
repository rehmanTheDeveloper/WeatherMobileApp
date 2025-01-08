import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useRefresh} from '../../contexts/RefreshContext';
import {useCity} from '../../hooks';
import CityWeatherDetails from './CityWeatherDetails';
import {usePaginationRefresh} from '../../contexts/PaginationRefreshContext';

const screenWidth = Dimensions.get('window').width;

const HomeCitiesScrollView = () => {
  const [Cities, setCities] = useState([]);
  const {fetchCities} = useCity();
  const {Refresh} = useRefresh();
  const {setPaginationCity} = usePaginationRefresh();

  useEffect(() => {
    const _fetchCities = async () => {
      await fetchCities(setCities);
    };
    _fetchCities();
  }, [Refresh]);

  useEffect(() => {
    if (Cities.length > 0) {
      setPaginationCity(prev => {
        if (!prev || !prev.id) {
          return {...Cities[0]};
        }
        return prev;
      });
    }
  }, [Cities]);

  const _handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);

    if (newIndex >= 0 && newIndex < Cities.length) {
      const city = Cities[newIndex];
      setPaginationCity({...city, index: newIndex});
    }
  };

  return (
    <FlatList
      data={Cities}
      renderItem={({item}) => (
        <View style={{width: screenWidth}}>
          <CityWeatherDetails details={item} key={item.id} />
        </View>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      onMomentumScrollEnd={_handleMomentumScrollEnd}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
};

export default HomeCitiesScrollView;
