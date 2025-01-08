import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';
import { constants, theme } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

const Button = ({
    className,
    style,
    children,
    onPress
}) => {
    const {Theme} = useTheme();
    const styles = StyleSheet.create({
        button: {
            backgroundColor: constants.theme[Theme].buttonBackground,
        }
    });
    return (
        <TouchableOpacity style={[styles.button, style, s`rounded-xl p-3 ${className}`]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default Button