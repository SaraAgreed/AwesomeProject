import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
    
} from 'react-native';


export default class Splash extends Component{
    static navigationOptions = {
        header:null
    }
    componentWillMount()
    {
        setTimeout(() => {
            this.props.navigation.navigate('Main');
        }, 8000)
    }
    render() {
        return(
            <View 
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
                <Text style={styles.subtitle}>
                Powered by React Native 
                </Text>
                </View>
        );
    } 
}
 
const styles=StyleSheet.create({
    container: {
        backgroundColor:'#5f27cd',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoContainer: {
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
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
        width:160,
        textAlign: 'center',
        opacity: 0.9
    },
    subtitle: {
        fontWeight:'200',
        fontFamily:'serif',
        color:'white',
        paddingBottom:10
    },
   
});