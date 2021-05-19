import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** 
* Component on the top of each screen in the host section. Contains 2 buttons 
**/

const HostTopButtonBar = (props) => {
    return (
        <View style={styles.mainView}>
            <View>
                <TouchableOpacity style={styles.leftbutton} onPress={() => console.log('left button HostTopButtonbar')}>
                    <Text style={styles.text}>SWIPE</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.rightbutton} onPress={() => props.navigation.navigate('HostList')} >
                    <Text style={styles.text}>LIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HostTopButtonBar;

const screenWidth = Dimensions.get("window").width;
const halfScreen = screenWidth / 2;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        width: screenWidth,
        height: 50,
    },
    leftbutton: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: halfScreen,
        borderWidth: 1,
        borderColor: 'white',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 40,

    },
    rightbutton: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: halfScreen,
        borderWidth: 1,
        borderColor: 'white',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 4,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})
