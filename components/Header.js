import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import color from '../constants/color';
import textStyle from '../constants/text-style';

const Header = (props) => {
    const LeftIcon = props.leftIcon;
    const RightIcon = props.rightIcon;
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback useForeground={true} onPress={props.leftPressHandler}>
                <View style={styles.iconContainer}>
                    <LeftIcon height={20} width={20} />
                </View>
            </TouchableNativeFeedback>
            <Text style={textStyle.headerTitle}>{props.title}</Text>
            <TouchableNativeFeedback useForeground={true} onPress={props.rightPressHandler}>
                <View style={styles.iconContainer}>
                    <RightIcon height={20} width={20} />
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
