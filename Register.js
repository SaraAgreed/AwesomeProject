import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import RegisterForm from './RegisterForm.js';

export default class Register extends Component{
    static navigationOptions = {
        header:null
    }
    render() {
        return(
        <KeyboardAvoidingView
            behavior='padding'
             style={styles.container}>
           
            <View style={styles.logoContainer}>
                
                <Image
                style={styles.logo}
                source={require('./src/BackgroundImage/logo.png')}
                />
            
                <Text style={styles.title}>
                B R A N D  
                </Text>

            </View>

           <View>
                <RegisterForm />
            </View>

            </KeyboardAvoidingView>
            
        ); 
    }
} 
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#079992',
        flex:1    
    },
    logoContainer: {
        alignItems: 'center',
        marginTop:10,
        marginBottom:10
    },
    logo: {
        width:150,
        height:150
    },
    title:{
        fontWeight:'bold',
        fontFamily:'serif',
        color:'#fff',
        width:100,
        textAlign: 'center',
        opacity: 0.9
    }
})