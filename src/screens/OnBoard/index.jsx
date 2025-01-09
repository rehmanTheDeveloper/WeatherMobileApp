import React from 'react';
import {Image, View} from 'react-native';
import {s} from 'react-native-wind';
import {Button, Text} from '../../ui-components';
import {LinearGradient} from 'react-native-linear-gradient';
import {constants, theme} from '../../constants';
import {AppLogo} from '../../assets';
import AsyncHelper from '../../asyncHelpers';
import { app } from '../../configs';
import { OnBoardList } from '../../Layouts';

const OnBoard = ({navigation}) => {
  const {setItem, setObjectItem} = AsyncHelper();
  const onBoardStatus = async () => {
    try {
      const status = await setItem('onBoard', 'true');
      const city = [constants.defaultCity];
      await setObjectItem("cities", city);
      if (status) {
        await setItem('theme', 'light')
        navigation.navigate('app');
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <LinearGradient
      style={s`flex-1 items-center justify-evenly`}
      colors={[theme.colors.blue[600], theme.colors.blue[950]]}>
      <View style={s`w-11/12 items-center`}>
        <Image
          source={AppLogo}
          style={{
            height: 200,
            width: 200,
            resizeMode: 'cover',
            shadowColor: theme.colors.dark[50],
          }}
        />
        <Text
          size={32}
          weight="Medium"
          color={theme.colors.dark[50]}
          className="text-center mb-3">
          {app.name}
        </Text>
        <OnBoardList />
      </View>
      <Button
        style={{
          backgroundColor: theme.colors.yellow[400],
        }}
        className={'w-7/12 py-3 rounded-lg'}
        onPress={onBoardStatus}>
        <Text
          color={theme.colors.dark[950]}
          weight="Medium"
          className="text-center">
          Get Started
        </Text>
      </Button>
    </LinearGradient>
  );
};

export default OnBoard;