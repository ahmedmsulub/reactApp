import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
// Components
import Header from '../components/Header'
import UserMenu from "../components/UserMenu";
// Images and Icons
import image from '../media/one.png'


const HomeScreen = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Image source={image} style={{ position: 'relative' }} />

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Report')}>
                    <Text style={styles.text}>Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Chat')}>
                    <Text style={styles.text}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Report')}>
                    <Text style={styles.text}>Report</Text>
                </TouchableOpacity>

                <Text style={styles.terms}>terms & conditions</Text>
            </View>

            <UserMenu {...props} />
        </View>
    )
};

export default HomeScreen

const styles = StyleSheet.create({

    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    button: {
        backgroundColor: "purple",
        width: 200,
        alignSelf: 'center',
        alignItems: "center",
        padding: 10,
        borderRadius: 4,
        marginBottom: 4
    },
    terms: {
        textAlign: "center",
        margin: 10
    },
    text: {
        color: 'white'
    }
});
