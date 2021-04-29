import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './app/navigation/TabNavigator';
import { Header } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return <SafeAreaProvider>
  <NavigationContainer>
      <Header>
      {/* <Ionicons name="notifications-circle-outline" size={24} color="black" /> */}
      </Header>
      <TabNavigator/>
    </NavigationContainer>
  </SafeAreaProvider>
    // Login space
    // return (
    //   <LoginScreen/>
    // )
  }

{/* <Header
    placement="left"
    // leftComponent={{ icon: 'menu', color: '#fff' }}
    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'note', color: '#ffff' }}
    /> */}
