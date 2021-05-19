import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
// Components
import Header from '../../components/Header';
import HostTopButtonBar from '../../components/HostTopButtonBar';
import UserMenu from '../../components/UserMenu';
// Images and Icons
import image from '../../media/one.png';
import returnpic from '../../media/return.png';
import vip from '../../media/vip.png'
import location from '../../media/location_01.png'


const HostSpecifics = (props) => {

    return (
        // <ScrollView></ScrollView>
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <HostTopButtonBar {...props} />
            <View style={{ flex: 1 }}>

                <Image source={image} />

                <TouchableOpacity style={styles.returnlogo} onPress={() => props.navigation.navigate('Host')}>
                    <Image source={returnpic} style={{ width: 30, height: 30, position: "relative", top: 9, left: 9 }} />
                </TouchableOpacity>

                <View style={{ width: '80%', alignSelf: 'center', marginTop: 35, alignItems: "center" }}>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image source={vip} style={{ width: 24, height: 24, marginRight: 10 }} />
                        <Text style={{ fontSize: 30 }}>Name</Text>
                        <Text style={{ fontSize: 20, top: 4, marginLeft: 20 }}>age</Text>
                        <Text style={{ fontSize: 20, top: 4, marginLeft: 65, }}> 500m </Text>
                        <Image source={location} style={{ width: 24, height: 24, marginLeft: 10 }} />
                    </View>

                    <View style={{ top: 20, borderTopColor: 'grey', borderTopWidth: 2 }}>
                        <Text style={{ marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt orci nunc,
                            et posuere ligula auctor a. Vestibulum ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia curae; Donec faucibus massa et felis hendrerit fermentum.
                            Vivamus quis rhoncus nunc. Sed in elit non magna aliquam tincidunt. In a.
                        </Text>
                    </View>

                </View>

                <View style={{ marginTop: 20, flexDirection: 'row',  /* height: 200, */ alignItems: "center" }}>
                    {/*  <View style={{ width: '25%', height: 100, backgroundColor: 'black', borderRadius: 3 }} />
                    <View style={{ width: '25%', height: 100, backgroundColor: 'gray', borderRadius: 3 }} />
                    <View style={{ width: '25%', height: 100, backgroundColor: 'lightgray', borderRadius: 3 }} />
                    <View style={{ width: '25%', height: 100, backgroundColor: 'grey', borderRadius: 3 }} /> */}
                </View>

            </View>
            <UserMenu {...props} />
        </View >
    )
}

export default HostSpecifics;

const styles = StyleSheet.create({
    navigate: {
        position: "relative",
        top: -80,
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%',
    },
    returnlogo: {
        position: "absolute",
        top: '1.5%',
        left: '2%',
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: 'white',
    }
})
