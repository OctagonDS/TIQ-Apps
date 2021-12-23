import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native'
import { gStyle } from '../../../../styles/style'
import { IcoFireTop } from '../../../atoms/iconFireTop'
import { IcoLock } from '../../../atoms/iconLock'
import mainContext from '../../../../store/context/context'

// Переменные
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const image = require('../../../../assets/img/grey-geo.png')
const url = 'https://fe20295.online-server.cloud/api/v1/courses_paid'
const progressPercent = '0'

// Основная функция

export function CourseSlideTwo({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = React.useState(false)

  const [displayName, setDisplayName] = useState(null)
  const { userProfile } = useContext(mainContext)

  const getCourses = async () => {
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
    getCourses(true)
    wait(2000).then(() => getCourses(false))
  }, [])

  useEffect(() => {
    getCourses()
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
          data={data}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 95 : 110,
          }}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.courses}>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    `Hallo ${userProfile && userProfile.display_name}`,
                    'Sie haben diesen Kurs noch nicht gekauft, daher ist der Zugang begrenzt.',
                    [
                      {
                        text: 'Später',
                        onPress: () => console.log('Ask me later pressed'),
                      },
                      {
                        text: 'Kaufen',
                        onPress: () => console.log('Cancel Pressed'),
                      },
                    ]
                  )
                }
                style={{ position: 'relative', width: 165, height: 165 }}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.imageBack}
                  imageStyle={{ borderRadius: 5 }}
                >
                  <Image
                    style={styles.imageProduct}
                    source={{
                      uri: item.image_сourses,
                    }}
                  />
                  <TouchableOpacity style={styles.fireTop}>
                    <IcoFireTop fill={'#9C0000'} />
                  </TouchableOpacity>
                </ImageBackground>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(62,62,62,0.4)',
                    borderRadius: 5,
                    width: 165,
                    height: 165,
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IcoLock />
                </View>
              </TouchableOpacity>
              <View style={{ width: 165, height: 60 }}>
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
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert(
                        `Hallo ${userProfile && userProfile.display_name}`,
                        'Sie haben diesen Kurs noch nicht gekauft, daher ist der Zugang begrenzt.',
                        [
                          {
                            text: 'Später',
                            onPress: () => console.log('Ask me later pressed'),
                          },
                          {
                            text: 'Kaufen',
                            onPress: () => console.log('Cancel Pressed'),
                          },
                        ]
                      )
                    }
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  courses: {
    alignItems: 'center',
    width: '50%',
    marginTop: 20,
    // marginBottom: 20,
    position: 'relative',
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
  title: {
    fontFamily: 'ub-reg',
    letterSpacing: -0.33,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 18.38,
    color: '#4E4D4D',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  fireTop: {
    position: 'absolute',
    width: 34,
    height: 34,
    left: 0,
    bottom: 0,
    backgroundColor: '#FF741F',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageProduct: {
    width: '95%',
    height: 153,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageBack: {
    flex: 1,
    width: 165,
    height: 165,
    borderRadius: 8,
    justifyContent: 'space-around',
  },
})
