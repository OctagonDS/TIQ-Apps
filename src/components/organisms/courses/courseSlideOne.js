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
                marginTop: '5%',
                marginBottom: '5%',
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
                {/* <View
                  style={{
                    margin: 10,
                    width: 150,
                    height: 130,
                    borderRadius: 8,
                    justifyContent: 'space-around',
                  }}
                > */}
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
                {/* </View> */}
              </ImageBackground>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
    // </ScrollView>
  )
}
