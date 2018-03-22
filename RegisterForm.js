import React, { Component } from 'react';

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

export default class RegisterForm extends Component{
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
           <View> 
                <TextInput style={[styles.inputStyle,
                !this.state.nameValidate? styles.error:null]}
                onChangeText={(text) =>this.validate(text,'username')}
                placeholder="Username" 
                placeholderTextColor = 'rgba(255,255,255,0.7)'/>
            
                <TextInput style={[styles.inputStyle,
                !this.state.passwordValidate? styles.error:null]}
                secureTextEntry
                onChangeText={(text) => this.validate(text,'password')}
                placeholder="Passord" 
                placeholderTextColor = 'rgba(255,255,255,0.7)' />
            
                <TouchableOpacity 
                style={styles.btnContainer}
                onPress={() => Alert.alert('you tapped a button')}>
                    <Text style={styles.btnText} >
                        S I G N U P
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                style={styles.btnContainer}
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
    inputStyle: {
        height: 30,
        backgroundColor:'rgba(255,255,255,0.1)',
        marginBottom: 10,
        color:'#fff',
        paddingHorizontal:10 
    },
    btnText: {
        backgroundColor:'#ECEEF1',
        paddingBottom:10,
        paddingTop:10,
        fontFamily:'serif',
        color:'#26AE90',
        textAlign:'center',
        fontWeight:'bold'
    },
    btnTextSignUp: {
        fontFamily:'serif',
        color:'#fff',
        textAlign:'center'
    },
    error: {
        borderWidth:3,
        borderColor:'red',

    },
    btnContainer: {
        backgroundColor:'#079992',
        paddingVertical: 5
    }
})