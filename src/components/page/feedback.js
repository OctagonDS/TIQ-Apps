import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Button,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { gStyle } from '../../styles/style'
import { IconFeedbackPlus } from '../atoms/iconCirclePlus'
import { IconRead } from '../atoms/iconRead'
import { IconUnRead } from '../atoms/iconUnRead'
import mainContext from '../../store/context/context'
import NetInfo from '@react-native-community/netinfo'
import { useIsFocused } from '@react-navigation/native'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const Feedback = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const [ticket, setTicket] = useState([])
  const [token, setToken] = useState([])
  const [statistics, setStatistics] = useState({})
  const { userProfile } = useContext(mainContext)
  const [connectNet, setConnectNet] = useState(true)
  const [refreshing, setRefreshing] = React.useState(false)
  const isFocused = useIsFocused()

  const urlRefresh = `https://fe20295.online-server.cloud/api/v1/zoho/token`
  const urlSearchUser = `https://desk.zoho.eu/api/v1/contacts/search?email=${
    userProfile && userProfile.email
  }`

  const months = [
    'jan',
    'feb',
    'mär',
    'apr',
    'mai',
    'jun',
    'jul',
    'aug',
    'sep',
    'okt',
    'nov',
    'dez',
  ]

  const getTokenZoho = async () => {
    try {
      // Токен доступа
      const response = await fetch(urlRefresh, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()

      setToken(json.data)
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append('orgId', '20077040966')
      myHeaders.append(
        'Authorization',
        `Zoho-oauthtoken  ${json.data[0].access_token}`
      )

      // Поиск контакта
      const responseUser = await fetch(urlSearchUser, {
        method: 'GET',
        headers: myHeaders,
      })

      if (responseUser.status !== 204) {
        const jsonUser = await responseUser.json()

        // Статистика
        const responseStat = await fetch(
          `https://desk.zoho.eu/api/v1/contacts/${jsonUser.data[0].id}/statistics`,
          {
            method: 'GET',
            headers: myHeaders,
          }
        )
        const jsonStat = await responseStat.json()

        // Тикеты
        const responseTicket = await fetch(
          `https://desk.zoho.eu/api/v1/contacts/${jsonUser.data[0].id}/tickets?include=isRead`,
          {
            method: 'GET',
            headers: myHeaders,
          }
        )
        const jsonTicket = await responseTicket.json()

        setStatistics(jsonStat)
        setTicket(jsonTicket.data)
      } else {
        setTicket([])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const onRefresh = React.useCallback(() => {
    getTokenZoho(true)
    wait(2000).then(() => getTokenZoho(false))
  }, [])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnectNet(state.isConnected)
    })
    getTokenZoho()
    return () => {
      setLoading(true)
      unsubscribe()
      setConnectNet(true)
      setToken([])
      setTicket([])
      setStatistics({})
    }
  }, [connectNet, isFocused])

  return (
    <View style={gStyle.main}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#FF741F" />
          <View>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Überprüfung der Internetverbindung...
            </Text>
          </View>
        </View>
      ) : connectNet === null || connectNet === false ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: 147,
                  height: 150,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                }}
                source={require('../../assets/img/no-signal.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Ooops..! Keine Internetverbindung.
            </Text>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Einige Inhalte sind ohne das Internet nicht verfügbar.
            </Text>
          </View>
        </View>
      ) : connectNet && connectNet === true ? (
        <View style={gStyle.main}>
          {ticket.length !== 0 ? (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <FlatList
                  data={ticket}
                  numColumns={1}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  ListHeaderComponent={
                    <View
                      style={{
                        marginHorizontal: '5%',
                        paddingBottom: 15,
                      }}
                    >
                      <Text style={styles.statTitle}>
                        Offene Tickets:{' '}
                        <Text style={styles.statCount}>
                          {statistics.openTickets}
                        </Text>
                      </Text>
                      <Text style={styles.statTitle}>
                        Geschlossene Tickets:{' '}
                        <Text style={styles.statCount}>
                          {statistics.closedTickets}
                        </Text>
                      </Text>
                      <Text style={styles.statTitle}>
                        Spam Tickets:{' '}
                        <Text style={styles.statCount}>
                          {statistics.spamTickets}
                        </Text>
                      </Text>
                    </View>
                  }
                  contentContainerStyle={{
                    paddingTop: '2%',
                    paddingBottom: Platform.OS === 'android' ? 95 : 110,
                  }}
                  keyExtractor={({ id }, index) => id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('draweTicket', {
                          itemId: item.id,
                        })
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          marginHorizontal: 15,
                          marginVertical: 0,
                          paddingVertical: 10,
                          backgroundColor:
                            item.status === 'Open'
                              ? 'rgba(255,116,31,0.3)'
                              : 'rgba(204, 204, 204, 0.5)',
                          paddingHorizontal: 10,
                          marginBottom: 15,
                          minHeight: 60,
                          borderRadius: 4,
                          position: 'relative',
                        }}
                      >
                        <View
                          style={{
                            paddingRight: 10,
                            justifyContent: 'space-around',
                          }}
                        >
                          <Text
                            style={{
                              color: '#454A4F',
                              fontFamily: 'ub-medium',
                              justifyContent: 'space-between',
                            }}
                          >
                            #{item.ticketNumber}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 12,
                                paddingRight: 2,
                                fontFamily: 'ub-reg',
                                color: '#888',
                              }}
                            >
                              {
                                months[
                                  new Date(item.customerResponseTime).getMonth()
                                ]
                              }
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'ub-reg',
                                color: '#888',
                              }}
                            >
                              {new Date(item.customerResponseTime).getDate()}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{ flex: 1, justifyContent: 'space-around' }}
                        >
                          <Text
                            style={{
                              color: '#666',
                              fontFamily: 'ub-medium',
                              paddingRight: 20,
                            }}
                            numberOfLines={1}
                          >
                            {item.subject}
                          </Text>
                          <View>
                            <Text
                              style={{
                                color:
                                  item.status === 'Open'
                                    ? '#06a406'
                                    : item.status === 'Closed'
                                    ? '#888'
                                    : '#ff5d5d',
                                fontFamily: 'ub-reg',
                                fontSize: 12,
                              }}
                            >
                              {item.status}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            position: 'absolute',
                            right: 10,
                            bottom: 10,
                          }}
                        >
                          {item.isRead === true ? <IconRead /> : <IconUnRead />}
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('FeedbackForm', {
                    accessToken: token && token[0].access_token,
                  })
                }
                style={{
                  position: 'absolute',
                  bottom: '16%',
                  right: '5%',
                  zIndex: 1,
                }}
              >
                <IconFeedbackPlus />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 35,
                  fontFamily: 'ub-reg',
                  fontSize: 17,
                  color: '#ACB3BF',
                }}
              >
                Sie haben noch keine Tickets erstellt
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('FeedbackForm', {
                    accessToken: token && token[0].access_token,
                  })
                }
                style={{
                  position: 'absolute',
                  bottom: '16%',
                  right: '5%',
                  zIndex: 1,
                }}
              >
                <IconFeedbackPlus />
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  statTitle: {
    fontFamily: 'ub-reg',
    color: '#333',
    fontSize: 12,
  },
  statCount: {
    color: '#FF741F',
    fontFamily: 'ub-medium',
    fontSize: 13,
  },
})
