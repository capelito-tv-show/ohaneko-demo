import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

class SettingScreen extends React.Component {
  render() {
    return (
      <View>
        <Card title="設定" image={require('../assets/images/neko5.png')} />
        <ListItem title="アカウント情報" containerStyle={styles.listItem} />
        <ListItem title="猫の編集" containerStyle={styles.listItem} />
        <ListItem title="SNS設定" containerStyle={styles.listItem} />
        <ListItem title="ヘルプ" containerStyle={styles.listItem} />

        <View style={styles.newsBox} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SettingScreen
