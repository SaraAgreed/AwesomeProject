import React, { Component } from 'react';
import {
    Plateform,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Alert,
} from 'react-native';

export default class Main extends Component{
    
  static navigationOptions = {
      header:null
  }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('./src/BackgroundImage/logo.png')}
            />
            <Text style={styles.title}>
                B R A N D  
                </Text>
            </View>
           
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Login") }
            style = {styles.buttonContainer}>
                <Text style={styles.buttonText}>
                      LOGIN 
                </Text>
            </TouchableOpacity>  
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Register")}
            style = {styles.buttonContainer}>
                <Text style={styles.buttonText}>
                     SIGN UP
                </Text>
            </TouchableOpacity> 
           
            </View>
        );
    } 
}
 
const styles= StyleSheet.create({
container: {
    backgroundColor:'#1e3799',
alignItems: 'center',
flex: 1,
justifyContent: 'center'
},
logoContainer: {
    alignItems: 'center',
    marginTop:20
},
logo: {
    width:150,
    height:150
},
title:{
    fontWeight:'bold',
    fontFamily:'serif',
    color:'#fff',
    marginTop:10,
    width:100,
    textAlign: 'center',
    opacity: 0.9
},
buttonContainer: { 
    height: 20,
    marginTop:20,
    backgroundColor:'rgba(255,255,255,0.2)',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20,
    paddingHorizontal:120,
  
    },
    buttonText: {
    fontFamily:'serif',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
    }
}); 