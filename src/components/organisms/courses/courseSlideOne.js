import React, { useEffect, useState } from 'react'
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
} from 'react-native'
import { gStyle } from '../../../styles/style'
import { IcoFireTop } from '../../atoms/iconFireTop'

// Переменные
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const image = require('../../../assets/img/grey-geo.png')
const url = 'https://fe20295.online-server.cloud/api/v1/courses'
const progressPercent = '80'

// Основная функция

export function CourseSlideOne({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = React.useState(false)

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
  }, [])

  return (
    <View
      style={{
        marginBottom: '20%',
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
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.courses}>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imageBack}
                imageStyle={{ borderRadius: 5 }}
              >
                <Image
                  style={styles.imageProduct}
                  source={{
                    uri: `https://fe20295.online-server.cloud/storage/${item.image_сourses}`,
                  }}
                />
                <View style={styles.fireTop}>
                  <IcoFireTop />
                </View>
              </ImageBackground>
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
                  <Text style={styles.title}>{item.title}</Text>
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
    marginBottom: '0%',
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
