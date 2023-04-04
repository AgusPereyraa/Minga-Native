import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hero from '../components/Hero/Hero'
import SignInText from '../components/SignInText/SignInText'
import SignIn from '../components/SignIn/SignIn'

export default function Home() {

  const [token, setTokenExists] = useState("");
  const [reload, setReload] = useState(false)

  useFocusEffect(
      useCallback(() => {
          AsyncStorage.getItem('token')
          .then(token => {
              if (token) {
              setTokenExists(true);
              }
          })
          .catch(err => console.log(err))
      }, [!reload]
      )
  )

  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Hero />
        {token ? <></>: <SignIn />}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  content:{
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
})