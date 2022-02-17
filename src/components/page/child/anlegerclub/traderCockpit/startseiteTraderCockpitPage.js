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
import { gStyle } from '../../../../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../../../../atoms/iconPlay'
import mainContext from '../../../../../store/context/context'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const ghjk = require('../../../../../assets/img/ghjk.png')
const das = require('../../../../../assets/img/ikonki-wich.png')
const dm = require('../../../../../assets/img/dm.png')
const poster1 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7578-1-1024x683.jpg'
const poster2 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7959-1024x683.jpg'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const StartseiteTraderCockpitPage = ({ navigation }) => {
  const { userProfile } = useContext(mainContext)

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
            Trader Cockpit
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
              Handelssignale für maximale Gewinne
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Image
            style={{ width: '90%', height: 200 }}
            resizeMode="cover"
            source={{
              uri: poster1,
            }}
          />
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
          Herzlich Willkommen, {userProfile && userProfile.display_name}!
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
            {`Das Trader Cockpit wurde entwickelt, um Dir die besten Trade-Signale aus einer Vielzahl von Märkten zu geben. Damit kannst Du wortwörtlich auf Knopfdruck Einkommen generieren. Du kannst damit mehr Geld verdienen als ein Angestellter und das mit viel weniger Zeitaufwand.

Trading erlaubt es Dir, überall in der Welt mit den Märkten zu arbeiten, ob im Büro, zu Hause oder in einem Strandcafé. Der technologische Wandel der Moderne, hat uns die Möglichkeit eröffnet mit einem Laptop und einer Internetverbindung ein Geschäft aufzubauen. Ich liebe die Möglichkeit überall in der Welt traden zu können und nutze diese Freiheit.

Und Du kannst das auch! Trading kann Dir die Freiheit geben, von der Du schon immer geträumt hast. Die Freiheit, das zu tun, was Du willst und es dann zu tun, wenn es Dir passt. Sorgen über die Finanzen sind damit passé. Ich spreche von der finanziellen Freiheit, die ich mit Börsenhandel erreicht habe. Das Rezept dafür teile ich mit Dir hier:

In unserem Anlegerclub wirst Du ein System kennen lernen, dass Dein Leben verändern kann. Es ist ein einfaches, aber sehr wirkungsvolles System ‑ oder besser gesagt: ein Prozess. Wenn Du diesen Prozess anwendest, kannst Du Deine finanziellen Ziele mit Leichtigkeit erreichen.

Ich wünsche Dir viel Erfolg bei der Umsetzung!

Dein Andrei Anissimov, Herausgeber.`}
          </Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Image
            style={{ width: '90%', height: 200 }}
            resizeMode="cover"
            source={{
              uri: poster2,
            }}
          />
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
              Module im Trader Cockpit
            </Text>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={[styles.imageBlock, {}]}
            imageStyle={{
              borderRadius: 5,
              alignSelf: 'flex-end',
              borderWidth: 1,
              borderColor: '#ccc',
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Commodities')
                }}
              >
                <Image style={styles.imageBlocks} source={ghjk} />
                <Text style={[styles.blockText, { width: '70%' }]}>
                  Marktanalysen und saisonalitäten
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text
                style={{
                  textAlign: 'left',
                  marginTop: 15,
                  fontFamily: 'ub-reg',
                  fontSize: 16,
                  color: '#4E4D4D',
                }}
              >
                {`Commodities, Indizes, Forex und Krypto – hier findest Du die Charts der wichtigsten Märkte für einen schnellen Überblick. Die Übersicht der Saisonalitäten liefert Dir wichtige Einblicke in die Märkte.

Die wöchentliche Marktanalyse des Chefredakteurs bereitet Dich ideal auf die Handelswoche vor.`}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={[styles.imageBlock, {}]}
            imageStyle={{
              borderRadius: 5,
              alignSelf: 'flex-end',
              borderWidth: 1,
              borderColor: '#ccc',
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Cockpit')
                }}
              >
                <Image style={styles.imageBlocks} source={das} />
                <Text style={[styles.blockText, { width: '70%' }]}>
                  Das Cockpit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text
                style={{
                  textAlign: 'left',
                  marginTop: 15,
                  fontFamily: 'ub-reg',
                  fontSize: 16,
                  color: '#4E4D4D',
                }}
              >
                {`Hier findest Du auf einen Blick alles, was das Trader-Herz begehrt. Alle wichtigen Marktdaten auf einen Blick zusammengefasst – damit entgeht Dir bei Deinen täglichen Aufgaben nichts mehr.

Dich erwartet die komplette Marktkontrolle für die richtigen Trading-Entscheidungen.`}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={imageGray}
            resizeMode="cover"
            style={[styles.imageBlock, {}]}
            imageStyle={{
              borderRadius: 5,
              alignSelf: 'flex-end',
              borderWidth: 1,
              borderColor: '#ccc',
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Signale')
                }}
              >
                <Image style={styles.imageBlocks} source={dm} />
                <Text style={[styles.blockText, { width: '70%' }]}>
                  Die handelssignale
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text
                style={{
                  textAlign: 'left',
                  marginTop: 15,
                  fontFamily: 'ub-reg',
                  fontSize: 16,
                  color: '#4E4D4D',
                }}
              >
                {`Commodities, Indizes, Forex und Krypto – sobald ein neues Handelssignal entsteht bist Du informiert. Jedes Handelssignal bekommst Du als E-Mail in Dein Postfach und als Telegram-Nachricht auf Dein Handy – so verpasst Du nichts mehr.

Damit handelst Du im richtigen Moment – ohne selbst vor den Charts zu sitzen.`}
              </Text>
            </View>
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
    textAlign: 'left',
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
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
  },
})
