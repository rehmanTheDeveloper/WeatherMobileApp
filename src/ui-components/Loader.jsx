import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Modal from './Modal';
import { theme } from '../constants';
import Button from './Button';
import Text from './Text';
import { s } from 'react-native-wind';

const Loader = ({
    modalVisible = true,
    message = "Fetching Location..."
}) => {
    const [ModalVisible, setModalVisible] = useState(modalVisible);
    return (
        <Modal modalVisible={ModalVisible} setModalVisible={setModalVisible} footer={null}>
            <View style={s`flex-row items-center justify-center w-full`}>
                <ActivityIndicator size={'large'} color={theme.colors.blue[600]} />
                <Text className='pl-2'>{message}</Text>
            </View>
            <Button onPress={() => setModalVisible(prev => !prev)} className={'px-5 py-2.5 mt-5'}>
                <Text color={theme.colors.dark[50]}>Cancel</Text>
            </Button>
        </Modal>
    )
}

export default Loader