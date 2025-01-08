import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { Text } from '../../ui-components';
import { theme } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const HomeForecastCard = ({
    time,
    image,
    temperature
}) => {
  return (
    <LinearGradient style={styles.forecastCard} colors={[theme.colors.blue[600], theme.colors.blue[950]]}>
      <Text size={16} color={theme.colors.blue[50]} weight="Medium">
        {time ? moment(time).format('hh A') : "NULL"}
      </Text>
      <Image source={image} style={styles.forecastImage} />
      <Text size={20} color={theme.colors.blue[50]} weight="SemiBold">
        {temperature}°
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    forecastCard: {
        height: 160,
        width: 80,
        borderWidth: 1,
        borderColor: theme.colors.blue[400],
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        marginHorizontal: 7
      },
      forecastImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
      },
});

export default HomeForecastCard;
