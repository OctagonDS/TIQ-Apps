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
} from 'react-native'
import { gStyle } from '../../../styles/style'
import { IcoFireTop } from '../../atoms/iconFireTop'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const image = require('../../../assets/img/grey-geo.png')

export function CourseSlideOne({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = React.useState(false)

  const url = 'https://fe20295.online-server.cloud/api/v1/courses'

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
    // <ScrollView
    //   style={{ flex: 1, backgroundColor: '#fff' }}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // >
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
            <View
              style={{
                alignItems: 'center',
                width: '50%',
                marginTop: '10%',
                marginBottom: '10%',
                position: 'relative',
              }}
            >
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={{
                  flex: 1,
                  width: 165,
                  height: 165,
                  borderRadius: 8,
                  justifyContent: 'space-around',
                }}
                imageStyle={{ borderRadius: 5 }}
              >
                <Image
                  style={{
                    width: '95%',
                    height: 153,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={{
                    uri: `https://fe20295.online-server.cloud/storage/${item.image_сourses}`,
                  }}
                />
                <View
                  style={{
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
                  }}
                >
                  <IcoFireTop />
                </View>
              </ImageBackground>
              <Text
                style={{
                  fontFamily: 'ub-reg',
                  letterSpacing: -0.33,
                  fontSize: 16,
                  textAlign: 'left',
                  lineHeight: 18.38,
                  color: '#4E4D4D',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  position: 'absolute',
                  left: 10,
                  top: '100%',
                  width: '95%',
                }}
              >
                {item.title}
              </Text>
              <View></View>
            </View>
          )}
        />
      )}
    </View>
    // </ScrollView>
  )
}
