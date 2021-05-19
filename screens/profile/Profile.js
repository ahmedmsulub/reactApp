import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// Components
import Header from '../../components/Header'
import UserMenu from '../../components/UserMenu'
// Images and Icons
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import vip from '../../media/vip.png'
import scores from '../../media/scores.png'


const Profile = (props) => {

    const user = props.navigation.state.params.user

    return (
        <View style={{ flex: 1 }}>
            <Header {...props} />

            <View style={{ flex: 1 }}>
                <Image source={image} Shall be changed to profilepicture/>
                <View style={{ height: '45%', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name="user" size={200} color="black" />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
                    <Image source={vip} style={{ width: 20, height: 20, marginLeft: 20, marginRight: 10 }} />
                    <Text> {user.username} </Text>
                    <Text> 39 </Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Image source={scores} style={{ width: 20, height: 20, marginLeft: 20, marginRight: 10 }} />
                    <Text> 11222 </Text>

                </View>

                <View style={{ width: '80%', alignSelf: 'center', borderTopColor: 'grey', borderTopWidth: 2 }}>
                    <Text style={{ marginTop: 10 }}>
                    {user.Biografy}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('EditProfile')}>
                    <MaterialIcons name="edit" size={20} color="black" style={{ marginLeft: 10 }} />
                    <Text style={{ marginLeft: 8 }}>Edit</Text>
                </TouchableOpacity>

            </View>
            <UserMenu {...props} />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({

    button: {
        marginTop: 70,
        backgroundColor: "#00B0FF",
        alignItems: "center",
        width: 100,
        alignSelf: "center",
        padding: 10,
        borderRadius: 4,
        marginBottom: 4,
        flexDirection: "row",
    },
})
