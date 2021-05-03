import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

var signup = require('../assets/signup.png');
const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={signup}
                style={styles.image}>
            </Image>
            <Text
                style={{ fontSize: 40, color: "#222DB6" }}>Signup</Text>
            <TextInput style={styles.inputBox}
                placeholder="First Name"
                placeholderTextColor="#ffffff" />
            <TextInput style={styles.inputBox}
                placeholder="Last Name"
                placeholderTextColor="#ffffff" />
            <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="#ffffff" />
            <TextInput style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff" />
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.buttonText}
                >Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
//}
export default SignupScreen;



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
        justifyContent: "center",
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
        // opacity: ''
    },


});
