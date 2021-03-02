import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import textStyle from '../constants/text-style'

const SectionHeader = (props) => {
    let actionButton;
    if (props.withAction) {
        actionButton = (
            <TouchableNativeFeedback>
                <View style={styles.sectionButton}>
                    <Text style={textStyle.sectionButton}>{props.actionText}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    };

    return (
        <View style={styles.sectionHeader}>
            <Text styles={textStyle.sectionTitle}>{props.title}</Text>
            {actionButton}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    sectionButton: {
        height: 20
    }
})

export default SectionHeader;