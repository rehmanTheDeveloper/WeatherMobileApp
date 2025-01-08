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
import {constants, theme} from '../../constants';
import {
  Day,
  DayRain,
  HumidityIcon,
  Night,
  TemperatureIcon,
  WindIcon,
} from '../../assets';
import HomeForecastCard from './ForecastCard';
import {useWeather} from '../../hooks';
import {useTheme} from '../../contexts/ThemeContext';

const {width} = Dimensions.get('window');

const CityWeatherDetails = ({details}) => {
  const {Theme} = useTheme();
  const [Loading, setLoading] = useState(true);
  const [WeatherState, setWeatherState] = useState({});
  const [Forecast, setForecast] = useState([]);
  const [ForecastLoading, setForecastLoading] = useState(true);
  const {currentWeather, getWindStatus, weatherForecast, getWeatherImage} =
    useWeather();

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

  const styles = StyleSheet.create({
    weatherImage: {
      height: 160,
      width: 160,
      marginVertical: 50,
    },
    forecastWrapper: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: constants.theme[Theme].viewBackground,
      borderWidth: Theme == "dark" ? 1 : 0,
      borderColor: constants.theme[Theme].borderColor,
    },
  });

  return (
    <ScrollView style={s`w-full flex-1`} showsVerticalScrollIndicator={false}>
      {!Loading ? (
        <View style={s`w-full items-center justify-center`}>
          <Image
            source={WeatherState.weatherImage}
            style={styles.weatherImage}
          />
          <View style={s`w-full flex-row items-end justify-between px-3`}>
            <Text
              size={25}
              color={constants.theme[Theme].text}
              weight="Medium"
              className="flex-1">
              {WeatherState.condition.text},{' '}
              {WeatherState.is_day ? 'Day' : 'Night'}
            </Text>
            <Text
              size={20}
              color={constants.theme[Theme].text}
              weight="Medium"
              className="flex-1 text-right">
              L: {Forecast[0]?.day.mintemp_c}° H: {Forecast[0]?.day.maxtemp_c}°
            </Text>
          </View>
          <View style={s`w-full flex-row flex-wrap justify-center px-1 py-4`}>
            <Card
              cardStyle={{
                minHeight: 120,
                borderWidth: 1,
                borderColor: constants.theme[Theme].borderColor,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text
                  weight="Medium"
                  color={constants.theme[Theme].heading}
                  size={16}>
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
                  size={24}
                  color={theme.colors.blue[100]}
                  style={{
                    marginVertical: -10,
                  }}
                  className=" pb-1.5">
                  {WeatherState.temp_c}°
                </Text>
                <Text size={14} color={constants.theme[Theme].heading}>
                  feels like {WeatherState.feelslike_c}°
                </Text>
              </View>
            </Card>
            <Card
              cardStyle={{
                minHeight: 120,
                borderWidth: 1,
                borderColor: constants.theme[Theme].borderColor,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={constants.theme[Theme].heading}>
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
                borderWidth: 1,
                borderColor: constants.theme[Theme].borderColor,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={constants.theme[Theme].heading}>
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
                borderWidth: 1,
                borderColor: constants.theme[Theme].borderColor,
              }}
              wrapperClassName="w-6/12 items-center"
              cardClassName="items-start justify-around">
              <View style={s`w-full flex-row justify-between`}>
                <Text weight="Medium" color={constants.theme[Theme].heading}>
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
                weight="Medium"
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
              {!ForecastLoading ? (
                Forecast[0].hour.map((cityForecast, index) => {
                  const image = getWeatherImage(
                    cityForecast.condition.text,
                    cityForecast.is_day,
                  );
                  return (
                    <HomeForecastCard
                      time={cityForecast.time}
                      temperature={cityForecast.temp_c}
                      image={image}
                      key={index}
                    />
                  );
                })
              ) : (
                <View style={[s`w-full items-center py-3`, {width}]}>
                  <ActivityIndicator
                    size={'large'}
                    color={constants.theme[Theme].text}
                  />
                </View>
              )}
            </ScrollView>
            <View style={s`w-full flex-row flex-wrap justify-between py-4`}>
              <Card
                cardStyle={{
                  minHeight: 120,
                  borderWidth: 1,
                  borderColor: constants.theme[Theme].borderColor,
                }}
                wrapperClassName="w-6/12 items-center"
                cardClassName="items-start justify-around">
                <View style={s`w-full flex-row justify-between`}>
                  <Text
                    weight="Medium"
                    color={constants.theme[Theme].heading}
                    size={16}>
                    Sunrise
                  </Text>
                  <Image
                    source={Day}
                    style={{
                      height: 60,
                      width: 60,
                    }}
                  />
                </View>
                <Text
                  size={18}
                  color={theme.colors.blue[100]}
                  style={{
                    marginVertical: -10,
                  }}
                  className=" pb-0.5">
                  {`${Forecast[0]?.astro.sunrise} \n${Forecast[0]?.astro.sunset}`}
                </Text>
              </Card>
              <Card
                cardStyle={{
                  minHeight: 120,
                  borderWidth: 1,
                  borderColor: constants.theme[Theme].borderColor,
                }}
                wrapperClassName="w-6/12 items-center"
                cardClassName="items-start justify-around">
                <View style={s`w-full flex-row justify-between`}>
                  <Text
                    weight="Medium"
                    color={constants.theme[Theme].heading}
                    size={16}>
                    Moon Rise
                  </Text>
                  <Image
                    source={Night}
                    style={{
                      height: 60,
                      width: 60,
                    }}
                  />
                </View>
                <Text
                  size={18}
                  color={theme.colors.blue[100]}
                  style={{
                    marginVertical: -10,
                  }}
                  className=" pb-0.5">
                  {`${Forecast[0]?.astro.moonrise} \n${Forecast[0]?.astro.moonset}`}
                </Text>
              </Card>

              <Card
                cardStyle={{
                  minHeight: 120,
                  borderWidth: 1,
                  borderColor: constants.theme[Theme].borderColor,
                }}
                wrapperClassName="w-6/12 items-center"
                cardClassName="items-start justify-around">
                <View style={s`w-full flex-row justify-between`}>
                  <Text weight="Medium" color={constants.theme[Theme].heading}>
                    UV Index
                  </Text>
                  <Image
                    source={TemperatureIcon}
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
                  {Forecast[0]?.day.uv} | Weak
                </Text>
              </Card>
              <Card
                cardStyle={{
                  minHeight: 120,
                  borderWidth: 1,
                  borderColor: constants.theme[Theme].borderColor,
                }}
                wrapperClassName="w-6/12 items-center"
                cardClassName="items-start justify-around">
                <View style={s`w-full flex-row justify-between`}>
                  <Text weight="Medium" color={constants.theme[Theme].heading}>
                    Humidity
                  </Text>
                  <Image
                    source={DayRain}
                    style={{
                      height: 60,
                      width: 60,
                    }}
                  />
                </View>
                <Text
                  size={25}
                  weight="Medium"
                  color={theme.colors.blue[100]}
                  style={{
                    marginVertical: -10,
                  }}
                  className="pb-1">
                  {Forecast[0]?.day.totalprecip_mm} mm
                </Text>
              </Card>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator
            size={'large'}
            color={constants.theme[Theme].text}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default CityWeatherDetails;
