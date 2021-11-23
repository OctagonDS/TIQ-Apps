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
const poster1 = require('../../../../../assets/img/watchlist.jpg')

export const StillhalterWatchlist = (props) => {
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
            Watchlist
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
              Stillhalter Depot Trader IQ Anlegerclub
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
          Diese Aktien beobachtet das Redaktionsteam
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
            {`Für das Stillhalter-Depot wählen wir Aktien aus, die überwiegend eine gute und stabile Dividendenrendite aufweisen, die finanziell stabil sind, ein positives Gewinnwachstum in den nächsten Jahren erzielen werden, ein nachvollziehbares Geschäftsmodell haben, eine Mindest-Marktliquidation aufweisen, ein erfahrenes Management mit angemessenen Bezügen haben sowie eine vorteilhafte Besitzverteilung und deren Anteile keine starke Verwässerung ausweisen.`}
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
              Aktien watchlist
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
            Импорт API
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
