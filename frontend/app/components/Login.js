import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import LoginScreen from '../../screens/LoginScreen'


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: true
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
            //check authorization
            //if user==user && password==password return 
            //loggedin=true && user id
            //else return loggedin==false
            
            console.log("Login component")
        )
    }
}

