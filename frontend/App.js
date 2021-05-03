import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./app/navigation/TabNavigator";
import MyStack from "./Stack";
import SplashScreen from "./screens/SplashScreen";
const Stack = createStackNavigator();
let authenticated = false;


export default class App extends React.Component {

  componentWillMount() {
    this.state = {
      view: <SplashScreen />
    };


    setTimeout(() => {
      this.setState({
        view: <NavigationContainer>
          {authenticated ? (
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