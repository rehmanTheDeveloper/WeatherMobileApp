import React from 'react';
import {s} from 'react-native-wind';
import {constants} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {SearchCity, SearchHeader} from '../../Layouts';
import { useTheme } from '../../contexts/ThemeContext';

const Search = ({navigation}) => {
  const {Theme} = useTheme();
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={constants.theme[Theme].gradientColor}>
      <SearchHeader />
      <SearchCity />
    </LinearGradient>
  );
};

export default Search;