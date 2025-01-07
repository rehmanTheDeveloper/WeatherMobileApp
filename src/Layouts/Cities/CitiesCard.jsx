import React, { useState } from 'react';
import {ScrollView, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import CityCard from './CityCard';
import { Button, Modal, Text } from '../../ui-components';

const cities = constants.cities;

const CitiesCard = () => {
  const [ModalState, setModalState] = useState({
    name: "",
    lon: 0,
    lat: 0,
    active: false
  });
    return (
      <ScrollView
        style={s`flex-1 w-full px-1`}
        showsVerticalScrollIndicator={false}>
        <View style={s`justify-center`}>
            {cities.map((city, index) => <CityCard name={city} setModalState={setModalState} />)}
        </View>
        <Modal
        modalVisible={ModalState.active}
        setModalVisible={() => setModalState(prev => ({
          ...prev,
          active: !prev.active
        }))}
        footer={null}>
        <View style={s`w-full justify-center pb-3`}>
          <Text weight="Medium">Delete "{ModalState.name}"</Text>
          <Text weight="Light">Are you Sure to Delete City ?</Text>
        </View>
        <View style={s`w-full flex-row items-center justify-between`}>
          <Button
            onPress={() => {
              console.log('Cancel Request from User.');
              setModalState(prev => ({
                ...prev,
                active: !prev.active
              }));
            }}>
            <Text size={16} color={theme.colors.dark[50]} weight="Medium">
              Cancel
            </Text>
          </Button>
          <Button
            style={{backgroundColor: theme.colors.red[500]}}
            onPress={() => {
              console.log('Yes Request from User.');
              setModalState(prev => ({
                ...prev,
                active: !prev.active
              }))
            }}>
            <Text size={16} color={theme.colors.dark[50]} weight="Medium">
              Delete
            </Text>
          </Button>
        </View>
      </Modal>
      </ScrollView>
    );
  };

export default CitiesCard