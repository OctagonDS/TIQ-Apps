import React, { useState, useEffect, useContext } from 'react'
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
import { IcoBTC } from '../../../../atoms/iconCockpit/iconBTC'
import { IcoEthereum } from '../../../../atoms/iconCockpit/iconEthereum'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const poster1 = require('../../../../../assets/img/EQvsPxoXUAAHDey.jpeg')

export const ClubtreffenStillhalter = (props) => {
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
            Clubtreffen
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
              Live Treffen mit der Redaktion
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
            {`Treffe Dich im Live Webinar mit der Redaktion und stelle Deine Fragen oder Anregungen. Wir stehen Dir in den Live-Sessions Rede und Antwort – und freuen uns auf den Dialog mit Dir.

So setzst Du die Empfehlungen des Clubs richtig um – und investierst vom Anfang an mit Erfolg.`}
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
              Video archiv
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
            Месяц
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
            Тут коллекция видео
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
