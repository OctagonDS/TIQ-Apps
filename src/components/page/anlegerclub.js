import React, { useState, useRef, useContext, useMemo, useEffect } from 'react'
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
  Alert,
  ActivityIndicator,
} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { gStyle } from '../../styles/style'
import { LinearGradient } from 'expo-linear-gradient'
import { IconPlay } from '../atoms/iconPlay'
import mainContext from '../../store/context/context'
import { IconCloseModal } from '../atoms/iconCloseM'
import { IconShieldUl } from '../atoms/iconShieldUl'
import * as WebBrowser from 'expo-web-browser'
import { useIsFocused } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'

const image = require('../../assets/img/black-geo.png')
const imageGray = require('../../assets/img/grey-geo.png')
const anlegerLock = require('../../assets/img/anlegerlock.png')
const blockOne = require('../../assets/img/tyrtyr.png')
const blockTwo = require('../../assets/img/ghedfs.png')
const blockThree = require('../../assets/img/ghjk.png')
const blockFour = require('../../assets/img/hrthrt.png')
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

const GradientBtnMenu = ({ name }) => (
  <LinearGradient
    colors={['rgba(247, 137, 3, 1)', 'rgba(247, 137, 3, 0.9)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 3, justifyContent: 'center' }}
  >
    <Text style={styles.menuTitleTop}>{name}</Text>
  </LinearGradient>
)
const GradientBtnMenuDisable = ({ name }) => (
  <LinearGradient
    colors={['rgba(204, 204, 204, 0.6)', 'rgba(204, 204, 204, 0.5)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 3, justifyContent: 'center' }}
  >
    <Text style={styles.menuTitleTop}>{name}</Text>
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
  const [tagAccessAll, setTagAccessAll] = useState(false)
  const [tagAccessSD, setTagAccessSD] = useState(false)
  const [tagAccessTC, setTagAccessTC] = useState(false)
  const [tagAccessTD, setTagAccessTD] = useState(false)
  const [tagAccessStD, setTagAccessStD] = useState(false)
  const { userProfile, doUpdateTerms } = useContext(mainContext)
  const video = React.useRef(null)
  const isFocused = useIsFocused()
  const [status, setStatus] = React.useState({})
  const [accordion, setAccordion] = useState(false)
  const [accordion2, setAccordion2] = useState(false)
  const [accordion3, setAccordion3] = useState(false)
  const [accordion4, setAccordion4] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [connectNet, setConnectNet] = useState(true)
  const [isLoading, setLoading] = useState(true)

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

  const onRefresh = React.useCallback(() => {
    doUpdateTerms(true)
    wait(2000).then(() => {
      doUpdateTerms(false)
    })
  }, [])

  function userTerms() {
    let userTagArray = []
    const tagArray = [
      'Abo All Access Pass',
      'ABO Starter Depot',
      'Abo Trading Cockpit',
      'Abo Trend Depot',
      'Abo Stillhalter Depot',
    ]
    const tagAllArray = ['Abo All Access Pass']
    const tagSDArray = ['ABO Starter Depot']
    const tagTCArray = ['Abo Trading Cockpit']
    const tagTDArray = ['Abo Trend Depot']
    const tagStDArray = ['Abo Stillhalter Depot']

    userProfile &&
      userProfile.user_term.forEach((element) => {
        return userTagArray.push(element.name)
      })

    // console.log(userTagArray)

    var isSame = userTagArray.some((v) => tagArray.indexOf(v) >= 0)
    var isSameAll = userTagArray.some((v) => tagAllArray.indexOf(v) >= 0)
    var isSameSD = userTagArray.some((v) => tagSDArray.indexOf(v) >= 0)
    var isSameTC = userTagArray.some((v) => tagTCArray.indexOf(v) >= 0)
    var isSameTD = userTagArray.some((v) => tagTDArray.indexOf(v) >= 0)
    var isSameStD = userTagArray.some((v) => tagStDArray.indexOf(v) >= 0)

    if (isSameAll) {
      setTagAccessAll(true)
    } else {
      setTagAccessAll(false)
    }

    if (isSameSD) {
      setTagAccessSD(true)
    } else {
      setTagAccessSD(false)
    }

    if (isSameTC) {
      setTagAccessTC(true)
    } else {
      setTagAccessTC(false)
    }

    if (isSameTD) {
      setTagAccessTD(true)
    } else {
      setTagAccessTD(false)
    }

    if (isSameStD) {
      setTagAccessStD(true)
    } else {
      setTagAccessStD(false)
    }

    if (!isSame && isFocused) {
      setModalVisible(true)
    } else if (isSame) {
      setModalVisible(false)
    }

    return setLoading(false)
  }

  useEffect(() => {
    userTerms()
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnectNet(state.isConnected)
    })
    return () => {
      setAccordion(false)
      setAccordion2(false)
      setAccordion3(false)
      setAccordion4(false)
      setModalVisible(false)
      setTagAccessAll(false)
      setTagAccessSD(false)
      setTagAccessTC(false)
      setTagAccessTD(false)
      setTagAccessStD(false)
      unsubscribe()
      setConnectNet(true)
      setLoading(true)
    }
  }, [userProfile])

  return (
    <View style={gStyle.main}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#FF741F" />
          <View>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              ??berpr??fung der Internetverbindung...
            </Text>
          </View>
        </View>
      ) : connectNet === null || connectNet === false ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{
                  width: 147,
                  height: 150,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                }}
                source={require('../../assets/img/no-signal.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Ooops..! Keine Internetverbindung.
            </Text>
            <Text style={{ textAlign: 'center', paddingTop: 5 }}>
              Einige Inhalte sind ohne das Internet nicht verf??gbar.
            </Text>
          </View>
        </View>
      ) : connectNet && connectNet === true ? (
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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
                  H??chste Renditen mit
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
            <View style={{ padding: 10, flex: 1 }}>
              <View style={styles.row}>
                {tagAccessAll || tagAccessSD ? (
                  <TouchableOpacity
                    style={styles.buttonTopMenu}
                    onPress={() => {
                      navigation.navigate('StarterDepot')
                    }}
                  >
                    <GradientBtnMenu name="Starter Depot" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.buttonTopMenu, {}]}
                    onPress={() =>
                      Alert.alert(
                        `Hallo ${userProfile && userProfile.display_name}`,
                        'Sie haben noch keine Mitgliedschaft erworben, daher ist der Zugriff beschr??nkt.',
                        [
                          {
                            text: 'Sp??ter',
                            onPress: () => console.log('Sp??ter'),
                          },
                          {
                            text: 'Kaufen',
                            onPress: () => {
                              WebBrowser.openBrowserAsync(
                                'https://traderiq.net/anlegerclub/'
                              )
                            },
                          },
                        ]
                      )
                    }
                  >
                    <GradientBtnMenuDisable name="Starter Depot" />
                  </TouchableOpacity>
                )}
                {tagAccessAll || tagAccessTC ? (
                  <TouchableOpacity
                    style={styles.buttonTopMenu}
                    onPress={() => {
                      navigation.navigate('TraderCockpit')
                    }}
                  >
                    <GradientBtnMenu name="Trader Cockpit" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.buttonTopMenu, {}]}
                    onPress={() =>
                      Alert.alert(
                        `Hallo ${userProfile && userProfile.display_name}`,
                        'Sie haben noch keine Mitgliedschaft erworben, daher ist der Zugriff beschr??nkt.',
                        [
                          {
                            text: 'Sp??ter',
                            onPress: () => console.log('Sp??ter'),
                          },
                          {
                            text: 'Kaufen',
                            onPress: () => {
                              WebBrowser.openBrowserAsync(
                                'https://traderiq.net/anlegerclub/'
                              )
                            },
                          },
                        ]
                      )
                    }
                  >
                    <GradientBtnMenuDisable name="Trader Cockpit" />
                  </TouchableOpacity>
                )}
                {tagAccessAll || tagAccessTD ? (
                  <TouchableOpacity
                    style={styles.buttonTopMenu}
                    onPress={() => {
                      navigation.navigate('TrendDepot')
                    }}
                  >
                    <GradientBtnMenu name="Trend Depot" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.buttonTopMenu, {}]}
                    onPress={() =>
                      Alert.alert(
                        `Hallo ${userProfile && userProfile.display_name}`,
                        'Sie haben noch keine Mitgliedschaft erworben, daher ist der Zugriff beschr??nkt.',
                        [
                          {
                            text: 'Sp??ter',
                            onPress: () => console.log('Sp??ter'),
                          },
                          {
                            text: 'Kaufen',
                            onPress: () => {
                              WebBrowser.openBrowserAsync(
                                'https://traderiq.net/anlegerclub/'
                              )
                            },
                          },
                        ]
                      )
                    }
                  >
                    <GradientBtnMenuDisable name="Trend Depot" />
                  </TouchableOpacity>
                )}
                {tagAccessAll || tagAccessStD ? (
                  <TouchableOpacity
                    style={styles.buttonTopMenu}
                    onPress={() => {
                      navigation.navigate('StillhalterDepot')
                    }}
                  >
                    <GradientBtnMenu name="Stillhalter Depot" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.buttonTopMenu, {}]}
                    onPress={() =>
                      Alert.alert(
                        `Hallo ${userProfile && userProfile.display_name}`,
                        'Sie haben noch keine Mitgliedschaft erworben, daher ist der Zugriff beschr??nkt.',
                        [
                          {
                            text: 'Sp??ter',
                            onPress: () => console.log('Sp??ter'),
                          },
                          {
                            text: 'Kaufen',
                            onPress: () => {
                              WebBrowser.openBrowserAsync(
                                'https://traderiq.net/anlegerclub/'
                              )
                            },
                          },
                        ]
                      )
                    }
                  >
                    <GradientBtnMenuDisable name="Stillhalter Depot" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                position: 'relative',
                marginTop: 13,
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
              Herzlich Willkommen im Mitgliederbereich,{' '}
              {userProfile && userProfile.display_name}!
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
                {`Mit der Anmeldung hast Du den Grundstein f??r Deinen nachhaltigen B??rsenerfolg gelegt. Ab sofort bekommst Du regelm????ig die Top-Empfehlungen unserer Redaktion ??? fertig ausgearbeitete Trades, die Du sofort umsetzen kannst.

Noch nie war es einfacher, an der B??rse erfolgreich zu investieren! Wir recherchieren die besten Trade-Empfehlungen ??? Du verbuchst die Gewinne. Damit investierst Du sicher und profitabel ??? und das mit minimalem Zeiteinsatz, ohne selbst Profi werden zu m??ssen. 

Ich w??nsche Dir maximalen B??rsenerfolg!

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
                    <Image style={styles.imageBlocks} source={blockOne} />
                    <Text style={styles.blockText}>Starter Depot</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {accordion === true ? (
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                  }}
                >
                  <View style={styles.accordionBack}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <IconShieldUl />
                      <Text style={styles.accordionText}>
                        Verm??gensaufbau f??r kleine Konten
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
                        5.000 ??? Echtgeldkonto mit fertigen Trade-Empfehlungen
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
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}
                    >
                      <IconShieldUl />
                      <Text style={styles.accordionText}>
                        DAX-Million??r Handelssignale
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                      {tagAccessAll || tagAccessSD ? (
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
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            WebBrowser.openBrowserAsync(
                              'https://traderiq.net/anlegerclub/'
                            )
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: 'ub-medium',
                              color: '#FF741F',
                            }}
                          >
                            Mehr erfahren
                          </Text>
                        </TouchableOpacity>
                      )}
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
                  style={[styles.imageBlock, {}]}
                  imageStyle={{
                    borderRadius: 5,
                    // justifyContent: 'space-between',
                    borderWidth: 1,
                    borderColor: '#ccc',
                  }}
                >
                  <View style={styles.anlegerModul}>
                    <Image style={styles.imageBlocks} source={blockTwo} />
                    <Text style={styles.blockText}>Trader Cockpit</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {accordion2 === true ? (
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                  }}
                >
                  <View style={styles.accordionBack}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <IconShieldUl />
                      <Text style={styles.accordionText}>
                        Mitgliederbereich mit Charts, Analysen und
                        Saisonalit??ten
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
                      <Text style={styles.accordionText}>
                        Forex-Handelssignale
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
                      {tagAccessAll || tagAccessTC ? (
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
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            WebBrowser.openBrowserAsync(
                              'https://traderiq.net/anlegerclub/'
                            )
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: 'ub-medium',
                              color: '#FF741F',
                            }}
                          >
                            Mehr erfahren
                          </Text>
                        </TouchableOpacity>
                      )}
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
                  style={[styles.imageBlock, {}]}
                  imageStyle={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ccc',
                  }}
                >
                  <View style={styles.anlegerModul}>
                    <Image style={styles.imageBlocks} source={blockThree} />
                    <Text style={styles.blockText}>Trend Depot</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {accordion3 === true ? (
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                  }}
                >
                  <View style={styles.accordionBack}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <IconShieldUl />
                      <Text style={styles.accordionText}>
                        Beste Trendaktien f??r maximale Rendite
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
                        Watchlist mit Top-Aktien f??r Trendfolger
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
                        10.000 ??? Trendfolge-Depot
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
                      {tagAccessAll || tagAccessTD ? (
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
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            WebBrowser.openBrowserAsync(
                              'https://traderiq.net/anlegerclub/'
                            )
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: 'ub-medium',
                              color: '#FF741F',
                            }}
                          >
                            Mehr erfahren
                          </Text>
                        </TouchableOpacity>
                      )}
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
                  style={[styles.imageBlock, {}]}
                  imageStyle={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ccc',
                  }}
                >
                  <View style={styles.anlegerModul}>
                    <Image style={styles.imageBlocks} source={blockFour} />
                    <Text style={styles.blockText}>Stillhalter Depot</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {accordion4 === true ? (
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                  }}
                >
                  <View style={styles.accordionBack}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <IconShieldUl />
                      <Text style={styles.accordionText}>
                        Nachhaltiger Cashflow aus Stillhalterpr??mien
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
                        Watchlist mit Top-Aktien f??r Stillhalter
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
                        20.000 ??? Cashflow-Depot
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
                      {tagAccessAll || tagAccessStD ? (
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
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            WebBrowser.openBrowserAsync(
                              'https://traderiq.net/anlegerclub/'
                            )
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: 'ub-medium',
                              color: '#FF741F',
                            }}
                          >
                            Mehr erfahren
                          </Text>
                        </TouchableOpacity>
                      )}
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
                  Gr??nder und Herausgeber
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
                {`Der Anlegerclub ist Chefsache! F??r Andrei ist es eine Herzensangelegenheit, jedem zu zeigen, wie einfach hohe Renditen an der B??rse gemacht werden k??nnen.

Andrei hat, als Chefredakteur mehrerer B??rsenbriefe, umfangreiche Erfahrungen gesammelt und wei??, worauf es ankommt: ???Die Trade Ideen m??ssen einfach, gut recherchiert und profitabel sein, damit jeder sie umsetzen kann???.

Sein Versprechen an die Mitglieder: ???Unser Anlegerclub wir mehr Geld bringen als er kostet???.`}
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
                {`Marco ist als Chefredakteur das Gehirn, aber auch das Herz hinter dem Club. Er h??lt alle F??den in der Hand und k??mmert sich jeden Tag um die Depots, Trade-Empfehlungen und die Anliegen der Mitglieder.

Angefangen bei Null hat er mittlerweile sein Depot mehrfach verdoppelt und ist selbst mit dem B??rsenhandel finanziell unabh??ngig. Sein innigster Wunsch ist es, den Mitgliedern konkrete Empfehlungen an die Hand zu geben und daf??r zu sogen, dass jeder hohe und stabile Renditen an der B??rse erh??lt.`}
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
                {`Ein Team von gut ausgebildeten Tradern und Investoren unterst??tzt den Chefredakteur.

Die M??rkte permanent nach besten Trades zu screenen, die Tradeempfehlungen zu recherchieren und f??r die Mitglieder aufzuarbeiten, ist die Aufgabe der sich das Redaktionsteam hinter Marco Ahnert jeden Tag aufs Neue stellt.

Viele der Trade-Empfehlungen des Clubs stammen aus den Depots des Redaktionsteams. Eine Armee von Tradern, die f??r Dich t??glich den Markt analysiert.
`}
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View></View>
      )}
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
    width: '85%',
    height: '85%',
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
    color: '#454A4F',
    fontFamily: 'ub-reg',
    fontSize: 15,
    width: '80%',
  },
  line: {
    height: 3,
    width: '95%',
    backgroundColor: '#4E4D4D',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 3,
  },
  menuTitleTop: {
    fontSize: 16,
    fontFamily: 'ub-medium',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  buttonTopMenu: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    // alignSelf: 'flex-start',
    marginHorizontal: '1%',
    // marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
})
