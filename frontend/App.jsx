import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from 'react-native-elements';

import TabNavigator from './app/navigation/TabNavigator';
import Splash from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Test from './screens/Test'; import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()


export default function App() {
  return (
    //<Splash />
    <AppStackNavigator/>
    //<LoginScreen />
    //<SignupScreen />

    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Header>
    //       {<Ionicons name="notifications-circle-outline" size={24} color="black" />}
    //     </Header>
    //     <TabNavigator />
    //   </NavigationContainer>
    // </SafeAreaProvider>

  );
  //Login space
  //return (
  //<LoginScreen/>
  //)
}
// {
//   <Header
//     placement="left"
//     // leftComponent={{ icon: 'menu', color: '#fff' }}
//     // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//     rightComponent={{ icon: 'note', color: '#ffff' }}
//   />
// }
