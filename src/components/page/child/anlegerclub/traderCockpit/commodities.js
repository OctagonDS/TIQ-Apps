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
const ghjk = require('../../../../../assets/img/ghjk.png')
const das = require('../../../../../assets/img/ikonki-wich.png')
const dm = require('../../../../../assets/img/dm.png')
import {
  Grid,
  AreaChart,
  LineChart,
  XAxis,
  YAxis,
} from 'react-native-svg-charts'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const Commodities = (props) => {
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
            Commodities
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
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Text>ТУТ БУДЕТ ИНОФРМАЦИЯ</Text>
          <Text>ПОСЛЕ ИМПОРТА API</Text>
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
    width: 300,
    // height: 160,
    marginTop: 15,
    borderRadius: 8,
    marginHorizontal: 10,
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
