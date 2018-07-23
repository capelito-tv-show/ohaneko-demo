import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import HomeScreen from './js/screens/HomeScreen'
import Ohaneko from './js/Home/Ohaneko'
import Neruneko from './js/Home/Neruneko'
import ActivityScreen from './js/screens/ActivityScreen'
import SettingScreen from './js/screens/SettingScreen'
import Loading from './js/components/authentication/Loading'
import Login from './js/components/authentication/Login'
import Main from './js/components/authentication/Main'
import SignUp from './js/components/authentication/SignUp'

export default class Route extends React.Component {
  render() {
    const Home = createMaterialTopTabNavigator({
      home: {
        screen: Ohaneko,
        navigationOptions: {
          title: 'Ohaneko'
        }
      },
      huga: {
        screen: Neruneko,
        navigationOptions: {
          title: 'Neruneko'
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
          headerTitle: '最近のNeko'
        }
      }
    })

    const SettingStack = createStackNavigator({
      activity: {
        screen: SettingScreen,
        navigationOptions: {
          ...headerStyle,
          headerTitle: '設定'
        }
      }
    })

    const MainScreen = createBottomTabNavigator(
      {
        homeStack: {
          screen: HomeStack,
          navigationOptions: {
            title: 'OHN'
          }
        },
        activityStack: {
          screen: ActivityStack,
          navigationOptions: {
            title: 'アクティビティ'
          }
        },
        settingStack: {
          screen: SettingStack,
          navigationOptions: {
            title: '設定'
          }
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

    const AuthenticationFlow = createSwitchNavigator(
      {
        App: NavigatorTab,
        Auth: Login,
        SignUp: SignUp,
        AuthLoading: Loading
      },
      {
        initialRouteName: 'AuthLoading'
      }
    )

    return (
      <View style={styles.wrapper}>
        <AuthenticationFlow />
      </View>
    )
  }
}

const headerStyle = {
  headerStyle: {
    backgroundColor: 'white',
    height: 30,
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
