import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
// Components
import Header from '../components/Header';
import WhiteWrapper from '../components/WhiteWrapper'
import UserMenu from '../components/UserMenu';
// Images and Icons
import returnpic from '../media/return.png';
import facebook from '../media/socialMediaIcons/fb.png';
import { AntDesign } from '@expo/vector-icons';


const InviteFriends = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />
            <WhiteWrapper>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                        <Image source={returnpic} style={{ width: 25, height: 25, top: 2, marginRight: 10 }} />
                    </TouchableOpacity>
                    <Text>Invite friends</Text>
                </View>
            </WhiteWrapper>

            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 20 }}>
                    <WhiteWrapper>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} style={{ flexDirection: 'row', alignItems: "center", height: 70}}>
                            <Image source={facebook} style={{ width: 40, height: 40, top: 2, marginRight: 10 }} />
                            <Text>Facebook</Text>
                            <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                        </TouchableOpacity>
                    </WhiteWrapper>

                    <WhiteWrapper>
                        <View style={{ height: 70, }}>
                            <Text>Write an Email:</Text>
                            <View style={{ top: 50, borderBottomWidth: 2, borderBottomColor: 'grey' }} />
                        </View>
                    </WhiteWrapper>
                </View>
            </View>

            <UserMenu {...props} />
        </View >
    )
}

export default InviteFriends;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({

    inputfield: {
        height: 500,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 10
    },
    customFlexEnd: {
        position: 'absolute',
        left: screenWidth - 45
    }
})
