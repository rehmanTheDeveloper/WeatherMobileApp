import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import {Card, Text} from '../../ui-components';
import {useWeather} from '../../hooks';
import { TrashIcon } from 'react-native-heroicons/solid';
import { usePaginationRefresh } from '../../contexts/PaginationRefreshContext';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

const CityCard = ({details, setModalState}) => {
  const {Theme} = useTheme();
  const navigation = useNavigation();
  const [Loading, setLoading] = useState(true);
  const [WeatherState, setWeatherState] = useState({});
  const {currentWeather} = useWeather();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      await currentWeather(details.lon, details.lat, setWeatherState);
      setLoading(false);
    };
    fetchCurrentWeather();
  }, [details]);

  return !Loading ? (
    <View style={s`flex-row items-center justify-between`}>
      <Card
        wrapperClassName="w-full items-center flex-1"
        cardClassName="flex flex-row justify-between"
        cardStyle={{
          borderWidth: 1,
          borderColor: constants.theme[Theme].borderColor
        }}
        touchable={true}>
        <View style={s`flex-1 justify-between `}>
          <View
            style={[s`w-full flex-row justify-start items-end mb-2`, {gap: 7}]}>
            <Text
              size={30}
              color={constants.theme[Theme].cardText}
              style={{
                marginVertical: -10,
              }}
              className="pb-1">
              {WeatherState?.temp_c}°
            </Text>
            <Text size={16} color={constants.theme[Theme].cardText}>
              feels like {WeatherState?.feelslike_c}°
            </Text>
          </View>
          <Text size={18} color={constants.theme[Theme].cardText} weight="Medium">
            {details.name}, {details.region}
          </Text>
          <Text size={16} color={constants.theme[Theme].cardText}>
            {details.country}
          </Text>
        </View>
        <View style={s`w-5/12 items-end justify-between`}>
          <Image
            source={WeatherState.weatherImage}
            style={{
              height: 60,
              width: 60,
              resizeMode: 'contain',
            }}
          />
          <Text
            weight="Light"
            size={20}
            className="text-right mr-2"
            color={constants.theme[Theme].cardText}>
            {WeatherState?.condition?.text}
          </Text>
        </View>
      </Card>
      <View style={s`px-2 items-center justify-center`}>
        <TouchableOpacity
          style={[
            s`p-2 rounded-full`,
            {backgroundColor: theme.colors.red[500]},
          ]}
          onPress={() =>
            setModalState(prev => ({
              ...prev,
              city: details,
              active: !prev.active,
            }))
          }>
          <TrashIcon size={20} color={theme.colors.dark[50]} />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={s`w-full flex-row justify-center py-5`}>
      <ActivityIndicator size={'large'} color={theme.colors.blue[600]} />
    </View>
  );
};

export default CityCard;