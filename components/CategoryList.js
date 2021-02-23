import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Badge from './Badge';

const CategoryList = (props) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={props.style}>
            {
                props.list.map((item, index) => {
                    if (index === 0) {
                        return (<Badge status="active" style={styles.badge} key={index} text={item} />)
                    } else {
                        return (<Badge status="inactive" style={styles.badge} key={index} text={item} />)
                    }
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    badge: {
        marginRight: 12
    }
})

export default CategoryList;