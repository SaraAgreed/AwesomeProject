import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native'
export default class Register extends Component{
    static navigationOptions = {
        header:null
    }
    constructor() {
        super()
        this.state={
            name:'',
            nameValidate:true,
            passord:'',
            passwordValidate:true
        }
        
    }
    
    validate(text,type) {
        alph=/^[a-zA-z]+$/
        num=/^[0-9]+$/
        if(type=='username')
        {
             if(alph.test(text))
             {
               this.setState({
                nameValidate:true,
               })
             }
             else{
                 this.setState({
                     nameValidate:false,
                 })
             }
        }
        else if(type=='password')
        {
             if(num.test(text))
             {
               this.setState({
                passwordValidate:true,
                
               })
             }
             else{
                 this.setState({
                     passwordValidate:false,
                 })
             }
        }
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
           
            <TextInput style={[styles.inputStyle,
            !this.state.nameValidate? styles.error:null]}
            onChangeText={(text) =>this.validate(text,'username')}
            placeholder="Username" 
            placeholderTextColor = 'rgba(255,255,255,0.7)'/>
            <TextInput style={[styles.inputStyle,
            !this.state.passwordValidate? styles.error:null]}
            onChangeText={(text) => this.validate(text,'password')}
            placeholder="Passord" 
            placeholderTextColor = 'rgba(255,255,255,0.7)' />
            <TouchableOpacity onPress={() => Alert.alert('you tapped a button')}>
                <Text style={styles.btnText} >
                S I G N U P
                </Text>
                </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("Login")}} >
                <Text style={styles.btnTextSignUp}>
                Already a member ? Sign In Now
                </Text>
                </TouchableOpacity>    
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#079992',
        flex:1,
       
        justifyContent:'center',
        paddingRight:20,
        paddingLeft:20
    },
    inputStyle: {
        fontFamily:'serif',
        height:40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginBottom:30,
        fontFamily:'serif',
        paddingLeft: 15
    },
    btnText: {
        backgroundColor:'#ECEEF1',
        paddingBottom:10,
        paddingTop:10,
        fontFamily:'serif',
        marginTop:25,
        color:'#26AE90',
        textAlign:'center',
        fontWeight:'bold'

    },
    btnTextSignUp: {
        fontFamily:'serif',
        color:'#fff',
        marginTop:70,
        textAlign:'center'
    },
    error: {
        borderWidth:3,
        borderColor:'red',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop:20,
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
        marginTop:10,
        width:100,
        textAlign: 'center',
        opacity: 0.9
    },
})