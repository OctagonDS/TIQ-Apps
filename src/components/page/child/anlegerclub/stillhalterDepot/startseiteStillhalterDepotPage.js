import React, { useState, useRef, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  RefreshControl,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { gStyle } from '../../../../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../../atoms/iconPlay'
import mainContext from '../../../../../store/context/context'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const Andrey =
  'https://fe20295.online-server.cloud/img/Andrei-Anissimov-1536x1536.png'

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
      borderRadius: 25,
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

export const StartseiteStillhalterDepotPage = (props) => {
  const { userProfile } = useContext(mainContext)
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View style={gStyle.main}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'android' ? 90 : 125,
          paddingTop: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: 'ub-medium',
              fontSize: 27,
              textAlign: 'center',
              color: '#FF741F',
            }}
          >
            Stillhalter Depot
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
              Verdiene am Ticken der Uhr Geld
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginTop: 15,
          }}
        >
          <Video
            ref={video}
            style={{
              alignSelf: 'center',
              width: 320,
              height: 200,
            }}
            source={{
              uri: 'https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Willkommen%20Stillhalter%20Depot.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            posterSource={{
              uri: 'https://1693712952.rsc.cdn77.org/109043/assets/1612288968642_Strategie_Stillhalter_Depot.jpg',
            }}
            usePoster
            posterStyle={{
              alignSelf: 'center',
              width: 320,
              height: 200,
              resizeMode: 'cover',
            }}
          />
          <View
            style={
              status.isPlaying || status.positionMillis > 0
                ? { display: 'none' }
                : {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'absolute',
                    alignSelf: 'center',
                  }
            }
          >
            <TouchableOpacity
              style={{ width: 50, height: 50 }}
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
            fontSize: 20,
            color: '#333',
          }}
        >
          Herzlich Willkommen, {userProfile.display_name}!
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
              fontFamily: 'ub-reg',
              fontSize: 16,
              color: '#333',
            }}
          >
            {`Das Stillhalter – Depot wurde entwickelt, um stabile Gewinne aus regelmäßigen Optionsprämien zu kassieren. Stillhalter zu sein, ist eine der spannendsten Möglichkeiten, wortwörtlich auf Knopfdruck, Einkommen zu generieren. Du kannst damit mehr Geld verdienen als ein Angestellter und das mit viel weniger Zeitaufwand.

In unserem Anlegerclub wirst Du ein System kennenlernen, dass Dein Leben verändern kann. Es ist ein einfaches, aber sehr wirkungsvolles System ‑ oder besser gesagt: ein Prozess. Wenn Du diesen Prozess anwendest, kannst Du Deine finanziellen Ziele mit Leichtigkeit erreichen.

Ich wünsche Dir viel Erfolg bei der Umsetzung!

Dein Andrei Anissimov, Herausgeber.`}
          </Text>
        </View>
        <View>
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
              Module im Stillhalter Depot
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
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
})
