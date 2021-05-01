import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Profile from "../components/Profile";
import TabBar from "../components/TabBar";
import Add from "../components/Add";
import ProfileNavigator from "./ProfileNavigating";
import Notifications from "../components/Notifications";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ icon: "home" }} // for giving every component an icon
            />
            <Tab.Screen
                name="Add"
                component={Add}
                initialParams={{ icon: "plus" }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                initialParams={{ icon: "user" }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                initialParams={{ icon: "notification" }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
