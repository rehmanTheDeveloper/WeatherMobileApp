import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {s} from 'react-native-wind';
import {Card, Text} from '../../ui-components';
import {theme} from '../../constants';
import {HumidityIcon, TemperatureIcon, WindIcon} from '../../assets';
import HomeForecastCard from './ForecastCard';
import {useWeather} from '../../hooks';

const {width} = Dimensions.get('window');

const CityWeatherDetails = ({details}) => {
  const [Loading, setLoading] = useState(true);
  const [WeatherState, setWeatherState] = useState({});
  const [Forecast, setForecast] = useState([]);
  const [ForecastLoading, setForecastLoading] = useState(true);
  const {currentWeather, getWindStatus, weatherForecast} = useWeather();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      setLoading(true);
      setForecastLoading(true);
      await currentWeather(details.lon, details.lat, setWeatherState);
      setLoading(false);
      await weatherForecast(details.lon, details.lat, setForecast);
      setForecastLoading(false);
    };
    fetchCurrentWeather();
  }, [details]);
  return (
    <ScrollView style={s`w-full flex-1`} showsVerticalScrollIndicator={false}>
      {!Loading ? (
        <View style={s`w-full items-center justify-center`}>
          <Image
            source={WeatherState.weatherImage}
            style={styles.weatherImage}
          />
          <View style={s`w-full flex-row items-center justify-between px-3`}>
            <Text
              size={25}
              color={theme.colors.blue[600]}
              weight="Medium"
              className="flex-1">
              {WeatherState.condition.text}
            </Text>

            <Text
              size={25}
              color={theme.colors.blue[600]}
              weight="Medium"
              className="flex-1 text-right">
              {WeatherState.is_day ? 'Day' : 'Night'}
            </Text>
          </View>
          <View style={s`w-full flex-row flex-wrap justify-center px-1 py-4`}>
            <Card
              cardStyle={{
                minHeight: 120,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={theme.colors.blue[50]} size={16}>
                  Temperature
                </Text>
                <Image
                  source={TemperatureIcon}
                  style={{
                    height: 60,
                    width: 60,
                  }}
                />
              </View>
              <View
                style={[s`w-full flex-row justify-start items-end`, {gap: 7}]}>
                <Text
                  size={30}
                  color={theme.colors.blue[100]}
                  style={{
                    marginVertical: -10,
                  }}
                  className=" pb-0.5">
                  {WeatherState.temp_c}°
                </Text>
                <Text size={14} color={theme.colors.blue[50]}>
                  feels like {WeatherState.feelslike_c}°
                </Text>
              </View>
            </Card>
            <Card
              cardStyle={{
                minHeight: 120,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={theme.colors.blue[50]}>
                  Weather
                </Text>
                <Image
                  source={WeatherState.weatherImage}
                  style={{
                    height: 60,
                    width: 60,
                  }}
                />
              </View>
              <Text
                size={20}
                weight="Medium"
                color={theme.colors.blue[100]}
                style={{
                  marginVertical: -10,
                }}
                className="pb-2">
                {WeatherState.condition.text}
              </Text>
            </Card>
            <Card
              cardStyle={{
                minHeight: 120,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={theme.colors.blue[50]}>
                  Wind
                </Text>
                <Image
                  source={WindIcon}
                  style={{
                    height: 60,
                    width: 60,
                  }}
                />
              </View>
              <Text
                size={20}
                weight="Medium"
                color={theme.colors.blue[100]}
                style={{
                  marginVertical: -10,
                }}
                className="pb-2">
                {WeatherState.wind_kph} kph ≈{' '}
                {getWindStatus(WeatherState.wind_kph)}
              </Text>
            </Card>
            <Card
              cardStyle={{
                minHeight: 120,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={theme.colors.blue[50]}>
                  Humidity
                </Text>
                <Image
                  source={HumidityIcon}
                  style={{
                    height: 60,
                    width: 60,
                  }}
                />
              </View>
              <Text
                size={25}
                weight="SemiBold"
                color={theme.colors.blue[100]}
                style={{
                  marginVertical: -10,
                }}
                className="pb-1">
                {WeatherState.humidity}%
              </Text>
            </Card>
          </View>
          <View
            style={[
              s`w-full justify-center bg-white p-3 px-0`,
              styles.forecastWrapper,
            ]}>
            <Text weight="Medium" size={20} className="mb-2 ml-3">
              Today Forecast
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}>
              {!ForecastLoading ? Forecast.map((cityForecast, index) => (
                <HomeForecastCard
                  time={cityForecast.time}
                  temperature={cityForecast.temperature}
                  image={cityForecast.image}
                  key={index}
                />
              )) : (<View style={[s`w-full items-center py-3`, {width}]}><ActivityIndicator size={'large'} color={theme.colors.blue[600]} /></View>)}
            </ScrollView>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size={'large'} color={theme.colors.blue[600]} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  weatherImage: {
    height: 160,
    width: 160,
    marginVertical: 50,
  },
  forecastWrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default CityWeatherDetails;
