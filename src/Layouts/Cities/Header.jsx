import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon, PlusCircleIcon, TrashIcon } from 'react-native-heroicons/solid';
import { s } from 'react-native-wind';
import { theme } from '../../constants';
import { Text } from '../../ui-components';

const CitiesHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={s`w-full flex-row items-center justify-start px-3 py-2`}>
            <TouchableOpacity style={s`pr-2 py-2`} onPress={() => navigation.pop()}>
                <ChevronLeftIcon size={24} color={theme.colors.blue[800]} />
            </TouchableOpacity>
            <Text weight='Medium' size={20} color={theme.colors.blue[800]} className='flex-1'>Cities Management</Text>
            <TouchableOpacity style={s`pr-2 py-2`} onPress={() => navigation.navigate('search')}>
                <PlusCircleIcon size={30} color={theme.colors.blue[800]} />
            </TouchableOpacity>
        </View>
    )
}

export default CitiesHeader