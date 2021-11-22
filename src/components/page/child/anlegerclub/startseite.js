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
  ImageBackground,
  Image,
} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { gStyle } from '../../../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../atoms/iconPlay'

const image = require('../../../../assets/img/black-geo.png')
const imageGray = require('../../../../assets/img/grey-geo.png')
const blockOne = 'https://fe20295.online-server.cloud/img/tyrtyr.png'
const blockTwo = 'https://fe20295.online-server.cloud/img/ghedfs.png'
const blockThree = 'https://fe20295.online-server.cloud/img/ghjk.png'
const blockFour = 'https://fe20295.online-server.cloud/img/hrthrt.png'
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

export const Startseite = (props) => {
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
            posterSource={{
              uri: 'https://1693712952.rsc.cdn77.org/109043/assets/1631259341220_1612095506214_Herzlich_Wilkommen_Anlegerclub.jpg',
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
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.imageBack}
            imageStyle={{ borderRadius: 5 }}
          >
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ub-medium',
                fontSize: 29,
                textAlign: 'center',
              }}
            >
              Der Trader IQ Anlegerclub
            </Text>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={styles.imageBlock}
            imageStyle={{ borderRadius: 5, alignSelf: 'flex-end' }}
          >
            <Image
              style={[styles.imageBlocks, { marginBottom: 14 }]}
              source={{
                uri: blockOne,
              }}
            />
            <Text style={styles.blockText}>Starter depot</Text>
          </ImageBackground>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={styles.imageBlock}
            imageStyle={{ borderRadius: 5, justifyContent: 'space-between' }}
          >
            <Image
              style={styles.imageBlocks}
              source={{
                uri: blockTwo,
              }}
            />
            <Text style={styles.blockText}>Der Trader IQ Anlegerclub</Text>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={styles.imageBlock}
            imageStyle={{ borderRadius: 5 }}
          >
            <Image
              style={styles.imageBlocks}
              source={{
                uri: blockThree,
              }}
            />
            <Text style={styles.blockText}>Der Trader IQ Anlegerclub</Text>
          </ImageBackground>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={styles.imageBlock}
            imageStyle={{ borderRadius: 5 }}
          >
            <Image
              style={styles.imageBlocks}
              source={{
                uri: blockFour,
              }}
            />
            <Text style={styles.blockText}>Der Trader IQ Anlegerclub</Text>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.imageBackTwo}
            imageStyle={{ borderRadius: 5 }}
          >
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ub-medium',
                fontSize: 29,
                textAlign: 'center',
              }}
            >
              Das redaktionsteam
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginHorizontal: 10,
            paddingHorizontal: 10,
            // width: '80%',
            marginTop: 20,
          }}
        >
          <View style={styles.imageAvatar}>
            <Image
              style={{ width: 90, height: 90 }}
              resizeMode="cover"
              source={{
                uri: Andrey,
              }}
            />
          </View>
          <Text
            style={{
              color: '#50555C',
              fontFamily: 'ub-medium',
              fontSize: 20,
              marginLeft: 10,
              // width: 240,
              paddingRight: 10,
            }}
          >
            Andrei Anissimov Gründer und Herausgeber
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    width: 350,
    height: 100,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageBackTwo: {
    flex: 1,
    width: 350,
    height: 70,
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
