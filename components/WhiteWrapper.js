import React from 'react'
import { StyleSheet, View } from 'react-native'

/** 
* Just an reusable container for areas with white background  
**/

const WhiteWrapper = (props) => {
    return (
        <View style={styles.general}>
            {props.children}
        </View>
    )
}

export default WhiteWrapper;

const styles = StyleSheet.create({
    general: {
        backgroundColor: 'white',
        margin: 2,
        alignContent: "center",
        padding: 10
    }
})
