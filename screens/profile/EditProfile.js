import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Components
import Header from '../../components/Header';
import UserMenu from '../../components/UserMenu';
// Images and Icons
import { Entypo } from '@expo/vector-icons';
// Firebase
import { db } from '../../api/firebase';


const EditProfile = (props) => {

    const [name, setName] = useState();
    const [birthday, setBirthday] = useState();
    const [biografy, setBiografy] = useState();
    const [location, setLocation] = useState();

  /*   useEffect(() => {
        db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').get()
            .then(doc => {
                const data = doc.data();
                console.log(data)
            })
    }, []); */

    const submit = () => {
        if (name) {
            db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').update({ Username: name });
        }
        if (birthday) {
            db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').update({ Birthday: birthday });
        }
        if (biografy) {
            db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').update({ Biografy: biografy });
        }
        if (location) {
            db.collection('Users').doc('0tWlJSwY5zxHKVgXSI7c').update({ Location: location });
        }
        props.navigation.navigate('Profile');
    }

    return (
        <KeyboardAwareScrollView >
            <Header {...props} />

            <View style={{ flex: 1 }}>
         
                {/* <Image source={image} /> */}
                <View style={{ height: '45%', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name="user" size={200} color="black" />
                </View>

                <Text style={styles.text}> Name: {name}</Text>
                <TextInput
                    style={{ backgroundColor: 'white', height: '6%' }}
                    onChangeText={input => setName(input)}
                />

                <Text style={styles.text}> Birthday: </Text>
                <TextInput
                    style={{ backgroundColor: 'white', height: '6%' }}
                    onChangeText={input => setBirthday(input)}
                />

                <Text style={styles.text}> Biografy: </Text>
                <TextInput
                    style={{ backgroundColor: 'white', height: '6%' }}
                    onChangeText={input => setBiografy(input)}
                />

                <Text style={styles.text}> Location: </Text>
                <TextInput
                    style={{ backgroundColor: 'white', height: '6%' }}
                    onChangeText={input => setLocation(input)}
                />
                
               
                    <TouchableOpacity
                        style={styles.button}
                        onPress={submit}>
                        <Text style={{ color: 'white' }}>OK</Text>
                    </TouchableOpacity>
               
                
            </View>

            <UserMenu {...props} style={{height: 10}} />
        </KeyboardAwareScrollView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    text: {
        height: 30,
        textAlignVertical: "center"
    },
    button: {
        marginVertical: 40,
        backgroundColor: 'purple',
        alignItems: "center",
        width: 100,
        alignSelf: "center",
        padding: 10,
        borderRadius: 4
    },
})
