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
import { IconCheck } from '../../../../atoms/iconCheck'
import mainContext from '../../../../../store/context/context'

const image = require('../../../../../assets/img/black-geo.png')
const imageGray = require('../../../../../assets/img/grey-geo.png')
const cir = require('../../../../../assets/img/ikonki-cir.png')
const wich = require('../../../../../assets/img/ikonki-wich.png')
const lud = require('../../../../../assets/img/ikonki-lud.png')
const Andrey = require('../../../../../assets/img/AA-2048x2048.jpg')

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

export const StartseiteTrendDepotPage = (props) => {
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
            Trend Depot
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
              Investitionen in größte Trends
            </Text>
            <Text
              style={{
                fontFamily: 'ub-medium',
                fontSize: 17,
                textAlign: 'center',
                color: '#FF741F',
              }}
            >
              für größte Gewinne
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
              uri: 'https://iq-online.club/TIQ-VIDEO/Anlegerclub/Start-Videos/Willkommen%20Trend%20Depot.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            posterSource={{
              uri: 'https://1693712952.rsc.cdn77.org/109043/assets/1612288760983_Starteseite_Trend_Depot.jpg',
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
            {`Das Trend-Depot wurde entwickelt, um höchste Gewinne aus den größten Trends mitzunehmen. Trader und Investor zu sein, ist eine der spannendsten Möglichkeiten, wortwörtlich auf Knopfdruck, Einkommen zu generieren. Du kannst damit mehr Geld verdienen als ein Angestellter und das mit viel weniger Zeitaufwand.

In unserem Anlegerclub wirst Du ein System kennenlernen, dass Dein Leben verändern kann. Es ist ein einfaches, aber sehr wirkungsvolles System ‑ oder besser gesagt: ein Prozess. Wenn Du diesen Prozess anwendest, kannst Du Deine finanziellen Ziele mit Leichtigkeit erreichen.

Ich wünsche Dir viel Erfolg bei der Umsetzung!`}
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
              Module im Trend Depot
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
              <Image style={styles.imageBlocks} source={cir} />
              <Text style={styles.blockText}>Das trend depot</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Wir scannen permanent die Märkte nach Handelssignalen für das 10.000 € Echtgelddepot und kombinieren eine langfristige Anlagestrategie in Top-Wachstumsaktien mit kurzfristigen Trades auf Indizes, Rohstoffen und ETF‘s.

Mit diesem Handelsansatz wächst das Konto dynamisch – ideal für chancenorientierte Anleger.`}
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
              <Image style={styles.imageBlocks} source={wich} />
              <Text style={styles.blockText}>Die watchlist</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Top Unternehmen mit stärksten Fundamentaldaten, höchsten Wachstumsaussichten und größter Unterbewertung – diese sorgfältig recherchierte Watchlist der Redaktion liefert eine Vielzahl an Top Investmentideen.

Mit dem Aktienranking der Experten hast Du immer die Sicherheit in beste Unternehmen zu investieren.`}
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
              <Image style={styles.imageBlocks} source={lud} />
              <Text style={styles.blockText}>Live clubtreffen</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <Text style={styles.itemText}>
                {`Treffe Dich im Live Webinar mit der Redaktion und stelle Deine Fragen oder Anregungen. Wir stehen Dir monatlich Rede und Antwort – und freuen uns auf den Dialog mit Dir.

So setzst Du die Empfehlungen des Clubs richtig um und investierst vom Anfang an mit Erfolg!`}
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
            Für den ambitionierten Trendinvestor - so verdienst Du an der Börse
            Geld!
          </Text>

          <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
            <Text style={styles.itemText}>
              {`Ich freue mich sehr, dass Du Mitglied in unserem Anlegerclub bist. Ich möchte sicherstellen, dass Du auch in die Umsetzung kommst – nur dann bringt Dir der Anlegerclub mehr als er kostet.

Für Deinen Schnelleinstieg habe ich die wichtigsten Schritte zusammengefasst – sobald Du sie erfolgreich abgeschlossen hast, bist Du bereit für die Umsetzung.

Ich wünsche Dir maximalen Anlageerfolg!

Dein Andrei Anissimov`}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.itemPosition}>
              <View style={{ marginLeft: 15 }}>
                <IconCheck />
              </View>
              <Text style={styles.itemTitle}>Depot bei einem broker</Text>
            </View>
            <View>
              <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
                <Text style={styles.itemText}>
                  {`Um alle Signale des Depots umzusetzen empfehlen wir ein Depot bei einem Broker, der Dir die Möglichkeit bietet, die größte Auswahl von Instrumenten zu handeln. Die Transaktionsgebühren fallen bei zunehmender Tradeanzahl immer mehr ins Gewicht, so dass sich jetzt ein Wechsel zum Broker lohnt.

Informiere Dich über unterschiedliche Anbieter, bevor Du eine Entscheidung triffst. Eine Hilfestellung zur BrokerWahl findest Du in unserer Guideline.`}
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
                  {`Die Empfehlungen der Redaktion stellen keine Anlageberatung dar. Wir wissen nicht, ob die vorgestellten Trades für Dich als Anleger geeignet sind. Stelle sicher, dass Du Dir der Risiken bewusst bist und riskiere kein Geld, dass Du nicht bereit bist zu verlieren.

Informiere Dich über die Strategie des Depots, schaue die Schulungsvideos an und stelle Deinen Investment-Plan auf. Bestimme, wie groß Deine Positionen sein sollten im Verhältnis zu Deinem Kapital.`}
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
                  {`Das größte Risiko ist der Anwender selbst. Stelle sicher, dass Du in der Bedienung der Plattform sicher bist und genau weißt, was Du tust. Viele Broker bieten Demo-Konten an, in denen Du im Simulator die Bedienung der Plattform und die Umsetzung üben kannst.

Stelle Dir vor, Du würdest als Pilot ein Flugzeug steuern müssen – wäre es da nicht sinnvoll, zuerst im Simulator zu üben?`}
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
                  {`Wenn Du für die Umsetzung im Echtgeld bereit bist, kannst Du Dein Depot monetarisieren. Du brauchst nicht von Anfang an die volle Summe einzuzahlen – Du kannst auch nach und nach überweisen.

Denke an Dein erstes Auto – hast Du Dir als Fahranfänger sofort einen neuen Mercedes gekauft? Oder einen alten Gebrauchen, bei dem es nicht weh tat, wenn Mal was daneben ging? Am Anfang ist jeder ein Anfänger – fange klein an und erhöhe Dein Engagement mit steigender Erfahrung und Know-How!`}
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
                  {`Fange an, Dein Depot aufzufüllen – achte dabei auf die richtige Positionsgröße und Dein Risikomanagement. Setze die Empfehlungen der Redaktion mit Bedacht um – schließlich ist es Dein hart verdientes Geld. Folge nicht einfach Blind den Empfehlungen sondern setzte Deinen eigenen Kopf ein.

Unsere Empfehlungen sind unsere Ideen – was Du daraus machst hängt ganz von Dir ab!`}
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
