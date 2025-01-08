import React from 'react';
import {s} from 'react-native-wind';
import LinearGradient from 'react-native-linear-gradient';
import {constants} from '../../constants';
import {HomeCitiesScrollView, HomeHeader} from '../../Layouts';
import { useTheme } from '../../contexts/ThemeContext';

const Home = ({navigation}) => {
  const {Theme} = useTheme();
  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={constants.theme[Theme].gradientColor}>
          <HomeHeader />
          <HomeCitiesScrollView />
    </LinearGradient>
  );
};

export default Home;