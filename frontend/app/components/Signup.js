import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registered: false
        }
        this.email = ''
        this.password = ''
        this.first_name = ''
        this.last_name = ''
    }
    handleSubmit = e => {
        e.preventDefault()
        const data = {
            email: this.email,
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
        }
    }
    render() {
        return (
            //check if user in database
            //add to database
            //return success message
            console.log("Signup component return")
        )
    }
}
