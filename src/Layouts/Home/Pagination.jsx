import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';
import { theme } from '../../constants';

const Pagination = ({Cities, ActiveId}) => {

    return (
        <View style={s`flex-row items-center mt-2`}>
            {Cities?.length > 0 ? (
                Cities?.map((city, index) => <PaginationRound active={city.id === ActiveId} key={city.id} />)
            ) : <PaginationRound active={false} />}
        </View>
    )
}

const PaginationRound = ({ active }) => {
    return (
        <View style={[styles.paginationRound, active ? styles.activePagination : styles.inactivePagination]} />
    )
}

const styles = StyleSheet.create({
    paginationRound: {
        height: 9,
        width: 9,
        borderRadius: 5,
        marginHorizontal: 3
    },
    activePagination: {
        backgroundColor: theme.colors.blue[600],
    },
    inactivePagination: {
        backgroundColor: theme.colors.dark[200],
    }
})

export default Pagination