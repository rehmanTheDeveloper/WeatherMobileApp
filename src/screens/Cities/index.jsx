import React from 'react';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CitiesHeader, CitiesCard} from '../../Layouts';
import { useTheme } from '../../contexts/ThemeContext';

const Cities = ({navigation}) => {
  const {Theme} = useTheme();
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={constants.theme[Theme].gradientColor}>
      <CitiesHeader />
      <CitiesCard />
    </LinearGradient>
  );
};

export default Cities;
