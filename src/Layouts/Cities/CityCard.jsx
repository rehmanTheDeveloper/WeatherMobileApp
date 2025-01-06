import React from 'react';
import {Image, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../../constants';
import {Card, Text} from '../../ui-components';
import {Day} from '../../assets';

const CityCard = ({name}) => {
  return (
    <Card
      wrapperClassName="w-full items-center"
      cardClassName="flex flex-row justify-between" touchable={true} onPress={() => console.log(`City Name: ${name} Card Pressed!`)}>
      <View style={s`flex-1 justify-between `}>
        <View style={s``}>
          <View style={[s`w-full flex-row justify-start items-end mb-2`, {gap: 7}]}>
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
            <Text size={16} color={theme.colors.blue[50]}>
              feels like 14°
            </Text>
          </View>
          <Text size={16} color={theme.colors.blue[50]}>
            H: 14° L:18°
          </Text>
        </View>
        <Text size={18} color={theme.colors.blue[50]} weight='Medium'>
          {name}
        </Text>
        <Text size={16} color={theme.colors.blue[50]}>
          Pakistan
        </Text>
      </View>
      <View style={s`w-5/12 items-end justify-between`}>
        <Image
          source={Day}
          style={{
            height: 60,
            width: 60,
            resizeMode: 'contain',
          }}
        />
        <Text
          weight="Light"
          size={20}
          className="text-right mr-2"
          color={theme.colors.blue[50]}>
          Clear
        </Text>
      </View>
    </Card>
  );
};

export default CityCard;
