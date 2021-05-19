import React from 'react'
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
// Images and Icons
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Crown from '../media/crown.png';

/** 
* Custom Header-component. Contains the apps logo and link to settings.  
**/

const Header = (props) => {

    return (
        <View style={styles.header}>
            <LinearGradient
                start={[0.3, -0.9]} end={[.5, 2.5]}
                colors={['#5879ae', '#692c72', '#c8327c']}
                style={{
                    flexDirection: "column",
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                }}
            />
            <View />

            <Image source={Crown} style={{}} style={styles.logo} />

            <TouchableOpacity style={{ marginRight: 20, top: 17 }} onPress={() => props.navigation.navigate('Settings')}>
                <Ionicons name="md-settings" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    header: {
        width: screenWidth,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gainsboro'
    },
    logo: {
        width: 30,
        height: 30,
        marginLeft: 40,
        top: 15,
        borderWidth: 1,
        borderColor: '#dcdcdc50',
        borderRadius: 20,
        backgroundColor: '#dcdcdc50'
    }
})
