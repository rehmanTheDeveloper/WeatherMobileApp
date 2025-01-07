import React, {useState} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../../constants';
import {Button, Card, Modal, Text} from '../../ui-components';
import {Day} from '../../assets';
import {TrashIcon} from 'react-native-heroicons/solid';

const CityCard = ({name, setModalState}) => {
  return (
    <View style={s`flex-row items-center justify-between`}>
      <Card
        wrapperClassName="w-full items-center w-10/12"
        cardClassName="flex flex-row justify-between" touchable={true} onPress={() => console.log(`City Name: ${name} Card Pressed!`)}>
        <View
          style={s`flex-1 justify-between`}>
          <View
            style={[s`w-full flex-row justify-start items-end mb-2`, {gap: 7}]}>
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
          <Text size={18} color={theme.colors.blue[50]} weight="Medium">
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
      <View style={s`w-2/12 items-center justify-center`}>
        <TouchableOpacity
          style={[
            s`p-2 rounded-full`,
            {backgroundColor: theme.colors.red[500]},
          ]}
          onPress={() => setModalState(prev => ({
            ...prev,
            name: name,
            active: !prev.active
          }))}>
          <TrashIcon size={20} color={theme.colors.dark[50]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CityCard;
