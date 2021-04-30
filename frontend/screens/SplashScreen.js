import React, { Component } from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';


var bg = require('../assets/background.jpg');
var logo = require('../assets/logo.png');

export default class Splash extends Component {

    render() {
        return (
            /*<ImageBackground
                source={bg}
                style={styles.background}>*/
            <View
                style={styles.view}>
                <Image
                    source={logo}
                    style={styles.logo}>
                </Image>
                <Text
                    style={styles.text}
                >Unicorn Farm</Text>
            </View>
            /*</ImageBackground>*/
        );
    }
}



const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',

    },
    text: {

        fontSize: 100,
        color: "blue",
    },
    logo: {
        height: 300,
        width: 300,
        opacity: 100
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

