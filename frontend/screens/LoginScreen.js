import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

var login = require('../assets/login.png');
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }
    componentDidMount() {
        console.log("I am in component did Mount")
    }

    componentWillUnmount() {
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password,
        }
    }
    render() {
        return (
            <View>

                <View style={styles.container}>
                    <Image
                        source={login}
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
                    <TouchableOpacity style={styles.button}  onPress={this.handleSubmit}
                    /*onPress={ }*/>
                        <Text
                            style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text
                        style={{ fontSize: "18px", color: "black" }}>Don't have an account?</Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => <SignupScreen />}>
                        Signup
                </Text>
                </View>
            </View>

        )
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 40,
        flex: 1.5,
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
        padding: 20
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
        padding: 20

    },
    image: {
        height: 100,
        width: 100,
        opacity: 100
    },


});

