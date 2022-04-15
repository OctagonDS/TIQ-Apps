import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Platform,
  useWindowDimensions,
  TextInput,
} from 'react-native'
import mainContext from '../../../store/context/context'
import NetInfo from '@react-native-community/netinfo'
import { gStyle } from '../../../styles/style'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import { IconUploadImage } from '../../atoms/iconUploadImage'
import { IconUploadCamera } from '../../atoms/iconUploadCamera'
import { IconCloseSuccess } from '../../atoms/iconCloseS'
import { IconHeadfones } from '../../atoms/iconHeadfones'
import { IconFileUp } from '../../atoms/iconFileUp'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
import * as Sharing from 'expo-sharing'
import * as Notifications from 'expo-notifications'
import { useIsFocused } from '@react-navigation/native'
import * as mime from 'mime'
import * as DocumentPicker from 'expo-document-picker'

// Переменне
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const systemFonts = [...defaultSystemFonts, 'ub-light', 'ub-medium', 'ub-reg']
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

const tagsStyles = {
  p: {
    color: '#fff',
    textAlign: 'left',
    // marginBottom: 10,
    fontFamily: 'ub-reg',
    fontSize: 12,
  },
  div: {
    color: '#333',
    textAlign: 'left',
    fontFamily: 'ub-reg',
    fontSize: 13,
  },
  h1: {
    color: '#fff',
  },
  h2: {
    color: '#fff',
  },
  h3: {
    color: '#fff',
  },
  h4: {
    color: '#fff',
  },
  h5: {
    color: '#fff',
  },
  h6: {
    color: '#fff',
  },
  ul: {
    color: '#fff',
  },
  li: {
    color: '#fff',
  },
}

const classesStyles = {}

// Основная функция

