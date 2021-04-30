import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


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
            <View style={styles.container}>
                <Text
                    style={{ fontSize: "100", color: "blue" }}>Log in</Text>
                <TextInput style={styles.inputBox}
                    placeholder="email"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    placeholder="password"
                    placeholderTextColor="#ffffff" />
                <TouchableOpacity style={styles.button}
                    /*onPress={ }*/>
                    <Text
                        style={styles.buttonText}
                        onPress={this.handleSubmit}>Submit</Text>
                </TouchableOpacity>
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
        color: '#ffffff'
    },
    inputBox: {
        width: "80%",
        backgroundColor: '#8BB6EF',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#222DB6',
        width: 100,
        borderRadius: 25,
        marginVertical: 10,

    },


});

