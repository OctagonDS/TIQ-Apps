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
const adm = require('../../../../../assets/img/adm.png')
const euro_e = require('../../../../../assets/img/euro-e.png')
const ghjk = require('../../../../../assets/img/ghjk.png')
const dm = require('../../../../../assets/img/dm.png')

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

export const StartseiteDepotPage = (props) => {
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
            Starter Depot
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
              Vermögensaufbau für Durchstarter
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
              uri: 'https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Willkommen%20Starter%20Depot.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            posterSource={{
              uri: 'https://1693712952.rsc.cdn77.org/109043/assets/1612288166309_Starteseite_Starter_Depot.jpg',
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
            {`Das Starter Depot wurde für alle konzipiert, die erst am Anfang ihrer Börsenkarriere stehen und maximale Rendite mit minimalem Kapital- und Zeiteinsatz verbinden wollen.

Du brauchst keinerlei Börsenerfahrung, um mit den Empfehlungen des Redaktionsteams Dein Geld profitabel anzulegen. Für eine tiefere Erklärung der Strategie und der Bestandteile des Depots schaue Dir das Schulungsvideo an.

Ich wünsche Dir maximalen Anlageerfolg!

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
              Module im Starter Depot
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
              <Image style={styles.imageBlocks} source={adm} />
              <Text style={styles.blockText}>Aktie des monats</Text>
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
                {`Stärkste Fundamentaldaten, höchste Wachstumsaussichten und größte Unterbewertung – diese sorgfältig recherchierte Empfehlung der Redaktion erlaubt es Dir, höchste Chancen mit minimalen Risiken zu kombinieren.

So findest Du die besten Aktien – ohne selbst stundenlang suchen zu müssen.`}
              </Text>
            </View>
          </ImageBackground>

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
              <Image style={styles.imageBlocks} source={euro_e} />
              <Text style={styles.blockText}>Empfehlungsarchiv</Text>
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
                {`Viele der letzten Empfehlungen sind nach wie vor ein Kauf – hier findest Du das Archiv der letzten Empfehlungen der Redaktion. In vielen empfohlenen Aktien ist der Club investiert.

Damit bekommst Du schnell einen Überblick über die Auswahlkriterien der Redaktion.
`}
              </Text>
            </View>
          </ImageBackground>

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
              <Text style={styles.blockText}>Starter Depot</Text>
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
                {`Angefangen am 1. Januar 2021 mit 5.000 € wächst das Konto des Clubs kontinuierlich. Wir investieren jeden Monat in die stärksten Aktien – und lassen Dich den Experten über die Schulter schauen.

So baust Du Schritt für Schritt Dein sicheres und profitables Aktiendepot auf.
`}
              </Text>
            </View>
          </ImageBackground>

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
              <Image style={styles.imageBlocks} source={dm} />
              <Text style={styles.blockText}>Dax Millionär</Text>
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

So investierst Du besser als jeder Fond – mit gerade Mal 10 Minuten pro Monat.
`}
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
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
  },
})
