import React, { useState, useRef, useContext, useEffect } from 'react'
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
  Modal,
} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { gStyle } from '../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../atoms/iconPlay'
import mainContext from '../../store/context/context'
import { IconCloseModal } from '../atoms/iconCloseM'
import { IconShieldUl } from '../atoms/iconShieldUl'

const image = require('../../assets/img/black-geo.png')
const imageGray = require('../../assets/img/grey-geo.png')
const anlegerLock = require('../../assets/img/anlegerlock.png')
const blockOne = 'https://fe20295.online-server.cloud/img/tyrtyr.png'
const blockTwo = 'https://fe20295.online-server.cloud/img/ghedfs.png'
const blockThree = 'https://fe20295.online-server.cloud/img/ghjk.png'
const blockFour = 'https://fe20295.online-server.cloud/img/hrthrt.png'
const Andrey = require('../../assets/img/Andrei-Anissimov.png')
const Marco = require('../../assets/img/Marco-Ahnert.png')
const People = require('../../assets/img/1745_oooo.png')

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

const GradientBtnClose = ({ name }) => (
  <LinearGradient
    colors={['#FF741F', '#E86312']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{}}>
      <IconCloseModal fill="#fff" />
    </View>
  </LinearGradient>
)

export function Anleger({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { userProfile } = useContext(mainContext)
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})
  const [accordion, setAccordion] = useState(false)
  const [accordion2, setAccordion2] = useState(false)
  const [accordion3, setAccordion3] = useState(false)
  const [accordion4, setAccordion4] = useState(false)

  // userProfile.id === 8395
  const Access = async () => {
    if (userProfile.id === 0) {
      return setModalVisible(true)
    }
  }
  const Accordion = async () => {
    setAccordion2(false)
    setAccordion3(false)
    setAccordion4(false)
    return setAccordion(!accordion)
  }
  const Accordion2 = async () => {
    setAccordion(false)
    setAccordion3(false)
    setAccordion4(false)
    return setAccordion2(!accordion2)
  }
  const Accordion3 = async () => {
    setAccordion2(false)
    setAccordion(false)
    setAccordion4(false)
    return setAccordion3(!accordion3)
  }
  const Accordion4 = async () => {
    setAccordion2(false)
    setAccordion3(false)
    setAccordion(false)
    return setAccordion4(!accordion4)
  }

  useEffect(() => {
    Access()
  }, [])

  return (
    <View style={gStyle.main}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <GradientBtnClose />
            </TouchableOpacity>

            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text style={{ fontFamily: 'ub-medium' }}>
                Sie haben leider keinen Zugriff.
              </Text>
              <Text style={{ fontFamily: 'ub-medium' }}>
                Erwerben sie eine erweiterte clubmitgliedschaft!
              </Text>
            </View>
            <Image style={styles.imageLock} source={anlegerLock} />
          </View>
        </View>
      </Modal>
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
            Trader IQ Anlegerclub
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
              Höchste Renditen mit
            </Text>
            <Text
              style={{
                fontFamily: 'ub-medium',
                fontSize: 17,
                textAlign: 'center',
                color: '#FF741F',
              }}
            >
              minimalem Zeitaufwand
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
            marginTop: 13,
            fontFamily: 'ub-medium',
            fontSize: 20,
            color: '#333',
            paddingHorizontal: 20,
          }}
        >
          Herzlich Willkommen im Mitgliederbereich, {userProfile.display_name}!
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
              Der Trader IQ Anlegerclub
            </Text>
          </ImageBackground>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={() => Accordion()}>
            <ImageBackground
              source={imageGray}
              resizeMode="cover"
              style={[styles.imageBlock, {}]}
              imageStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ccc',
              }}
            >
              <View style={styles.anlegerModul}>
                <Image
                  style={styles.imageBlocks}
                  source={{
                    uri: blockOne,
                  }}
                />
                <Text style={styles.blockText}>Starter Depot</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {accordion === true ? (
            <View
              style={{
                width: 320,
                alignSelf: 'center',
              }}
            >
              <View style={styles.accordionBack}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Vermögensaufbau für kleine Konten
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    5.000 € Echtgeldkonto mit fertigen Trade-Empfehlungen
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Redaktionsempfehlung Aktie des Monats
                  </Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('StarterDepot')
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'ub-medium',
                        color: '#FF741F',
                      }}
                    >
                      zum Mitgliederbereich
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <TouchableOpacity onPress={() => Accordion2()}>
            <ImageBackground
              source={imageGray}
              resizeMode="cover"
              style={styles.imageBlock}
              imageStyle={{
                borderRadius: 5,
                // justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: '#ccc',
              }}
            >
              <View style={styles.anlegerModul}>
                <Image
                  style={styles.imageBlocks}
                  source={{
                    uri: blockTwo,
                  }}
                />
                <Text style={styles.blockText}>Trader Cockpit</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {accordion2 === true ? (
            <View
              style={{
                width: 320,
                alignSelf: 'center',
              }}
            >
              <View style={styles.accordionBack}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Mitgliederbereich mit Charts, Analysen und Saisonalitäten
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Umfangreiche Marktanalyse
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Commodities und Indizes Handelssignale
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>Forex-Handelssignale</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Krypto-Handelssignale
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Real-Time Trade Alerts
                  </Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TraderCockpit')
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'ub-medium',
                        color: '#FF741F',
                      }}
                    >
                      zum Mitgliederbereich
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <TouchableOpacity onPress={() => Accordion3()}>
            <ImageBackground
              source={imageGray}
              resizeMode="cover"
              style={styles.imageBlock}
              imageStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ccc',
              }}
            >
              <View style={styles.anlegerModul}>
                <Image
                  style={styles.imageBlocks}
                  source={{
                    uri: blockThree,
                  }}
                />
                <Text style={styles.blockText}>Trend Depot</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {accordion3 === true ? (
            <View
              style={{
                width: 320,
                alignSelf: 'center',
              }}
            >
              <View style={styles.accordionBack}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Beste Trendaktien für maximale Rendite
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Watchlist mit Top-Aktien für Trendfolger
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    10.000 € Trendfolge-Depot
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Real-Time Handelssignale
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Management im Echtgeld
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>Live Clubtreffen</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TrendDepot')
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'ub-medium',
                        color: '#FF741F',
                      }}
                    >
                      zum Mitgliederbereich
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <TouchableOpacity onPress={() => Accordion4()}>
            <ImageBackground
              source={imageGray}
              resizeMode="cover"
              style={styles.imageBlock}
              imageStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ccc',
              }}
            >
              <View style={styles.anlegerModul}>
                <Image
                  style={styles.imageBlocks}
                  source={{
                    uri: blockFour,
                  }}
                />
                <Text style={styles.blockText}>Stillhalter Depot</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {accordion4 === true ? (
            <View
              style={{
                width: 320,
                alignSelf: 'center',
              }}
            >
              <View style={styles.accordionBack}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Nachhaltiger Cashflow aus Stillhalterprämien
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Watchlist mit Top-Aktien für Stillhalter
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    20.000 € Cashflow-Depot
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Real-Time Handelssignale
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>
                    Management im Echtgeld
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <IconShieldUl />
                  <Text style={styles.accordionText}>Live Clubtreffen</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('StillhalterDepot')
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'ub-medium',
                        color: '#FF741F',
                      }}
                    >
                      zum Mitgliederbereich
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
        </View>
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={[styles.imageBackTwo, {}]}
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
              Das redaktionsteam
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <View style={styles.imageAvatar}>
            <Image
              style={{ width: 90, height: 90 }}
              resizeMode="cover"
              source={Andrey}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#50555C',
                fontFamily: 'ub-medium',
                fontSize: 20,
                marginLeft: 10,
                paddingRight: 10,
              }}
            >
              Andrei Anissimov
            </Text>
            <Text
              style={{
                color: '#50555C',
                fontFamily: 'ub-medium',
                fontSize: 20,
                marginLeft: 10,
                paddingRight: 10,
              }}
            >
              Gründer und Herausgeber
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 20,
              fontFamily: 'ub-reg',
              fontSize: 16,
              color: '#333',
            }}
          >
            {`Der Anlegerclub ist Chefsache! Für Andrei ist es eine Herzensangelegenheit, jedem zu zeigen, wie einfach hohe Renditen an der Börse gemacht werden können.

Andrei hat, als Chefredakteur mehrerer Börsenbriefe, umfangreiche Erfahrungen gesammelt und weiß, worauf es ankommt: „Die Trade Ideen müssen einfach, gut recherchiert und profitabel sein, damit jeder sie umsetzen kann“.

Sein Versprechen an die Mitglieder: „Unser Anlegerclub wir mehr Geld bringen als er kostet“.`}
          </Text>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <View style={styles.imageAvatar}>
            <Image
              style={{ width: 90, height: 90 }}
              resizeMode="cover"
              source={Marco}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#50555C',
                fontFamily: 'ub-medium',
                fontSize: 20,
                marginLeft: 10,
                paddingRight: 10,
              }}
            >
              Marco Ahnert
            </Text>
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
              Chefredakteur
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 20,
              fontFamily: 'ub-reg',
              fontSize: 16,
              color: '#333',
            }}
          >
            {`Marco ist als Chefredakteur das Gehirn, aber auch das Herz hinter dem Club. Er hält alle Fäden in der Hand und kümmert sich jeden Tag um die Depots, Trade-Empfehlungen und die Anliegen der Mitglieder.

Angefangen bei Null hat er mittlerweile sein Depot mehrfach verdoppelt und ist selbst mit dem Börsenhandel finanziell unabhängig. Sein innigster Wunsch ist es, den Mitgliedern konkrete Empfehlungen an die Hand zu geben und dafür zu sogen, dass jeder hohe und stabile Renditen an der Börse erhält.`}
          </Text>
        </View>

        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <View style={styles.imageAvatar}>
            <Image
              style={{ width: 90, height: 90 }}
              resizeMode="cover"
              source={People}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#50555C',
                fontFamily: 'ub-medium',
                fontSize: 20,
                marginLeft: 10,
                paddingRight: 10,
              }}
            >
              Absolventen
            </Text>
            <Text
              style={{
                color: '#50555C',
                fontFamily: 'ub-medium',
                fontSize: 20,
                marginLeft: 10,
                paddingRight: 10,
              }}
            >
              Redaktionsteam
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 20,
              fontFamily: 'ub-reg',
              fontSize: 16,
              color: '#333',
            }}
          >
            {`Ein Team von gut ausgebildeten Tradern und Investoren unterstützt den Chefredakteur.

Die Märkte permanent nach besten Trades zu screenen, die Tradeempfehlungen zu recherchieren und für die Mitglieder aufzuarbeiten, ist die Aufgabe der sich das Redaktionsteam hinter Marco Ahnert jeden Tag aufs Neue stellt.

Viele der Trade-Empfehlungen des Clubs stammen aus den Depots des Redaktionsteams. Eine Armee von Tradern, die für Dich täglich den Markt analysiert.
`}
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
    width: '95%',
    height: 75,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageBlock: {
    width: '90%',
    height: 70,
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  blockText: {
    color: '#FF741F',
    fontFamily: 'ub-medium',
    fontSize: 19,
    paddingLeft: 10,
  },
  imageBlocks: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  imageLock: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageAvatar: {
    overflow: 'hidden',
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  modalView: {
    // margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    alignItems: 'center',
    width: '95%',
    height: '80%',
    elevation: 5,
    borderWidth: 2,
    borderColor: '#F58020',
  },
  button: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
  anlegerModul: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  accordionBack: {
    backgroundColor: 'rgba(126,134,158,0.15)',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  accordionText: {
    textAlign: 'left',
    color: '#333',
    fontFamily: 'ub-reg',
    fontSize: 15,
    width: '80%',
  },
  line: {
    height: 3,
    width: 350,
    backgroundColor: '#4E4D4D',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 3,
  },
})
