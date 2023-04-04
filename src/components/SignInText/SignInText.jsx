import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Logo from "../../Images/Logo.png"

export default function Welcome(props) {
    return (
      <View style={styles.welcome}>
        <View style={styles.titleWelcome}>
            <Text style={styles.textTitle}>Minga</Text>
            <Image source={Logo} style={styles.logo} />
        </View>
        <Text style={styles.welcomeH2}> Welcome <Text style={styles.span}>Back!</Text></Text>
        <Text style={styles.welcomeText}>Discover manga, manhua and manhwa, track your progress, have fun, read manga</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    welcome: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10
    },
    titleWelcome: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    logo: {
    },
    textTitle: {
      color: "#ff8c00",
      fontSize: 40,
      paddingBottom: 6
    },
    welcomeH2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    span: {
        color: "#ff8c00",
    },
    welcomeText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 20,
    }
  })