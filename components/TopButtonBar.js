import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** 
* Component on the top of each screen in the guest section. Contains 2 buttons 
**/

const TopButtonBar = (props) => {

    return (
        <View style={styles.mainView}>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => console.log('left button TopButtonbar')}>
                    <Text style={styles.text}>SWIPE</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('GuestList')} >
                    <Text style={styles.text}>LIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopButtonBar;

const screenWidth = Dimensions.get("window").width;
const halfScreen = screenWidth / 2;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        width: screenWidth,
        height: 50,
    },
    button: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: halfScreen,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})
