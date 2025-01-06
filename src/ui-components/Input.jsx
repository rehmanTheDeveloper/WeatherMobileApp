import React from 'react';
import {TextInput, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import Text from './Text';

const Input = ({
  setValue,
  value,
  placeholder = 'Default',
  label = null,
  isInvalid,
  required,
  primaryIcon = null
}) => {
  return (
    <View style={s`mt-1 mb-3`}>
      {label ? (
        <View style={s`flex-row items-center`}>
          <Text color={theme.colors.dark[950]} weight="Medium" size={16}>
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
      <View style={s`w-full flex-row items-center bg-white rounded-xl px-3`}>
        {primaryIcon}
        <TextInput
          style={[
            s`w-full pl-2 flex-1`,
            {
              color: theme.colors.dark[950],
              fontFamily: 'NoirPro-Regular',
              fontSize: 16,
            },
            isInvalid
              ? {
                  borderBottomColor: theme.colors.red[500],
                }
              : {
                  borderBottomColor: theme.colors.dark[300],
                },
          ]}
          placeholderTextColor={theme.colors.dark[200]}
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
