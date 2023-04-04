import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function ReadChapter(props) {
    const navigation = useNavigation()
    const id = props.CHAPTER
    const [pageNumber, setPageNumber] = useState(0);

    function handleNext(){
        if (pageNumber > id.pages.length - 1) {
            navigation.goBack();
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    function handlePrev() {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        } else {
            navigation.goBack();
        }
    }

    return (
        <View>
            <View style={style.contTitle}>
                <Text style={style.title}>N° {id.order_} || </Text>
                <Text style={style.title}>{id.title_}</Text>
            </View>
            <Image style={style.img} source={{ uri: id.pages[pageNumber] }} />
            <TouchableOpacity style={style.btnPrev} onPress={handlePrev}>
                <Text style={style.btn}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnNext} onPress={handleNext}>
                <Text style={style.btn}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    contTitle:{
        display: 'flex',
        flexDirection: 'row', 
        alignSelf: 'center',
        gap: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        width: 'auto',
        height: 580
    },
    btn:{
        fontSize: 16,
        fontWeight: 500,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 12
    },
    btnPrev:{
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 500
    },
    btnNext:{
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 500
    },
})

export default ReadChapter
