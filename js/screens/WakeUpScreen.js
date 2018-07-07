import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import NewsHolder from '../components/NewsHolder'

class WakeUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonBox}>
          <Text>Setting Screen</Text>
        </View>
        <View style={styles.newsBox}>
          <NewsHolder />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newsBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default WakeUpScreen
