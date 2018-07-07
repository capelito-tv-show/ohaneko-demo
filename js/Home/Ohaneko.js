import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'

const { SCREEN_WIDTH } = Dimensions.get('window')

class Ohaneko extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.to}>
          <Image
            style={styles.img}
            source={require('../assets/images/ohaneko.png')}
          />
          <Text>友達をおこしてあげる</Text>
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

export default Ohaneko
