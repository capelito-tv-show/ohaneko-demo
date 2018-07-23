import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as firebase from 'firebase'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  handleLogin = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log(user)
        })
    } catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionAsync('253401842136802', {
      permission: ['public_profile']
    })

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error)
        })
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Emailアドレス</Label>
            <Input autoCollect={false} autoCapitalize="none" onChangeText={email => this.setState({ email })} />
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
            onPress={() => this.handleLogin(this.state.email, this.state.password)}
            full
            rounded
            success
          >
            <Text style={styles.bt}>Login</Text>
          </Button>
          <Button style={styles.button} onPress={() => this.loginWithFacebook()} full rounded primary>
            <Text style={styles.bt}>Login With Facebook</Text>
          </Button>
          <Button
            full
            rounded
            primary
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.button}
          >
            <Text style={styles.bt}>会員登録はこちら</Text>
          </Button>
        </Form>

        <Button title="Login" onPress={this.handleLogin} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  button: {
    margin: 10
  },
  bt: {
    color: '#fff'
  }
})
