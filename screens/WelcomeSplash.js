import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
// Components
import UserMenu from "../components/UserMenu";
// Images and Icons
import image from '../media/one.png'
import logo from '../media/logo.png'


const WelcomeSplash = (props) => {
    // timer
    return (
        <View style={styles.mainView}>
            <Image source={image} style={{height: '100%', position: 'absolute'}}/>
            <Image source={logo} style= {{alignSelf: 'center'}}/>
            <Text style={styles.welcomeText}>User Name</Text>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateEvent')}>
                    <Text style={styles.text}>Create Event</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateProfile')}>
                    <Text style={styles.text}>Create Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateEventSplash')}>
                    <Text style={styles.text}>Create event splash</Text>
                </TouchableOpacity>

                <Text style={styles.terms}>terms & conditions</Text>
            </View>
            <View />
            <UserMenu />
        </View>
    )
};

export default WelcomeSplash;

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    mainView: {
        height: screenHeight,
        flexDirection: "column",
        justifyContent: 'space-between',
    },
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
        margin: 10
    },
    text: {
        color: 'white'
    }
});
