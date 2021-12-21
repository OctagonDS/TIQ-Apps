import React, { useContext, useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  RefreshControl,
  Alert,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'
import { LinearGradient } from 'expo-linear-gradient'
import { IconCloseSuccess } from '../../atoms/iconCloseS'
import base64 from 'react-native-base64'
import { IconUploadAv } from '../../atoms/iconUploadAv'

const imageBlack = require('../../../assets/img/black-geo.png')

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

// Анимация

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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const ProfilePage = ({ props, navigation }) => {
  const { userProfile, loggingIn, doUpdate, successEmail, setSuccessEmail } =
    useContext(mainContext)
  const [successUpdate, setSuccessUpdate] = useState(null)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [сonfirm, setConfirm] = useState('')
  const [displayName, setDisplayName] = useState(
    userProfile.display_name.toString()
  )
  const [emailAuth, setEmailAuth] = useState(userProfile.email.toString())
  const login = 'https://kurse.traderiq.net/api/wp-react-password.php'

  // Проверка на пустой инпут
  function InputEmpty() {
    if (!displayName.trim() || !emailAuth.trim()) {
      Alert.alert('Ooops!', 'Sie haben leere Felder')
      return
    } else {
      doUpdate(displayName, emailAuth)
    }
  }

  // Смена пароля
  const PasswordReset = async (password, newPassword, сonfirm) => {
    let showHeaders = new Headers()
    showHeaders.append('Accept', 'application/json')
    showHeaders.append('Content-Type', 'application/json')

    let formData = new FormData()
    formData.append('type', 'login')
    formData.append('email', userProfile.email)
    formData.append('password', password)

    if (newPassword.trim() || сonfirm.trim()) {
      try {
        let response = await fetch(login, {
          method: 'POST',
          body: formData,
        })
        let json = await response.json()

        if (json.status != false && newPassword === сonfirm) {
          var myHeaders = new Headers()
          myHeaders.append(
            'Authorization',
            'Basic ' +
              base64.encode(
                'accountas@mail.ru' + ':' + 'WX63 sbgi fPdP nZzR CnqS pII7'
              )
          )
          myHeaders.append('Content-Type', 'application/json')
          myHeaders.append(
            'Cookie',
            'SSESSe8c55d4a74dd4da51d62b6d4207298c0=fa38bd2d825f2bacefadaee2fbbad2fc; ncore_session=BhctmLUbtpnfm9L8JoMEXbdCWkU4cd; ppwp_wp_session=672e48f1877d6cb2531df292d22fbf23%7C%7C1637223544%7C%7C1637223184'
          )
          var raw = JSON.stringify({
            password: newPassword,
          })

          let passwordUp = await fetch(
            `https://kurse.traderiq.net/wp-json/wp/v2/users/${userProfile.id}`,
            {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            }
          )
          let jsonPass = await passwordUp.json()
          setSuccessUpdate('Passwort erfolgreich aktualisiert')
          setPassword('')
          setNewPassword('')
          setConfirm('')
        } else {
          Alert.alert('Ooops!', 'Falschen Daten')
          return
        }
      } catch {
        console.log('Error storing data on device')
      }
    } else {
      Alert.alert('Ooops!', 'Falschen Daten')
      return
    }
  }

  // Убрать сообщение
  function Remove() {
    return setSuccessEmail(null)
  }

  function RemoveUpdate() {
    return setSuccessUpdate(null)
  }

  React.useEffect(
    () =>
      navigation.addListener(
        'blur',
        () => setSuccessEmail(null),
        setSuccessUpdate(null)
      ),
    []
  )

  return (
    <View style={gStyle.main}>
      <ScrollView contentContainerStyle={{ paddingTop: 30, paddingBottom: 20 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{}}>
              <LinearGradient
                colors={['#FF741F', '#E86312']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  width: 94,
                  height: 94,
                  borderRadius: 47,
                }}
              >
                <View style={styles.imageAvatar}>
                  <Image
                    style={{ width: 90, height: 90 }}
                    resizeMode="cover"
                    source={{
                      uri: userProfile && userProfile.avatar,
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f1f1f1',
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    position: 'absolute',
                    zIndex: 2,
                    top: 0,
                    right: 0,
                    borderWidth: 1,
                    borderColor: '#7c87a3',
                    paddingTop: 1.5,
                    paddingLeft: 3.3,
                  }}
                  onPress={() => {}}
                  disabled={loggingIn}
                >
                  <IconUploadAv />
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <Text style={styles.userName}>
              Hallo {userProfile && userProfile.display_name}, willkommen in
              Deinem Profil!
            </Text>
          </View>
          {successEmail && (
            <FadeInView>
              <View style={styles.success}>
                <Text style={styles.successtext}>{successEmail}</Text>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => {
                    Remove()
                  }}
                  disabled={loggingIn}
                >
                  <IconCloseSuccess fill="#3c763d" />
                </TouchableOpacity>
              </View>
            </FadeInView>
          )}

          <View style={{ marginTop: 10 }}>
            <View style={{ marginTop: '8%' }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F', marginLeft: 5 }}>E-Mail</Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 300,
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onChangeText={(emailAuth) => setEmailAuth(emailAuth)}
                defaultValue={userProfile && userProfile.email.toString()}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                disabled={loggingIn}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F', marginLeft: 5 }}>
                  Anzeigename
                </Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 300,
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onChangeText={(displayName) => setDisplayName(displayName)}
                defaultValue={
                  userProfile && userProfile.display_name.toString()
                }
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                disabled={loggingIn}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  InputEmpty()
                }}
                disabled={loggingIn}
              >
                <GradientBtn name="Daten aktualisieren" />
              </TouchableOpacity>
            </View>
          </View>
          <ImageBackground
            source={imageBlack}
            resizeMode="cover"
            style={styles.imageBackTwo}
            imageStyle={{}}
          >
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ub-medium',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Passwort ändern
            </Text>
          </ImageBackground>
          {successUpdate && (
            <FadeInView>
              <View style={styles.success}>
                <Text style={styles.successtext}>{successUpdate}</Text>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => {
                    RemoveUpdate()
                  }}
                  disabled={loggingIn}
                >
                  <IconCloseSuccess fill="#3c763d" />
                </TouchableOpacity>
              </View>
            </FadeInView>
          )}
          <View>
            <View style={{ marginTop: 25 }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F', marginLeft: 5 }}>
                  Aktuelles Passwort
                </Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 300,
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onChangeText={(password) => setPassword(password)}
                value={password.toString()}
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                secureTextEntry={true}
                disabled={loggingIn}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F', marginLeft: 5 }}>
                  Neues Passwort
                </Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 300,
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onChangeText={(newPassword) => setNewPassword(newPassword)}
                value={newPassword.toString()}
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                secureTextEntry={true}
                disabled={loggingIn}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F', marginLeft: 5 }}>
                  Bestätige neues Passwort
                </Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 300,
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onChangeText={(сonfirm) => setConfirm(сonfirm)}
                value={сonfirm.toString()}
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                secureTextEntry={true}
                disabled={loggingIn}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  PasswordReset(password, newPassword, сonfirm)
                }}
                disabled={loggingIn}
              >
                <GradientBtn name="Passwort ändern" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 17,
  },
  wrapper: {
    width: '60%',
    height: 50,
    alignSelf: 'center',
  },
  imageAvatar: {
    overflow: 'hidden',
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
  },
  imageAvatarBack: {
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#FF741F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  userName: {
    marginLeft: '10%',
    // marginRight: '5%',
    fontFamily: 'ub-medium',
    fontSize: 20,
    color: '#FF741F',
    width: '40%',
  },
  success: {
    backgroundColor: '#dff0d8',
    padding: 10,
    width: 300,
    borderRadius: 5,
    borderColor: '#d6e9c6',
    marginTop: 25,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successtext: {
    color: '#3c763d',
  },
  closeBtn: {
    alignSelf: 'center',
  },
  imageBackTwo: {
    flex: 1,
    width: '100%',
    height: 70,
    marginTop: 35,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
