import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ProductGrid from './ProductGrid'

const GridScrollView = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductGrid style={styles.grid}
                productName="TMA-2 HD Wireless"
                productPrice="Rp 3.500.000"
                image={require('../assets/img/image-5.png')}
            />
            <ProductGrid style={styles.grid}
                productName="C02 - Cable"
                productPrice="Rp 250.000"
                image={require('../assets/img/image-4.png')}
            />
            <ProductGrid style={styles.grid}
                productName="Itel IEB-81"
                productPrice="Rp 300.000"
                image={require('../assets/img/image-3.png')}
            />
            <ProductGrid style={styles.grid}
                productName="TMA-2 HD Wireless"
                productPrice="Rp 3.500.000"
                image={require('../assets/img/image-5.png')}
            />
            <ProductGrid style={styles.grid}
                productName="TMA-2 HD Wireless"
                productPrice="Rp 3.500.000"
                image={require('../assets/img/image-5.png')}
            />
        </ScrollView>
    )
}

export default GridScrollView

const styles = StyleSheet.create({
    grid: {
        marginRight: 16
    }
})
