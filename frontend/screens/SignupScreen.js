import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

var signup = require('../assets/signup.png');
import axios from 'axios';
import { useState, createRef } from 'react';
import LoginScreen from './LoginScreen';



const SignupScreen = ({ navigation }, props) => {
    const [first_name, setFirstName] = useState('');
    const [sure_name, setSureName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [c_password, setUserCPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
    ] = useState(false);

    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = () => {
        setErrortext('');
        if (!first_name) {
            alert('Please fill Name');
            return;
        }
        if (!sure_name) {
            alert('Please fill Name');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }

        if (!password) {
            alert('Please fill Password');
            return;
        }
        if (!c_password) {
            alert('Please fill Password');
            return;
        }
        let data = {
            first_name: first_name,
            sure_name: sure_name,
            email: email,
            password: password,
            c_password: c_password,
        };
        axios.post('http://127.0.0.1:8000/api/register', data)
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    setIsRegistraionSuccess(true);
                    navigation.replace('LoginScreen');
                    console.log(
                        'Registration Successful. Please Login to proceed'
                    );
                } else {
                    console.log('registration failed')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    };
    if (isRegistraionSuccess) {
        return (

            <LoginScreen />
        );
    }
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
                placeholderTextColor="#ffffff"
                onChangeText={(first_name) => setFirstName(first_name)}
                returnKeyType="next"
                onSubmitEditing={() =>
                    emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false} />
            <TextInput style={styles.inputBox}
                placeholder="Last Name"
                placeholderTextColor="#ffffff"
                onChangeText={(sure_name) => setSureName(sure_name)}
                returnKeyType="next"
                onSubmitEditing={() =>
                    emailInputRef.current && emailInputRef.current.focus()}
            />
            <TextInput style={styles.inputBox}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
                placeholderTextColor="#ffffff" />
            <TextInput style={styles.inputBox}
                placeholder="Password"
                onChangeText={(password) =>
                    setUserPassword(password)
                }
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                    ageInputRef.current &&
                    ageInputRef.current.focus()
                }
                blurOnSubmit={false}
                secureTextEntry={true}
                placeholderTextColor="#ffffff" />
            <TextInput style={styles.inputBox}
                placeholder="Re-Enter Password"
                onChangeText={(c_password) =>
                    setUserCPassword(c_password)
                }
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                    ageInputRef.current &&
                    ageInputRef.current.focus()
                }
                blurOnSubmit={false}
                secureTextEntry={true}
                placeholderTextColor="#ffffff" />
            {errortext != '' ? (
                <Text style={styles.error}>
                    {errortext}
                </Text>
            ) : null}
            <TouchableOpacity style={styles.button}
                onPress={handleSubmitButton}>
                <Text style={styles.buttonText}
                >Submit</Text>
            </TouchableOpacity>
        </View>


    );
};

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
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
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
