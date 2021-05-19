import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// Components
import Header from '../../components/Header';
import HostTopButtonBar from '../../components/HostTopButtonBar';
import UserMenu from '../../components/UserMenu';
// Images and Icons
import previous from '../../media/previouspic.png';
import invite from '../../media/directinvite.png';
import dots from '../../media/three_dots_white.png';
import me from '../../media/arnt2.jpg';


const Host = (props) => {
    
    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <HostTopButtonBar {...props} />

            <View style={{ flex: 1 }}>
                <Image source={me} style={{ margin: 15, width: '92.5%', height: '95%', borderRadius: 10 }} />
                <View style={{ position: "absolute", top: '3%', left: '7%' }}>
                    <Text style={{ color: 'white', fontSize: 40, }}>NAME</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>Age, location</Text>
                </View>

                <View style={styles.navigate}>
                    <Image source={previous} style={{ margin: 15, width: 30, height: 30 }} />
                    <Image source={invite} style={{ margin: 15, width: 30, height: 30 }} />
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('HostSpecifics')}>
                        <Image source={dots} style={{ margin: 15, width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>

            </View>
            <UserMenu {...props} />
        </View >
    )
}

export default Host;

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