import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Avatar = (props) => {
    return (
        <View>
            <Image source={props.src} />
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({})
