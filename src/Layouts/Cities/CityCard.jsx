import React from 'react';
import {Image, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../../constants';
import {Card, Text} from '../../ui-components';
import {Day} from '../../assets';

const CityCard = ({name}) => {
  return (
    <Card
      wrapperClassName="w-full items-center mb-3"
      cardClassName="flex flex-row justify-between" touchable={true} onPress={() => console.log(`City Name: ${name} Card Pressed!`)}>
      <View style={s`flex-1 justify-around pt-4`}>
        <View style={s`justify-center`}>
          <View style={[s`w-full flex-row justify-start items-end mb-2`, {gap: 7}]}>
            <Text
              size={40}
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
        <Text size={20} color={theme.colors.blue[50]}>
          {name}
        </Text>
      </View>
      <View style={s`w-5/12 items-center`}>
        <Image
          source={Day}
          style={{
            height: 120,
            width: 120,
            resizeMode: 'contain',
          }}
        />
        <Text
          weight="Medium"
          size={25}
          className="text-right"
          color={theme.colors.blue[50]}>
          Clear
        </Text>
      </View>
    </Card>
  );
};

export default CityCard;
