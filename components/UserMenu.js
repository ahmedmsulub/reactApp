import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
// Images and Icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import event from '../media/newevent.png'
// Firebase
import { db } from '../api/firebase'
import { TouchableHighlight } from 'react-native-gesture-handler';

/** 
* Component on the bottom of each screen. Contains 4 icons and describing 
* text that is linked to different sections of the app 
**/


const UserMenu = (props) => {
// TouchableHighlight
    const [user, setUser] = useState({})

    /* useEffect(() => {
        db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').get()
            .then(doc => {
                const data = doc.data();
                setUser(data)
                console.log(user)
            })
    }, []) */

    return (
        <View style={styles.userMenu}>

            <TouchableOpacity style={styles.menuItems} onPress={() => props.navigation.navigate('Profile', { user })}>
                <Entypo name="user" size={24} color="black" />
                <Text>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItems} onPress={() => props.navigation.navigate('Guest')}>
                <FontAwesome5 name="mask" size={24} color="black" />
                <Text>Guest</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItems} onPress={() => props.navigation.navigate('Host')}>
                <FontAwesome name="home" size={24} color="black" />
                <Text>Host</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItems} onPress={() => props.navigation.navigate('Event')}>
                <Image source={event} style={{ width: 24, height: 24 }} />
                {/* <Ionicons name="md-settings" size={24} color="black" /> */}
                <Text>Event</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserMenu;

const styles = StyleSheet.create({
    userMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 14,
        borderTopColor: 'purple',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 4,
        borderTopWidth: 2,
    },
    menuItems: {
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30
    }
})


