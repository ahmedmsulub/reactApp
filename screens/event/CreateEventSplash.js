import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
// Components
import Header from '../../components/Header'
import UserMenu from '../../components/UserMenu';
// Images and Icons
import image from '../../media/one.png'


const CreateEventSplash = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <Image source={image} style={{ height: '100%' }} />
                <Text style={styles.text}> Create your event now!</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CreateEvent')}>
                    <Text style={styles.buttonText}>NEW EVENT</Text>
                </TouchableOpacity>

            </View>
            <UserMenu {...props} />
        </View>
    )
}

export default CreateEventSplash;

const screenHeight = Dimensions.get('window').height
var customFontSize = 90
if (screenHeight < 800) {
    customFontSize = 70
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        top: '5%',
        fontSize: customFontSize,
        textAlign: 'center',
        color: 'white',
    },
    button: {
        position: 'absolute',
        top: '75%',
        borderWidth: 1.5,
        borderColor: 'white',
        padding: 10,
        width: 260,
        borderRadius: 40
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    }
})
