import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import ReadChapter from '../components/ReadChapter/ReadChapter'
import { useRoute } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../store/store'

function ChapterScreen() {
    const route = useRoute();
    const { CHAPTER } = route.params;
    const id = CHAPTER

    return (
        <Provider store={store}>
            <SafeAreaView>
                <ScrollView>
                    <ReadChapter CHAPTER={id}/>
                </ScrollView>
            </SafeAreaView>
        </Provider>
    )
}

export default ChapterScreen