import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { constants, theme } from '../constants';
import { s } from 'react-native-wind';
import { useTheme } from '../contexts/ThemeContext';

const Text = ({
    size = 18,
    color = null,
    weight = "Regular",
    style = {},
    className = "",
    children
}) => {
    const {Theme} = useTheme();
    const fontFamily = "NoirPro-"+weight;
    const styles = StyleSheet.create({
        text: {
            fontFamily: fontFamily,
            fontSize: size,
            color: !color ? constants.theme[Theme].text : color
        }
    })
    return (
        <RNText style={[styles.text, s`${className}`, style]}>{children}</RNText>
    )
}

export default Text