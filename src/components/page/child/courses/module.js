import React, { useState, useEffect } from 'react'
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

export function Modules({ props, route }) {
  const { itemId } = route.params

  const url = `https://fe20295.online-server.cloud/api/v1/course/${JSON.stringify(
    itemId
  )}`

  const contentWidth = useWindowDimensions().width
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const progressPercent = '80'

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
  const onRefresh = React.useCallback(() => {
    getModules(true)
    wait(2000).then(() => getModules(false))
  }, [])

  useEffect(() => {
    getModules()
    return () => {
      setData([])
    }
  }, [])

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
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontFamily: 'ub-medium',
                      fontSize: 20,
                    }}
                  >
                    {data.title.replace(/^"(.+(?="$))"$/, '$1')}
                  </Text>
                  {/* <Text style={{ color: '#fff' }}>
                  {JSON.stringify(titleDescription)}
                </Text> */}
                  <HTML
                    tagsStyles={tagsStyles}
                    source={{
                      html: `${data.description.replace(
                        /^"(.+(?="$))"$/,
                        '$1'
                      )}`,
                    }}
                    contentWidth={contentWidth}
                  />
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
                      // textAlign: 'center',
                      paddingHorizontal: 20,
                    }}
                  >
                    Fortschritt
                  </Text>
                </View>
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
                  <Text style={styles.percent}>{progressPercent}%</Text>
                </View>
              </View>
            </View>
          }
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 90 : 110,
          }}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: 'center',
                width: '50%',
                marginTop: 70,
                // marginBottom: 20,
                position: 'relative',
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'ub-reg',
    fontSize: 40,
    color: '#545A60',
    alignSelf: 'center',
  },
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
    width: 190,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
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
  },
  progressBarLevel: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
})
