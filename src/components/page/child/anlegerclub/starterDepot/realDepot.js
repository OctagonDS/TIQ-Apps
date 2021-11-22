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
import { IconCheck } from '../../../../atoms/iconCheck'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const adm = require('../../../../../assets/img/adm.png')
const euro_e = require('../../../../../assets/img/euro-e.png')
const ghjk = require('../../../../../assets/img/ghjk.png')
const dm = require('../../../../../assets/img/dm.png')
const Andrey = require('../../../../../assets/img/Andrei-Anissimov.png')

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

export const RealDepot = (props) => {
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
            Real Depot
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
              Das Starter-Depot des Anlegerclubs
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
              uri: 'https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Strategie%20Starter%20Depot.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            posterSource={{
              uri: 'https://1693712952.rsc.cdn77.org/109043/assets/1612288296832_Strategie_Starter_Depot.jpg',
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
          Die Strategie des Starter Real-Depots
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
            {`Angefangen mit 5.000€ am 1. Februar 2021 investieren wir monatlich in Aktien mit den stärksten Fundamentaldaten, höchsten Wachstumsaussichten und größten Unterbewertung.

Ein Teil des Depots wird nach der DAX-Millionärsstrategie gehandelt – der Rest wird monatlich in neue Aktien oder Bestandspositionen investiert. Bei der Aktienauswahl verbinden wir hohe Dividendenrenditen mit attraktiven Wachstumschancen.

Zusätzlich sorgen Einzahlungen von 200 € pro Monat für den Wachstumsturbo sowie die lukrativen Dividendenzahlungen. Das Depot ist ideal für alle, die klein anfangen und schnell aber sicher Vermögen aufbauen und höchste Chancen mit minimalen Risiken kombinieren wollen.`}
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
              Video-Auswertung des monats
            </Text>
          </ImageBackground>
        </View>
        <View>
          <Text
            style={{ textAlign: 'center', fontSize: 16, marginVertical: 15 }}
          >
            Тут другой ролик
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
              Depotübersicht
            </Text>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'ub-reg',
              color: '#666',
            }}
          >
            Positionen
          </Text>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'ub-medium',
              color: '#666',
            }}
          >
            Импорт SCV
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
              Depotauswertung vergangenheit
            </Text>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{ textAlign: 'center', fontSize: 16, marginVertical: 15 }}
          >
            Тут другой ролик и дата
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'ub-reg',
              color: '#666',
            }}
          >
            Positionen
          </Text>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'ub-medium',
              color: '#666',
            }}
          >
            Импорт SCV
          </Text>
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
    width: '90%',
    // height: 160,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
  },
  blockText: {
    color: '#FF741F',
    fontFamily: 'ub-medium',
    fontSize: 19,
    textAlign: 'center',
    alignSelf: 'center',
  },
  imageBlocks: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  imageAvatar: {
    overflow: 'hidden',
    borderRadius: 100,
    width: 200,
    height: 200,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  line: {
    height: 3,
    width: '95%',
    backgroundColor: '#4E4D4D',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 3,
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
})
