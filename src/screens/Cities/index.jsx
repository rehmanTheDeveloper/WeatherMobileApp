import React from 'react';
import {s} from 'react-native-wind';
import {theme} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CitiesHeader, SearchCity} from '../../Layouts';

const Cities = ({navigation}) => {
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={[theme.colors.darkBlue[50], theme.colors.blue[100]]}>
      <CitiesHeader />
      <SearchCity />
    </LinearGradient>
  );
};

export default Cities;
