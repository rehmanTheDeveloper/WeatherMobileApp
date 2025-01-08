import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import {Card, Text} from '../../ui-components';
import {useCity, useWeather} from '../../hooks';
import { useTheme } from '../../contexts/ThemeContext';

const CityCard = ({details}) => {
  const {Theme} = useTheme();
  const [Loading, setLoading] = useState(true);
  const [WeatherState, setWeatherState] = useState({});
  const {currentWeather} = useWeather();
  const {addCity} = useCity();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      await currentWeather(details.lon, details.lat, setWeatherState);
      setLoading(false);
    }
    fetchCurrentWeather();
  }, [details]);

  return !Loading ? (
    <Card
      wrapperClassName="w-full items-center px-0"
      cardClassName="flex flex-row justify-between"
      cardStyle={{
        borderWidth: 1,
        borderColor: constants.theme[Theme].borderColor
      }}
      touchable={true}
      onPress={() => addCity(details)}>
      <View style={s`flex-1 justify-between `}>
        <View
          style={[s`w-full flex-row justify-start items-end mb-2`, {gap: 7}]}>
          <Text
            size={30}
            style={{
              marginVertical: -10,
            }}
            className="pb-1">
            {WeatherState?.temp_c}°
          </Text>
          <Text size={16} >
            feels like {WeatherState?.feelslike_c}°
          </Text>
        </View>
        <Text size={18}  weight="Medium">
          {details.name}, {details.region}
        </Text>
        <Text size={16} >
          {details.country}
        </Text>
      </View>
      <View style={s`w-5/12 items-end justify-between`}>
        <Image
          source={WeatherState.weatherImage}
          style={{
            height: 45,
            width: 45,
            resizeMode: 'contain',
          }}
        />
        <Text
          weight="Light"
          size={20}
          className="text-right mr-2"
          >
          {WeatherState?.condition?.text}
        </Text>
      </View>
    </Card>
  ) : (
    <View style={s`w-full flex-row justify-center py-5`}>
      <ActivityIndicator size={'large'} color={constants.theme[Theme].text} />
    </View>
  );
};

export default CityCard;
