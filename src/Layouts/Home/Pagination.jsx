import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';
import { constants, theme } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

const Pagination = ({Cities, ActiveId}) => {
    const {Theme} = useTheme();

    const styles = StyleSheet.create({
        paginationRound: {
            height: 9,
            width: 9,
            borderRadius: 5,
            marginHorizontal: 3
        },
        activePagination: {
            backgroundColor: constants.theme[Theme].activePagination,
        },
        inactivePagination: {
            backgroundColor: constants.theme[Theme].inactivePagination,
        }
    })

    const PaginationRound = ({ active }) => {
        return (
            <View style={[styles.paginationRound, active ? styles.activePagination : styles.inactivePagination]} />
        )
    }

    return (
        <View style={s`flex-row items-center mt-2`}>
            {Cities?.length > 0 ? (
                Cities?.map((city, index) => <PaginationRound active={city.id === ActiveId} key={city.id} />)
            ) : <PaginationRound active={false} />}
        </View>
    )
}

export default Pagination