import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableNativeFeedback, View, Modal, Button } from 'react-native';
import BannerList from '../components/BannerList';
import CategoryList from '../components/CategoryList';
import Greetings from '../components/Greetings';
import GridScrollView from '../components/GridScrollView';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import color from '../constants/color';
import textStyle from '../constants/text-style';
import MenuIcon from '../assets/icons/default/menu-variant';
import UserIcon from '../assets/icons/default/user';
import SearchScreen from './SearchScreen';
import SectionHeader from '../components/SectionHeader';

const HomeScreen = (props) => {
    const categoryList = ['Headphone', 'Headband', 'Earpads', 'Cable'];
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <>
            <StatusBar backgroundColor={color.white} barStyle="dark-content" />
            <Header title="Audio" leftIcon={MenuIcon} rightIcon={UserIcon} />
            <ScrollView>
                <SafeAreaView style={styles.background}>
                    <View style={styles.container}>
                        <Greetings />
                        <SearchBar isActive={false} onPress={() => setModalVisibility(true)} />
                    </View>
                    <View style={styles.greyContainer}>
                        <CategoryList list={categoryList} style={styles.categoryList} />
                        <BannerList />
                        <SectionHeader title="Featured Products" withAction={true} actionText="See All" />
                        <GridScrollView />
                    </View>
                </SafeAreaView>
            </ScrollView>
            <Modal visible={modalVisibility} animationType="slide" onRequestClose={() => setModalVisibility(false)}>
                <SearchScreen backFunction={() => setModalVisibility(false)} />
            </Modal>
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