import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

import TabNavigator from "./app/navigation/TabNavigator";
import { Ionicons } from "@expo/vector-icons";
import MyStack from "./Stack";
const Stack = createStackNavigator();
let authenticated = true
export default function App() {
  return (
    <NavigationContainer>
      {authenticated ? (
        <TabNavigator />
      ) : (
        <MyStack />)}
    </NavigationContainer>
  );
}