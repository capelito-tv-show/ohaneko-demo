import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from 'native-base'

class AuthenticationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log(user)
      }
    })
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

  loginUser = (email, password) => {
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
    const { type, token } = await Expo.Facebook.logInWithReadPermissionAsync(
      '253401842136802',
      { permission: ['public_profile'] }
    )

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
            <Label>Emaii</Label>
            <Input
              autoCollect={false}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCollect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button
            style={{ marginTop: 10 }}
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
            full
            rounded
            success
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
            full
            rounded
            primary
          >
            <Text style={{ color: 'white' }}>SignUp</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            onPress={() => this.loginWithFacebook()}
            full
            rounded
            primary
          >
            <Text style={{ color: 'white' }}>Login With Facebook</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
