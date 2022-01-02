import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from 'react-native'
import { gStyle } from '../../../../styles/style'
import HTML from 'react-native-render-html'
import * as FileSystem from 'expo-file-system'
import * as Notifications from 'expo-notifications'
import * as MediaLibrary from 'expo-media-library'
import * as Sharing from 'expo-sharing'
import * as WebBrowser from 'expo-web-browser'
import { IconDownload } from '../../../atoms/iconDownload'
import { IconShareFile } from '../../../atoms/iconShareFile'
import mainContext from '../../../../store/context/context'
import { Video } from 'expo-av'

// Переменне
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const image = require('../../../../assets/img/black-geo.png')
const tagsStyles = {
  p: {
    color: '#fff',
    textAlign: 'left',
    // marginBottom: 10,
    fontFamily: 'ub-medium',
    fontSize: 14,
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

// Основная функция

export function Modules({ props, route, navigation }) {
  const { itemId } = route.params

  const url = `https://fe20295.online-server.cloud/api/v1/course/${JSON.stringify(
    itemId
  )}`

  const contentWidth = useWindowDimensions().width
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { userProfile } = useContext(mainContext)

  const [refreshing, setRefreshing] = React.useState(false)

  const getModules = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  })

  const onRefresh = React.useCallback(() => {
    getModules(true)
    wait(2000).then(() => getModules(false))
  }, [])

  useEffect(() => {
    getModules()
    return () => {
      setData([])
      setLoading(true)
    }
  }, [itemId])
  // console.log(data)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.modules}
          ListHeaderComponent={
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={[
                  {
                    flex: 1,
                    width: '95%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  {},
                ]}
                imageStyle={{ borderRadius: 5 }}
              >
                <View
                  style={{
                    flex: 1,
                    width: '90%',
                    marginTop: 10,
                  }}
                >
                  {data.length !== 0 ? (
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'ub-medium',
                        fontSize: 20,
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {data && data.title.replace(/^"(.+(?="$))"$/, '$1')}
                    </Text>
                  ) : (
                    <View></View>
                  )}

                  {/* <Text style={{ color: '#fff' }}>
                  {JSON.stringify(titleDescription)}
                </Text> */}
                  {data.length !== 0 ? (
                    <HTML
                      tagsStyles={tagsStyles}
                      source={{
                        html: `${
                          data &&
                          data.description.replace(/^"(.+(?="$))"$/, '$1')
                        }`,
                      }}
                      contentWidth={contentWidth}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
              </ImageBackground>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-around',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'ub-medium',
                      fontSize: 14,
                      paddingLeft: '5%',
                      paddingRight: 20,
                    }}
                  >
                    Fortschritt
                  </Text>
                </View>
                {data.length !== 0 ? (
                  <View style={styles.progress}>
                    <View style={styles.progressBar}>
                      <Animated.View
                        style={
                          ([styles.progressBarLevel],
                          {
                            backgroundColor: '#FF741F',
                            width: `${
                              data.courseLessonsCount !== 0
                                ? (data.courseLessonsProgress.filter(
                                    (countProgress) =>
                                      userProfile &&
                                      userProfile.idAdmin === countProgress.id
                                  ).length /
                                    data.courseLessonsCount) *
                                  100
                                : data.courseLessonsCount
                            }%`,
                            borderRadius: 5,
                          })
                        }
                      />
                    </View>
                    <Text style={styles.percent}>
                      {data.courseLessonsCount !== 0
                        ? Math.round(
                            (data.courseLessonsProgress.filter(
                              (countProgress) =>
                                userProfile &&
                                userProfile.idAdmin === countProgress.id
                            ).length /
                              data.courseLessonsCount) *
                              100
                          )
                        : data.courseLessonsCount}
                      %
                    </Text>
                  </View>
                ) : (
                  <View></View>
                )}
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={{ flex: 1, paddingTop: 30 }}>
              {data.custom_field1 != null || data.custom_field3 != null ? (
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'ub-medium',
                      color: '#4E4D4D',
                      fontSize: 16,
                    }}
                  >
                    Downloads
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
              {data.custom_field1 != null ? (
                <View style={{ marginTop: 10 }}>
                  <View style={styles.flexDownfile}>
                    <Text
                      style={{
                        // textAlign: 'center',
                        fontFamily: 'ub-light',
                        color: '#4E4D4D',
                        fontSize: 16,
                      }}
                    >
                      {data.custom_field1}
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <TouchableOpacity
                        style={{ paddingHorizontal: 25 }}
                        onPress={
                          () => WebBrowser.openBrowserAsync(data.custom_field2)
                          // MediaLibrary.requestPermissionsAsync().then(
                          //   ({ granted }) => {
                          //     if (granted) {
                          //       FileSystem.downloadAsync(
                          //         data.custom_field2,
                          //         FileSystem.documentDirectory +
                          //           data.custom_field2.substr(
                          //             data.custom_field2.lastIndexOf('/') + 1
                          //           )
                          //       )
                          //         .then(async ({ uri }) => {
                          //           console.log('Finished downloading to ', uri)
                          //           const asset =
                          //             await MediaLibrary.createAssetAsync(uri)

                          //           console.log('asset', asset)
                          //           await MediaLibrary.createAlbumAsync(
                          //             'Download',
                          //             asset,
                          //             false
                          //           )
                          //             .then(async () => {
                          //               await Notifications.scheduleNotificationAsync(
                          //                 {
                          //                   content: {
                          //                     title: data.custom_field2.substr(
                          //                       data.custom_field2.lastIndexOf(
                          //                         '/'
                          //                       ) + 1
                          //                     ),
                          //                     body: 'Файл загружен!',
                          //                   },
                          //                   trigger: null,
                          //                 }
                          //               )
                          //             })
                          //             .catch((error) => {
                          //               console.error(error)
                          //             })
                          //         })
                          //         .catch((error) => {
                          //           console.error(error)
                          //         })
                          //     }
                          //   }
                          // )
                        }
                      >
                        <IconDownload />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ paddingTop: 1 }}
                        onPress={() =>
                          FileSystem.downloadAsync(
                            data.custom_field2,
                            FileSystem.documentDirectory +
                              data.custom_field2.substr(
                                data.custom_field2.lastIndexOf('/') + 1
                              )
                          )
                            .then(async ({ uri }) => {
                              // console.log('Finished downloading to ', uri)
                              Sharing.shareAsync(uri)
                            })
                            .catch((error) => {
                              console.error(error)
                            })
                        }
                      >
                        <IconShareFile />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
              {data.custom_field3 != null ? (
                <View style={{ marginTop: 20 }}>
                  <View style={styles.flexDownfile}>
                    <Text
                      style={{
                        // textAlign: 'center',
                        fontFamily: 'ub-light',
                        color: '#4E4D4D',
                        fontSize: 16,
                      }}
                    >
                      {data.custom_field3}
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <TouchableOpacity
                        style={{ paddingHorizontal: 25 }}
                        onPress={() =>
                          WebBrowser.openBrowserAsync(data.custom_field4)
                        }
                      >
                        <IconDownload />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ paddingTop: 1 }}
                        onPress={() =>
                          FileSystem.downloadAsync(
                            data.custom_field4,
                            FileSystem.documentDirectory +
                              data.custom_field4.substr(
                                data.custom_field4.lastIndexOf('/') + 1
                              )
                          )
                            .then(async ({ uri }) => {
                              // console.log('Finished downloading to ', uri)
                              Sharing.shareAsync(uri)
                            })
                            .catch((error) => {
                              console.error(error)
                            })
                        }
                      >
                        <IconShareFile />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          }
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 90 : 130,
          }}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: 'center',
                width: '50%',
                marginTop: 25,
                position: 'relative',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#4E4D4D',
                  fontFamily: 'ub-reg',
                  textTransform: 'uppercase',
                }}
              >
                {item.preview_title}
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 10,
                  // marginBottom: 20,
                  position: 'relative',
                }}
                onPress={() =>
                  navigation.navigate('Course', {
                    screen: 'Lessons',
                    params: {
                      itemId: data.id,
                      moduleId: item.id,
                      lessonId:
                        item.lessons[0] != undefined
                          ? item.lessons[0].id
                          : null,
                    },
                  })
                }
              >
                <Image
                  style={styles.imageProduct}
                  source={
                    item.image_module !== null
                      ? {
                          uri: item.image_module,
                        }
                      : {
                          uri: data.image_сourses,
                        }
                  }
                />

                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#FF741F',
    width: '80%',
    marginLeft: '10%',
    marginTop: '7%',
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
  },
  progress: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
  },
  progressBar: {
    height: 13,
    width: '70%',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    flexDirection: 'row',
  },
  percent: {
    paddingRight: '5%',
    fontFamily: 'ub-reg',
    fontSize: 14,
  },
  progressBarLevel: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageProduct: {
    width: '95%',
    height: 153,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'ub-reg',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 18.38,
    color: '#4E4D4D',
    width: '65%',
  },
  flexDownfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
})
