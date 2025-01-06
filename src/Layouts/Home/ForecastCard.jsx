import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Text } from '../../ui-components';
import { Day } from '../../assets';
import { theme } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const HomeForecastCard = ({
    time,
    condition,
    temperature
}) => {
  return (
    <LinearGradient style={styles.forecastCard} colors={[theme.colors.blue[600], theme.colors.blue[950]]}>
      <Text size={16} color={theme.colors.blue[50]} weight="Medium">
        12 PM
      </Text>
      <Image source={Day} style={styles.forecastImage} />
      <Text size={20} color={theme.colors.blue[50]} weight="SemiBold">
        14°
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
