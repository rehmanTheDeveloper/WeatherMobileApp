import React from 'react';
import {TextInput, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../constants';
import Text from './Text';
import {useTheme} from '../contexts/ThemeContext';

const Input = ({
  setValue,
  value,
  placeholder = 'Default',
  label = null,
  required,
  primaryIcon = null,
}) => {
  const {Theme} = useTheme();
  return (
    <View style={s`mt-1 mb-3`}>
      {label ? (
        <View style={s`flex-row items-center`}>
          <Text color={constants.theme[Theme].text} weight="Medium" size={16}>
            {label}
          </Text>
          {required ? (
            <Text color={theme.colors.red[500]} weight="Medium" size={16}>
              {' '}
              *
            </Text>
          ) : null}
        </View>
      ) : (
        ''
      )}
      <View
        style={[
          s`w-full flex-row items-center bg-white rounded-xl px-3`,
          {
            backgroundColor: constants.theme[Theme].viewBackground,
            borderWidth: 1,
            borderColor: constants.theme[Theme].borderColor,
          },
        ]}>
        {primaryIcon}
        <TextInput
          style={[
            s`w-full pl-2 flex-1`,
            {
              color: constants.theme[Theme].text,
              fontFamily: 'NoirPro-Regular',
              fontSize: 16,
            },
          ]}
          placeholderTextColor={constants.theme[Theme].lead}
          placeholder={placeholder}
          onChangeText={setValue}
          defaultValue={value}
          multiline={true}
          selectTextOnFocus={false}
        />
      </View>
    </View>
  );
};

export default Input;
