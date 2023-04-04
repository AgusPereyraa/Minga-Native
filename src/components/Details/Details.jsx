import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import getManga from '../../store/Manga/actions'
import getChapters from '../../store/Chapters/actions'
import Chapterbg from '../../Images/chapterbg.png'
const { get_manga } = getManga
const { get_chapters } = getChapters

export default function Detail(props) {
    const id = props._id

    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        dispatch(get_manga({ inputId: id, inputPage: pageNumber }))
            .then((response) => {
                setManga(response.payload.manga);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, pageNumber]);

    let titleManga = useSelector((store) => store.manga.manga.title);
    let descriptionManga = useSelector(
        (store) => store.manga.manga.decription
    );
    let imageManga = useSelector(
        (store) => store.manga.manga.cover_photo
    );


    return (
        <View>
        <ImageBackground source={Chapterbg} resizeMode="cover" styles={styles.image1}>
        <View style={styles.detailContainer}>
            <View style={styles.containerTexto}>
            <Text style={styles.detail}>Details</Text>
            <Text style={styles.book}>🧾</Text>
        </View>
            <Image style={styles.img} source={{ uri: imageManga }} />
            <Text style={styles.title}>{titleManga}</Text>
            <View style={styles.description}>
                <Text style={styles.text}>{descriptionManga}</Text>
            </View>
        </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    img: {
        display: 'flex',
        justifyContent:'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
        width: '80%',
        height: 400,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 500,
        marginBottom: 10,
    },
    description: {
        width: '90%',
        alignSelf: 'center',
    },
    text:{
        fontSize: 15,
        lineHeight: 22
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    detail: {
        color: 'black',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: -20
    },
    containerTexto: {
        height: 205,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 240,
    },
    book: {
        fontSize: 60,
        marginLeft: -20
    }
})