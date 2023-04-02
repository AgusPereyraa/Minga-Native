import React from 'react'
import { View, Text,SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native'
import SignIn from '../components/SignIn/SignIn'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <SafeAreaView style={style.content}>
    <ScrollView>
      <Hero />
      <SignIn/>
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