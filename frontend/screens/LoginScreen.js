import React, { useState, createRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import axios from "axios";
//import TabNavigator from '../app/navigation/TabNavigator'
import CookieService from "../app/components/CookieService";
// import api from '../app/components/api';
var login = require("../assets/login.png");

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errortext, setErrortext] = useState("");
    const passwordInputRef = createRef();
    const [remember, setRemember] = useState(0);

    const handleRemember = (event) => {
        if (event.target.checked) {
            setRemember(1);
        } else {
            setRemember(0);
        }
    };

    const handleSubmitPress = () => {
        setErrortext("");
        if (!email) {
            alert("Enter a valid email");
            return;
        }
        if (!password) {
            alert("Fill password");
            return;
        }

        let data = {
            email: email,
            password: password,
            remember_token: remember,
        };
        axios
            .post("http://127.0.0.1:8000/api/login", data)
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    // localStorage.setItem('user_id', data.email)
                    // localStorage.setItem('user_id', data)
                    navigation.replace("TabNavigator");
                    console.log("working bestie");
                    CookieService.set(
                        "access_token",
                        response.data.access,
                        // options
                    );
                    console.log("Bestie the token is:\n", response.data.access)
                } else {
                    alert("invalid username and password");
                }
            })
            .catch((error) => {
                let errortext = error;
                console.log(error);
            });

        handleRemember;
    };

    return (
        <View style={styles.container}>
            <Image
                source={login}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.text}>Log in</Text>
            <TextInput
                style={styles.inputBox}
                onChangeText={(email) => setEmail(email)}
                placeholder="Enter Email"
                placeholderTextColor="#ffffff"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.inputBox}
                onChangeText={(password) => setPassword(password)}
                placeholder="Enter Password"
                placeholderTextColor="#ffffff"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
            />
            {errortext != "" ? (
                <Text style={styles.error}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmitPress}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, color: "black" }}>
                Don't have an account?
            </Text>
            <TouchableOpacity
                style={styles.link}
                onPress={() => navigation.navigate("SignupScreen")}
            >
                <Text style={{ color: "blue" }}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    error: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
    text: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#222DB6",
        marginBottom: 40,
    },
    link: {
        backgroundColor: "#ffffff",
        textAlign: "center",
        color: "green",
    },
    inputBox: {
        width: "80%",
        backgroundColor: "#8BB6EF",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10,
        height: 50,
        marginBottom: 20,
        //justifyContent: "center",
        //alignItems: "center"
        //padding: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#222DB6",
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
        opacity: 100,
    },
});
