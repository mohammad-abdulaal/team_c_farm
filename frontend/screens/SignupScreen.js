import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


export default class SignupScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registered : false
        }
        this.email = ''
        this.password = ''
        this.first_name = ''
        this.last_name = ''
    }
    handleSubmit = e => {
        e.preventDefault()
        const data = {
            email : this.email,
            password :this.password,
            first_name: this.first_name,
            last_name: this.last_name,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/unicorn.png')} />
                <TextInput style={styles.inputBox}
                    placeholder="first_name"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    placeholder="last_name"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    placeholder="email"
                    placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox}
                    placeholder="password"
                    placeholderTextColor="#ffffff" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.handleSubmit}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C122A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff'
    },
    image: {
        width: 40,
        height: 70
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
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
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 100,
        borderRadius: 25,
        marginVertical: 10,

    }


})

