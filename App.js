import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Header from './js/components/Header'

import HomeScreen from './js/screens/HomeScreen'
import ActivityScreen from './js/screens/ActivityScreen'
import SettingScreen from './js/screens/SettingScreen'

export default class App extends React.Component {
  render() {
    const Home = createMaterialTopTabNavigator({
      home: {
        screen: HomeScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: 'Ohaneko'
        }
      },
      huga: {
        screen: ActivityScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: 'Ohaneko'
        }
      }
    })

    const HomeStack = createStackNavigator({
      home: {
        screen: Home,
        navigationOptions: {
          ...headerStyle,
          headerTitle: 'Ohaneko'
        }
      }
    })

    const ActivityStack = createStackNavigator({
      activity: {
        screen: ActivityScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: 'Ohaneko'
        }
      }
    })

    const SettingStack = createStackNavigator({
      activity: {
        screen: SettingScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: 'Ohaneko'
        }
      }
    })

    const MainScreen = createBottomTabNavigator(
      {
        homeStack: {
          screen: HomeStack
        },
        activityStack: {
          screen: ActivityStack
        },
        settingStack: {
          screen: SettingStack
        }
      },
      {
        initialRouteName: 'homeStack'
      }
    )

    const NavigatorTab = createBottomTabNavigator(
      { main: { screen: MainScreen } },
      {
        navigationOptions: { tabBarVisible: false }
      }
    )

    return (
      <View style={styles.wrapper}>
        <NavigatorTab />
      </View>
    )
  }
}

const headerStyle = {
  headerStyle: {
    backgroundColor: 'yellow',
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
  headerTitleStyle: { color: 'black' },
  headerTintColor: 'black'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
