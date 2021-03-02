import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import Header from '../components/Header'
import CartIcon from '../assets/icons/default/shopping-cart'
import BackIcon from '../assets/icons/default/chevron-left'
import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'
import color from '../constants/color'

const SearchScreen = (props) => {
    return (
        <View>
            <StatusBar barStyle="light-content" />
            <Header title="Search" leftIcon={BackIcon} rightIcon={CartIcon} leftPressHandler={props.backFunction} />
            <SearchBar isActive={true} style={styles.searchBar} />
            <ScrollView style={styles.container}>
                <SectionHeader title="Latest Search" withAction={false} />
                <SectionHeader title="Popular Products" withAction={false} />
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 16,
        marginHorizontal: 24
    },
    container: {
        paddingHorizontal: 24
    }
})
