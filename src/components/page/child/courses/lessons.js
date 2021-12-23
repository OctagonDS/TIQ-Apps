import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Image,
  RefreshControl,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
  TextInput,
} from 'react-native'
import { gStyle } from '../../../../styles/style'
import HTML from 'react-native-render-html'
import { Video, AVPlaybackStatus } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../atoms/iconPlay'
import { AntDesign } from '@expo/vector-icons'
import { IconRefLess } from '../../../atoms/iconRefLess'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import * as WebBrowser from 'expo-web-browser'
import { IconDownload } from '../../../atoms/iconDownload'
import { IconShareFile } from '../../../atoms/iconShareFile'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const GradientBtnPlay = ({ name }) => (
  <LinearGradient
    colors={['#FB1818', '#FE4141']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <IconPlay />
    </View>
  </LinearGradient>
)

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

const GradientBtnCache = ({ name }) => (
  <LinearGradient
    colors={['#FF741F', '#E86312']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 3, justifyContent: 'center' }}
  >
    <Text style={styles.submitTextCache}>{name}</Text>
  </LinearGradient>
)

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

export function Lessons({ props, route, navigation }) {
  const { itemId } = route.params
  let { moduleId } = route.params
  let { lessonId } = route.params
  const url = `https://fe20295.online-server.cloud/api/v1/course/${JSON.stringify(
    itemId
  )}`

  const [videoUrl, setVideoUrl] = useState([])
  const [accordion, setAccordion] = useState(false)
  const [progressPercent, setProgressPercent] = useState(0)
  const [totalSize, setTotalSize] = useState(0)

  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  const contentWidth = useWindowDimensions().width
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const active = '#FFFFFF'
  const inActive = '#ACB3BF'

  const [refreshing, setRefreshing] = React.useState(false)

  async function arrayVideo() {
    let arrVideo = await FileSystem.readDirectoryAsync(
      FileSystem.cacheDirectory
    )
    return setVideoUrl(arrVideo)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  }

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
      setData(json.data.modules)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const Accordion = async () => {
    return setAccordion(!accordion)
  }
  const onRefresh = React.useCallback(() => {
    getModules(true)
    wait(2000).then(() => getModules(false))
  }, [])

  useEffect(() => {
    getModules()
    arrayVideo()
    return () => {
      setProgressPercent(0)
      setData([])
    }
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: '#454A4F' }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-around',
          }}
        >
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  borderBottomWidth: item.id == moduleId ? 2 : 0,
                  borderColor: item.id == moduleId ? '#FF741F' : '#454A4F',
                }}
                onPress={() =>
                  navigation.setParams({
                    moduleId: item.id,
                    lessonId:
                      item.lessons[0] != undefined ? item.lessons[0].id : null,
                  })
                }
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    color: item.id == moduleId ? active : inActive,
                    paddingVertical: 12,
                  }}
                >
                  {item.preview_title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'android' ? 90 : 125,
            paddingTop: 10,
          }}
        >
          {data.map((itemAcc) => (
            <View key={itemAcc.id} style={{ paddingHorizontal: 25 }}>
              {itemAcc.id == moduleId ? (
                <View>
                  <TouchableOpacity onPress={() => Accordion()}>
                    <View
                      style={{
                        backgroundColor: '#FF741F',
                        width: '100%',
                        height: 40,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: '7%',
                        marginTop: 10,
                      }}
                    >
                      <Text style={{ color: '#fff', fontFamily: 'ub-reg' }}>
                        {itemAcc.preview_title}
                      </Text>
                      <Text style={{ color: '#fff', fontFamily: 'ub-reg' }}>
                        {itemAcc.title}
                      </Text>
                      <AntDesign name="caretdown" size={12} color="#fff" />
                    </View>
                  </TouchableOpacity>
                  <View>
                    {accordion === true ? (
                      itemAcc.lessons.map((itemLessonAcc, index) => (
                        <View key={itemLessonAcc.id}>
                          <View
                            style={{
                              width: '95%',
                              alignSelf: 'center',
                            }}
                          >
                            <View style={styles.accordionBack}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.setParams({
                                    lessonId: itemLessonAcc.id,
                                  })
                                  Accordion()
                                }}
                              >
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: '#454A4F',
                                      paddingLeft: 30,
                                      fontFamily: 'ub-light',
                                    }}
                                  >
                                    Einheit {index + 1}
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#454A4F',
                                      paddingLeft: 30,
                                      fontFamily: 'ub-medium',
                                    }}
                                  >
                                    {itemLessonAcc.title}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      ))
                    ) : (
                      <View></View>
                    )}
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          ))}
          {data.map((item) => (
            <View
              key={item.id}
              style={{ paddingHorizontal: 25, paddingTop: 5 }}
            >
              {item.lessons.map((itemLesson) => (
                <View key={itemLesson.id}>
                  {item.id == moduleId && itemLesson.id == lessonId ? (
                    <View>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontFamily: 'ub-medium',
                          fontSize: 26,
                          color: '#454A4F',
                          marginTop: 20,
                        }}
                      >
                        {itemLesson.title}
                      </Text>
                      <View
                        style={{
                          justifyContent: 'center',
                          position: 'relative',
                          marginTop: 15,
                        }}
                      >
                        <Video
                          ref={video}
                          style={{
                            alignSelf: 'center',
                            width: 320,
                            height: 200,
                            borderWidth: 1,
                            borderColor: '#C4C4C4',
                          }}
                          source={
                            !videoUrl.includes(
                              decodeURI(
                                itemLesson.video_lesson.substr(
                                  itemLesson.video_lesson.lastIndexOf('/') + 1
                                )
                              )
                            )
                              ? { uri: `${itemLesson.video_lesson}` }
                              : videoUrl.includes(
                                  decodeURI(
                                    itemLesson.video_lesson.substr(
                                      itemLesson.video_lesson.lastIndexOf('/') +
                                        1
                                    )
                                  )
                                )
                              ? {
                                  uri:
                                    FileSystem.cacheDirectory +
                                    itemLesson.video_lesson.substr(
                                      itemLesson.video_lesson.lastIndexOf('/') +
                                        1
                                    ),
                                }
                              : {
                                  uri: `${itemLesson.video_lesson}`,
                                }
                          }
                          useNativeControls
                          resizeMode="contain"
                          isLooping
                          onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                          }
                          posterSource={{
                            uri: 'https://api.spotlightr.com/video/image?id=1078726',
                          }}
                          usePoster
                          posterStyle={{
                            alignSelf: 'center',
                            width: 320,
                            height: 200,
                            resizeMode: 'cover',
                          }}
                        />
                        <View
                          style={
                            status.isPlaying || status.positionMillis > 0
                              ? { display: 'none' }
                              : {
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  position: 'absolute',
                                  alignSelf: 'center',
                                }
                          }
                        >
                          <TouchableOpacity
                            style={{ width: 50, height: 50 }}
                            onPress={() => video.current.playAsync()}
                          >
                            <GradientBtnPlay />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <View>
                          <View style={{ width: '100%' }}>
                            <TouchableOpacity
                              style={{
                                width: '80%',
                                height: 30,
                                alignSelf: 'center',
                                alignSelf: 'flex-start',
                                width: '100%',
                              }}
                              onPress={async () => {
                                const callback = (downloadProgress) => {
                                  setTotalSize(
                                    formatBytes(
                                      downloadProgress.totalBytesExpectedToWrite
                                    )
                                  )
                                  let progress =
                                    downloadProgress.totalBytesWritten /
                                    downloadProgress.totalBytesExpectedToWrite
                                  progress = progress.toFixed(2) * 100
                                  setProgressPercent(progress.toFixed(0))
                                }
                                const downloadResumable =
                                  FileSystem.createDownloadResumable(
                                    itemLesson.video_lesson,
                                    FileSystem.cacheDirectory +
                                      itemLesson.video_lesson.substr(
                                        itemLesson.video_lesson.lastIndexOf(
                                          '/'
                                        ) + 1
                                      ),
                                    {},
                                    callback
                                  )

                                try {
                                  const { uri } =
                                    await downloadResumable.downloadAsync()
                                  console.log('Finished downloading to ', uri)
                                  await arrayVideo()
                                } catch (e) {
                                  console.error(e)
                                }
                              }}
                            >
                              <GradientBtnCache name="Zwischenspeicher" />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <View>
                            {videoUrl.includes(
                              decodeURI(
                                itemLesson.video_lesson.substr(
                                  itemLesson.video_lesson.lastIndexOf('/') + 1
                                )
                              )
                            ) ? (
                              <Text
                                style={{
                                  fontFamily: 'ub-reg',
                                  color: '#FB1818',
                                  fontSize: 12,
                                }}
                              >
                                Zwischengespeichert!
                              </Text>
                            ) : !videoUrl.includes(
                                decodeURI(
                                  itemLesson.video_lesson.substr(
                                    itemLesson.video_lesson.lastIndexOf('/') + 1
                                  )
                                )
                              ) &&
                              progressPercent > 0 &&
                              progressPercent < 100 ? (
                              <View>
                                <Text
                                  style={{
                                    fontFamily: 'ub-reg',
                                    color: '#333',
                                    fontSize: 12,
                                  }}
                                >
                                  Größe: {totalSize}
                                </Text>
                                <View style={styles.progress}>
                                  <View style={styles.progressBar}>
                                    <Animated.View
                                      style={
                                        ([styles.progressBarLevel],
                                        {
                                          backgroundColor: '#FF741F',
                                          width: `${progressPercent}%`,
                                          borderRadius: 5,
                                        })
                                      }
                                    />
                                  </View>
                                  <Text style={styles.percent}>
                                    {progressPercent}%
                                  </Text>
                                </View>
                              </View>
                            ) : (
                              <Text
                                style={{
                                  fontFamily: 'ub-reg',
                                  color: '#00b9eb',
                                  fontSize: 12,
                                }}
                              >
                                Nicht zwischengespeichert
                              </Text>
                            )}
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginTop: 10,
                          fontFamily: 'ub-reg',
                        }}
                      >
                        <Text style={{ color: '#545A60' }}>
                          Haben Sie diese Lektion abgeschlossen?
                        </Text>
                        <Text style={{ color: '#545A60' }}>
                          Dann bitte als abgeschlossen markieren.
                        </Text>
                      </View>
                      <View style={{ marginTop: 20, width: '100%' }}>
                        <TouchableOpacity
                          style={styles.wrapper}
                          onPress={() => {}}
                        >
                          <GradientBtn name="Als abgeschlossen markieren" />
                        </TouchableOpacity>
                      </View>
                      {itemLesson.custom_field1 != null ||
                      itemLesson.custom_field3 != null ? (
                        <View
                          style={{
                            marginTop: 30,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: 'ub-reg',
                              fontSize: 18,
                              color: '#454A4F',
                              marginRight: 25,
                            }}
                          >
                            Downloads:
                          </Text>
                          {itemLesson.custom_field1 != null ? (
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
                                  {itemLesson.custom_field1}
                                </Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}
                                >
                                  <TouchableOpacity
                                    style={{ paddingHorizontal: 25 }}
                                    onPress={() =>
                                      WebBrowser.openBrowserAsync(
                                        itemLesson.custom_field2
                                      )
                                    }
                                  >
                                    <IconDownload />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={{ paddingTop: 1 }}
                                    onPress={() =>
                                      FileSystem.downloadAsync(
                                        itemLesson.custom_field2,
                                        FileSystem.documentDirectory +
                                          itemLesson.custom_field2.substr(
                                            itemLesson.custom_field2.lastIndexOf(
                                              '/'
                                            ) + 1
                                          )
                                      )
                                        .then(async ({ uri }) => {
                                          // console.log(
                                          //   'Finished downloading to ',
                                          //   uri
                                          // )
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
                          {itemLesson.custom_field3 != null ? (
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
                                  {itemLesson.custom_field3}
                                </Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}
                                >
                                  <TouchableOpacity
                                    style={{ paddingHorizontal: 25 }}
                                    onPress={() =>
                                      WebBrowser.openBrowserAsync(
                                        itemLesson.custom_field4
                                      )
                                    }
                                  >
                                    <IconDownload />
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={{ paddingTop: 1 }}
                                    onPress={() =>
                                      FileSystem.downloadAsync(
                                        itemLesson.custom_field4,
                                        FileSystem.documentDirectory +
                                          itemLesson.custom_field4.substr(
                                            itemLesson.custom_field4.lastIndexOf(
                                              '/'
                                            ) + 1
                                          )
                                      )
                                        .then(async ({ uri }) => {
                                          // console.log(
                                          //   'Finished downloading to ',
                                          //   uri
                                          // )
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
                      ) : (
                        <View></View>
                      )}
                      <View style={{ marginTop: 20 }}>
                        <Text
                          style={{
                            fontFamily: 'ub-reg',
                            fontSize: 24,
                            color: '#454A4F',
                          }}
                        >
                          Kommentare
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}
                      >
                        <TextInput
                          style={{
                            borderWidth: 1.5,
                            borderColor: '#FF741F',
                            width: '100%',
                            textAlignVertical: 'top',
                            borderRadius: 7,
                            fontSize: 18,
                            paddingLeft: 10,
                            paddingTop: 15,
                            fontFamily: 'ub-reg',
                            color: '#333',
                            height: 100,
                          }}
                          multiline={true}
                          numberOfLines={10}
                          autoCapitalize="none"
                          autoCompleteType="off"
                          autoCorrect={false}
                          editable
                        />
                      </View>
                      <View style={{ marginTop: 20, width: '100%' }}>
                        <TouchableOpacity
                          style={[
                            styles.wrapper,
                            { alignSelf: 'flex-end', width: '65%' },
                          ]}
                          onPress={() => {}}
                        >
                          <GradientBtn name="Kommentar abschicken" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : item.id == moduleId && lessonId == null ? (
                    <View>
                      <Text>Ошибка</Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 17,
  },
  submitTextCache: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  accordionBack: {
    backgroundColor: 'rgba(126,134,158,0.15)',
    paddingVertical: 10,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  flexDownfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  progress: {
    flexDirection: 'row',
    width: 165,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    width: '70%',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    flexDirection: 'row',
  },
  percent: {
    paddingRight: 10,
    fontFamily: 'ub-light',
    fontSize: 12,
    letterSpacing: -0.33,
  },
  progressBarLevel: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
})
