import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChapterCard(props) {
    const navigation = useNavigation();

    function handleRead() {
        navigation.navigate('Chapter', { CHAPTER: props })
    }

    return (
        <View style={styles.cardContainer}>
        <View style={styles.infoContainer}>
            <Text style={styles.category}>{props.order}</Text>
            <Text style={styles.title}>{props.title_}</Text>
            <TouchableOpacity style={styles.btnCont} onPress={handleRead}>
                    <View>
                        <Text style={styles.btnTexto}>Read</Text>
                    </View>
                </TouchableOpacity>
        </View>
        <Image style={styles.img} source={{ uri: props.pages[0] }} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        width: '75%', 
        marginLeft: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    spanCard: {
        width: 10,
        height: 200,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 5
    },
    category: {
        fontSize: 18,
        marginLeft: 5
    },
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    btnCont: {
        marginTop: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 60,
        backgroundColor: '#ff8c00',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
},
});