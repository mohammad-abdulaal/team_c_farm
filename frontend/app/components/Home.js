import React from 'react'
import { StyleSheet, View, } from 'react-native'
import  { Unicorn } from './Unicorn/index'
import Constants from 'expo-constants';


const Home = () => {
    return (
        <View style={styles.appContainer}>
         <Unicorn />
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        paddingTop: Constants.statusBarHeight,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    }
})

export default Home
