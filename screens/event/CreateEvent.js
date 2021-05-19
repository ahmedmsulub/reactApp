import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Switch } from 'react-native-gesture-handler';
// Components
import Header from '../../components/Header';
import UserMenu from "../../components/UserMenu";
// Images and Icons
import image from '../../media/one.png';
import cancel from '../../media/cancel_01.png';
import ok from '../../media/ok_01.png';


const CreateEvent = (props) => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [bio, setBio] = useState('')
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        console.log(isEnabled)
        setIsEnabled(previousState => !previousState);
        if (!isEnabled) {
            console.log('now I´m sharing my public location')
        }
    }

    const cancelFunction = () => {
        setName('')
        setDate('')
        setBio('')
    }

    const okFunction = () => {
        console.log(name)

    }

    return (
        <KeyboardAwareScrollView>
            <Header {...props} />
            <View style={{ flex: 1 }}>
                <Image source={image} />

                <Text style={styles.text}> Event name: </Text>
                <TextInput onChangeText={value => setName(value)} value={name} style={{ backgroundColor: 'white' }}></TextInput>

                <Text style={styles.text}> Date: </Text>
                <TextInput onChangeText={value => setDate(value)} value={date} style={{ backgroundColor: 'white' }}></TextInput>

                <Text style={styles.text}> Biografy: </Text>
                <TextInput onChangeText={value => setBio(value)} value={bio} style={{ backgroundColor: 'white' }}></TextInput>

                <Text style={styles.text}> Tag: </Text>
                <TextInput style={{ backgroundColor: 'white' }}></TextInput>{/* Not an input, shall display tags eventually */}

                <Text style={styles.text}> Invite: </Text>
                <View style={{ backgroundColor: 'white', height: 50, flexDirection: 'row', alignItems: "center" }}>
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey', marginLeft: 15 }} />
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey', marginLeft: 15 }} />
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey', marginLeft: 15 }} />
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey', marginLeft: 15 }} />
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'grey', marginLeft: 15 }} />
                </View>

                <Text style={styles.text}> Privacy: </Text>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingLeft: 3 }}>
                    <Text style={styles.text}>Public location</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'lightgrey', true: 'lightgrey' }}
                        thumbColor={isEnabled ? 'purple' : 'grey'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.optionsView}  >
                    <Text style={{ fontSize: 20, marginRight: 10 }}>Cancel</Text>
                    <TouchableOpacity onPress={() => cancelFunction()}>
                        <Image source={cancel} on style={{ width: 40, height: 40, marginRight: 80 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => okFunction()}>
                        <Image source={ok} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>Ok</Text>
                </View>

            </View>
            <UserMenu {...props} />
        </KeyboardAwareScrollView >
    )
}

export default CreateEvent;

const styles = StyleSheet.create({
    text: {
        height: 30,
        textAlignVertical: "center"
    },
    switch: {
        justifyContent: "flex-end",
        flex: 1,
    },
    optionsView: {
        flexDirection: "row",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        left: -18
    }
})
