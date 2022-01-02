import React, { useEffect, useState, useContext, useMemo } from 'react'
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
  useWindowDimensions,
} from 'react-native'
import { gStyle } from '../../styles/style'
import mainContext from '../../store/context/context'
import HTML from 'react-native-render-html'
import { IconEuro } from '../atoms/iconEuro'
import { LinearGradient } from 'expo-linear-gradient'
import * as WebBrowser from 'expo-web-browser'
import NetInfo from '@react-native-community/netinfo'

// Переменные
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={['#FF741F', '#E86312']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 5, justifyContent: 'center' }}
  >
    <Text style={styles.submitTextLog}>{name}</Text>
  </LinearGradient>
)

const tagsStyles = {
  p: {
    color: '#474747',
    textAlign: 'left',
    // marginBottom: 10,
    fontFamily: 'ub-light',
    fontSize: 14,
  },
  h1: {
    color: '#474747',
  },
  h2: {
    color: '#474747',
  },
  h3: {
    color: '#474747',
  },
  h4: {
    color: '#474747',
  },
  h5: {
    color: '#474747',
  },
  h6: {
    color: '#474747',
  },
  ul: {
    color: '#474747',
  },
  li: {
    color: '#474747',
  },
}

const url = 'https://fe20295.online-server.cloud/api/v1/mentor'

export const Mentor = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [connectNet, setConnectNet] = useState(true)
  const contentWidth = useWindowDimensions().width

  const [refreshing, setRefreshing] = React.useState(false)
  const { userProfile } = useContext(mainContext)

  const getMentor = async () => {
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
    getMentor(true)
    wait(2000).then(() => getMentor(false))
  }, [])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnectNet(state.isConnected)
    })

    getMentor()

    return () => {
      setData([])
      setLoading(true)
      unsubscribe()
      setConnectNet(true)
    }
  }, [connectNet])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text>connectNet: {connectNet && connectNet.toString()}</Text>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#FF741F" />
          <View>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Überprüfung der Internetverbindung...
            </Text>
          </View>
        </View>
      ) : connectNet === null || connectNet === false ? (
        <View>
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
        <FlatList
          data={data}
          numColumns={1}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 95 : 110,
          }}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.mainBlock}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={{ padding: 20 }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#474747',
                    fontFamily: 'ub-medium',
                  }}
                >
                  {item.title}
                </Text>
                <HTML
                  tagsStyles={tagsStyles}
                  source={{
                    html: `${item.description.replace(/^"(.+(?="$))"$/, '$1')}`,
                  }}
                  contentWidth={contentWidth}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#474747',
                      fontFamily: 'ub-light',
                    }}
                  >
                    {item.duration}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#474747',
                        fontFamily: 'ub-medium',
                      }}
                    >
                      {item.price}
                    </Text>
                    {item.price != null ? <IconEuro /> : <Text></Text>}
                  </View>
                </View>
                <View style={styles.block}>
                  <TouchableOpacity
                    style={styles.wrapper}
                    onPress={() => WebBrowser.openBrowserAsync(item.link)}
                  >
                    <GradientBtn name="Auswählen" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View></View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainBlock: {
    width: '90%',
    marginLeft: '5%',
    // backgroundColor: '#000',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 1,
    borderWidth: 0.5,
    borderColor: '#888888',
    marginBottom: 15,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-medium',
    fontSize: 18,
  },
  block: {
    alignItems: 'center',
    marginTop: '10%',
  },
  wrapper: {
    width: '100%',
    height: 50,
  },
})
