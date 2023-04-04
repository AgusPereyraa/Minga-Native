import React,{useState,useEffect} from 'react'
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput} from "react-native";
import Card from '../MangasCard/MangasCard';
import PrevNext from '../ButtonsPN.jsx/ButtonsPN';
import { useSelector,useDispatch } from 'react-redux'
import MangasFondo from '../../Images/MangasFondo.png'
import Search from '../MangasSearch/MangasSearch'
import MangasActions from '../../store/Mangas/actions'


const {read_mangas} = MangasActions

export default function MangasAll() {
    const [reload,setReload] = useState(false)

    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();

    const increasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const decreasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1);
    };

    let mangas = useSelector(store => store.mangas.mangas)
    let defaultText = useSelector(store => store.text.text)
    let defaultChecks = useSelector(store=>store.checks.checks)
    
    useEffect(() => {
        dispatch(
            read_mangas({ inputText: defaultText, inputCheck: defaultChecks, inputPage: pageNumber })
            );
        }, [defaultChecks, pageNumber, defaultText]);

    return (
        <View  style={styles.container}>
            <ImageBackground source={MangasFondo} resizeMode="cover" style={styles.image1}>
                <View style={styles.containerTexto}>
                    <Text style={styles.title}>Mangas</Text>
                    <Text style={styles.book}>📖</Text>
                </View>
            </ImageBackground>
            <View style={styles.searchBar}>
                <Search />
            </View>
            <View style={styles.cardsContainer}>
                {mangas.length ? (
                mangas.map((manga) => <Card key={manga._id} title_={manga.title} category_={manga.category_id} photo={manga.cover_photo} _id={manga._id} />)
                ) : (
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Not Found</Text>
                )}
            </View>
            <PrevNext pageNumber={pageNumber} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} mangas={mangas} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTexto: {
        flex: 0.6,
        height: 705,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: -60
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '200'
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    btnCont:{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 363,
        height: 69,
        backgroundColor: '#ff8c00',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
    },
    cardsContainer: {
        height: 'auto',
        alignItems: 'center',
    },
    book: {
        fontSize: 60
    }
})