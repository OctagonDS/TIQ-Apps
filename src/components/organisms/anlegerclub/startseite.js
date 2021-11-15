import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { gStyle } from '../../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../atoms/iconPlay'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={['#FB1818', '#FE4141']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <IconPlay />
    </View>
  </LinearGradient>
)

export const Startseite = (props) => {
  const video = React.useRef(null)
  const [refreshing, setRefreshing] = React.useState(false)
  const [status, setStatus] = React.useState({})

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  function statusPlsy() {
    if (status.isPlaying || status.positionMillis > 0) {
      return { display: 'none' }
    } else {
      return {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
      }
    }
  }

  return (
    <View style={gStyle.main}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'android' ? 90 : 110,
        }}
      >
        {/* https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Startseite%20Anlegerclub%20Willkommen.mp4 */}
        <View style={{ justifyContent: 'center', position: 'relative' }}>
          <Video
            ref={video}
            style={{
              alignSelf: 'center',
              width: 320,
              height: 200,
            }}
            source={{
              uri: 'https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Startseite%20Anlegerclub%20Willkommen.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            posterSource={require('../../../../src/assets/img/posterAnleger.jpg')}
            usePoster={true}
            posterStyle={{ alignSelf: 'center', width: 320, height: 200 }}
          />
          <View style={statusPlsy()}>
            <TouchableOpacity
              style={{ width: 68, height: 68 }}
              onPress={() => video.current.playAsync()}
            >
              <GradientBtn />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontFamily: 'ub-medium',
            fontSize: 29,
          }}
        >
          Herzlich Willkommen
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
              fontFamily: 'ub-reg',
              fontSize: 20,
            }}
          >
            {`Mit der Anmeldung hast Du den Grundstein für Deinen nachhaltigen Börsenerfolg gelegt. Ab sofort bekommst Du regelmäßig die Top-Empfehlungen unserer Redaktion – fertig ausgearbeitete Trades, die Du sofort umsetzen kannst.

Noch nie war es einfacher, an der Börse erfolgreich zu investieren! Wir recherchieren die besten Trade-Empfehlungen – Du verbuchst die Gewinne. Damit investierst Du sicher und profitabel – und das mit minimalem Zeiteinsatz, ohne selbst Profi werden zu müssen. 

Ich wünsche Dir maximalen Börsenerfolg!

Dein Andrei Anissimov, Herausgeber.`}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
