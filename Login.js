import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
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
                An app made for github using React Native 
                </Text>
            </View>
            <View style={styles.formContainer}>
            <LoginForm />
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#0a3d62'
    },
    logoContainer: {
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    logo: {
        width:130,
        height:130
    },
    title: {
        color:'#fff',
        marginTop:10,
        width:160,
        textAlign: 'center',
        opacity: 0.9
    }
}); 