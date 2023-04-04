import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import textActions from '../../store/Search/actions'
import { useDispatch } from 'react-redux'
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import Loupe from '../../Images/loupe.png'


const { captureText } = textActions

export default function MangasSearch() {
    const dispatch = useDispatch();

    function handleSearch(text) {
        dispatch(captureText({ inputText: text }))
    }

    return (
            <View style={styles.searchBar}>
                <Image source={Loupe} style={styles.loupe} />
                <TextInput style={styles.inputText} placeholder='Find your manga here' onChangeText={handleSearch} />
            </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        display: 'flex',
        width: 308,
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ff8c00',
        borderRadius: 10,
        marginTop: 10
    },

    inputText: {
        width: '90%',
        overflow: 'hidden',
        color: '#fff',
        marginLeft: 40
    },

    loupe: {
        height: 40,
        width: 40,
        position:'absolute',
    }
})