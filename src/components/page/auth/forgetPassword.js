import React, { useState, useContext, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
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

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export const ForgetPass = ({ navigation: { goBack }, navigation }) => {
  const [email, setEmail] = useState(null)
  const { successReset, loggingIn, doReset, errorReset } =
    useContext(mainContext)

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
          <View style={{ marginTop: '8%', marginLeft: '5%', width: '90%' }}>
            <Text style={styles.text}>
              Bitte gib deinen Benutzernamen oder deine E-Mail-Adresse an. Du
              wirst eine E-Mail-Nachricht mit Informationen erhalten, wie du
              dein Passwort zurücksetzen kannst.
            </Text>
          </View>
          {successReset && (
            <View style={styles.success}>
              <Text style={styles.successtext}>{successReset}</Text>
            </View>
          )}
          {errorReset && (
            <FadeInView>
              <View
                style={
                  errorReset == null || successReset != null
                    ? { display: 'none' }
                    : styles.error
                }
              >
                <Text style={styles.errortext}>{errorReset}</Text>
              </View>
            </FadeInView>
          )}
          <View style={{ marginTop: '8%' }}>
            <View style={styles.label}>
              <Text style={{ color: '#FF741F' }}>
                Benutzername oder E-Mail-Adresse{' '}
                <Text style={{ color: '#DA1414' }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="off"
              onChangeText={(email) => setEmail(email)}
              value={email}
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.block}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => doReset(email)}
              disabled={loggingIn}
            >
              <GradientBtn name="Neues Passwort" />
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
    top: '12%',
    position: 'absolute',
    zIndex: 1,
  },
  label: {
    backgroundColor: '#fff',
    width: '65%',
    borderRadius: 4,
    position: 'absolute',
    height: 15,
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
  text: {
    fontSize: 16,
    fontFamily: 'ub-light',
    color: '#fff',
    letterSpacing: 2,
    marginTop: '28%',
  },
  success: {
    backgroundColor: '#dff0d8',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    borderColor: '#d6e9c6',
    marginTop: 10,
    alignSelf: 'center',
  },
  successtext: {
    color: '#3c763d',
  },
  error: {
    backgroundColor: '#f8d7da',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    borderColor: '#f5c6cb',
    marginTop: 15,
    alignSelf: 'center',
  },
  errortext: {
    color: '#721c24',
  },
})
