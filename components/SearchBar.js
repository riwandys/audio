import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import color from '../constants/color'
import SearchIcon from '../assets/icons/default/search'

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <SearchIcon style={styles.searchIcon} width={20} height={20} />
            <TextInput style={styles.input} placeholder="Search headset" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: color.grey,
        height: 45,
        borderRadius: 10
    },
    searchIcon: {
        marginRight: 12
    },
    input: {
        width: '100%'
    }
})

export default SearchBar;