import React from 'react'
import { StyleSheet, View, } from 'react-native'
import  { MasterUnicorn } from './Unicorns/index'

const Home = () => {
    return (
        <View style={styles.appContainer}>
         <MasterUnicorn />
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