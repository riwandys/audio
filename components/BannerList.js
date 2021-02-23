import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import color from '../constants/color';
import ArrowRight from '../assets/icons/primary/arrow-right';
import Banner from './Banner';

const BannerList = (props) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Banner style={styles.banner} />
            <Banner style={styles.banner} />
            <Banner style={styles.banner} />
            <Banner style={styles.banner} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    banner: {
        marginRight: 16
    }
})

export default BannerList;