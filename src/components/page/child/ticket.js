import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Platform,
} from 'react-native'
import mainContext from '../../../store/context/context'
import NetInfo from '@react-native-community/netinfo'
import { gStyle } from '../../../styles/style'

// Переменне
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

// Основная функция

export function Ticket({ props, route, navigation }) {
  const { itemId } = route.params
  const { accessToken } = route.params

  const url = `https://desk.zoho.eu/api/v1/tickets/${itemId && itemId}`
  const urlHistory = `https://desk.zoho.eu/api/v1/tickets/${
    itemId && itemId
  }/History`

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [history, setHistory] = useState([])
  const { userProfile } = useContext(mainContext)

  const [refreshing, setRefreshing] = React.useState(false)

  const getTicket = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('orgId', '20077040966')
    myHeaders.append(
      'Authorization',
      `Zoho-oauthtoken  ${accessToken && accessToken}`
    )

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      })
      const json = await response.json()

      const responseHistory = await fetch(urlHistory, {
        method: 'GET',
        headers: myHeaders,
      })
      const jsonHistory = await responseHistory.json()

      setData(json)
      setHistory(jsonHistory.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(history)
  const onRefresh = React.useCallback(() => {
    getTicket(true)
    wait(2000).then(() => getTicket(false))
  }, [])

  // console.log(descModulLocal)
  useEffect(() => {
    getTicket()
    return () => {
      setData([])
      setLoading(true)
      setHistory([])
    }
  }, [itemId])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#FF741F" />
        </View>
      ) : (
        <View style={gStyle.main}>
          <FlatList
            data={history}
            numColumns={1}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListHeaderComponent={
              <View>
                <Text>{data.subject}</Text>
              </View>
            }
            contentContainerStyle={{
              paddingTop: '2%',
              paddingBottom: Platform.OS === 'android' ? 95 : 110,
            }}
            keyExtractor={({ id }, index) => id && id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>ssss</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({})
