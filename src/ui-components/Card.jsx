import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import {CardBackground} from '../assets';

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
        <Image
        source={CardBackground}
        style={styles.image}
      />
      <View
        style={[s`py-3 px-2 rounded-xl ${cardClassName}`, cardStyle]}
        aria-label="Card">
        {children}
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={[s`p-2 relative ${wrapperClassName}`, wrapperStyle]}
      aria-label="Card Wrapper">
      <Image
        source={CardBackground}
        style={styles.image}
      />
      <View
        style={[s`py-3 px-2 rounded-xl ${cardClassName}`, cardStyle]}
        aria-label="Card">
        {body}
      </View>
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
