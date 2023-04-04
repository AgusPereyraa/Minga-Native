import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Google from "../../Images/Google.png"
import Mail from "../../Images/Mail.png"
import Lock from "../../Images/Lock.png"
import Register from '../Register/Register'

export default function LoginForm() {
    const navigation = useNavigation();
    const [mail, setMail] = useState('');         
    const [password, setPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false)

    function handleSign(){
      setShowRegister(true)
    }

    async function handleSubmit() {
        let data = {
            mail: mail,
            password: password
        }
        console.log(data)
        let url = 'https://back-minga.onrender.com/api/auth/signin'
        try {
            const res = await axios.post(url, data)

            const token = res.data.token
            console.log(token)
            await AsyncStorage.setItem('token', JSON.stringify(token))

            Alert.alert('¡Online User!', 'Welcome', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

            setTimeout(() => {
              navigation.navigate('Mangas');
          }, 1000);
          setMail('')
          setPassword('')

        } catch (error) {
            Alert.alert('Ooops, something went wrong!', 'Wrong Credentials', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

  return (
    showRegister?<Register /> : 
    <View style={styles.containerLogIn}>
      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} value={mail} onChangeText={(inputText => setMail(inputText))} />
          <Image style={styles.imagenInput} source={Mail}/>
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <View style={styles.legendCont}>
          <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={(inputText => setPassword(inputText))} />
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
        <View style={styles.textSignUp}>
        <Text style={styles.parrafosFormText}>
          You don't have an account yet?
        </Text>
        <TouchableOpacity onPress={handleSign}>
          <Text style={styles.parrafosFormText2}> Sign up</Text>
        </TouchableOpacity>
        </View>
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
    gap: 20,
    marginTop: 40,
    width: "100%",
    height: 380
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
    color: "gray",
    fontSize: 20,
    fontWeight: 'bold'
  },
  legend: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 1,
    fontWeight: 600,
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
    fontSize: 20,
    fontWeight: 'bold'
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
    color: "grey",
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
    alignItems: "center",
    marginBottom: 50,
  },

  parrafosFormText:{
    fontWeight: '400',
    fontSize: 18
  },

  parrafosFormText2:{
    color: "#ff8c00",
    fontWeight: 'bold',
    fontSize: 20,
  },

  textSignUp:{
    display: 'flex',
    flexDirection: 'row'
  }
});