import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Badge from '../components/Badge';
import BannerList from '../components/BannerList';
import CategoryList from '../components/CategoryList';
import Greetings from '../components/Greetings';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import color from '../constants/color'

const HomeScreen = (props) => {
    const categoryList = ['Headphone', 'Headband', 'Earpads', 'Cable'];
    return (
        <>
            <StatusBar backgroundColor={color.white} barStyle="dark-content" />
            <Header />
            <SafeAreaView style={styles.background}>
                <ScrollView>
                    <View style={styles.container}>
                        <Greetings />
                        <SearchBar />
                    </View>
                    <View style={styles.greyContainer}>
                        <CategoryList list={categoryList} style={styles.categoryList} />
                        <BannerList />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: color.white
    },
    container: {
        paddingHorizontal: 24
    },
    greyContainer: {
        marginTop: 24,
        backgroundColor: color.lightGrey1,
        paddingHorizontal: 24,
        paddingVertical: 32,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
    },
    categoryList: {
        marginBottom: 20
    }
})

export default HomeScreen;