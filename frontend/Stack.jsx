import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TabNavigator from './app/navigation/TabNavigator';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />


        </Stack.Navigator>
    );
}


export default MyStack;