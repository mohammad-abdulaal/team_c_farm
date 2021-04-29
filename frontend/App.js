<<<<<<< HEAD

import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './app/navigation/TabNavigator';
import { Header } from 'react-native-elements';
import LoginScreen from './screens/LoginScreen';
//import Splash from './screens/SplashScreen';
=======
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import { Header } from "react-native-elements";
>>>>>>> 28b6252e61612d51420c2508670f6ee23a386b10
// import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
<<<<<<< HEAD
    //<Splash />
    <LoginScreen />
  )
=======
    <SafeAreaProvider>
      <NavigationContainer>
        <Header>
          {/* <Ionicons name="notifications-circle-outline" size={24} color="black" /> */}
        </Header>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
  // Login space
  // return (
  //   <LoginScreen/>
  // )
>>>>>>> 28b6252e61612d51420c2508670f6ee23a386b10
}

{
  /* <Header
    placement="left"
    // leftComponent={{ icon: 'menu', color: '#fff' }}
    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'note', color: '#ffff' }}
    /> */
}
