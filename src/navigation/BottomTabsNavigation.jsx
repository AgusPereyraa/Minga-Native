import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useCallback } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/Home.jsx";
import MangasScreen from "../screens/Mangas.jsx";
import MangaDetailsScreen from "../screens/MangaDetail.jsx";
import ChapterScreen from "../screens/Chapter.jsx";

const MangasStackNavigator = createNativeStackNavigator();

function MangasStack() {
    return (
        <MangasStackNavigator.Navigator initialRouteName="MangasScreen">
            <MangasStackNavigator.Screen
                name="MangasScreen"
                component={MangasScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="MangaDetail"
                component={MangaDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="Chapter"
                component={ChapterScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </MangasStackNavigator.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#000"
        barStyle={{ backgroundColor: "#ff8c00" }}
    >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
            name="home"
            color={color}
            size={26}
            />
        ),
        }}
    />
        <Tab.Screen
        name="Mangas"
        component={MangasStack}
        options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
            name="book-open"
            color={color}
            size={26}
            />
        ),
        }}
    />
    </Tab.Navigator>
    );
}

export default BottomTabsNavigator;