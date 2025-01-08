import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {s} from 'react-native-wind';
import {constants, theme} from '../../constants';
import CityCard from './CityCard';
import {Button, Modal, Text} from '../../ui-components';
import {useCity} from '../../hooks';
import {useRefresh} from '../../contexts/RefreshContext';

const CitiesCard = () => {
  const [ModalState, setModalState] = useState({
    city: {},
    active: false,
  });
  const [Cities, setCities] = useState([]);
  const [Message, setMessage] = useState('');
  const {fetchCities, removeCity} = useCity();
  const {Refresh} = useRefresh();

  useEffect(() => {
    const _fetchCities = async () => {
      setMessage('');
      await fetchCities(setCities);
      Cities.length == 0 && setMessage('Add City to View!');
    };
    _fetchCities();
  }, [Refresh]);

  return (
    <ScrollView
      style={s`flex-1 w-full px-1`}
      showsVerticalScrollIndicator={false}>
      <View style={s`justify-center`}>
        {Cities.length > 0 ? (
          Cities?.map((city, index) => (
            <CityCard
              details={{...city, index: index}}
              setModalState={setModalState}
              key={city.id}
            />
          ))
        ) : (
          <Text className="w-full text-center py-3">{Message}</Text>
        )}
      </View>
      <Modal
        modalVisible={ModalState.active}
        setModalVisible={() =>
          setModalState(prev => ({
            ...prev,
            active: !prev.active,
          }))
        }
        footer={null}>
        <View style={s`w-full justify-center pb-3`}>
          <Text weight="Medium">Delete "{ModalState.city?.name}"</Text>
          <Text weight="Light">Are you Sure to Delete City ?</Text>
        </View>
        <View style={s`w-full flex-row items-center justify-between`}>
          <Button
            onPress={() => {
              console.log('Cancel Request from User.');
              setModalState(prev => ({
                ...prev,
                active: !prev.active,
              }));
            }}>
            <Text size={16} color={theme.colors.dark[50]} weight="Medium">
              Cancel
            </Text>
          </Button>
          <Button
            style={{backgroundColor: theme.colors.red[500]}}
            onPress={async () => {
              removeCity(ModalState.city.id);
              setModalState(prev => ({
                ...prev,
                active: !prev.active,
              }));
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

export default CitiesCard;
