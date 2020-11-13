import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity, Alert } from 'react-native';
import Header from '../components/header.js'
import {styles} from "../components/stylesheet.js"
import firebase  from 'firebase'
export default class Loginscreen extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            pwd:""
        }
    }
    Login = async()=>{
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email,this.state.pwd)
    .then(()=>{
Alert.alert("Logged in successfully")
this.props.navigation.navigate("write");
})
.catch((error)=>{

        Alert.alert("minnu",error.code)
        //console.log(error.code)
        switch(error.code){
          case 'auth/user-not-found':
            Alert.alert("User doesn't exists")
            break;

          case 'auth/invalid-email':
            Alert.alert("Incorrect email/password")
            break;
          default:Alert.alert("error")
            break;
        }

})
    }
  render(){
  return (
      <View style={styles.container}>
          <Header></Header>
          <View style={styles.authorView}> 
        <TextInput 
        placeholder="Email"
        onChangeText={(text)=>{
          this.setState({email:text})
          }
        }></TextInput>
        </View>
        <View style={styles.authorView}> 
        <TextInput 
        placeholder="Password"
        onChangeText={(text)=>{
          this.setState({pwd:text})
          }
        }
        secureTextEntry={true}></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonView} onPress={this.Login}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
  );
  }
}
