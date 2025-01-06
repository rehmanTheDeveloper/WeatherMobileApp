import React from 'react';
import {Image, View} from 'react-native';
import {s} from 'react-native-wind';
import {Text} from '../../ui-components';
import {theme} from '../../constants';

const OnBoardListItem = ({image, title, details}) => {
  return (
    <View style={s`w-full flex-row flex-wrap items-center mb-3`}>
      <Image
        source={image}
        style={{
          height: 40,
          width: 40,
        }}
      />
      <View style={s`flex-1 flex-col justify-center pl-2`}>
        <Text color={theme.colors.dark[50]} weight="Medium">
          {title}
        </Text>
        <Text color={theme.colors.dark[50]} weight="Light">
          {details}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardListItem;