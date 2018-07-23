import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Container, Content, Form, Input, Item, Button, Label } from 'native-base'
import * as firebase from 'firebase'

export default class signUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('please enter atleast 6 characters')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.errorMessage && <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>}
        <Text style={{ padding: 10, textAlign: 'center', fontSize: 20 }}>ねことうろく</Text>
        <Form>
          <Item floatingLabel>
            <Label>Emailアドレス</Label>
            <Input autoCollect={true} autoCapitalize="none" onChangeText={email => this.setState({ email })} />
          </Item>
          <Item floatingLabel>
            <Label>パスワード</Label>
            <Input
              secureTextEntry={true}
              autoCollect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={styles.button}
            title="登録"
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
            full
            rounded
            success
          >
            <Text style={styles.bt}>登録</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  button: {
    margin: 10
  },
  bt: {
    color: 'white'
  }
})
