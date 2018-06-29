import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Ohaneko</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  headerText: {}
})

export default Header
