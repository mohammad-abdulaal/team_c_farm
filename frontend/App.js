import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigator from "./app/navigation/TabNavigator";
import MyStack from "./Stack";
import SplashScreen from "./screens/SplashScreen";
const Stack = createStackNavigator();
var storage = localStorage.getItem('user_id')

export default class App extends React.Component {

  componentWillMount() {
    this.state = {
      view: <SplashScreen />
    };


    setTimeout(() => {
      this.setState({
        view: <NavigationContainer>
          {storage ? (
            <TabNavigator />
          ) : (
            <MyStack />)}
        </NavigationContainer>
      })
    }, 4000) //TIME OF WAITING


  }

  render() {
    return (
      this.state.view
    )
  }
}