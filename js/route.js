import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";

export const MainTab = createStackNavigator({
  main: {
    screen: HomeScreen,
    navigationOptions: {
      ...headerStyle,
      headerTitle: "Ohaneko",
      headerBackTitle: "戻る"
    }
  }
});

const headerStyle = {
  headerStyle: {
    backgroundColor: "deepskyblue",
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
};
