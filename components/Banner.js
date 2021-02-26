import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import color from '../constants/color';
import ArrowRight from '../assets/icons/primary/arrow-right';

const Banner = (props) => {
    return (
        <TouchableNativeFeedback useForeground={true}>
            <View style={{ ...styles.container, ...props.style }}>
                <View style={styles.section1}>
                    <Text style={styles.bannerText} numberOfLines={3}>TMA-2 Modular Headphone</Text>
                    <View style={styles.bannerButton}>
                        <Text style={styles.bannerButtonText}>Shop Now</Text>
                        <ArrowRight style={styles.nextIcon} />
                    </View>
                </View>
                <View style={styles.section2}>
                    <Image source={require('../assets/img/image-5.png')} />
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 178,
        width: Dimensions.get('window').width * 0.81,
        backgroundColor: color.white,
        overflow: 'hidden'
    },

    section1: {
        flex: 4,
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    section2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold'
    },
    bannerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 28
    },
    bannerButtonText: {
        fontFamily: 'DMSans-Bold',
        fontSize: 14,
        color: color.primary
    },
    nextIcon: {
        marginLeft: 12
    }
})
