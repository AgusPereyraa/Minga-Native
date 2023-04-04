import React from "react";
import { ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useRoute } from '@react-navigation/native';
import { Provider } from 'react-redux';  
import { store } from '../store/store'
import Detail from "../components/Details/Details";
import Chapters from "../components/Chapters/Chapters";


export default function MangaDetailsScreen() {
    const route = useRoute();
    const { manga } = route.params;
    const id = manga._id


    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Detail _id={id} />
                    <Chapters _id={id} />
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
})