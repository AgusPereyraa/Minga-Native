import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native'
import Hero from '../components/Hero/Hero'
import SignInText from '../components/SignInText/SignInText'
import SignIn from '../components/SignIn/SignIn'

export default function Home() {
  return (
    <SafeAreaView style={style.content}>
    <ScrollView>
      <Hero />
      <SignInText />
      <SignIn />
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