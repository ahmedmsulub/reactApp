import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
// Components
import Header from '../components/Header';
import WhiteWrapper from '../components/WhiteWrapper'
import UserMenu from '../components/UserMenu';
// Images and Icons
import returnpic from '../media/return.png';


const Contact = (props) => {

    const [input, setInput] = useState("")

    return (
        <View style={{ flex: 1, }}>
            <Header {...props} />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <WhiteWrapper>
                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                            <Image source={returnpic} style={{ width: 25, height: 25, top: 2, marginRight: 10 }} />
                        </TouchableOpacity>
                        <Text>Contact us</Text>
                    </View>
                </WhiteWrapper>

                <TextInput style={styles.inputfield} onChangeText={(newValue) => setInput(newValue)} />

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Contact')}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>

                <UserMenu {...props} />
            </View>
        </View >
    )
}

export default Contact;

const styles = StyleSheet.create({

    inputfield: {
        height: 500,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 10
    },
    button: {
        backgroundColor: "lightgrey",
        width: 200,
        alignSelf: 'center',
        alignItems: "center",
        padding: 10,
        borderRadius: 4,
        marginBottom: 4
    },
})
