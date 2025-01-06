import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';
import { theme } from '../../constants';

const Pagination = () => {
    return (
        <View style={s`flex-row items-center mt-2`}>
            <PaginationRound active={true} />
            <PaginationRound active={false} />
            <PaginationRound active={false} />
            <PaginationRound active={false} />
            <PaginationRound active={false} />
            <PaginationRound active={false} />
            <PaginationRound active={false} />
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