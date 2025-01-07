import React from 'react';
import {s} from 'react-native-wind';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../constants';
import {HomeCitiesScrollView, HomeHeader} from '../../Layouts';

const Home = ({navigation}) => {

  return (
    <LinearGradient
      style={s`flex-1 items-center`}
      colors={[theme.colors.darkBlue[50], theme.colors.blue[100]]}>
      <HomeHeader />
      <HomeCitiesScrollView />
    </LinearGradient>
  );
};

export default Home;