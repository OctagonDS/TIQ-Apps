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
} from 'react-native'
import { gStyle } from '../../../../styles/style'
import HTML from 'react-native-render-html'
import { Video, AVPlaybackStatus } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../atoms/iconPlay'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const GradientBtn = ({ name }) => (
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
  const url = `https://fe20295.online-server.cloud/api/v1/course/${JSON.stringify(
    itemId
  )}`

  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  const contentWidth = useWindowDimensions().width
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const active = '#FFFFFF'
  const inActive = '#ACB3BF'

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
      setData(json.data.modules)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const onRefresh = React.useCallback(() => {
    getModules(true)
    wait(2000).then(() => getModules(false))
  }, [])

  useEffect(() => {
    getModules()
  }, [])
  console.log(moduleId)
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
                onPress={() => navigation.setParams({ moduleId: item.id })}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    color: item.id == moduleId ? active : inActive,
                    borderBottomWidth: item.id == moduleId ? 2 : 0,
                    borderColor: item.id == moduleId ? '#FF741F' : '#454A4F',
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
          {data.map((item) => (
            <View key={item.id}>
              {item.lessons.map((itemLesson) => (
                <View key={itemLesson.id}>
                  {item.id == moduleId ? (
                    <View>
                      <Text>{itemLesson.title}</Text>
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
                          }}
                          source={{
                            uri: `${itemLesson.video_lesson}`,
                          }}
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
                            <GradientBtn />
                          </TouchableOpacity>
                        </View>
                      </View>
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

const styles = StyleSheet.create({})
