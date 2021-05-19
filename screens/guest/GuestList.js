import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// Components
import Header from '../../components/Header';
import TopButtonBar from '../../components/TopButtonBar';
import WhiteWrapper from '../../components/WhiteWrapper'
import UserMenu from '../../components/UserMenu';
// Images and Icons
import chat from '../../media/chat_bubble.png';
import purpleInvite from '../../media/send_purple.png';
// Extern data sources
import api from '../../api/Jsonplaceholder'


const GuestList = (props) => {

    const [users, setUsers] = useState()

    useEffect(() => {
        getusers()
    }, [])

    const getusers = async () => {
        const response = await api.get('/users')
        setUsers(response.data)
    }

    if (users) {
        return (
            <ScrollView>
                <Header {...props} />
                <TopButtonBar {...props} />

                <Text style={styles.header}>Invited parties</Text>
                {users.map(item => (
                    <WhiteWrapper key={item.id}>
                        <View style={styles.userItem}>
                            <View style={styles.avatar} />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={purpleInvite} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={chat} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </WhiteWrapper>
                ))}

                <Text style={styles.header}>Matched parties</Text>
                {users.map(item => (
                    <WhiteWrapper key={item.id}>
                        <View style={styles.userItem}>
                            <View style={styles.avatar} />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={purpleInvite} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={chat} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </WhiteWrapper>
                ))}

                <Text style={styles.header}>Users</Text>
                {users.map(item => (
                    <WhiteWrapper key={item.id}>
                        <View style={styles.userItem}>
                            <View style={styles.avatar} />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={purpleInvite} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                                <Image source={chat} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </WhiteWrapper>
                ))}

                <UserMenu {...props} />
            </ScrollView>
        )
    }

    // Alternative View (before content is done)

    else {
        return (
            <View style={styles.loadingScreen}>
                <Text style={styles.loadingText}>Loading content</Text>
                <ActivityIndicator size="large" color="purple" />
            </View>
        )
    }
}

export default GuestList;

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        backgroundColor: 'purple',
        color: 'white',
        height: 40,
        fontSize: 28,
        marginHorizontal: 1
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 25,
    },
    text: {
        fontSize: 18,
        width: 150,
    },
    icon: {
        width: 40,
        height: 40,
    },
    // Alternative screen
    loadingScreen: {
        position: 'relative',
        top: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 30,
        marginBottom: 20
    }
})
