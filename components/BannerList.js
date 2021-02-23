import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import color from '../constants/color';

const BannerList = (props) => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.banner}>
                <View style={styles.section1}>
                    <Text style={styles.bannerText}>TMA-2 Modular Headphone?</Text>
                    <Text>Shop Now</Text>
                </View>
                <View style={styles.section2}>
                    <Image source={require('../assets/img/image-5.png')} />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 178,
        width: 352,
        backgroundColor: color.white
    },
    section1: {
        flex: 4,
        paddingVertical: 20,
        paddingHorizontal: 24,
        marginRight: 5
    },
    section2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    bannerText: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold'
    }
})

export default BannerList;