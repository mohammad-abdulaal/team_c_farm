import React from 'react'
import { StyleSheet, View, } from 'react-native'
import  { Unicorn } from './Unicorn/index'

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
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    }
})

export default Home
