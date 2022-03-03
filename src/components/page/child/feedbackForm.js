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
  const [isLoading, setLoading] = useState(true)
  const urlMessage = ``
  const urlUpload = ``

  const pickImage = async () => {
    // ImagePicker.requestMediaLibraryPermissionsAsync(true)

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [9, 16],
      // base64: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setNameImage(result.uri.split('/').pop())
      setImage(result.uri)
      // setImage(result)
      // console.log(result)
    }
  }

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [9, 16],
      // base64: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setNameImage(result.uri.split('/').pop())
      setImage(result.uri)
      // setImage(result)
      // console.log(result)
    }
  }

  async function postMessageSupport() {
    // Привязка файла к тикету
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('orgId', '20077040966')
    myHeaders.append(
      'Authorization',
      'Zoho-oauthtoken 1000.47ef4b5e040492773506d01aad1b14bf.8bcaf92d2dcb1ec2023f0351a231d3bf'
    )

    let formData = new FormData()
    formData.append('file', fileInput.files[0], image)

    // Создание тикета
    var myHeadersMessage = new Headers()
    myHeadersMessage.append('Accept', 'application/json')
    myHeadersMessage.append('Content-Type', 'application/json')

    var formDataMessage = JSON.stringify({
      author: userProfile && userProfile.wp_user,
      content: {
        raw: messageComment,
      },
      post: idLesson,
      parent: replyCommentId,
    })

    try {
      // Привязка файла к тикету
      const responseUpload = await fetch(urlUpload, {
        method: 'POST',
        headers: myHeaders,
        body: formData,
      })
      const jsonUpload = await responseUpload.json()

      // Создание тикета
      const responseMessage = await fetch(urlMessage, {
        method: 'POST',
        headers: myHeadersMessage,
        body: formDataMessage,
      })
      const jsonMessage = await responseMessage.json()

      // console.log(jsonMessage.data)
      // console.log(jsonMessage.errors)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(accessToken)
  // console.log(image)
  // console.log(nameImage)

  useEffect(() => {
    return () => {
      setImage(null)
      setNameImage(null)
      setLoading(true)
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
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Name*"
              autoCapitalize="none"
              autoCompleteType="off"
              defaultValue={userProfile && userProfile.name}
              autoCorrect={false}
            />
          </View>
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
              placeholder="E-Mail*"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCompleteType="off"
              defaultValue={userProfile && userProfile.email}
              autoCorrect={false}
            />
          </View>
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
          {/* {image && (
                <Image
                  source={{ uri: 'data:image/jpeg;base64,' + image.base64 }}
                  style={{ width: 220, height: 400 }}
                />
              )} */}
          {/* {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 220, height: 400 }}
            />
          )} */}
          <View style={{ marginTop: 20, width: '100%' }}>
            <TouchableOpacity style={styles.wrapper} onPress={() => {}}>
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
