import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import {CardBackground} from '../assets';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({
  children,
  touchable = false,
  wrapperStyle = {},
  wrapperClassName = '',
  cardStyle = {},
  cardClassName = '',
  body = children,
  onPress = () => {},
}) => {
  return touchable ? (
    <TouchableOpacity
      style={[s`p-2 relative ${wrapperClassName}`, wrapperStyle]}
      onPress={onPress}
      aria-label="Card Wrapper">
      <LinearGradient
        style={[s`py-3 px-2 rounded-2xl ${cardClassName}`, cardStyle]}
        colors={[theme.colors.blue[600], theme.colors.blue[950]]} start={{x: 0, y: 0}}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <View
      style={[s`p-2 relative ${wrapperClassName}`, wrapperStyle]}
      aria-label="Card Wrapper">
      <LinearGradient
        style={[s`py-3 px-2 rounded-2xl ${cardClassName}`, cardStyle]}
        colors={[theme.colors.blue[600], theme.colors.blue[950]]} start={{x: 0, y: 0}}>
        {body}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      }
});

export default Card;
