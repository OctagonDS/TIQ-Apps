import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { gStyle } from '../../styles/style'
import { IconFeedbackPlus } from '../atoms/iconCirclePlus'
import mainContext from '../../store/context/context'
import NetInfo from '@react-native-community/netinfo'

export const Feedback = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const { userProfile } = useContext(mainContext)
  const [connectNet, setConnectNet] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnectNet(state.isConnected)
    })
    return () => {
      setLoading(true)
      unsubscribe()
      setConnectNet(true)
    }
  }, [connectNet])
  return (
    <View style={gStyle.main}>
      {!isLoading ? (
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
          <View>
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
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('FeedbackForm')}
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
        <View></View>
      )}
    </View>
  )
}
