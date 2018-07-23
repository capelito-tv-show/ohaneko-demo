import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image
} from 'react-native'
import Modal from 'react-native-modal'
import { Avatar, Card, Button, List, ListItem } from 'react-native-elements'
import Overlay from 'react-native-modal-overlay'
import { user } from '../assets/data/User'

class Ohaneko extends React.Component {
  state = {
    modalVisible: false,
    userVisible: false
  }
  openModal() {
    this.setState({ modalVisible: true })
  }

  closeModal() {
    this.setState({ modalVisible: false })
  }

  showOverlay() {
    this.setState({ userVisible: true })
  }

  hideOverlay() {
    this.setState({ userVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.to}>
          <Image
            style={styles.img}
            source={require('../assets/images/ohaneko.png')}
          />
          <Button
            backgroundColor="#ff5622"
            onPress={() => this.openModal()}
            title="友達を起こしてあげる"
          />
        </TouchableOpacity>
        <Modal
          isVisible={this.state.modalVisible}
          animationIn={'zoomInDown'}
          animationInTiming={500}
          animationOutTiming={500}
          animationOut={'zoomOutUp'}
          onRequestClose={() => this.closeModal()}
          style={styles.modal}
        >
          <Card
            title="とも猫を探す"
            containerStyle={styles.modalCard}
            wrapperStyle={styles.modalWrapper}
          >
            {user.map((u, i) => {
              return (
                <List key={i} style={styles.user}>
                  <ListItem
                    key={i}
                    title={u.name}
                    subtitle={u.subtitle}
                    avatar={{ uri: u.avatar_url }}
                    containerStyle={{ backgroundColor: '#fff' }}
                    hideChevron={true}
                    onPress={() => this.showOverlay()}
                  />
                  <Overlay
                    visible={this.state.userVisible}
                    animationType="zoomIn"
                    containerStyle={{
                      backgroundColor: 'rgba(37, 8, 10, 0.78)'
                    }}
                    childrenWrapperStyle={{ backgroundColor: '#eee' }}
                    animationDuration={500}
                  >
                    <Text>{u.name}</Text>
                    <Button
                      onPress={() => this.hideOverlay()}
                      style={styles.modalButton}
                    >
                      <Text>閉じる</Text>
                    </Button>
                  </Overlay>
                </List>
              )
            })}
            <Button
              onPress={() => this.closeModal()}
              title="閉じる"
              style={{ margin: 10 }}
            />
          </Card>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalButton: {
    padding: 5,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    flex: 1,
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: '#fff'
  },
  modalCard: {
    shadowColor: 'white'
  },
  img: {
    alignItems: 'stretch'
  }
})

export default Ohaneko
