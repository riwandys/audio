import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import color from '../constants/color'
import SearchIcon from '../assets/icons/default/search'

const SearchBar = (props) => {
    const activeContent = <TextInput style={styles.input} placeholder="Search headset" />;
    const passiveContent = <Text style={styles.text}>Search headset</Text>;

    let content;
    if (props.isActive) {
        content = activeContent;
    } else {
        content = passiveContent;
    }

    const pressHandler = () => {
        if (!props.isActive) {
            props.onPress();
        }
    }


    return (
        <TouchableNativeFeedback useForeground={true} onPress={props.onPress}>
            <View style={styles.container}>
                <SearchIcon style={styles.searchIcon} width={20} height={20} />
                {content}
            </View>
        </TouchableNativeFeedback>
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
        borderRadius: 10,
        overflow: 'hidden'
    },
    searchIcon: {
        marginRight: 12
    },
    input: {
        width: '100%'
    },
    text: {
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        color: color.grey
    }
})

export default SearchBar;