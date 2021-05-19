import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import google from '../media/socialMediaIcons/google.png'
import facebook from '../media/socialMediaIcons/facebook.png'
import { db, auth } from '../api/firebase'
import firebase from 'firebase/app';
// import * as GoogleSignIn from 'expo-google-sign-in';

export default Login = () => {
  const [user, setUser] = useState()

  /* useEffect(() => {
    initAsync();
  }, [])
  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '755666945382-j86svsgchlng6eahl94c7uim82mf56gv.apps.googleusercontent.com',
    });
    _syncUserWithStateAsync();
  }; */

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };





  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={google} alt="google" />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={facebookLogin}>
        <Image source={facebook} alt="facebook" />
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({})
