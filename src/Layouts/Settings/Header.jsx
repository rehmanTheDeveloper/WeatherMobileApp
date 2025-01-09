import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { s } from 'react-native-wind';
import { constants } from '../../constants';
import { Text } from '../../ui-components';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsHeader = () => {
    const navigation = useNavigation();
    const {Theme} = useTheme();
    return (
        <View style={s`w-full flex-row items-center justify-start px-3 py-2`}>
            <TouchableOpacity style={s`p-2`} onPress={() => navigation.pop()}>
                <ChevronLeftIcon size={24} color={constants.theme[Theme].text} />
            </TouchableOpacity>
            <Text weight='Medium' size={20}>Settings</Text>
        </View>
    )
}

export default SettingsHeader;