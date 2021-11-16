import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import { ArrowLeft } from '../../atoms/arrowLeft'
import { LinearGradient } from 'expo-linear-gradient'

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

export const SignUp = ({ navigation: { goBack }, navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('true')
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('false')
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        >
          <ArrowLeft />
        </TouchableOpacity> */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.title}>Registrieren</Text>
          <View style={{ marginTop: '8%' }}>
            <View style={styles.labelmail}>
              <Text style={{ color: '#FF741F' }}>
                Email <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={{ marginTop: '8%' }}>
            <View style={styles.labelB}>
              <Text style={{ color: '#FF741F' }}>
                Benutzername <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="default"
            />
          </View>
          <View style={{ marginTop: '8%' }}>
            <View style={styles.label}>
              <Text style={{ color: '#FF741F' }}>
                Telefonnummer <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType={'phone-pad'}
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="off"
            />
          </View>
          <View style={styles.block}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => navigation.navigate('SuccessReg')}
            >
              <GradientBtn name="Registrieren" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  arrow: {
    left: '8%',
    top: '0%',
    // position: 'absolute',
    zIndex: 1,
  },
  label: {
    backgroundColor: '#fff',
    width: '33%',
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
    width: '15%',
    height: 15,
    borderRadius: 4,
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 5,
    marginLeft: '10%',
    marginTop: -5,
    fontFamily: 'ub-medium',
  },
  labelB: {
    backgroundColor: '#fff',
    width: '30%',
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
  title: {
    fontSize: 40,
    fontFamily: 'ub-medium',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 2,
    marginTop: '15%',
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
})
