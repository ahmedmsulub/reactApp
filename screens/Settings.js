import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Slider, Switch, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
// Components
import Header from '../components/Header'
import WhiteWrapper from '../components/WhiteWrapper'
import UserMenu from "../components/UserMenu";
// Images and Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import vip from '../media/vip.png'
import instagram from '../media/socialMediaIcons/ins.png'
import logo from '../media/logo.png';
import { db } from '../api/firebase'



const SettingsScreen = (props) => {
    const [settings, setSettings] = useState({})
    // Sliders
    const [distance, setDistance] = useState(0);
    const [age, setAge] = useState(30);

    useEffect(() => {
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').get()
            .then(doc => {
                const data = doc.data();
                setSettings(data)
            })
        console.log(settings)
    }, [])
    console.log(settings)
    const showMeOnJubel = () => {
        setSettings({
            ...settings,
            showOnJubel: !settings.showOnJubel,
        });
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ showOnJubel: !settings.showOnJubel });
    }

    const showMyAddress = () => {
        setSettings({
            ...settings,
            showAddress: !settings.showAddress,
        });
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ showAddress: !settings.showAddress });
    }

    const showMyAge = () => {
        setSettings({
            ...settings,
            showAge: !settings.showAge,
        });
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ showAge: !settings.showAge });
    }

    const displayNotification = () => {
        setSettings({
            ...settings,
            notification: !settings.notification,
        })
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ notification: !settings.notification });
    }

    const showNewMatches = () => {
        setSettings({
            ...settings,
            showMatches: !settings.showMatches,
        })
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ showMatches: !settings.showMatches });
    }

    const displayMessages = () => {
        setSettings({
            ...settings,
            messages: !settings.messages,
        })
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ messages: !settings.messages });
    }

    const displaySLMessages = () => {
        setSettings({
            ...settings,
            SLMessages: !settings.SLMessages,
        })
        db.collection('Users').doc('AaD1Awta9mpcUeojmRNp').update({ SLMessages: !settings.SLMessages });
    }


    return (

        <ScrollView>
            <Header {...props} />
            <View style={{ fontSize: 35, alignItems: 'flex-end' }}>
                <Text style={styles.header}>Settings</Text>
            </View>
            <Text style={styles.header}>Searching</Text>
            <WhiteWrapper>
                <View style={{ paddingBottom: 10, width: '100%', flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />
                    <Text style={{ marginLeft: 5 }}>Distance</Text>
                    <Text style={{ marginLeft: 5 }}>{distance} km</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>0</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={5}
                        step={1}
                        onValueChange={distance => setDistance(distance)}
                        value={distance}
                    />
                    <Text>5km</Text>
                </View>
            </WhiteWrapper>

            <WhiteWrapper>
                <View style={{ paddingBottom: 10, width: '100%', flexDirection: 'row' }}>
                    <Entypo name="user" size={24} color="black" />
                    <Text style={{ marginLeft: 5 }}>Age</Text>
                    <Text style={{ marginLeft: 5 }}>{age}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                    <Text>25</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={25}
                        maximumValue={40}
                        step={1}
                        onValueChange={age => setSettings({ age: age })}
                        value={age}
                    />
                    <Text>40</Text>
                </View>
            </WhiteWrapper>
            <View>
                <Text style={styles.header}>Privacy</Text>
            </View>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>Show me on Jubel</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.showOnJubel ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={showMeOnJubel}
                        value={settings.showOnJubel} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>Show my address</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.showAddress ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={showMyAddress}
                        value={settings.showAddress} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>Show my age</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.showAge ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={showMyAge}
                        value={settings.showAge} />
                </View>
            </WhiteWrapper>
            <Text style={styles.header}>Message</Text>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>App Notification</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.notification ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={displayNotification}
                        value={settings.notification} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>New Matches</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.showMatches ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={showNewMatches}
                        value={settings.showMatches} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>Messages</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.messages ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={displayMessages}
                        value={settings.messages} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={styles.item}>
                    <Text>Super like Message</Text>
                    <Image source={vip} style={{ width: 20, height: 20, marginLeft: 10 }} />
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: 'ligthgrey', true: 'ligthgrey' }}
                        thumbColor={!settings.SLMessages ? '#f4f3f4' : 'purple'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={displaySLMessages}
                        value={settings.SLMessages} />
                </View>
            </WhiteWrapper>
            <Text style={styles.header}>Instagram Photos</Text>
            <WhiteWrapper >
                <View style={{ flexDirection: 'row' }}>
                    <Image source={instagram} style={{ width: 20, height: 20, marginRight: 10 }} />
                    <Text>Connect to Instagram</Text>
                </View>
            </WhiteWrapper>
            <Text style={styles.header}>Other</Text>
            <WhiteWrapper>
                <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('Invite')}>
                    <Text>Invite friends</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                </TouchableOpacity>
            </WhiteWrapper>
            <WhiteWrapper>
                <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('Contact')}>
                    <Text>Contact us</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                </TouchableOpacity>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={{ height: 20, flexDirection: "row", alignItems: 'center' }}>
                    <Text>Help and support</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={{ height: 20, flexDirection: "row", alignItems: 'center' }}>
                    <Text>Terms & condition</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                </View>
            </WhiteWrapper>
            <WhiteWrapper>
                <View style={{ height: 20, flexDirection: "row", alignItems: 'center' }}>
                    <Text>Privacy policy</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.customFlexEnd} />
                </View>
            </WhiteWrapper>

            <TouchableOpacity style={styles.logoutButton} onPress={() => props.navigation.navigate('----LOG OUT---')}>
                <Text>Log out</Text>
            </TouchableOpacity>
            <Image source={logo} style={{ width: 40, height: 40, alignSelf: 'center' }} />
            <Text style={{ textAlign: 'center' }}>version 1.0</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => props.navigation.navigate('----REMOVE---')}>
                <Text style={{ color: 'white', marginHorizontal: 20 }}>Remove profile</Text>
            </TouchableOpacity>
            <UserMenu {...props} />
        </ScrollView>
    )
};

export default SettingsScreen;

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    header: {
        padding: 10,
        fontSize: 25
    },
    item: {
        height: 20,
        flexDirection: "row"
    },
    slider: {
        width: 250,
    },
    switch: {
        justifyContent: "flex-end",
        flex: 1,
    },
    link: {
        height: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    logoutButton: {
        position: "relative",
        alignItems: "center",
        backgroundColor: "white",
        marginVertical: 20,
        padding: 10,
    },
    removeButton: {
        position: "relative",
        backgroundColor: 'grey',
        alignSelf: "center",
        marginVertical: 18
    },
    customFlexEnd: {
        position: 'absolute',
        left: screenWidth - 45
    }
});