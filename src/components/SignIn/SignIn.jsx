import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Google from "../../Images/Google.png"
import Mail from "../../Images/Mail.png"
import Lock from "../../Images/Lock.png"

export default function LoginForm() {
    const [mail, setEmail] = useState('');         
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        let data = {
            mail: mail,
            password: password
        }
        let url = 'https://back-minga.onrender.com/api/auth/signin'
        try {
            await axios.post(url, data)
            Alert.alert('¡Online User!', 'Welcome', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        } catch (error) {
            Alert.alert('Ooops, something went wrong!', 'Wrong Credentials', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

  return (
    <View style={styles.containerLogIn}>
      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} id="mail" name="mail" required onChangeText={(inputText => setEmail(inputText))} />
          <Image style={styles.imagenInput} source={Mail}/>
        </View>
        
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} secureTextEntry={true} id="password" name="password" required onChangeText={(inputText => setPassword(inputText))} />
          <Image style={styles.imagenInput} source={Lock}/>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.divGoogle}>
        <TouchableOpacity style={styles.button2} onPress={() => {}}>
          <Image style={styles.googleImg} source={Google} />
          <Text style={styles.buttonText2}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parrafosForm}>
        <Text>
        You don't have an account yet?
          <Text style={styles.parrafosFormText} onPress={() => {
            }}> Sign up</Text> 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
    width: "100%",
  },
  fieldset: {
    display: "flex",
    alignItems: "flex-start",
    width: 410,
    height: 65,
    width: "90%",
    justifyContent: "flex-start",
    background: "#EBEBEB",
    borderBottomWidth: 1,
  },
  legendCont:{
    display: "flex",
    width:"100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imagen:{
    width: 19,
    height: 19,
    marginBottom: 10,
  },
  imagenInput: {
    width: 19,
    height: 19
  },
  googleImg: {
    width: 30,
    height:30
  },
  buttonText2:{
    color: "gray"
  },
  legend: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    fontWeight: 500,
    color: "#ff8c00",
  },
  input: {
    width: "90%",
    backgroundColor: "transparent",
    height: 45,
    fontSize: 15,
    padding: 11,
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#ff8c00",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  
  buttonText: {
    color: "white",
    fontSize: 20
  },

  button2: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 60,
    margin: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 20
  },
  
  buttonText3: {
    color: "grey"
  },

  divGoogle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 410,
    height: 16,
    borderRadius: 10,
    background: "#EBEBEB",
    border: 1,
  },

  parrafosForm: {
    display: "flex",
    gap: 17,
    width: "100%",
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  parrafosFormText:{
    color: "#ff8c00",
    fontWeight: 700,
  },
});