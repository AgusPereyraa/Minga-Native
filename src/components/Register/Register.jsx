import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profile from "../../Images/profileForm.png"
import Mail from "../../Images/Mail.png"
import Camera from "../../Images/Camera.png"
import Lock from "../../Images/Lock.png"
import Google from "../../Images/Google.png"
import SignIn from '../SignIn/SignIn'

export default function FormRegister() {
  const [name, setName] = useState('');     
  const [mail, setMail] = useState('');     
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const navigation= useNavigation()
  const [showSignIn, setShowSignIn] = useState(false)

  function handleSignIn(){
    setShowSignIn(true)
  }

  async function handleSubmit() {
    let data = {
        name: name,
        mail: mail,
        photo: photo,
        password: password
    }
    console.log(data);
    let url = 'https://back-minga.onrender.com/api/auth/signup'
    try {
        await axios.post(url, data)
        Alert.alert('¡User Created!', 'Welcome', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    } catch (error) {
        Alert.alert('Ooops, something went wrong!', 'Wrong Credentials', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }
}
  

  return (
    showSignIn?<SignIn /> : 
    <View style={styles.ViewRegister}>
      <View style={styles.fieldset}>
        <Text style={styles.legend}>Name</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} value={name} onChangeText={(inputText => setName(inputText))} />
          <Image style={styles.imagen} source={Profile} />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} value={mail} onChangeText={(inputText => setMail(inputText))} />
          <Image style={styles.imagen} source={Mail} />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Photo</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} value={photo} onChangeText={(inputText => setPhoto(inputText))} />
          <Image style={styles.imagen} source={Camera} />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={(inputText => setPassword(inputText))} />
          <Image style={styles.imagen} source={Lock} />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonSignUp} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.divGoogle}>
        <TouchableOpacity style={styles.button2}>
          <Image style={styles.googleImg} source={Google} />
          <Text style={styles.buttonText2}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parrafosForm}>
        <View style={styles.textLogin}>
        <Text>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.parrafosFormText}>Log In</Text>
        </TouchableOpacity>
        </View>
        <Text>
          Go back to 
          <Text style={styles.parrafosFormText} onPress={() => {
              navigation.navigate("Home");
            }}> Home</Text> 
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ViewRegister: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
    width: "100%",
    height: 480
  },
  fieldset: {
    display: "flex",
    alignItems: "flex-start",
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
    width: 18,
    height: 18,
    marginBottom: 10,
  },
  googleImg: {
    width: 30,
    height:30
  },
  buttonText2:{
    color: "gray",
    fontSize: 20
  },
  legend: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 4,
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
  buttonSignUp: {
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
    width: 355,
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

  textLogin:{
    display: 'flex',
    flexDirection: 'row'
  }
});