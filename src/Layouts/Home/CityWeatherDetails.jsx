import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import {Card, Text} from '../../ui-components';
import {theme} from '../../constants';
import {Day, HumidityIcon, TemperatureIcon, WindIcon} from '../../assets';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from 'react-native-heroicons/solid';

const CityWeatherDetails = ({ city }) => {
    return (
      <View style={s`w-full items-center justify-center py-5`}>
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
              <ChevronDoubleDownIcon size={20} color={theme.colors.blue[500]} />
              <Text size={16} color={theme.colors.blue[500]}>
                14°C
              </Text>
            </View>
            <View style={s`flex-row items-center pr-2`}>
              <ChevronDoubleUpIcon size={20} color={theme.colors.blue[500]} />
              <Text size={16} color={theme.colors.blue[500]}>
                18°C
              </Text>
            </View>
          </View>
        </View>
        <View style={s`w-full flex-row flex-wrap justify-center px-1`}>
          <Card
            cardStyle={{
              minHeight: 120,
            }}
            wrapperClassName="w-6/12 items-center pb-4"
            cardClassName="items-start justify-between pl-3">
            <View style={s`w-full flex-row justify-between items-end`}>
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
            <View style={[s`w-full flex-row justify-start items-end`, {gap: 7}]}>
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
            wrapperClassName="w-6/12 items-center pb-4"
            cardClassName="items-start justify-between pl-3">
            <View style={s`w-full flex-row justify-between items-end`}>
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
            wrapperClassName="w-6/12 items-center pb-4"
            cardClassName="items-start justify-between pl-3">
            <View style={s`w-full flex-row justify-between items-end`}>
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
              Breezy
            </Text>
          </Card>
          <Card
            cardStyle={{
              minHeight: 120,
            }}
            wrapperClassName="w-6/12 items-center pb-4"
            cardClassName="items-start justify-between pl-3">
            <View style={s`w-full flex-row justify-between items-end`}>
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
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    weatherImage: {
      height: 160,
      width: 160,
      marginVertical: 20,
    },
  });

export default CityWeatherDetails