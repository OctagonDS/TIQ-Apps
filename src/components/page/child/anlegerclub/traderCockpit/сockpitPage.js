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

const poster1 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7578-1-1024x683.jpg'
const poster2 =
  'https://kurse.traderiq.net/wp-content/uploads/2021/10/DSC_7959-1024x683.jpg'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const СockpitPage = (props) => {
  const { userProfile } = useContext(mainContext)
  const [news, setNews] = useState([])

  const data = [
    {
      label: 'Один',
      value: 50,
    },
    {
      value: 10,
    },
    {
      label: 'Два',
      value: 85,
    },
    {
      value: 95,
    },
    {
      label: 'Три',
      value: 10,
    },
    {
      value: 35,
    },
    {
      label: 'Четыре',
      value: 20,
    },
    {
      value: 80,
    },
    {
      label: 'Пять',
      value: 40,
    },
    {
      value: 60,
    },
    {
      label: 'Шесть',
      value: 65,
    },
  ]

  const data2 = [
    {
      label: 'Один',
      value: 20,
    },
    {
      value: 60,
    },
    {
      label: 'Два',
      value: 80,
    },
    {
      value: 30,
    },
    {
      label: 'Три',
      value: 70,
    },
    {
      value: 60,
    },
    {
      label: 'Четыре',
      value: 60,
    },
    {
      value: 10,
    },
    {
      label: 'Пять',
      value: 20,
    },
    {
      value: 90,
    },
    {
      label: 'Шесть',
      value: 70,
    },
  ]

  const NewsTicker = async () => {
    return setNews([
      {
        id: 1,
        news: 'N-tv.de',
        image:
          'https://api.stockdio.com/visualization/financial/charts/GetImage.ashx?url=https://bilder4.n-tv.de/img/incoming/crop22948359/3481322772-cImg_16_9-w1200/3075651f898f556c785983cfdad0a849.jpg',
        title: 'Gewinne schmelzen ab: Powell-Ernennung drückt Techwerte',
        time: 'vor 10 Stunden',
      },
      {
        id: 2,
        news: 'FAZ.NET',
        image:
          'https://api.stockdio.com/visualization/financial/charts/GetImage.ashx?url=https://media1.faz.net/ppmedia/aktuell/4290311194/1.7646923/facebook_teaser_fplus/will-den-aktienhandel-von.jpg',
        title: 'Neobroker im Visier der Europäischen Kommission',
        time: 'vor 11 Stunden',
      },
      {
        id: 3,
        news: 'Spiegel Online',
        image:
          'https://api.stockdio.com/visualization/financial/charts/GetImage.ashx?url=https://cdn.prod.www.spiegel.de/images/5061e2a0-69e7-42bd-96ea-68a95352f583_w1280_r1.77_fpx34_fpy49.jpg',
        title:
          'Wirtschaftsprüfer unter Druck: EY erstattet Anzeige wegen Wambach-Bericht zum Fall Wirecard',
        time: 'vor 11 Stunden',
      },
    ])
  }

  useEffect(() => {
    NewsTicker()
  }, [])

  const axesSvg = { fontSize: 10, fill: '#828D99' }
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 30

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
        <ScrollView horizontal={true}>
          <View style={{ marginTop: 25 }}>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#30333A',
                  textAlign: 'left',
                  fontFamily: 'os-reg',
                }}
              >
                6 791.67 $
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#89d477',
                  textAlign: 'left',
                  fontFamily: 'os-reg',
                }}
              >
                +0.32 %
              </Text>
            </View>
            <View
              style={{
                height: 300,
                width: 350,
                padding: 25,
                paddingTop: 10,
                flexDirection: 'row',
              }}
            >
              <YAxis
                data={data}
                yAccessor={({ item }) => item.value}
                formatLabel={(value) => `${value}$`}
                style={{ marginBottom: xAxisHeight }}
                numberOfTicks={5}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <View style={{ flex: 1, marginLeft: 25 }}>
                <AreaChart
                  style={{ flex: 1 }}
                  data={data}
                  numberOfTicks={5}
                  yAccessor={({ item }) => item.value}
                  contentInset={verticalContentInset}
                  svg={{ stroke: '#FF741F', fill: 'rgba(255,116,31,0.1)' }}
                >
                  <Grid />
                </AreaChart>
                <XAxis
                  style={{
                    marginHorizontal: -10,
                    height: xAxisHeight,
                    marginTop: 10,
                  }}
                  data={data}
                  formatLabel={(index, _) => data[index].label}
                  contentInset={{ left: 30, right: 30 }}
                  svg={axesSvg}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#30333A',
                  textAlign: 'left',
                  fontFamily: 'os-reg',
                }}
              >
                32 476.43 $
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#f6696a',
                  textAlign: 'left',
                  fontFamily: 'os-reg',
                }}
              >
                -0.68 %
              </Text>
            </View>
            <View
              style={{
                height: 300,
                width: 350,
                padding: 25,
                paddingTop: 10,
                flexDirection: 'row',
              }}
            >
              <YAxis
                data={data2}
                yAccessor={({ item }) => item.value}
                formatLabel={(value) => `${value}$`}
                style={{ marginBottom: xAxisHeight }}
                numberOfTicks={5}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <View style={{ flex: 1, marginLeft: 25 }}>
                <AreaChart
                  style={{ flex: 1 }}
                  data={data2}
                  numberOfTicks={5}
                  yAccessor={({ item }) => item.value}
                  contentInset={verticalContentInset}
                  svg={{ stroke: '#FF741F', fill: 'rgba(255,116,31,0.1)' }}
                >
                  <Grid />
                </AreaChart>
                <XAxis
                  style={{
                    marginHorizontal: -10,
                    height: xAxisHeight,
                    marginTop: 10,
                  }}
                  data={data2}
                  formatLabel={(index, _) => data[index].label}
                  contentInset={{ left: 30, right: 30 }}
                  svg={axesSvg}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
              News ticker
            </Text>
          </ImageBackground>
        </View>
        {news.map((userData) => (
          <View
            key={userData.id}
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              marginHorizontal: 25,
              height: 80,
            }}
          >
            <View style={{ width: '60%' }}>
              <Text
                style={{
                  color: '#50555C',
                  fontFamily: 'os-reg',
                  fontSize: 13,
                  textTransform: 'uppercase',
                }}
              >
                {userData.news}
              </Text>
              <Text
                style={{ color: '#FF741F', fontFamily: 'os-reg', fontSize: 15 }}
              >
                {userData.title.substring(0, 30)}...
              </Text>
              <Text
                style={{ color: '#50555C', fontFamily: 'os-reg', fontSize: 10 }}
              >
                {userData.time}
              </Text>
            </View>
            <View style={{ width: '40%' }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                  marginHorizontal: 5,
                }}
                resizeMode="cover"
                source={{
                  uri: userData.image,
                }}
              />
            </View>
          </View>
        ))}
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
