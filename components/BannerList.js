import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import color from '../constants/color'

const BannerList = (props) => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.banner}>
                <View style={styles.section1}>
                    <Text style={styles.bannerText}>TMA-2 Modular Headphone</Text>
                </View>
                <View>
                    <Image source={require('../assets/img/image-5.png')} />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 178,
        width: 326,
        backgroundColor: color.white
    },
    section1: {
        paddingVertical: 20,
        paddingHorizontal: 24
    },
    bannerText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default BannerList;