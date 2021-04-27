
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './app/navigation/TabNavigator';
import { Header } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';
export default function App() {
  return <NavigationContainer>
    <Header>
    {/* <Ionicons name="notifications-circle-outline" size={24} color="black" /> */}
    </Header>
    <TabNavigator/>
  </NavigationContainer>
}
{/* <Header
    placement="left"
    // leftComponent={{ icon: 'menu', color: '#fff' }}
    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'note', color: '#ffff' }}
    /> */}
