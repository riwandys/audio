import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ProductGrid from './ProductGrid'

const GridScrollView = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductGrid style={styles.grid} />
            <ProductGrid style={styles.grid} />
            <ProductGrid style={styles.grid} />
        </ScrollView>
    )
}

export default GridScrollView

const styles = StyleSheet.create({
    grid: {
        marginRight: 16
    }
})
