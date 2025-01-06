import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { s } from 'react-native-wind';
import { theme } from '../constants';

const Button = ({
    className,
    style,
    children,
    onPress
}) => {
    return (
        <TouchableOpacity style={[styles.button, style, s`rounded-xl p-3 ${className}`]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.darkBlue[600],
    }
});

export default Button