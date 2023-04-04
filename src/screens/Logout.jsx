import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'


export default function MangasScreen() {
  return (
    <View>
        <Text style={style.content}>Logout</Text>
    </View>
  )
}

const style = StyleSheet.create({
    content:{
      flex: 1,
      paddingTop: StatusBar.currentHeight
    }
  })