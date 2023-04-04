import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native'
import Mangas from '../components/Mangas/Mangas'

function MangasScreen() {
  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Mangas />
      </ScrollView>
    </SafeAreaView>
  )
}
  const style = StyleSheet.create({
    content: {
      fix: 1,
      paddingTop: StatusBar.currentHeight
    }
  })
export default MangasScreen