import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import LoginScreen from '../../screens/LoginScreen'
import CookieService from './CookieService';
import api from './api';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            remember: null,
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

    handleEmailChange = (e) => {
      this.setState({
        email: e.target.value,
      })
    }

    handlePasswordChange = (e) => {
      this.setState({
        password: e.target.value,
      })
    }

    handleRememberChange = (e) => {
      this.setState({
        remember: e.target.value,
      })
    }

    handleLogin () {
      const login = {
          email: email,
          password: password,
          remember_token: remember
      }

      api.checkLogin(login, {headers:{'Accept': "application/json", 'content-type': "application/json"}})
          .then(response => {
              const options = {Path: "/",Expires: response.data.expires, Secure: true};
              CookieService.set('access_token', response.data.access, options);

              history.push('/')
              window.location.reload();
          })
          .catch(error => {
              console.log(error.response.data.errors);
              if(email=='' || password==''){
              setErrors(error.response.data.errors)
              }else{
                  alert('incorrect username or password');
              }
          })
  }
}