import React, { useState, useEffect, useContext, useMemo } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native'
import { gStyle } from '../../../../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../../atoms/iconPlay'
import mainContext from '../../../../../store/context/context'
import { IcoBTC } from '../../../../atoms/iconCockpit/iconBTC'
import { IcoEthereum } from '../../../../atoms/iconCockpit/iconEthereum'
import RenderHtml from 'react-native-render-html'
import { useIsFocused } from '@react-navigation/native'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const poster1 = require('../../../../../assets/img/BuySell.png')

const GradientHold = ({ name }) => (
  <LinearGradient
    colors={['#d9a604', '#fcd107']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <Text style={{ fontFamily: 'ub-medium', color: '#fff' }}>HOLD</Text>
    </View>
  </LinearGradient>
)

const GradientBuy = ({ name }) => (
  <LinearGradient
    colors={['#4c9523', '#96be11']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <Text style={{ fontFamily: 'ub-medium', color: '#fff' }}>BUY</Text>
    </View>
  </LinearGradient>
)

const GradientSell = ({ name }) => (
  <LinearGradient
    colors={['#ad061c', '#d30017']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <Text style={{ fontFamily: 'ub-medium', color: '#fff' }}>SELL</Text>
    </View>
  </LinearGradient>
)

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const tagsStyles = {
  p: {
    color: '#333',
    textAlign: 'left',
    // marginBottom: 10,
    fontFamily: 'ub-medium',
    fontSize: 14,
  },
  b: {
    fontWeight: 'bold',
  },
  h2: {
    color: '#333',
    fontFamily: 'ub-medium',
    textAlign: 'left',
  },
  h3: {
    color: '#333',
    fontFamily: 'ub-medium',
    textAlign: 'left',
  },
  strong: {
    color: '#594e4e',
  },
  a: {
    color: '#ff741f',
    textDecorationLine: 'none',
  },
}

export const SignaleTrendDepot = (props) => {
  const { userProfile } = useContext(mainContext)
  const [isLoading, setLoading] = useState(true)
  const lastUrl = 'https://fe20295.online-server.cloud/api/v1/signal/tdsignal'
  const url = 'https://fe20295.online-server.cloud/api/v1/signal/tdsignals'
  const [refreshing, setRefreshing] = React.useState(false)
  const [lastSignal, setLastSignal] = useState([])
  const [allSignal, setAllSignal] = useState([])
  const isFocused = useIsFocused()
  const contentWidth = useWindowDimensions().width

  const onRefresh = React.useCallback(() => {
    Signal(true)
    wait(2000).then(() => Signal(false))
  }, [])

  const Signal = async () => {
    try {
      const responseLast = await fetch(lastUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonLast = await responseLast.json()

      const responseAll = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const jsonAll = await responseAll.json()
      setLastSignal(jsonLast.data)
      setAllSignal(jsonAll.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  // console.log(lastSignal)
  // console.log(allSignal)
  useMemo(() => {
    Signal()
    return () => {
      setLoading(true), setAllSignal([]), setLastSignal([])
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
            data={lastSignal}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListHeaderComponent={
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'ub-medium',
                      fontSize: 27,
                      textAlign: 'center',
                      color: '#FF741F',
                    }}
                  >
                    Handelssignale
                  </Text>
                  <View style={{ marginTop: 3 }}>
                    <Text
                      style={{
                        fontFamily: 'ub-medium',
                        fontSize: 17,
                        textAlign: 'center',
                        color: '#FF741F',
                      }}
                    >
                      Trend Depot Trader IQ Anlegerclub
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                  <Image
                    style={{ width: '90%', height: 200 }}
                    resizeMode="cover"
                    source={poster1}
                  />
                </View>
                <View style={{ paddingBottom: 30 }}>
                  {/* <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={[styles.imageBack, {}]}
                    imageStyle={{ borderRadius: 5 }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'ub-medium',
                        fontSize: 25,
                        textAlign: 'center',
                      }}
                    >
                      Letztes
                    </Text>
                  </ImageBackground> */}
                </View>
              </View>
            }
            contentContainerStyle={{
              paddingBottom: Platform.OS === 'android' ? 90 : 125,
              paddingTop: 10,
            }}
            ListFooterComponent={
              <FlatList
                data={allSignal}
                ListHeaderComponent={
                  <View style={{ paddingBottom: 30 }}>
                    <ImageBackground
                      source={image}
                      resizeMode="cover"
                      style={[styles.imageBack, {}]}
                      imageStyle={{ borderRadius: 5 }}
                    >
                      <Text
                        style={{
                          color: '#fff',
                          fontFamily: 'ub-medium',
                          fontSize: 25,
                          textAlign: 'center',
                        }}
                      >
                        Trade archiv
                      </Text>
                    </ImageBackground>
                  </View>
                }
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <View>
                      <Text style={styles.titleSignal}>{item.title}</Text>
                      <Text style={styles.dateCarbon}>
                        Veröffentlicht: {item.created_at}
                      </Text>
                      <View
                        style={{ paddingHorizontal: '2.5%', paddingBottom: 20 }}
                      >
                        <RenderHtml
                          tagsStyles={tagsStyles}
                          source={{ html: item.content }}
                          contentWidth={contentWidth}
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            }
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View>
                <View>
                  <Text style={styles.titleSignal}>{item.title}</Text>
                  <Text style={styles.dateCarbon}>
                    Veröffentlicht: {item.created_at}
                  </Text>
                  <View style={{ paddingHorizontal: '2.5%', paddingBottom: 5 }}>
                    <RenderHtml
                      tagsStyles={tagsStyles}
                      source={{ html: item.content }}
                      contentWidth={contentWidth}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    width: '95%',
    height: 75,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageBackTwo: {
    flex: 1,
    width: 350,
    height: 75,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageBlock: {
    width: 160,
    height: 160,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  blockText: {
    color: '#FF741F',
    fontFamily: 'ub-medium',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 5,
  },
  imageBlocks: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    // alignContent: 'center',
  },
  imageAvatar: {
    overflow: 'hidden',
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
  },
  itemPosition: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemTitle: {
    fontFamily: 'ub-medium',
    fontSize: 17,
    paddingHorizontal: 15,
    color: '#333',
  },
  itemText: {
    textAlign: 'left',
    marginTop: 15,
    fontFamily: 'ub-reg',
    fontSize: 16,
    color: '#4E4D4D',
  },
  titleSignal: {
    color: '#FF741F',
    textAlign: 'left',
    fontSize: 16,
    paddingLeft: '2.5%',
    fontFamily: 'ub-medium',
  },
  dateCarbon: {
    color: '#666',
    textAlign: 'left',
    fontSize: 12,
    paddingLeft: '2.5%',
    fontFamily: 'ub-reg',
    paddingTop: 5,
  },
})
