import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import {Card, Text} from '../../ui-components';
import {theme} from '../../constants';
import {Day, HumidityIcon, TemperatureIcon, WindIcon} from '../../assets';
import HomeForecastCard from './ForecastCard';

const {width} = Dimensions.get('window');

const CityWeatherDetails = ({city}) => {
  const forecasts = Array(8).fill(null);
  return (
    <ScrollView style={s`w-full flex-1`} showsVerticalScrollIndicator={false}>
      <View style={s`w-full items-center justify-center`}>
        <Image source={Day} style={styles.weatherImage} />
        <View style={s`w-full flex-row items-center justify-between px-3`}>
          <Text
            size={25}
            color={theme.colors.blue[600]}
            weight="Medium"
            className="w-7/12">
            Mostly Sunny
          </Text>

          <View style={s`w-5/12 flex-row items-center justify-end`}>
            <View style={s`flex-row items-center pr-2`}>
              <Text size={16} color={theme.colors.blue[500]} weight="Medium">
                L: 14°C
              </Text>
            </View>
            <View style={s`flex-row items-center pr-2`}>
              <Text size={16} color={theme.colors.blue[500]} weight="Medium">
                H: 18°C
              </Text>
            </View>
          </View>
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
              style={[s`w-full flex-row justify-start`, {gap: 7}]}>
              <Text
                size={30}
                weight="SemiBold"
                color={theme.colors.blue[100]}
                style={{
                  marginVertical: -10,
                }}
                className="pb-0.5">
                18°
              </Text>
              <Text size={14} color={theme.colors.blue[50]}>
                feels like 14°
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
                source={Day}
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
              Clear
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
              9 kph ≈ Calm
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
              24%
            </Text>
          </Card>
        </View>
        <View
          style={[s`w-full justify-center bg-white p-3 px-0`, styles.forecastWrapper]}>
          <Text weight="Medium" size={20} className="mb-2 ml-3">
            Hourly Forecast
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}>
              {forecasts.map((item, index) => <HomeForecastCard key={index} />)}
          </ScrollView>
        </View>
      </View>
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
    borderTopRightRadius: 25
  }
});

export default CityWeatherDetails;
