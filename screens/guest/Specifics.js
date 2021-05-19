import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// components
import Header from '../../components/Header';
import TopButtonBar from '../../components/TopButtonBar';
import UserMenu from '../../components/UserMenu';
// Images and Icons
import image from '../../media/one.png';
import returnpic from '../../media/return.png';


const Specifics = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <TopButtonBar {...props} />
            <View style={{ flex: 1 }}>

                <Image source={image} />
              
                    <TouchableOpacity style={styles.returnlogo} onPress={() => props.navigation.navigate('Guest')}>
                        <Image source={returnpic} style={{ width: 30, height: 30, position: "relative", top: 9, left: 9 }} />
                    </TouchableOpacity>
              
                <View style={{ width: '80%', alignSelf: 'center', paddingTop: 20 }}>
                    <Text style={{ fontSize: 30 }}>EVENT NAME</Text>
                    <Text style={{ fontSize: 20 }}>Date and time</Text>
                </View>

                <View style={{ position: 'relative', top: 20, width: '80%', alignSelf: 'center', borderTopColor: 'grey', borderTopWidth: 2 }}>
                    <Text style={{ marginTop: 10 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt orci nunc,
                        et posuere ligula auctor a. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Donec faucibus massa et felis hendrerit fermentum.
                        Vivamus quis rhoncus nunc. Sed in elit non magna aliquam tincidunt. In a.
                    </Text>
                </View>

            </View>
            <UserMenu {...props} />
        </View >
    )
}

export default Specifics;

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
