import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import CartIcon from '../assets/icons/default/shopping-cart'
import BackIcon from '../assets/icons/default/chevron-left'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return (
        <View>
            <Header title="Search" leftIcon={BackIcon} rightIcon={CartIcon} />
            <SearchBar isActive={true} style={styles.searchBar} />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 16,
        marginHorizontal: 24
    }
})
