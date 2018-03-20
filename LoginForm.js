import React, { Component } from 'react';
import {
    StyleSheet, 
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StatusBar
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return(
            <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <TextInput
            placeholder = "Username or Email"
            placeholderTextColor = 'rgba(255,255,255,0.7)'
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            />
             <TextInput 
            placeholder="password"
            placeholderTextColor = 'rgba(255,255,255,0.7)'
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style = {styles.buttonContainer}>
                <Text style={styles.buttonText}>
                     LOGIN
                </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
padding:20
},
input: {
    height: 40,
    backgroundColor:'rgba(255,255,255,0.1)',
    marginBottom: 10,
    color:'#fff',
    paddingHorizontal:10 
},
buttonContainer: {
backgroundColor:'#3c6382',
paddingVertical: 15
},
buttonText: {
textAlign: 'center',
color: '#ffffff',
fontWeight: '700'
}
});