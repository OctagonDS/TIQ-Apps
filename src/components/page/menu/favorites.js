import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import { IconCancel } from '../../atoms/iconCancel'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const url = 'https://fe20295.online-server.cloud/api/v1/courses_free'

export function FavoritPage(props) {
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
    <View style={gStyle.main}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '5%',
            paddingBottom: Platform.OS === 'android' ? 72 : 110,
          }}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
                marginVertical: 5,
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: 'rgba(255,116,31,0.9)',
                borderRadius: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  width: '82%',
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'ub-medium',
                    fontSize: 15,
                    color: '#fff',
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{}}>
                <IconCancel />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  )
}
