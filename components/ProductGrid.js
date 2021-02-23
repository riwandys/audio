import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import color from '../constants/color'
import textStyle from '../constants/text-style'

const ProductGrid = (props) => {
    return (
        <TouchableNativeFeedback useForeground={true}>
            <View style={{ ...styles.grid, ...props.style }}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/image-5.png')} />
                </View>
                <Text style={textStyle.gridProductName} numberOfLines={2}>TMA-2 HD Wireless</Text>
                <Text style={textStyle.gridProductPrice} numberOfLines={1}>Rp 3.500.000</Text>
            </View>
        </TouchableNativeFeedback >
    )
}

export default ProductGrid

const styles = StyleSheet.create({
    grid: {
        width: 155,
        backgroundColor: color.white,
        borderRadius: 15,
        padding: 15,
        overflow: 'hidden'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 125,
        height: 125,
        marginBottom: 20
    }
})
