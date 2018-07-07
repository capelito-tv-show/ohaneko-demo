import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class Neruneko extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.to}>
          <Image
            style={styles.img}
            source={require('../assets/images/neruneko.png')}
          />
          <Text>友達におこしてもらう</Text>
        </TouchableOpacity>
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
  to: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    alignItems: 'stretch'
  },
  newsBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Neruneko