export function Ticket({ props, route, navigation }) {
  const { itemId } = route.params

  const urlRefresh = `https://fe20295.online-server.cloud/api/v1/zoho/token`

  const url = `https://desk.zoho.eu/api/v1/tickets/${itemId && itemId}`

  const urlUpload = `https://desk.zoho.eu/api/v1/uploads`

  const urlThreads = `https://desk.zoho.eu/api/v1/tickets/${
    itemId && itemId
  }/threads`

  const urlComments = `https://desk.zoho.eu/api/v1/tickets/${
    itemId && itemId
  }/comments?sortBy=-commentedTime`

  const urlPostComment = `https://desk.zoho.eu/api/v1/tickets/${
    itemId && itemId
  }/comments`

  const contentWidth = useWindowDimensions().width
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [threads, setThreads] = useState([])
  const [image, setImage] = useState(null)
  const [nameImage, setNameImage] = useState(null)
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState(null)
  const [token, setToken] = useState([])
  const { userProfile } = useContext(mainContext)
  const isFocused = useIsFocused()

  const [refreshing, setRefreshing] = React.useState(false)

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  })

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

  // Получение тикета
  const getTicket = async () => {
    try {
      // Токен доступа
      const responseToken = await fetch(urlRefresh, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonToken = await responseToken.json()

      setToken(jsonToken.data)
      // console.log(jsonToken.data)
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append('orgId', '20077040966')
      myHeaders.append(
        'Authorization',
        `Zoho-oauthtoken ${jsonToken.data[0].access_token}`
      )
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      })
      const json = await response.json()

      const responseThreads = await fetch(urlThreads, {
        method: 'GET',
        headers: myHeaders,
      })
      const jsonThreads = await responseThreads.json()

      const responseThread = await fetch(
        `https://desk.zoho.eu/api/v1/tickets/${itemId && itemId}/threads/${
          jsonThreads.data[jsonThreads.data.length - 1].id
        }`,
        {
          method: 'GET',
          headers: myHeaders,
        }
      )
      const jsonThread = await responseThread.json()

      const responseComments = await fetch(urlComments, {
        method: 'GET',
        headers: myHeaders,
      })
      const jsonComments = await responseComments.json()

      setData(json)
      setThreads(jsonThread.attachments)
      setComments(jsonComments.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Отправка комментария
  const doPostComment = async (message) => {
    //Шапка сообщения
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('orgId', '20077040966')
    myHeaders.append(
      'Authorization',
      `Zoho-oauthtoken ${token && token[0].access_token}`
    )

    // Шапка загрузки файла
    var myHeadersUpload = new Headers()
    myHeadersUpload.append('Content-Type', 'multipart/form-data')
    myHeadersUpload.append('orgId', '20077040966')
    myHeadersUpload.append(
      'Authorization',
      `Zoho-oauthtoken ${token && token[0].access_token}`
    )

    // console.log(image)

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
          isPublic: 'true',
          contentType: 'html',
          attachmentIds: [jsonUpload.id],
          content: `<span style='font-family: ub-light;font-size: 9px;color: #333;padding-bottom: 5px'>@user: ${
            data && data.contactId
          }</span><div>${message}</div>`,
        })
      } else {
        var raw = JSON.stringify({
          isPublic: 'true',
          contentType: 'html',
          content: `<span style='font-family: ub-light;font-size: 9px;color: #333;padding-bottom: 5px'>@user: ${
            data && data.contactId
          }</span><div>${message}</div>`,
        })
      }

      const responsePost = await fetch(urlPostComment, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      })
      const jsonPost = await responsePost.json()
      // console.log(jsonPost)
      // console.log(message)
    } catch (error) {
      console.error(error)
    } finally {
      setMessage(null)
      getTicket()
      setImage(null)
      setNameImage(null)
      // console.log(message)
    }
  }

  const onRefresh = React.useCallback(() => {
    getTicket(true)
    wait(2000).then(() => getTicket(false))
  }, [])

  // console.log(mime.getType(image))
  // console.log(nameImage)
  useEffect(() => {
    getTicket()
    return () => {
      setData([])
      setLoading(true)
      setThreads([])
      setComments([])
      setImage(null)
      setNameImage(null)
      setMessage(null)
      setToken([])
    }
  }, [itemId, isFocused])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#FF741F" />
        </View>
      ) : (
        <View style={gStyle.main}>
          <FlatList
            data={comments}
            numColumns={1}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListHeaderComponent={
              <View style={styles.subject}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: '#454A4F',
                      fontFamily: 'ub-reg',
                      fontSize: 14,
                    }}
                  >
                    Betreff:
                  </Text>
                  <Text
                    style={{
                      color: '#454A4F',
                      fontFamily: 'ub-medium',
                      fontSize: 14,
                    }}
                  >
                    #{data && data.ticketNumber}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#454A4F',
                    fontFamily: 'ub-medium',
                    fontSize: 15,
                    marginTop: 3,
                    width: '70%',
                  }}
                >
                  {data && data.subject}
                </Text>
                <Text
                  style={{
                    color: '#454A4F',
                    fontFamily: 'ub-reg',
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  Nachricht:
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1.5,
                    marginTop: 3,
                    borderColor: '#FF741F',
                    width: '100%',
                    textAlignVertical: 'top',
                    borderRadius: 7,
                    fontSize: 14,
                    paddingLeft: 7,
                    paddingTop: 7,
                    fontFamily: 'ub-reg',
                    color: '#333',
                    height: 100,
                  }}
                  placeholder="Nachrichtentext"
                  multiline={true}
                  numberOfLines={10}
                  autoCapitalize="none"
                  autoCompleteType="off"
                  autoCorrect={false}
                  onChangeText={(message) => setMessage(message)}
                  value={message}
                  editable
                />
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
                    <TouchableOpacity
                      style={{ marginRight: 15 }}
                      onPress={pickImage}
                    >
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
                <View
                  style={{ justifyContent: 'flex-end', flexDirection: 'row' }}
                >
                  <View
                    style={{
                      marginTop: 20,
                      width: '65%',
                    }}
                  >
                    <TouchableOpacity
                      style={styles.wrapper}
                      onPress={() => {
                        if (message !== null) {
                          doPostComment(message)
                        } else {
                          console.log('Empty message')
                        }
                      }}
                    >
                      <GradientBtn name="Übermitteln" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }
            ListFooterComponent={
              <View>
                <View style={styles.history}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <LinearGradient
                      colors={['#FFB75E', '#ED8F03']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        width: '75%',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        minHeight: 50,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 9,
                          color: '#333',
                          fontFamily: 'ub-light',
                          paddingBottom: 5,
                        }}
                      >
                        @user: {data && data.contactId}
                      </Text>
                      <RenderHtml
                        tagsStyles={tagsStyles}
                        source={
                          data !== undefined && data !== null
                            ? {
                                html: `${data.description.replace(
                                  /^"(.+(?="$))"$/,
                                  '$1'
                                )}`,
                              }
                            : {
                                html: '<div>Error! Lade die Seite neu.</div>',
                              }
                        }
                        baseStyle={{
                          color: '#333',
                          fontSize: 13,
                          fontFamily: 'ub-reg',
                        }}
                        contentWidth={contentWidth}
                        systemFonts={systemFonts}
                      />
                      {threads.length > 0 ? (
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            paddingTop: 5,
                            paddingBottom: 5,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                          }}
                          onPress={async () => {
                            FileSystem.downloadAsync(
                              threads[0].href,
                              FileSystem.documentDirectory + threads[0].name,
                              {
                                headers: {
                                  orgId: '20077040966',
                                  Authorization: `Zoho-oauthtoken ${
                                    token && token[0].access_token
                                  }`,
                                },
                              }
                            )
                              .then(async ({ uri, headers, status }) => {
                                // console.log('Finished downloading to ', uri)
                                if (Platform.OS === 'ios') {
                                  Sharing.shareAsync(uri)
                                } else if (Platform.OS === 'android') {
                                  try {
                                    await MediaLibrary.requestPermissionsAsync()
                                    const asset =
                                      await MediaLibrary.createAssetAsync(uri)
                                    const album =
                                      await MediaLibrary.getAlbumAsync(
                                        'Download'
                                      )
                                    if (album == null) {
                                      await MediaLibrary.createAlbumAsync(
                                        'Download',
                                        asset,
                                        false
                                      )
                                    } else {
                                      await MediaLibrary.addAssetsToAlbumAsync(
                                        [asset],
                                        album,
                                        false
                                      ).then(async () => {
                                        await Notifications.scheduleNotificationAsync(
                                          {
                                            content: {
                                              title: threads[0].name,
                                              body: 'Datei heruntergeladen!',
                                            },
                                            trigger: null,
                                          }
                                        )
                                      })
                                    }
                                  } catch (error) {
                                    console.error(error)
                                  }
                                }
                              })
                              .catch((error) => {
                                console.error(error)
                              })
                          }}
                        >
                          <IconFileUp />
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 12,
                              paddingLeft: 5,
                            }}
                          >
                            {threads[0].name}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View></View>
                      )}
                    </LinearGradient>
                  </View>
                </View>
              </View>
            }
            contentContainerStyle={{
              paddingTop: '2%',
              paddingBottom: Platform.OS === 'android' ? 95 : 110,
            }}
            keyExtractor={({ id }, index) => index.toString()}
            renderItem={({ item }) =>
              item.content.substr(1, 4) === 'span' ? (
                <View style={styles.history}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <LinearGradient
                      colors={['#FFB75E', '#ED8F03']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        width: '75%',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        minHeight: 50,
                        borderRadius: 5,
                      }}
                    >
                      <RenderHtml
                        tagsStyles={tagsStyles}
                        classesStyles={classesStyles}
                        source={{
                          html: `${
                            item && item.content.replace(/^"(.+(?="$))"$/, '$1')
                          }`,
                        }}
                        baseStyle={{
                          color: '#333',
                        }}
                        contentWidth={contentWidth}
                        systemFonts={systemFonts}
                      />
                      {item.attachments.length > 0 ? (
                        item.attachments.map((itemUp, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              flexDirection: 'row',
                              paddingBottom: 5,
                              paddingTop: index > 0 ? 0 : 5,
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                            }}
                            onPress={async () => {
                              FileSystem.downloadAsync(
                                itemUp.href,
                                FileSystem.documentDirectory + itemUp.name,
                                {
                                  headers: {
                                    orgId: '20077040966',
                                    Authorization: `Zoho-oauthtoken ${
                                      token && token[0].access_token
                                    }`,
                                  },
                                }
                              )
                                .then(async ({ uri, headers, status }) => {
                                  // console.log('Finished downloading to ', uri)
                                  if (Platform.OS === 'ios') {
                                    Sharing.shareAsync(uri)
                                  } else if (Platform.OS === 'android') {
                                    try {
                                      await MediaLibrary.requestPermissionsAsync()
                                      const asset =
                                        await MediaLibrary.createAssetAsync(uri)
                                      const album =
                                        await MediaLibrary.getAlbumAsync(
                                          'Download'
                                        )
                                      if (album == null) {
                                        await MediaLibrary.createAlbumAsync(
                                          'Download',
                                          asset,
                                          false
                                        )
                                      } else {
                                        await MediaLibrary.addAssetsToAlbumAsync(
                                          [asset],
                                          album,
                                          false
                                        ).then(async () => {
                                          await Notifications.scheduleNotificationAsync(
                                            {
                                              content: {
                                                title: itemUp.name,
                                                body: 'Datei heruntergeladen!',
                                              },
                                              trigger: null,
                                            }
                                          )
                                        })
                                      }
                                    } catch (error) {
                                      console.error(error)
                                    }
                                  }
                                })
                                .catch((error) => {
                                  console.error(error)
                                })
                            }}
                          >
                            <IconFileUp />
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 12,
                                paddingLeft: 5,
                              }}
                            >
                              {itemUp.name}
                            </Text>
                          </TouchableOpacity>
                        ))
                      ) : (
                        <View></View>
                      )}
                    </LinearGradient>
                  </View>
                </View>
              ) : (
                <View style={styles.history}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <LinearGradient
                      colors={['#00b9eb', '#6dd5ed']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        width: '75%',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        minHeight: 50,
                        borderRadius: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <IconHeadfones />
                        <View>
                          <Text
                            style={{
                              fontSize: 11,
                              color: '#fff',
                              fontFamily: 'ub-medium',
                              paddingLeft: 5,
                            }}
                          >
                            {item.commenter.name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 9,
                              color: '#333',
                              fontFamily: 'ub-light',
                              paddingLeft: 5,
                            }}
                          >
                            Technischer Support
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          borderBottomColor: '#fff',
                          borderBottomWidth: 1,
                          paddingTop: 5,
                        }}
                      ></View>
                      <RenderHtml
                        tagsStyles={tagsStyles}
                        source={{
                          html: `${
                            item && item.content.replace(/^"(.+(?="$))"$/, '$1')
                          }`,
                        }}
                        baseStyle={{
                          color: '#333',
                          marginTop: 5,
                        }}
                        contentWidth={contentWidth}
                        systemFonts={systemFonts}
                      />
                      {item.attachments.length > 0 ? (
                        item.attachments.map((itemUp, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              flexDirection: 'row',
                              paddingBottom: 5,
                              paddingTop: index > 0 ? 0 : 5,
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                            }}
                            onPress={async () => {
                              FileSystem.downloadAsync(
                                itemUp.href,
                                FileSystem.documentDirectory + itemUp.name,
                                {
                                  headers: {
                                    orgId: '20077040966',
                                    Authorization: `Zoho-oauthtoken ${
                                      token && token[0].access_token
                                    }`,
                                  },
                                }
                              )
                                .then(async ({ uri, headers, status }) => {
                                  // console.log('Finished downloading to ', uri)
                                  if (Platform.OS === 'ios') {
                                    Sharing.shareAsync(uri)
                                  } else if (Platform.OS === 'android') {
                                    try {
                                      await MediaLibrary.requestPermissionsAsync()
                                      const asset =
                                        await MediaLibrary.createAssetAsync(uri)
                                      const album =
                                        await MediaLibrary.getAlbumAsync(
                                          'Download'
                                        )
                                      if (album == null) {
                                        await MediaLibrary.createAlbumAsync(
                                          'Download',
                                          asset,
                                          false
                                        )
                                      } else {
                                        await MediaLibrary.addAssetsToAlbumAsync(
                                          [asset],
                                          album,
                                          false
                                        ).then(async () => {
                                          await Notifications.scheduleNotificationAsync(
                                            {
                                              content: {
                                                title: itemUp.name,
                                                body: 'Datei heruntergeladen!',
                                              },
                                              trigger: null,
                                            }
                                          )
                                        })
                                      }
                                    } catch (error) {
                                      console.error(error)
                                    }
                                  }
                                })
                                .catch((error) => {
                                  console.error(error)
                                })
                            }}
                          >
                            <IconFileUp />
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 12,
                                paddingLeft: 5,
                              }}
                            >
                              {itemUp.name}
                            </Text>
                          </TouchableOpacity>
                        ))
                      ) : (
                        <View></View>
                      )}
                    </LinearGradient>
                  </View>
                </View>
              )
            }
          />
        </View>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  subject: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
    flex: 1,
  },
  history: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: 40,
    alignSelf: 'center',
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 15,
  },
})
