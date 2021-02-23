import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import color from '../constants/color'
import textStyle from '../constants/text-style'

const Badge = (props) => {
    return (
        <TouchableNativeFeedback useForeground={true}>
            <View style={{ ...props.style, ...(props.status === 'inactive' ? styles.inactiveContainer : styles.activeContainer) }}>
                <Text style={props.status === 'inactive' ? textStyle.badgeInactive : textStyle.badgeActive}>{props.text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
};

export default Badge

const styles = StyleSheet.create({
    activeContainer: {
        height: 28,
        backgroundColor: color.primary,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    inactiveContainer: {
        height: 28,
        backgroundColor: color.lightGrey1,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    }
})
