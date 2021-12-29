import React, { useEffect, useState, useMemo, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'
import { gStyle } from '../../styles/style'
import { useIsFocused } from '@react-navigation/native'
import mainContext from '../../store/context/context'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const Notifications = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [dataMark, setDataMark] = useState([])
  const { userProfile, doCountNot } = useContext(mainContext)
  const isFocused = useIsFocused()
  const [refreshing, setRefreshing] = React.useState(false)
  const url = `https://fe20295.online-server.cloud/api/v1/notifications/index_unread/${
    userProfile && userProfile.idAdmin
  }`
  const urlMark = `https://fe20295.online-server.cloud/api/v1/notifications/index/${
    userProfile && userProfile.idAdmin
  }`
  const urlNotsMark = `https://fe20295.online-server.cloud/api/v1/notifications/mark/${
    userProfile && userProfile.idAdmin
  }`

  const onRefresh = React.useCallback(() => {
    Count(true)
    doCountNot(true)
    wait(2000).then(() => Count(false), doCountNot(false))
  }, [])

  const Count = async () => {
    try {
      const responseNot = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonNot = await responseNot.json()

      const responseNotMark = await fetch(urlMark, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonNotMark = await responseNotMark.json()
      setDataMark(jsonNotMark.data)
      setData(jsonNot.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const NotsMark = async () => {
    try {
      const responseNotsMark = await fetch(urlNotsMark, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonNotsMark = await responseNotsMark.json()
    } catch (error) {
      console.error(error)
    }
  }

  useMemo(() => {
    if (!isFocused) {
      NotsMark()
      doCountNot()
    }
    if (isFocused) {
      doCountNot()
    }
  }, [isFocused])

  useEffect(() => {
    Count()
    return () => {
      setLoading(true)
      setData([])
      setDataMark([])
    }
  }, [isFocused])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF741F" />
      ) : (
        <View style={gStyle.main}>
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListHeaderComponent={
              data.length > 0 ? (
                <View style={{ marginTop: 20, marginBottom: 10 }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      marginLeft: 15,
                      fontSize: 16,
                      fontFamily: 'ub-reg',
                      color: 'rgba(130,141,153,0.7)',
                    }}
                  >
                    Neue Benachrichtigungen
                  </Text>
                </View>
              ) : (
                <View></View>
              )
            }
            ListFooterComponent={
              <FlatList
                data={dataMark}
                ListHeaderComponent={
                  dataMark.length > 0 ? (
                    <View style={{ marginVertical: 10 }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          marginLeft: 15,
                          fontSize: 16,
                          fontFamily: 'ub-reg',
                          color: 'rgba(130,141,153,0.7)',
                        }}
                      >
                        Benachrichtigungen lesen
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )
                }
                contentContainerStyle={{
                  paddingBottom: Platform.OS === 'android' ? 72 : 110,
                }}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginHorizontal: 15,
                      marginVertical: 0,
                      paddingVertical: 10,
                    }}
                  >
                    <View>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          marginHorizontal: 5,
                        }}
                        resizeMode="cover"
                        source={
                          item.data.image != null
                            ? { uri: item.data.image }
                            : require('../../assets/img/grey-logo.jpg')
                        }
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          paddingLeft: 5,
                          fontFamily: 'ub-reg',
                          fontSize: 15,
                          color: '#454A4F',
                        }}
                      >
                        {item.data.title}
                      </Text>
                      <Text
                        style={{
                          paddingLeft: 5,
                          paddingRight: 10,
                          fontSize: 11,
                          marginTop: 4,
                          color: '#ACB3BF',
                        }}
                      >
                        {item.created_at}
                      </Text>
                    </View>
                  </View>
                )}
              />
            }
            contentContainerStyle={{
              paddingBottom: Platform.OS === 'android' ? 72 : 110,
            }}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginHorizontal: 15,
                  marginVertical: 0,
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginHorizontal: 5,
                    }}
                    resizeMode="cover"
                    source={
                      item.data.image != null
                        ? { uri: item.data.image }
                        : require('../../assets/img/grey-logo.jpg')
                    }
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: 'ub-reg',
                      fontSize: 15,
                      paddingLeft: 5,
                      color: '#454A4F',
                    }}
                  >
                    {item.data.title}
                  </Text>
                  <Text
                    style={{
                      paddingLeft: 5,
                      paddingRight: 10,
                      fontSize: 11,
                      marginTop: 4,
                      color: '#ACB3BF',
                    }}
                  >
                    {item.created_at}
                  </Text>
                </View>
              </View>
            )}
          />
          <ScrollView></ScrollView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  not: {
    textAlign: 'center',
    fontFamily: 'ub-reg',
    marginTop: '5%',
    fontSize: 20,
    marginBottom: 20,
    color: '#FF741F',
  },
})
