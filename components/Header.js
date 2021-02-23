import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import color from '../constants/color';
import MenuIcon from '../assets/icons/menu-variant';
import UserIcon from '../assets/icons/user';
import textStyle from '../constants/text-style';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback useForeground={true}>
                <View style={styles.iconContainer}>
                    <MenuIcon height={20} width={20} />
                </View>
            </TouchableNativeFeedback>
            <Text style={textStyle.headerTitle}>Audio</Text>
            <TouchableNativeFeedback useForeground={true}>
                <View style={styles.iconContainer}>
                    <UserIcon height={20} width={20} />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.white
    },
    iconContainer: {
        width: 55,
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    }
});

export default Header;
