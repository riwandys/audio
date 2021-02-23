import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import textStyle from '../constants/text-style'
import color from '../constants/color'

const Greetings = (props) => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <Text style={{ ...textStyle.greetingSmall, ...styles.greetingSmall }}>Hi Riwandy,</Text>
            <Text style={{ ...textStyle.greetingLarge, ...styles.greetingLarge }}>What are you looking for today?</Text>
        </View>
    )
}

export default Greetings

const styles = StyleSheet.create({
    container: {
        paddingTop: 28
    },
    greetingSmall: {
        marginBottom: 8
    },
    greetingLarge: {
        marginBottom: 24
    }
})
