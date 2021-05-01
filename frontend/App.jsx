import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

import TabNavigator from "./app/navigation/TabNavigator";
import Splash from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Test from "./screens/Test";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.state.authenticated ? (
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
