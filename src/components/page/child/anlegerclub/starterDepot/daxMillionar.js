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
const poster1 = require('../../../../../assets/img/mokaup-online-DAX-Millionär.png')
const hold = require('../../../../../assets/img/buy-sell-hold-1.png')

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

export const DaxMillionar = (props) => {
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
            Dax millionär
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
              So investierst Du besser als jeder Fonds
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
        <Text
          style={{
            textAlign: 'center',
            marginTop: 25,
            fontFamily: 'ub-medium',
            fontSize: 20,
            color: '#333',
          }}
        >
          Dax millionär handelsstrategie
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
            {`Eine der einfachsten und zeitschonendsten Strategien überhaupt. Ein Mal pro Monat wird das Depot mit dem raffinierten Handelssystem angepasst. Damit produziert das System zuverlässig hohe Gewinne.

So investierst Du besser als jeder Fond – mit gerade Mal 10 Minuten pro Monat. Hier findest Du die Signale der Strategie – die Schulungsvideos findest Du in Deinem Mitgliederbereich über diesen Link.`}
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
              5.000€ starterdepot
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ub-medium',
                fontSize: 25,
                textAlign: 'center',
              }}
            >
              mit dax millionär
            </Text>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 15 }}>
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
              Signale
            </Text>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={styles.itemPosition}>
            <View style>
              <View style={{ marginLeft: 15, width: 50, height: 50 }}>
                <GradientHold />
              </View>
            </View>
            <View style={{ flexDirection: 'column', width: '70%' }}>
              <Text style={styles.itemTitle}>Mai 2021:</Text>
              <Text style={styles.itemTitle}>HALTEN DAX-ETF LONG</Text>
            </View>
          </View>
          <View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Die Börse ist weiter bullisch und wir bleiben bei der bestehenden Long-Position.

Das Handelssystem zeigt weiter auf steigende Kurse – mit unserer Position sind wir bestens unterwegs.
Ein Neueinstieg ist nicht sinnvoll.`}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={styles.itemPosition}>
            <View style>
              <View style={{ marginLeft: 15, width: 50, height: 50 }}>
                <GradientBuy />
              </View>
            </View>
            <View style={{ flexDirection: 'column', width: '70%' }}>
              <Text style={styles.itemTitle}>Oktober 2021:</Text>
              <Text style={styles.itemTitle}>
                VERKAUFEN DAX-ETF SHORT / KAUFEN DAX-ETF LONG
              </Text>
            </View>
          </View>
          <View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Die bärische Saisonalität für den DAX ist beendet. Wir schließen die Position WKN: LYX0FV bzw. „DSD“ und erwirtschaften einen Gewinn von €48,09 = 4,73%.

Unser Handelssystem generiert für den Oktober ein Kaufsignal. Wir kaufen 8 ETFs mit WKN: LYX0AD bzw. LYY8 zum Preis von €129,24 je Stück und bleiben investiert bis ein Verkaufssignal entsteht.`}
              </Text>
            </View>
          </View>
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
