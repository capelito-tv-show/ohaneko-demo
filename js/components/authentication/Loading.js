import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
import { NavigationActions } from 'react-navigation'
import { config } from '../../assets/firebase'

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config)
    // onAuthStateChangedでuser stateを確認
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.navigation.navigate('Auth')
      } else {
        this.props.navigation.navigate('App')
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
