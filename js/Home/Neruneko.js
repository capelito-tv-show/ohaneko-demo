import React from 'react'
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Container, Text, Content, DatePicker } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

class Neruneko extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    modalVisible: false,
    isDateTimePickerVisible: false
  }

  openModal() {
    this.setState({ modalVisible: true })
  }

  closeModal() {
    this.setState({ modalVisible: false })
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    console.log('A date has been picked: ', date)
    this._hideDateTimePicker()
  }

  render() {
    return (
      <Container style={styles.container}>
        <TouchableOpacity style={styles.to} onPress={this._showDateTimePicker}>
          <Image style={styles.img} source={require('../assets/images/neruneko.png')} />
          <Button onPress={() => this.openModal()} backgroundColor="#414361" title="友達に起こしてもらう" />
        </TouchableOpacity>
        <Modal visible={this.state.modalVisible} animationType={'fade'} onRequestClose={() => this.closeModal()}>
          <Container style={styles.modalContent}>
            <Content>
              <Card title="modalです" />
              <Button onPress={() => this.closeModal()} title="閉じる" />
            </Content>
          </Container>
        </Modal>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </Container>
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
  modalContent: {
    justifyContent: 'center'
  },
  to: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    alignItems: 'stretch'
  }
})

export default Neruneko
