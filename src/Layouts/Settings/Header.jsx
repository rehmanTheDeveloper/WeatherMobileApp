import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { s } from 'react-native-wind';
import { theme } from '../../constants';
import { Text } from '../../ui-components';

const SettingsHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={s`w-full flex-row items-center justify-start px-3 py-2`}>
            <TouchableOpacity style={s`p-2`} onPress={() => navigation.pop()}>
                <ChevronLeftIcon size={24} color={theme.colors.blue[900]} />
            </TouchableOpacity>
            <Text weight='Medium' size={20} color={theme.colors.blue[800]}>Settings</Text>
        </View>
    )
}

export default SettingsHeader;