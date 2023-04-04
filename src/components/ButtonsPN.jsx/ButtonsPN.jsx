import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonPrevNext(props) {
    const { pageNumber, increasePageNumber, decreasePageNumber, mangas } = props;

    return (
        <View style={styles.btnContainer}>
        {pageNumber === 1 ? null : (
            <TouchableOpacity style={styles.btnPrev} onPress={decreasePageNumber}>
            <Text style={styles.btnText}>Prev</Text>
            </TouchableOpacity>
        )}
        {(mangas.length === 6 || mangas.length === 10) && (
            <TouchableOpacity style={styles.btnNext} onPress={increasePageNumber}>
            <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 365,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
    },
    btnPrev: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 60,
        backgroundColor: 'grey',
        borderRadius: 100,
    },
    btnNext: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 60,
        backgroundColor: 'grey',
        borderRadius: 100,
    },
    btnText:{
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20
    }
});