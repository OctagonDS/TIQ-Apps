import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import { ArrowLeft } from '../../atoms/arrowLeft'
import { LinearGradient } from 'expo-linear-gradient'
import mainContext from '../../../store/context/context'

const image = require('../../../assets/img/black-geo.png')

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={['#FF741F', '#E86312']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 5, justifyContent: 'center' }}
  >
    <Text style={styles.submitTextLog}>{name}</Text>
  </LinearGradient>
)

export const SignIn = ({ navigation: { goBack }, navigation }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const { userProfile, loggingIn, doLogin, error } = useContext(mainContext)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>Anmelden</Text>
          {error && (
            <View style={styles.error}>
              <Text style={styles.errortext}>{error}</Text>
            </View>
          )}
          <View style={{ marginTop: '8%' }}>
            <View style={styles.labelmail}>
              <Text style={{ color: '#FF741F' }}>
                Username or Email <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(email) => setEmail(email)}
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              disabled={loggingIn}
            />
          </View>
          <View style={{ marginTop: '8%' }}>
            <View style={styles.label}>
              <Text style={{ color: '#FF741F' }}>
                Passwort <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              value={password}
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="off"
              disabled={loggingIn}
            />
          </View>
          <View style={styles.block}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => doLogin(email, password)}
              disabled={loggingIn}
            >
              <GradientBtn name="Log-In" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
              <Text style={styles.forget}>Passwort vergessen?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  arrow: {
    marginLeft: '8%',
    marginTop: '12%',
    position: 'absolute',
    zIndex: 1,
  },
  label: {
    backgroundColor: '#fff',
    width: '20%',
    borderRadius: 4,
    position: 'absolute',
    height: 15,
    zIndex: 1,
    paddingLeft: 5,
    marginLeft: '10%',
    marginTop: -5,
    fontFamily: 'ub-medium',
  },
  labelmail: {
    backgroundColor: '#fff',
    width: '38%',
    height: 15,
    borderRadius: 4,
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 5,
    marginLeft: '10%',
    marginTop: -5,
    fontFamily: 'ub-medium',
  },
  block: {
    alignItems: 'center',
    marginTop: '10%',
  },
  wrapper: {
    width: '70%',
    height: 68,
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-medium',
    fontSize: 24,
  },
  forget: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-medium',
    fontSize: 15,
    marginTop: '5%',
  },
  title: {
    fontSize: 40,
    fontFamily: 'ub-medium',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 2,
    marginTop: '28%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF741F',
    width: '86%',
    marginLeft: '7%',
    borderRadius: 5,
    height: 60,
    backgroundColor: '#fff',
    fontSize: 21,
    paddingLeft: '2%',
  },
  error: {
    backgroundColor: '#f8d7da',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    borderColor: '#f5c6cb',
    marginTop: 10,
    alignSelf: 'center',
  },
  errortext: {
    color: '#721c24',
  },
})
