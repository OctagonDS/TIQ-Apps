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
const poster1 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7578-1-1024x683.jpg'
const poster2 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7959-1024x683.jpg'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const StartseiteTraderCockpitPage = (props) => {
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}
            >
              <Image style={styles.imageBlocks} source={ghjk} />
              <Text style={[styles.blockText, { paddingRight: '10%' }]}>
                Marktanalysen und saisonalitäten
              </Text>
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
                {`Eine der einfachsten und zeitschonendsten Strategien überhaupt. Ein Mal pro Monat wird das Depot mit einem raffinierten Handelssystem angepasst. Damit produziert das System zuverlässig hohe Gewinne.

So investierst Du besser als jeder Fond – mit gerade Mal 10 Minuten pro Monat.`}
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
