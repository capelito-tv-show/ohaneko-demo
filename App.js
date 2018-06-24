import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "./js/screens/HomeScreen";

export default class App extends React.Component {
  render() {
    const MainTab = createStackNavigator({
      main: {
        screen: HomeScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: "Ohaneko",
          headerBackTitle: "戻る"
        }
      }
    });

    return (
      <View style={styles.wrapper}>
        <MainTab />
      </View>
    );
  }
}

const headerStyle = {
  headerStyle: {
    backgroundColor: "yellow",
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  headerTitleStyle: { color: "black" },
  headerTintColor: "black"
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
