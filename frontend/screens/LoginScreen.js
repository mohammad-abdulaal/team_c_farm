import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import TabNavigator from '../app/navigation/TabNavigator'
import Login from '../app/components/Login'
var login = require('../assets/login.png');


//let loggedIn = Login.loggedIn;
//let loggedIn=true;
let autherized = true;

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={login}
                resizeMode="contain"
                style={styles.image}>
            </Image>
            <Text
                style={styles.text}>Log in
                    </Text>
            <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="#ffffff"
            />
            <TextInput style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff" />

            <TouchableOpacity style={styles.button}
                onPress={autherized ? (() => navigation.navigate(TabNavigator)) :
                    (() => alert("Enter Valid username and Password"))}>
                <Text style={styles.buttonText}
                >Submit</Text>
            </TouchableOpacity>
            <Text
                style={{ fontSize: 18, color: "black" }}>
                Don't have an account?</Text>
            <TouchableOpacity style={styles.link}
                onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={{ color: 'blue' }}
                >Signup</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#222DB6',
        marginBottom: 40
    },
    link: {
        backgroundColor: '#ffffff',
        textAlign: 'center',
        color: "green"

    },
    inputBox: {
        width: "80%",
        backgroundColor: '#8BB6EF',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        height: 50,
        marginBottom: 20,
        //justifyContent: "center",
        //alignItems: "center"
        //padding: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#222DB6',
        width: 100,
        borderRadius: 25,
        marginVertical: 10,
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        //padding: 20

    },
    image: {
        height: 100,
        width: 100,
        opacity: 100
    },


});


