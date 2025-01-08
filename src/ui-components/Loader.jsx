import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Modal from './Modal';
import { constants, theme } from '../constants';
import Button from './Button';
import Text from './Text';
import { s } from 'react-native-wind';
import { useTheme } from '../contexts/ThemeContext';

const Loader = ({
    modalVisible = true,
    message = "Fetching Location..."
}) => {
    const {Theme} = useTheme();
    const [ModalVisible, setModalVisible] = useState(modalVisible);
    return (
        <Modal modalVisible={ModalVisible} setModalVisible={setModalVisible} footer={null}>
            <View style={s`flex-row items-center justify-center w-full`}>
                <ActivityIndicator size={'large'} color={constants.theme[Theme].text} />
                <Text className='pl-2'>{message}</Text>
            </View>
            <Button onPress={() => setModalVisible(prev => !prev)} className={'px-5 py-2.5 mt-5'}>
                <Text color={constants.theme[Theme].buttonText}>Cancel</Text>
            </Button>
        </Modal>
    )
}

export default Loader