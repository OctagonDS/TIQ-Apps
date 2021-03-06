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
import { IconCheck } from '../../../../atoms/iconCheck'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const adm = require('../../../../../assets/img/adm.png')
const euro_e = require('../../../../../assets/img/euro-e.png')
const ghjk = require('../../../../../assets/img/ghjk.png')
const dm = require('../../../../../assets/img/dm.png')
const Andrey = require('../../../../../assets/img//AA-2048x2048.jpg')

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

export const StartseiteDepotPage = ({ navigation }) => {
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
              Verm??gensaufbau f??r Durchstarter
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
            {`Das Starter Depot wurde f??r alle konzipiert, die erst am Anfang ihrer B??rsenkarriere stehen und maximale Rendite mit minimalem Kapital- und Zeiteinsatz verbinden wollen.

Du brauchst keinerlei B??rsenerfahrung, um mit den Empfehlungen des Redaktionsteams Dein Geld profitabel anzulegen. F??r eine tiefere Erkl??rung der Strategie und der Bestandteile des Depots schaue Dir das Schulungsvideo an.

Ich w??nsche Dir maximalen Anlageerfolg!

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
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Aktie des Monats')
                }}
              >
                <Image style={styles.imageBlocks} source={adm} />
                <Text style={styles.blockText}>Aktie des monats</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`St??rkste Fundamentaldaten, h??chste Wachstumsaussichten und gr????te Unterbewertung ??? diese sorgf??ltig recherchierte Empfehlung der Redaktion erlaubt es Dir, h??chste Chancen mit minimalen Risiken zu kombinieren.

So findest Du die besten Aktien ??? ohne selbst stundenlang suchen zu m??ssen.`}
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
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Aktie des Monats')
                }}
              >
                <Image style={styles.imageBlocks} source={euro_e} />
                <Text style={styles.blockText}>Empfehlungsarchiv</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Viele der letzten Empfehlungen sind nach wie vor ein Kauf ??? hier findest Du das Archiv der letzten Empfehlungen der Redaktion. In vielen empfohlenen Aktien ist der Club investiert.

Damit bekommst Du schnell einen ??berblick ??ber die Auswahlkriterien der Redaktion.`}
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
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Depot')
                }}
              >
                <Image style={styles.imageBlocks} source={ghjk} />
                <Text style={styles.blockText}>Starter Depot</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Angefangen am 1. Januar 2021 mit 5.000 ??? w??chst das Konto des Clubs kontinuierlich. Wir investieren jeden Monat in die st??rksten Aktien ??? und lassen Dich den Experten ??ber die Schulter schauen.

So baust Du Schritt f??r Schritt Dein sicheres und profitables Aktiendepot auf.`}
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
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 15,
                }}
                onPress={() => {
                  navigation.navigate('Dax million??r')
                }}
              >
                <Image style={styles.imageBlocks} source={dm} />
                <Text style={styles.blockText}>Dax Million??r</Text>
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
                {`Eine der einfachsten und zeitschonendsten Strategien ??berhaupt. Ein Mal pro Monat wird das Depot mit einem raffinierten Handelssystem angepasst. Damit produziert das System zuverl??ssig hohe Gewinne.

So investierst Du besser als jeder Fond ??? mit gerade Mal 10 Minuten pro Monat.`}
              </Text>
            </View>
          </ImageBackground>
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
              Schnelleinstieg
            </Text>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image style={styles.imageAvatar} source={Andrey} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'ub-medium',
              fontSize: 16,
              paddingHorizontal: '10%',
            }}
          >
            F??r den berufst??tigen und vielbesch??ftigten B??rseninvestor - so
            verdienst Du an der B??rse Geld!
          </Text>

          <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
            <Text style={styles.itemText}>
              {`Ich freue mich sehr, dass Du Mitglied in unserem Anlegerclub bist. Ich m??chte sicherstellen, dass Du auch in die Umsetzung kommst ??? nur dann bringt Dir der Anlegerclub mehr als er kostet.

F??r Deinen Schnelleinstieg habe ich die wichtigsten Schritte zusammengefasst ??? sobald Du sie erfolgreich abgeschlossen hast, bist Du bereit f??r die Umsetzung.

Ich w??nsche Dir maximalen Anlageerfolg!

Dein Andrei Anissimov, Herausgeber`}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>
                Depot bei einer bank oder broker
              </Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Die meisten Banken bieten ein kostenloses Depot an, dass Du direkt ??ber Dein Online-Banking abrufen kannst. Du brauchst kein zus??tzliches neues Konto, um die Strategie des Depots umzusetzen. Stelle sicher, dass Dein B??rsenhandel m??glichst einfach bleibt.

Jede Bank oder Broker erheben unterschiedliche Transaktionsgeb??hren, ??ber die Du dich informieren solltest.`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>Wissen und know-how</Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Die Empfehlungen der Redaktion stellen keine Anlageberatung dar. Wir wissen nicht, ob die vorgestellten Aktien f??r Dich als Anleger geeignet sind. Stelle sicher, dass Du Dir der Risiken bewusst bist und riskiere kein Geld, dass Du nicht bereit bist zu verlieren.

Informiere Dich ??ber die Strategie des Depots, schaue die Schulungsvideos an und stelle Deinen Investment-Plan auf. Bestimme, wie gro?? Deine Aktienpositionen sein sollten im Verh??ltnis zu Deinem Kapital.`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>
                Beseitige handwerkliche risiken
              </Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Das gr????te Risiko ist der Anwender selbst. Stelle sicher, dass Du in der Bedienung der Plattform sicher bist und genau wei??t, was Du tust. Viele Broker bieten Demo-Konten an, in denen Du im Simulator die Bedienung der Plattform und die Umsetzung ??ben kannst.

Stelle Dir vor, Du w??rdest als Pilot ein Flugzeug steuern m??ssen ??? w??re es da nicht sinnvoll, zuerst im Simulator zu ??ben?`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>Geld einzahlen</Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Wenn Du bereit f??r den ersten Echtgeldtrade bist, kannst Du Dein Depot monetarisieren. Du brauchst nicht vom Anfang an die volle Summe einzuzahlen ??? eine monatliche ??berweisung kann helfen.

Denke an Dein erstes Auto ??? hast Du Dir als Fahranf??nger sofort einen neuen Mercedes gekauft? Oder einen alten oder Gebrauchten, bei dem es nicht weh tat, wenn mal etwas daneben ging? Am Anfang ist jeder ein Anf??nger ??? fange klein an und erh??he Dein Engagement mit steigender Erfahrung und Know-How!`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>Empfehlung umsetzen</Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Fang an Dein Depot aufzuf??llen ??? achte dabei auf die richtige Positionsgr????e und Dein Risikomanagement. Setze die Empfehlungen der Redaktion mit Bedacht um ??? schlie??lich ist es Dein hart verdientes Geld. Folge nicht einfach blind den Empfehlungen sondern setzte Deinen eigenen Kopf ein.

Unsere Empfehlungen sind unsere Ideen ??? was Du daraus machst h??ngt ganz von Dir ab!`}
                </Text>
              </View>
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
    borderRadius: 100,
    width: 200,
    height: 200,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  line: {
    height: 3,
    width: '95%',
    backgroundColor: '#4E4D4D',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 3,
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
