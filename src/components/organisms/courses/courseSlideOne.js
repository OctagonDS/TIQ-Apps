import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native'
import { gStyle } from '../../../styles/style'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

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

  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  })

  return (
    // <ScrollView
    //   style={{ flex: 1, backgroundColor: '#fff' }}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // >
    <View
      style={{
        // margin: 0,
        marginBottom: '20%',
        // marginTop: '10%',
        // alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
      onLayout={(event) => setLayout(event.nativeEvent.layout)}
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
              }}
            >
              <View
                style={{
                  backgroundColor: '#000',
                  margin: 10,
                  width: 150,
                  height: 130,
                  borderRadius: 8,
                  justifyContent: 'space-around',
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 120,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={{
                    uri: `https://fe20295.online-server.cloud/storage/${item.image_сourses}`,
                  }}
                />
              </View>
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
