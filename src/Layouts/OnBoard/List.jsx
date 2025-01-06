import React from 'react';
import {View} from 'react-native';
import OnBoardListItem from './ListItem';
import { Day, TemperatureIcon, WorldIcon } from '../../assets';

const OnBoardList = () => {
  return (
    <View>
      <OnBoardListItem
        image={TemperatureIcon}
        title={'Detailed Insights: '}
        details={'Get temperature, wind, humidity, and much more at a glance.'}
      />
      <OnBoardListItem
        image={Day}
        title={'Day & Night Modes: '}
        details={'A seamless interface designed for every time of day.'}
      />
      <OnBoardListItem
        image={WorldIcon}
        title={'Global Coverage: '}
        details={'Check weather anywhere, anytime.'}
      />
    </View>
  );
};

export default OnBoardList;
