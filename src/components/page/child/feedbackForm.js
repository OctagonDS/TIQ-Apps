import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import { IconUploadImage } from '../../atoms/iconUploadImage'
import { IconUploadCamera } from '../../atoms/iconUploadCamera'
import { IconCloseSuccess } from '../../atoms/iconCloseS'
import * as mime from 'mime'
import * as DocumentPicker from 'expo-document-picker'

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

export const FeedbackForm = ({ props, navigation, route }) => {
  let { accessToken } = route.params
  const [image, setImage] = useState(null)
  const [nameImage, setNameImage] = useState(null)
  const { userProfile } = useContext(mainContext)
  const [message, setMessage] = useState(null)
  const [subject, setSubject] = useState(null)
  const [email, setEmail] = useState(userProfile.email.toString())
  const [name, setName] = useState(userProfile.display_name.toString())

  const urlMessage = `https://desk.zoho.eu/api/v1/tickets`
  const urlUpload = `https://desk.zoho.eu/api/v1/uploads`

  const pickImage = async () => {
    let result = await DocumentPicker.getDocumentAsync({})

    if (!result.cancelled) {
      setNameImage(result.name)
      setImage(result.uri)
    }
  }

  const pickImageCamera = async () => {
    let prem = await ImagePicker.getCameraPermissionsAsync()

    if (prem.granted !== true) {
      await ImagePicker.requestCameraPermissionsAsync()
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    })

    if (!result.cancelled) {
      setNameImage(result.uri.split('/').pop())
      setImage(result.uri)
    }
  }

  const postMessageSupport = async (message, subject) => {
    //Шапка сообщения
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('orgId', '20077040966')
    myHeaders.append('Authorization', `Zoho-oauthtoken ${accessToken}`)

    // Шапка загрузки файла
    var myHeadersUpload = new Headers()
    myHeadersUpload.append('Content-Type', 'multipart/form-data')
    myHeadersUpload.append('orgId', '20077040966')
    myHeadersUpload.append('Authorization', `Zoho-oauthtoken ${accessToken}`)

    try {
      if (image !== null) {
        var formdata = new FormData()
        formdata.append('file', {
          uri: image,
          name: nameImage,
          type: mime.getType(image),
        })
        const responseUpload = await fetch(urlUpload, {
          method: 'POST',
          headers: myHeadersUpload,
          body: formdata,
        })
        const jsonUpload = await responseUpload.json()
        // console.log(jsonUpload)
        var raw = JSON.stringify({
          subject: subject,
          departmentId: '67790000000007061',
          channel: 'App Mobile',
          email: email,
          phone: null,
          description: message,
          status: 'Open',
          contact: {
            lastName: name,
            email: email,
            phone: null,
          },
          uploads: [jsonUpload.id],
        })
      } else {
        var raw = JSON.stringify({
          subject: subject,
          departmentId: '67790000000007061',
          channel: 'App Mobile',
          email: email,
          phone: null,
          description: message,
          status: 'Open',
          contact: {
            lastName: name,
            email: email,
            phone: null,
          },
        })
      }

      const responsePost = await fetch(urlMessage, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      })
      const jsonPost = await responsePost.json()
      // console.log(jsonPost)
    } catch (error) {
      console.error(error)
    } finally {
      navigation.goBack()
    }
  }

  useEffect(() => {
    return () => {
      setImage(null)
      setNameImage(null)
      setMessage(null)
      setSubject(null)
    }
  }, [])

  return (
    <View style={[gStyle.main, { alignContent: 'center' }]}>
      <ScrollView
        contentContainerStyle={{ paddingTop: '2%', paddingBottom: 20 }}
      >
        <Text style={styles.title}>Nimm Kontakt zum</Text>
        <Text style={styles.title}>Trader IQ Team auf</Text>
        <View
          style={{
            marginTop: '7%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Betreff"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(subject) => setSubject(subject)}
              value={subject}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              // alignItems: 'center',
              // justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: '#FF741F',
                width: '80%',
                textAlignVertical: 'top',
                borderRadius: 7,
                fontSize: 18,
                paddingLeft: 10,
                paddingTop: 15,
                fontFamily: 'ub-reg',
                color: '#333',
                height: 180,
              }}
              placeholder="Wie können wir Ihnen helfen?"
              multiline={true}
              numberOfLines={10}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onChangeText={(message) => setMessage(message)}
              value={message}
              editable
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '76%',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <TouchableOpacity style={{ marginRight: 15 }} onPress={pickImage}>
                <IconUploadImage />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={pickImageCamera}
              >
                <IconUploadCamera />
              </TouchableOpacity>
            </View>
            {image === null ? (
              <Text style={{ fontFamily: 'ub-reg', color: '#666' }}>
                Datei hinzufügen
              </Text>
            ) : (
              image && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'ub-reg',
                      color: '#666',
                      paddingRight: 10,
                    }}
                  >
                    Datei hinzugefügt
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setImage(null), setNameImage(null)
                    }}
                  >
                    <IconCloseSuccess fill="#E86312" />
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
          <View style={{ marginTop: 20, width: '100%' }}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => {
                if (message === null || subject === null) {
                  console.log('Empty input')
                } else {
                  postMessageSupport(message, subject)
                }
              }}
            >
              <GradientBtn name="Übermitteln" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'ub-reg',
    fontSize: 20,
    color: '#545A60',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#FF741F',
    width: '80%',
    // marginLeft: '5%',
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'ub-reg',
    color: '#333',
  },
  noQuery: {
    textAlign: 'center',
    marginTop: 35,
    fontFamily: 'ub-reg',
    fontSize: 17,
    color: '#ACB3BF',
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 17,
  },
  wrapper: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
  },
})
