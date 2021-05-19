import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// Components
import Header from '../../components/Header';
import TopButtonBar from '../../components/TopButtonBar';
import UserMenu from '../../components/UserMenu';
// Images and Icons
import image from '../../media/one.png';
import previous from '../../media/previouspic.png';
import heart from '../../media/heart.png';
import dots from '../../media/three_dots_white.png';


const Guest = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <TopButtonBar {...props} />

            <View style={{ flex: 1 }}>
                <Image source={image} style={{ margin: 15, width: '92.5%', height: '95%', borderRadius: 10 }} />
                <View style={{ position: "absolute", top: '3%', left: '7%' }}>
                    <Text style={{ color: 'white', fontSize: 40, }}>EVENT NAME</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>Time and date for event</Text>
                </View>

                <View style={styles.navigate}>
                    <Image source={previous} style={{ margin: 15, width: 30, height: 30 }} />
                    <Image source={heart} style={{ margin: 15, width: 30, height: 30 }} />
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Specifics')}>
                        <Image source={dots} style={{ margin: 15, width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>

            </View>
            <UserMenu {...props} />
        </View >
    )
}

export default Guest;

const styles = StyleSheet.create({

    navigate: {
        position: "relative",
        top: -80,
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%',
    },
})