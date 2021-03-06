import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import * as WebBrowser from 'expo-web-browser'
import { LinearGradient } from 'expo-linear-gradient'
import RenderHtml from 'react-native-render-html'
import { IconCloseModal } from '../../atoms/iconCloseM'

const image = require('../../../assets/img/grey-geo.png')
const logoTIQ = require('../../../assets/img/logo-tiq.png')
const topD = require('../../../assets/img/TOP-D2021.jpg')
const topE = require('../../../assets/img/TOP-E2021.jpg')

const win = Dimensions.get('window')
const ratio = win.width / 541

const tagsStyles = {
  p: {
    color: '#000',
    textAlign: 'left',
    // marginBottom: 10,
    fontFamily: 'ub-medium',
    fontSize: 14,
  },
  b: {
    fontWeight: 'bold',
  },
  h2: {
    color: '#000',
    fontFamily: 'ub-medium',
    textAlign: 'left',
  },
  h3: {
    color: '#000',
    fontFamily: 'ub-medium',
    textAlign: 'left',
  },
  strong: {
    color: '#594e4e',
  },
  a: {
    color: '#ff741f',
    textDecorationLine: 'none',
  },
}

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={['#FF741F', '#E86312']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 5, justifyContent: 'center' }}
  >
    <Text style={styles.submitTextLog}>{name}</Text>
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

const AGB = [
  {
    id: '1',
    text: `
    <p><b>Allgemeine GeschĂ¤ftsbedingungen/&nbsp; Vertragsbedingungen im Rahmen von KaufvertraĚ?gen uĚ?ber die Plattform https://traderiq.net</b></p><p>zwischen</p><p>Trader IQ GmbH<br>SchillerstraĂźe 99<br>12305 Berlin</p><p>Fon: +49 30 55512066<br>GeschĂ¤ftsfĂĽhrer: Andrei Anissimov<br>Amtsgericht Berlin (Charlottenburg) HRB 153713</p><p>â€“ im Folgenden â€žAnbieterâ€ś â€“</p><p>und</p><p>den in Â§ 2 dieser AGB bezeichneten Nutzern dieser Plattform â€“ im Folgenden â€žKunde/Kundenâ€ś â€“ geschlossen werden.</p>
    `,
  },
  {
    id: '2',
    text: `
    <p><b>1. Geltungsbereich</b><br>1.1 Die folgenden allgemeinen GeschĂ¤ftsbedingungen (â€žAGBâ€ś) gelten fĂĽr sĂ¤mtliche GeschĂ¤ftsbeziehungen zwischen der Trader IQ GmbH (Schillerstr. 99, 12305 Berlin, E-Mail: info@traderiq.net, Telefon: +49 (0)30 555 120 66, vertreten durch den GeschĂ¤ftsfĂĽhrer Herrn Andrei Anissimov, (â€žTrader IQâ€ś) und Ihrem Kunden (der â€žKundeâ€ś). Die allgemeinen GeschĂ¤ftsbedingungen von Trader IQ gelten ausschlieĂźlich und unabhĂ¤ngig davon, ob der Kunde Verbraucher, Unternehmer oder Kaufmann ist. MaĂźgebend ist die jeweils bei Abschluss des Vertrages gĂĽltige Fassung der AGB. 1.2 Abweichungen von den AGB bedĂĽrfen der ausdrĂĽcklichen Zustimmung von Trader IQ. Allgemeine GeschĂ¤ftsbedingungen des Kunden finden keine Anwendung, auch wenn wir ihrer Geltung nicht gesondert widersprechen.</p>
    `,
  },
  {
    id: '3',
    text: `
    <p><b>2. Leistungsinhalt</b><br>2.1 Trader IQ bietet Waren (CDs, DVDs, BĂĽcher), Online-Kurse und PrĂ¤senzveranstaltungen an, durch welche Grundlagenwissen und ausschlieĂźlich allgemeine Informationen im Bereich des Handels mit Finanzinstrumenten gegeben werden. Von den Leistungen von Trader IQ nicht umfasst sind insbesondere persĂ¶nliche Anlageempfehlungen an den Kunden oder die Vermittlung von Finanzinstrumenten.<br>2.2 Dem Kunden ist bewusst, dass die Vermittlung von Grundlagenwissen und allgemeinen Informationen zum Handel mit Finanzinstrumenten keine GewĂ¤hr fĂĽr risikofreie Anlageentscheidungen beinhaltet. Der Kunde handelt bei Anlageentscheidungen ausschlieĂźlich auf eigenes Risiko und trifft eigenverantwortlich sĂ¤mtliche Entscheidungen, gleich welcher Natur, die der Kunde im Zusammenhang mit einer von Trader IQ verĂ¤uĂźerten Ware oder durchgefĂĽhrten Veranstaltung trifft. Trader IQ trĂ¤gt keine Verantwortung fĂĽr eventuelle Folgen von Handlungen des Kunden auf Grundlage der Lehrinhalte.<br>2.3 Trader IQ erbringt keine Rechts- oder Steuerberatung im Rahmen ihrer Leistungen. Dem Kunden wird empfohlen, rechtlichen und steuerlichen Rat vor Anwendung der Lehrinhalte gesondert einzuholen.</p>
    `,
  },
  {
    id: '4',
    text: `
    <p><b>3. Vertragsschluss</b><br>3.1 Die Darstellung des Sortiments von Trader IQ ĂĽber das Internet, in Katalogen und auf Informations- oder Lehrveranstaltungen stellt kein Angebot im Sinne der Â§Â§ 145 ff. BGB dar.<br>3.2 Der Kunde gibt gegenĂĽber Trader IQ ein Angebot im Sinne von Â§ 145 BGB ab, indem der Kunde eine Bestellung durch AuswĂ¤hlen und Speichern des betreffenden Angebots im Warenkorb auf der Internetseite www.traderiq.net und anschlieĂźendes BetĂ¤tigen der SchaltflĂ¤che â€žKostenpflichtig bestellenâ€ś absendet, telefonisch eine Bestellung abgibt oder ein ausgefĂĽlltes Bestellformular ĂĽberreicht oder dieses per E-Mail, Fax oder Post ĂĽbersendet.<br>3.3 Trader IQ ĂĽbermittelt dem Kunden eine EmpfangsbestĂ¤tigung, in welcher die Bestellung des Kunden nochmals aufgefĂĽhrt wird. Bei Verwendung des gedruckten Bestellformulars behĂ¤lt der Kunde einen Durchschlag. Bei Ăśbermittlung der EmpfangsbestĂ¤tigung per E-Mail kann der Kunde diese ĂĽber die Funktion â€žDruckenâ€ś ausdrucken. Bei einer Bestellung ĂĽber das Internet wird darĂĽber hinaus eine Zusammenfassung angezeigt, die der Kunde abspeichern und ausdrucken kann.<br>3.4 Der Vertrag mit Trader IQ kommt zustande, wenn Trader IQ das Angebot des Kunden annimmt. Als Annahme gilt auch die Mitteilung an den Kunden, dass ein Platz fĂĽr ihn reserviert ist. Wenn Trader IQ das Angebot des Kunden nicht annimmt, wird dies dem Kunden mĂĽndlich, telefonisch oder in Textform mitgeteilt. Bis zur Annahme des Angebots durch Trader IQ kann der Kunde das Angebot jederzeit widerrufen.<br>3.5 Trader IQ speichert VertrĂ¤ge in elektronischer oder in Papierform. Der Kunde kann auf Wunsch Kopien seines Vertragsangebots gesondert anfordern.<br>3.6 Trader IQ behĂ¤lt sich das Recht vor, Kunden vor Vertragsschluss im Hinblick auf deren wirtschaftliche LeistungsfĂ¤higkeit durch Auskunfteien prĂĽfen zu lassen. Im Ăśbrigen behĂ¤lt sich Trader IQ das Recht vor, den Kunden bei begrĂĽndetem Anlass auf dessen BonitĂ¤t und LeistungsfĂ¤higkeit zu prĂĽfen und auch in anderen FĂ¤llen Angaben zu verlangen, die die PrĂĽfung ermĂ¶glichen, sofern dies nicht bereits mit den Vertragsunterlagen geschehen ist.</p>
    `,
  },
  {
    id: '5',
    text: `
    <p><b>4. Preise</b><br>Der jeweils angegebene Preis fĂĽr den Vertragsgegenstand versteht sich als Endpreis einschlieĂźlich eventuell anfallender Umsatzsteuer und weiterer Preisbestandteile. Der Preis umfasst nicht etwaige Liefer- und Versandkosten, wie z.B. fĂĽr Waren, LehrbĂĽcher oder sonstige Materialien. Soweit gesonderte Kosten fĂĽr ZugĂ¤nge zu Systemen oder Programmen anfallen, werden diese gesondert ausgewiesen.</p>
    `,
  },
  {
    id: '6',
    text: `
    <p><b>5. Zahlung, FĂ¤lligkeit, Zahlungsverzug</b><br>5.1 Die VergĂĽtung fĂĽr die Leistungen von Trader IQ ist vor dem Bezug der Ware bzw. vor der Teilnahme an den Online-Kursen und/oder PrĂ¤senzveranstaltungen durch den Kunden an Trader IQ zu zahlen. Die mĂ¶glichen Zahlungsarten werden durch Trader IQ bekanntgegeben. Trader IQ akzeptiert fĂĽr Buchungen ĂĽber den Webshop nur die im Rahmen des Bestellvorgangs dem Kunden jeweils bekanntgegebenen Zahlungsarten. Trader IQ behĂ¤lt sich das Recht vor, im Einzelfall andere Zahlungsarten zuzulassen oder einzelne auszuschlieĂźen bzw. entsprechende Abweichungen gesondert mit dem Kunden zu vereinbaren.<br>5.2 Bei Zahlung per Vorkasse, Ăśberweisung oder PayPal verpflichtet sich der Kunde, die VergĂĽtung nach Vertragsschluss unverzĂĽglich zu zahlen. Bei Zahlung auf Rechnung verpflichtet sich der Kunde, den Rechnungsbetrag innerhalb von 7 Tagen nach Erhalt der Rechnung zu begleichen. Sofern eine Zahlung per Bankeinzug vereinbart wurde, erfolgt die Abbuchung innerhalb einer Woche nach Vertragsschluss. Bei Zahlung per Kreditkarte erfolgt die Abbuchung nach Vertragsschluss. Ratenzahlungen sind nur zulĂ¤ssig, wenn dies mit dem Kunden ausdrĂĽcklich vereinbart wurde.<br>5.3 Im Falle der Mahnung nach Eintritt des Zahlungsverzugs betrĂ¤gt die MahngebĂĽhr EUR 15,00, sofern sich nicht aus vertraglichen oder gesetzlichen Bestimmungen etwas anderes ergibt und sofern nicht Trader IQ oder der Kunde einen niedrigeren oder hĂ¶heren Verzugsschaden nachweist.<br>5.4 Der Kunde ist zu einer Aufrechnung gegen Forderungen aus Leistungen von Trader IQ nur berechtigt, sofern und soweit seine GegenansprĂĽche rechtskrĂ¤ftig festgestellt, unbestritten oder von Trader IQ anerkannt sind.</p>
    `,
  },
  {
    id: '7',
    text: `
    <p><b>6. Lieferung von Waren</b><br>6.1 Alle Waren, die bei Trader IQ sofort verfĂĽgbar sind, werden in der Regel innerhalb von 10 Werktagen auf den Versandweg gebracht bzw. online freigeschaltet Sollten nicht alle bestellten Waren vorrĂ¤tig sein, ist Trader IQ zu Teillieferungen auf seine Kosten berechtigt, soweit dies fĂĽr den Kunden zumutbar ist.<br>6.2 Die Lieferfrist verlĂ¤ngert sich um die Zeit, bis der Kunde alle Angaben und Unterlagen, welche fĂĽr die AusfĂĽhrung des Auftrages notwendig sind, ĂĽberreicht hat.<br>6.3 LieferverzĂ¶gerungen, die durch MaĂźnahmen im Rahmen von ArbeitsausfĂ¤llen, insbesondere Streik und Aussperrung, gesetzliche oder behĂ¶rdliche Anordnungen (z.B. Import- und ExportbeschrĂ¤nkungen) sowie weitere von Trader IQ nicht zu vertretende UmstĂ¤nde verursacht werden, verlĂ¤ngern die Lieferfrist entsprechend der Dauer derartiger Hindernisse. Deren Beginn und Ende wird Trader IQ dem Kunden in wichtigen FĂ¤llen unverzĂĽglich mitteilen.</p>
    `,
  },
  {
    id: '8',
    text: `
    <p><b>7. Online-Kurse und PrĂ¤senzveranstaltungen</b><br>7.1 Online-Kurse und PrĂ¤senzveranstaltungen stellen Dienstleistungen im Sinne des Â§ 611 BGB dar.<br>7.2 FĂĽr einen bei Buchung festgelegten Termin oder fĂĽr eine feste Laufzeit abgeschlossene VertrĂ¤ge ĂĽber Online-Kurse und PrĂ¤senzveranstaltungen sind durch den Kunden nicht vorzeitig kĂĽndbar, soweit sich aus der Vereinbarung mit dem Kunden oder diesen AGB nichts anderes ergibt.<br>7.3 Trader IQ behĂ¤lt sich das Recht vor, einzelne Online-Kurse oder PrĂ¤senzveranstaltungen zu verschieben, wenn diese, bedingt durch Krankheit, Tod oder sonstige unvorhersehbare persĂ¶nliche Verhinderung des Vortragenden, nicht an dem ursprĂĽnglich vorgesehenen Termin durchgefĂĽhrt werden kann. Trader IQ wird den Kunden unverzĂĽglich von der Absage unterrichten und sobald wie mĂ¶glich einen Ersatztermin bekanntgeben. Sollte ein Ersatztermin nicht innerhalb von 12 Monaten stattfinden, ist der Kunde berechtigt, vom Vertrag zurĂĽckzutreten und RĂĽckzahlung des bereits gezahlten Entgelts fĂĽr die nicht durchgefĂĽhrte PrĂ¤senzveranstaltung oder den nicht durchgefĂĽhrten Online-Kurs zu verlangen.<br>7.4 Trader IQ wird den Kunden auch unverzĂĽglich unterrichten, wenn gebuchte Online-Kurse und/oder PrĂ¤senzveranstaltungen vollstĂ¤ndig und ersatzlos abgesagt werden mĂĽssen. In diesem Fall verpflichtet sich Trader IQ, dem Kunden das Entgelt unverzĂĽglich zurĂĽckzuzahlen.<br>7.5 Sofern der Kunde eine Umbuchung, die Teilnahme einer anderen als der angemeldeten Person oder die Ă„nderung des Vertragspartners wĂĽnscht und sich Trader IQ damit einverstanden erklĂ¤rt, fĂ¤llt bei dem (neuen) Kunden eine EntschĂ¤digung in HĂ¶he von EUR 15,00 inkl. gesetzlicher Umsatzsteuer an, sofern sich nicht aus vertraglichen oder gesetzlichen Bestimmungen etwas anderes ergibt und sofern nicht Trader IQ oder der Kunde einen niedrigeren oder hĂ¶heren Aufwand nachweist.<br>7.6 Das Recht zur KĂĽndigung aus wichtigem Grund bleibt unberĂĽhrt.</p>
    `,
  },
  {
    id: '9',
    text: `
    <p><b>8. RĂĽcktritt</b><br>8.1 Trader IQ ist berechtigt von dem Vertrag auch hinsichtlich eines noch offenen Teils der Leistung zurĂĽckzutreten, wenn falsche Angaben ĂĽber die KreditwĂĽrdigkeit des Kunden gemacht worden oder objektive GrĂĽnde hinsichtlich der ZahlungsunfĂ¤higkeit des Kunden entstanden sind, bspw. die ErĂ¶ffnung eines Insolvenzverfahrens ĂĽber das VermĂ¶gen des Kunden oder dessen Abweisung mangels Masse. Dem Kunden wird vor dem RĂĽcktritt die MĂ¶glichkeit eingerĂ¤umt, eine Vorauszahlung zu leisten oder eine taugliche Sicherheit zu erbringen.<br>8.2 Der Kunde ist berechtigt, bis zum Beginn eines Online-Kurses/ einer PrĂ¤senzveranstaltung von dem Vertrag zurĂĽckzutreten. Bei RĂĽcktritt bis spĂ¤testens zum 14. Tag vor Beginn der des Onine-Kurses/ der PrĂ¤senzrveranstaltung besteht keine StornogebĂĽhr; bei spĂ¤terem RĂĽcktritt bis spĂ¤testens zum Beginn des Online-Kurses/ der PrĂ¤senzveranstaltung fĂ¤llt eine StornogebĂĽhr in HĂ¶he von 25 % des Veranstaltungspreises an.<br>8.3 Sofern dem Kunden bei Online-Kursen/ PrĂ¤senzveranstaltungen eine â€žGeld-zurĂĽck-Garantieâ€ś eingerĂ¤umt wird, hat er das Recht, innerhalb von 24 Stunden nach Beginn der Lehrveranstaltung/ des Online-Kurses von dem Vertrag vollstĂ¤ndig zurĂĽcktreten, sofern er (i) vor Veranstaltungs-/ Kurs-Beginn den Veranstaltungs-/ Kurspreis vollstĂ¤ndig gezahlt und (ii) an mindestens einem Veranstaltungstag/ Online-Webinar durchgĂ¤ngig teilgenommen hat.<br>8.4 Unbeschadet etwaiger SchadensersatzansprĂĽche sind im Falle des TeilrĂĽcktritts bereits erbrachte Teilleistungen vertragsgemĂ¤Ăź zu bezahlen.</p>
    `,
  },
  {
    id: '10',
    text: `
    <p><b>9. Widerrufsrecht des Verbrauchers</b><br>Sofern der Kunde Verbraucher ist, gilt nachfolgendes:</p><p><b>Widerrufsbelehrung</b></p><p><b>Widerruf</b><br>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von GrĂĽnden diesen Vertrag zu widerrufen.<br>Die Widerrufsfrist betrĂ¤gt vierzehn Tage (i) ab dem Tag des Vertragsabschlusses, (ii) abweichend davon im Falle eines Kaufvertrages ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der BefĂ¶rderer ist, die Waren in Besitz genommen haben bzw. hat und (iii) abweichend davon im Falle eines Kaufvertrags ĂĽber mehrere Waren, die Sie im Rahmen einer einheitlichen Bestellung bestellt haben und die getrennt geliefert werden, ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der BefĂ¶rderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p><p>Um das Widerrufsrecht auszuĂĽben, mĂĽssen Sie uns (Trader IQ GmbH, Schillerstr. 99, 12305 Berlin, E-Mail: info@traderiq.net, Telefon: +49 (0)30 555 120 66) mittels einer eindeutigen ErklĂ¤rung (z. B. ein mit der Post versandter Brief oder E-Mail) ĂĽber Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie kĂ¶nnen dafĂĽr das Muster-Widerrufsformular auf der Webseite www.traderiq.net verwenden, das jedoch nicht vorgeschrieben ist.<br>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung ĂĽber die AusĂĽbung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p><p><b>Folgen des Widerrufs</b><br>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, ein-schlieĂźlich der Lieferkosten (mit Ausnahme der zusĂ¤tzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, gĂĽnstigste Standardlieferung gewĂ¤hlt haben), unverzĂĽglich und spĂ¤testens binnen vierzehn Tagen ab dem Tag zurĂĽckzuzahlen, an dem die Mitteilung ĂĽber Ihren Widerruf dieses Vertrags bei uns eingegangen ist. FĂĽr diese RĂĽckzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprĂĽnglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrĂĽcklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser RĂĽckzahlung Entgelte berechnet.<br>Im Falle eines Kaufvertrages: Wir kĂ¶nnen die RĂĽckzahlung verweigern, bis wir die Waren wieder zurĂĽckerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurĂĽckgesandt haben, je nachdem, welches der frĂĽhere Zeitpunkt ist. Sie haben die Waren unverzĂĽglich und in jedem Fall spĂ¤testens binnen vier-zehn Tagen ab dem Tag, an dem Sie uns ĂĽber den Widerruf dieses Vertrags unterrichten, an uns zurĂĽckzusenden oder zu ĂĽbergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der RĂĽcksendung der Waren.<br>Im Falle eines Vertrags zur Erbringung von Dienstleistungen: Haben Sie verlangt, dass die Dienstleistungen wĂ¤hrend der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der AusĂĽbung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht. Trader IQ ist berechtigt, erst nach Ablauf der Widerrufsfrist zu leisten.</p>
    `,
  },
  {
    id: '11',
    text: `
    <p><b>10. GewĂ¤hrleistung</b><br>10.1 Im Falle eines Kaufvertrages gilt das gesetzliche GewĂ¤hrleistungsrecht mit den folgenden Abweichungen. Sofern der Kunde Verbraucher ist, betrĂ¤gt die VerjĂ¤hrung der in Â§ 437 BGB bezeichneten AnsprĂĽche (GewĂ¤hrleistungsfrist) bei gebrauchten Sachen ein Jahr ab dem gesetzlichen VerjĂ¤hrungsbeginn, ausgenommen ein Anspruch des Verbrauchers auf Schadensersatz. Sofern der Kunde kein Verbraucher ist, betrĂ¤gt die VerjĂ¤hrung der in Â§ 437 BGB bezeichneten AnsprĂĽche (GewĂ¤hrleistungsfrist) ein Jahr ab dem gesetzlichen VerjĂ¤hrungsbeginn.<br>10.2 Trader IQ ĂĽbernimmt eine Garantie nur, wenn diese ausdrĂĽcklich zugesichert wird.</p>
    `,
  },
  {
    id: '12',
    text: `
    <p><b>11. Haftung</b><br>11.1 Trader IQ haftet unbeschrĂ¤nkt fĂĽr die von ihr oder ihren ErfĂĽllungsgehilfen vorsĂ¤tzlich oder grob fahrlĂ¤ssig verursachten SchĂ¤den und die schuldhaft verursachten SchĂ¤den an Leib, KĂ¶rper, Gesundheit sowie gemĂ¤Ăź den Bestimmungen des Produkthaftungsgesetzes.<br>11.2 Trader IQ haftet darĂĽber hinaus fĂĽr die aufgrund einfacher FahrlĂ¤ssigkeit verursachte Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Diese Haftung ist jedoch beschrĂ¤nkt auf den typischerweise vorhersehbaren Schaden. Wesentliche Vertragspflichten sind Pflichten, die zur ErfĂĽllung des Vertrages so wesentlich sind, dass deren ErfĂĽllung die ordnungsgemĂ¤Ăźe DurchfĂĽhrung des Vertrages ĂĽberhaupt erst ermĂ¶glicht und auf deren Einhaltung der Kunde regelmĂ¤Ăźig vertrauen darf.<br>11.3 Eine Haftung auĂźerhalb der Nr. 10.1 und 10.2 ist ausgeschlossen.</p>
    `,
  },
  {
    id: '13',
    text: `
    <p><b>12. Datenschutz</b><br>12.1 Der Kunde willigt darin ein, dass seine personenbezogenen Daten zur ErfĂĽllung des GeschĂ¤ftszweckes von Trader IQ erhoben, verarbeitet und genutzt werden. Die von den Kunden erhaltenen personenbezogenen Daten werden vertraulich behandelt. Die fĂĽr die Bearbeitung eines Auftrags notwendigen Daten wie Name und Adresse werden im Rahmen der DurchfĂĽhrung der Lieferung an die mit der Lieferung des Kaufgegenstands beauftragten Unternehmen weitergegeben. Im Ăśbrigen gibt Trader IQ personenbezogene Daten nicht an Dritte weiter.<br>12.2 Trader IQ speichert die fĂĽr die VertragserfĂĽllung erforderlichen Daten des Kunden gemĂ¤Ăź den steuerlichen Pflichten.<br>12.3 Registrierte Kunden von Trader IQ kĂ¶nnen ihre eigenen Benutzerinformationen nach Anmeldung jederzeit im geschĂĽtzten Bereich der Internetseite von Trader IQ einsehen und bearbeiten. Die Kunden kĂ¶nnen ihre jeweiligen Daten jederzeit lĂ¶schen lassen. Voraussetzung ist eine entsprechende Mitteilung an Trader IQ (info@traderiq.net). Sofern einer LĂ¶schung gesetzliche oder vertragliche Aufbewahrungspflichten oder sonstige gesetzliche GrĂĽnde entgegenstehen, werden die Daten gesperrt.</p>
    `,
  },
  {
    id: '14',
    text: `
    <p><b>13. Schlussbestimmungen</b><br>13.1 Der Vertrag zwischen Trader IQ und dem Kunden unter-liegt ausschlieĂźlich dem materiellen Recht der Bundesrepublik Deutschland unter Ausschluss des Kollisionsrechts und des UN-Kaufrechts. AusschlieĂźlicher Gerichtsstand ist Berlin, wenn der Kunde den Vertrag als Kaufmann oder Unternehmer abgeschlossen oder keinen allgemeinen Gerichtsstand in der Bundesrepublik Deutschland hat.<br>13.2 Die Ăśberschriften in diesen AGB dienen nur der besseren Lesbarkeit und sind bei der Auslegung der Bestimmungen nicht heranzuziehen. Die Verwendung des Singular impliziert den Plural und umgekehrt, des mĂ¤nnlichen, weiblichen oder sĂ¤chlichen Artikels auch jeden anderen dieser Artikel.<br>13.3 Die EuropĂ¤ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die im Internet unter http://ec.europa.eu/consumers/odr/ erreichbar ist. Dar-ĂĽber hinaus kann der Kunde einen Antrag auf auĂźergerichtliche Streitbeilegung bei der Allgemeinen Verbraucherschlichtungsstelle des Zentrums fĂĽr Schlichtung e.V., (StraĂźburger Str. 8, 77694 Kehl, Tel.: +49 7851 79579 40, Fax: +49 7851 79579 41, E-Mail: mail@verbraucherschlichter.de) stellen. Trader IQ ist nicht zur Teilnahme an einem auĂźergerichtlichen Streitbeilegungsverfahren verpflichtet.<br>13.4 Sollte eine Bestimmung des Vertrages einschlieĂźlich dieser AGB unwirksam oder undurchfĂĽhrbar sein oder werden, so bleiben die ĂĽbrigen Bestimmungen des Vertrages einschlieĂźlich dieser AGB unberĂĽhrt, es sei denn nach Wegfall einzelner Klauseln ist einer Vertragspartei ein Festhalten am Vertrag nicht mehr zumutbar.</p>
    `,
  },
]

const Datenschutz = [
  {
    id: '1',
    text: `
    <h2>1. Datenschutz auf einen Blick</h2><h3>Allgemeine Hinweise</h3><p>Die folgenden Hinweise geben einen einfachen Ăśberblick darĂĽber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persĂ¶nlich identifiziert werden kĂ¶nnen. AusfĂĽhrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgefĂĽhrten DatenschutzerklĂ¤rung.</p><h3>Datenerfassung auf unserer Website</h3><p><strong>Wer ist verantwortlich fĂĽr die Datenerfassung auf dieser Website?</strong></p><p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten kĂ¶nnen Sie dem Impressum dieser Website entnehmen.</p><p><strong>Wie erfassen wir Ihre Daten?</strong></p><p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p><p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p><p><strong>WofĂĽr nutzen wir Ihre Daten?</strong></p><p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewĂ¤hrleisten. Andere Daten kĂ¶nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p><p><strong>Welche Rechte haben Sie bezĂĽglich Ihrer Daten?</strong></p><p>Sie haben jederzeit das Recht unentgeltlich Auskunft ĂĽber Herkunft, EmpfĂ¤nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben auĂźerdem ein Recht, die Berichtigung, Sperrung oder LĂ¶schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kĂ¶nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zustĂ¤ndigen AufsichtsbehĂ¶rde zu.</p><p>AuĂźerdem haben Sie das Recht, unter bestimmten UmstĂ¤nden die EinschrĂ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der DatenschutzerklĂ¤rung unter â€žRecht auf EinschrĂ¤nkung der Verarbeitungâ€ś.</p><h3>Analyse-Tools und Tools von Drittanbietern</h3><p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurĂĽckverfolgt werden.</p><p>Sie kĂ¶nnen dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und ĂĽber Ihre WiderspruchsmĂ¶glichkeiten finden Sie in der folgenden DatenschutzerklĂ¤rung.</p>
    `,
  },
  {
    id: '2',
    text: `
    <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2><h3>Datenschutz</h3><p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persĂ¶nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser DatenschutzerklĂ¤rung.</p><p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persĂ¶nlich identifiziert werden kĂ¶nnen. Die vorliegende DatenschutzerklĂ¤rung erlĂ¤utert, welche Daten wir erheben und wofĂĽr wir sie nutzen. Sie erlĂ¤utert auch, wie und zu welchem Zweck das geschieht.</p><p>Wir weisen darauf hin, dass die DatenĂĽbertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) SicherheitslĂĽcken aufweisen kann. Ein lĂĽckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht mĂ¶glich.</p><h3>Hinweis zur verantwortlichen Stelle</h3><p>Die verantwortliche Stelle fĂĽr die Datenverarbeitung auf dieser Website ist:</p><p>Trader IQ GmbH<br>GeschĂ¤ftsfĂĽhrer Andrei Anissimov<br>SchillerstraĂźe 99<br>12305 Berlin</p><p>Telefon: +49 (0) 30 555 120 66<br>E-Mail: info@traderiq.net</p><p>Verantwortliche Stelle ist die natĂĽrliche oder juristische Person, die allein oder gemeinsam mit anderen ĂĽber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ă„.) entscheidet.</p><h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3><p>Viele DatenverarbeitungsvorgĂ¤nge sind nur mit Ihrer ausdrĂĽcklichen Einwilligung mĂ¶glich. Sie kĂ¶nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die RechtmĂ¤Ăźigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberĂĽhrt.</p><h3>Widerspruchsrecht gegen die Datenerhebung in besonderen FĂ¤llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3><p><strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus GrĂĽnden, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch fĂĽr ein auf diese Bestimmungen gestĂĽtztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser DatenschutzerklĂ¤rung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir kĂ¶nnen zwingende schutzwĂĽrdige GrĂĽnde fĂĽr die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten ĂĽberwiegen oder die Verarbeitung dient der Geltendmachung, AusĂĽbung oder Verteidigung von RechtsansprĂĽchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></p><p><strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch fĂĽr das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschlieĂźend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></p><h3>Beschwerderecht bei der zustĂ¤ndigen AufsichtsbehĂ¶rde</h3><p>Im Falle von VerstĂ¶Ăźen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer AufsichtsbehĂ¶rde, insbesondere in dem Mitgliedstaat ihres gewĂ¶hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaĂźlichen VerstoĂźes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p><h3>Recht auf DatenĂĽbertragbarkeit</h3><p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in ErfĂĽllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gĂ¤ngigen, maschinenlesbaren Format aushĂ¤ndigen zu lassen. Sofern Sie die direkte Ăśbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p><h3>SSL- bzw. TLS-VerschlĂĽsselung</h3><p>Diese Seite nutzt aus SicherheitsgrĂĽnden und zum Schutz der Ăśbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-VerschlĂĽsselung. Eine verschlĂĽsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von â€žhttp://â€ś auf â€žhttps://â€ś wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Wenn die SSL- bzw. TLS-VerschlĂĽsselung aktiviert ist, kĂ¶nnen die Daten, die Sie an uns ĂĽbermitteln, nicht von Dritten mitgelesen werden.</p><h3>VerschlĂĽsselter Zahlungsverkehr auf dieser Website</h3><p>Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.&nbsp;B. Kontonummer bei EinzugsermĂ¤chtigung) zu ĂĽbermitteln, werden diese Daten zur Zahlungsabwicklung benĂ¶tigt.</p><p>Der Zahlungsverkehr ĂĽber die gĂ¤ngigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschlieĂźlich ĂĽber eine verschlĂĽsselte SSL- bzw. TLS-Verbindung. Eine verschlĂĽsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von â€žhttp://â€ś auf â€žhttps://â€ś wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Bei verschlĂĽsselter Kommunikation kĂ¶nnen Ihre Zahlungsdaten, die Sie an uns ĂĽbermitteln, nicht von Dritten mitgelesen werden.</p><h3>Auskunft, Sperrung, LĂ¶schung und Berichtigung</h3><p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft ĂĽber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und EmpfĂ¤nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder LĂ¶schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kĂ¶nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p><h3>Recht auf EinschrĂ¤nkung der Verarbeitung</h3><p>Sie haben das Recht, die EinschrĂ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu kĂ¶nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf EinschrĂ¤nkung der Verarbeitung besteht in folgenden FĂ¤llen:</p><ul><li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benĂ¶tigen wir in der Regel Zeit, um dies zu ĂĽberprĂĽfen. FĂĽr die Dauer der PrĂĽfung haben Sie das Recht, die EinschrĂ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmĂ¤Ăźig geschah/geschieht, kĂ¶nnen Sie statt der LĂ¶schung die EinschrĂ¤nkung der Datenverarbeitung verlangen.</li><li>Wenn wir Ihre personenbezogenen Daten nicht mehr benĂ¶tigen, Sie sie jedoch zur AusĂĽbung, Verteidigung oder Geltendmachung von RechtsansprĂĽchen benĂ¶tigen, haben Sie das Recht, statt der LĂ¶schung die EinschrĂ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine AbwĂ¤gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen ĂĽberwiegen, haben Sie das Recht, die EinschrĂ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li></ul><p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschrĂ¤nkt haben, dĂĽrfen diese Daten â€“ von ihrer Speicherung abgesehen â€“ nur mit Ihrer Einwilligung oder zur Geltendmachung, AusĂĽbung oder Verteidigung von RechtsansprĂĽchen oder zum Schutz der Rechte einer anderen natĂĽrlichen oder juristischen Person oder aus GrĂĽnden eines wichtigen Ă¶ffentlichen Interesses der EuropĂ¤ischen Union oder eines Mitgliedstaats verarbeitet werden.</p><h3>Widerspruch gegen Werbe-E-Mails</h3><p>Der Nutzung von im Rahmen der Impressumspflicht verĂ¶ffentlichten Kontaktdaten zur Ăśbersendung von nicht ausdrĂĽcklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrĂĽcklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
    `,
  },
  {
    id: '3',
    text: `
    <h2>3. Datenerfassung auf unserer Website</h2><h3>Cookies</h3><p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p><p>Die meisten der von uns verwendeten Cookies sind so genannte â€žSession-Cookiesâ€ś. Sie werden nach Ende Ihres Besuchs automatisch gelĂ¶scht. Andere Cookies bleiben auf Ihrem EndgerĂ¤t gespeichert bis Sie diese lĂ¶schen. Diese Cookies ermĂ¶glichen es uns, Ihren Browser beim nĂ¤chsten Besuch wiederzuerkennen.</p><p>Sie kĂ¶nnen Ihren Browser so einstellen, dass Sie ĂĽber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies fĂĽr bestimmte FĂ¤lle oder generell ausschlieĂźen sowie das automatische LĂ¶schen der Cookies beim SchlieĂźen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die FunktionalitĂ¤t dieser Website eingeschrĂ¤nkt sein.</p><p>Cookies, die zur DurchfĂĽhrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwĂĽnschter Funktionen (z.&nbsp;B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser DatenschutzerklĂ¤rung gesondert behandelt.</p><h3>Server-Log-Dateien</h3><p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns ĂĽbermittelt. Dies sind:</p><ul><li>Browsertyp und Browserversion</li><li>verwendetes Betriebssystem</li><li>Referrer URL</li><li>Hostname des zugreifenden Rechners</li><li>Uhrzeit der Serveranfrage</li><li>IP-Adresse</li></ul><p>Eine ZusammenfĂĽhrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p><p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website â€“ hierzu mĂĽssen die Server-Log-Files erfasst werden.</p><h3>Kontaktformular</h3><p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fĂĽr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschlieĂźlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie kĂ¶nnen diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die RechtmĂ¤Ăźigkeit der bis zum Widerruf erfolgten DatenverarbeitungsvorgĂ¤nge bleibt vom Widerruf unberĂĽhrt.</p><p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur LĂ¶schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck fĂĽr die Datenspeicherung entfĂ¤llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen â€“ insbesondere Aufbewahrungsfristen â€“ bleiben unberĂĽhrt.</p><h3>Anfrage per E-Mail, Telefon oder Telefax</h3><p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der ErfĂĽllung eines Vertrags zusammenhĂ¤ngt oder zur DurchfĂĽhrung vorvertraglicher MaĂźnahmen erforderlich ist. In allen ĂĽbrigen FĂ¤llen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p><p>Die von Ihnen an uns per Kontaktanfragen ĂĽbersandten Daten verbleiben bei uns, bis Sie uns zur LĂ¶schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck fĂĽr die Datenspeicherung entfĂ¤llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen â€“ insbesondere gesetzliche Aufbewahrungsfristen â€“ bleiben unberĂĽhrt.</p><h3>Registrierung auf dieser Website</h3><p>Sie kĂ¶nnen sich auf unserer Website registrieren, um zusĂ¤tzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, fĂĽr den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben mĂĽssen vollstĂ¤ndig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.</p><p>FĂĽr wichtige Ă„nderungen etwa beim Angebotsumfang oder bei technisch notwendigen Ă„nderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.</p><p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie kĂ¶nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die RechtmĂ¤Ăźigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberĂĽhrt.</p><p>Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschlieĂźend gelĂ¶scht. Gesetzliche Aufbewahrungsfristen bleiben unberĂĽhrt.</p><h3>Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3><p>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie fĂĽr die BegrĂĽndung, inhaltliche Ausgestaltung oder Ă„nderung des RechtsverhĂ¤ltnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur ErfĂĽllung eines Vertrags oder vorvertraglicher MaĂźnahmen gestattet. Personenbezogene Daten ĂĽber die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermĂ¶glichen oder abzurechnen.</p><p>Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der GeschĂ¤ftsbeziehung gelĂ¶scht. Gesetzliche Aufbewahrungsfristen bleiben unberĂĽhrt.</p><h3>DatenĂĽbermittlung bei Vertragsschluss fĂĽr Dienstleistungen und digitale Inhalte</h3><p>Wir ĂĽbermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.</p><p>Eine weitergehende Ăśbermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Ăśbermittlung ausdrĂĽcklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrĂĽckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.</p><p>Grundlage fĂĽr die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur ErfĂĽllung eines Vertrags oder vorvertraglicher MaĂźnahmen gestattet.</p>
    `,
  },
  {
    id: '4',
    text: `
    <h2>4. Analyse-Tools und Werbung</h2><h3>Google Analytics</h3><p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited (â€žGoogleâ€ś), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Google Analytics verwendet so genannte â€žCookiesâ€ś. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermĂ¶glichen. Die durch den Cookie erzeugten Informationen ĂĽber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA ĂĽbertragen und dort gespeichert.</p><p>Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.</p><p><strong>IP Anonymisierung</strong></p><p>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der EuropĂ¤ischen Union oder in anderen Vertragsstaaten des Abkommens ĂĽber den EuropĂ¤ischen Wirtschaftsraum vor der Ăśbermittlung in die USA gekĂĽrzt. Nur in AusnahmefĂ¤llen wird die volle IP-Adresse an einen Server von Google in den USA ĂĽbertragen und dort gekĂĽrzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports ĂĽber die WebsiteaktivitĂ¤ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenĂĽber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser ĂĽbermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengefĂĽhrt.</p><p><strong>Browser Plugin</strong></p><p>Sie kĂ¶nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sĂ¤mtliche Funktionen dieser Website vollumfĂ¤nglich werden nutzen kĂ¶nnen. Sie kĂ¶nnen darĂĽber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfĂĽgbare Browser-Plugin herunterladen und installieren:&nbsp;<a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p><p><strong>Widerspruch gegen Datenerfassung</strong></p><p>Sie kĂ¶nnen die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukĂĽnftigen Besuchen dieser Website verhindert:&nbsp;<a>Google Analytics deaktivieren</a>.</p><p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der DatenschutzerklĂ¤rung von Google:&nbsp;<a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p><p><strong>Auftragsverarbeitung</strong></p><p>Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen DatenschutzbehĂ¶rden bei der Nutzung von Google Analytics vollstĂ¤ndig um.</p><p><strong>Speicherdauer</strong></p><p>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z.&nbsp;B. User ID) oder Werbe-IDs (z.&nbsp;B. DoubleClick-Cookies, Android-Werbe-ID) verknĂĽpft sind, werden nach 14 Monaten anonymisiert bzw. gelĂ¶scht. Details hierzu ersehen Sie unter folgendem Link:&nbsp;<a href="https://support.google.com/analytics/answer/7667196?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=de</a></p><h3>Google Analytics Remarketing</h3><p>Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in Verbindung mit den gerĂ¤teĂĽbergreifenden Funktionen von Google AdWords und Google DoubleClick. Anbieter ist die Google Ireland Limited (â€žGoogleâ€ś), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Diese Funktion ermĂ¶glicht es die mit Google Analytics Remarketing erstellten Werbe-Zielgruppen mit den gerĂ¤teĂĽbergreifenden Funktionen von Google AdWords und Google DoubleClick zu verknĂĽpfen. Auf diese Weise kĂ¶nnen interessenbezogene, personalisierte Werbebotschaften, die in AbhĂ¤ngigkeit Ihres frĂĽheren Nutzungs- und Surfverhaltens auf einem EndgerĂ¤t (z.&nbsp;B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer EndgerĂ¤te (z.&nbsp;B. Tablet oder PC) angezeigt werden.</p><p>Haben Sie eine entsprechende Einwilligung erteilt, verknĂĽpft Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto. Auf diese Weise kĂ¶nnen auf jedem EndgerĂ¤t auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben personalisierten Werbebotschaften geschaltet werden.</p><p>Zur UnterstĂĽtzung dieser Funktion erfasst Google Analytics google-authentifizierte IDs der Nutzer, die vorĂĽbergehend mit unseren Google-Analytics-Daten verknĂĽpft werden, um Zielgruppen fĂĽr die gerĂ¤teĂĽbergreifende Anzeigenwerbung zu definieren und zu erstellen.</p><p>Sie kĂ¶nnen dem gerĂ¤teĂĽbergreifenden Remarketing/Targeting dauerhaft widersprechen, indem Sie personalisierte Werbung in Ihrem Google-Konto deaktivieren; folgen Sie hierzu diesem Link:&nbsp;<a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads/onweb/</a>.</p><p>Die Zusammenfassung der erfassten Daten in Ihrem Google-Konto erfolgt ausschlieĂźlich auf Grundlage Ihrer Einwilligung, die Sie bei Google abgeben oder widerrufen kĂ¶nnen (Art. 6 Abs. 1 lit. a DSGVO). Bei DatenerfassungsvorgĂ¤ngen, die nicht in Ihrem Google-Konto zusammengefĂĽhrt werden (z.&nbsp;B. weil Sie kein Google-Konto haben oder der ZusammenfĂĽhrung widersprochen haben) beruht die Erfassung der Daten auf Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der Websitebetreiber ein Interesse an der anonymisierten Analyse der Websitebesucher zu Werbezwecken hat.</p><p>Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der DatenschutzerklĂ¤rung von Google unter:&nbsp;<a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads?hl=de</a>.</p><h3>Facebook Pixel</h3><p>Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (â€žFacebookâ€ś).</p><p>So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch kĂ¶nnen die Wirksamkeit der Facebook-Werbeanzeigen fĂĽr statistische und Marktforschungszwecke ausgewertet werden und zukĂĽnftige WerbemaĂźnahmen optimiert werden.</p><p>Die erhobenen Daten sind fĂĽr uns als Betreiber dieser Website anonym, wir kĂ¶nnen keine RĂĽckschlĂĽsse auf die IdentitĂ¤t der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil mĂ¶glich ist und Facebook die Daten fĂĽr eigene Werbezwecke, entsprechend der&nbsp;<a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook-Datenverwendungsrichtlinie</a>&nbsp;verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie auĂźerhalb von Facebook ermĂ¶glichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.</p><p>Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven WerbemaĂźnahmen unter Einschluss der sozialen Medien.</p><p>In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer PrivatsphĂ¤re:&nbsp;<a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/about/privacy/</a>.</p><p>Sie kĂ¶nnen auĂźerdem die Remarketing-Funktion â€žCustom Audiencesâ€ś im Bereich Einstellungen fĂĽr Werbeanzeigen unter&nbsp;<a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a>&nbsp;deaktivieren. Dazu mĂĽssen Sie bei Facebook angemeldet sein.</p><p>Wenn Sie kein Facebook Konto besitzen, kĂ¶nnen Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital Advertising Alliance deaktivieren:&nbsp;<a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.</p>
    `,
  },
  {
    id: '5',
    text: `
    <h2>5. Newsletter</h2><h3>Newsletterdaten</h3><p>Wenn Sie den auf der Website angebotenen Newsletter beziehen mĂ¶chten, benĂ¶tigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die ĂśberprĂĽfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschlieĂźlich fĂĽr den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p><p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschlieĂźlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters kĂ¶nnen Sie jederzeit widerrufen, etwa ĂĽber den â€žAustragenâ€ś-Link im Newsletter. Die RechtmĂ¤Ăźigkeit der bereits erfolgten DatenverarbeitungsvorgĂ¤nge bleibt vom Widerruf unberĂĽhrt.</p><p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelĂ¶scht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberĂĽhrt.</p><h3>Klick-Tipp</h3><p>Diese Website nutzt Klick-Tipp fĂĽr den Versand von Newslettern. Anbieter ist die KLICK-TIPP LIMITED, 15 Cambridge Court, 210 Shepherdâ€™s Bush Road, London W6 7NJ, Vereinigtes KĂ¶nigreich.</p><p>Klick-Tipp ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Die von Ihnen zum Zwecke des Newsletterbezugs eingegeben Daten werden auf den Servern von Klick-Tipp gespeichert.</p><p><strong>Datenanalyse durch Klick-Tipp</strong></p><p>Wenn wir Newsletter mit Hilfe von Klick-Tipp versenden, kĂ¶nnen wir feststellen, ob eine Newsletter-Nachricht geĂ¶ffnet und welche Links ggf. angeklickt wurden.</p><p>Klick-Tipp ermĂ¶glicht es uns auch, die Newsletter-EmpfĂ¤nger anhand verschiedener Kategorien zu unterteilen (sog. Tagging). Dabei lassen sich die NewsletterempfĂ¤nger z.&nbsp;B. nach Geschlecht, persĂ¶nlichen Vorlieben (z.&nbsp;B. Vegetarier oder Nicht-Vegetarier) oder Kundenbeziehung (z.&nbsp;B. Kunde oder potenzieller Kunde) unterteilen. Auf diese Weise lassen sich die Newsletter besser an die jeweiligen Zielgruppen anpassen. NĂ¤here Informationen erhalten Sie unter:&nbsp;<a href="https://www.klick-tipp.com/" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com</a>&nbsp;und&nbsp;<a href="https://www.klick-tipp.com/handbuch" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com/handbuch</a>.</p><p>Wenn Sie keine Analyse durch Klick-Tipp wollen, mĂĽssen Sie daher den Newsletter abbestellen. HierfĂĽr stellen wir in jeder Newsletternachricht einen entsprechenden Link zur VerfĂĽgung. Des Weiteren kĂ¶nnen Sie den Newsletter auch direkt auf der Website abbestellen.</p><p><strong>Rechtsgrundlage</strong></p><p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie kĂ¶nnen diese Einwilligung jederzeit widerrufen. Die RechtmĂ¤Ăźigkeit der bereits erfolgten DatenverarbeitungsvorgĂ¤nge bleibt vom Widerruf unberĂĽhrt.</p><p><strong>Speicherdauer</strong></p><p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters sowohl von unseren Servern als auch von den Servern von Klick-Tipp gelĂ¶scht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberĂĽhrt.</p><p>NĂ¤heres entnehmen Sie den Datenschutzbestimmungen von Klick-Tipp unter:&nbsp;<a href="https://www.klick-tipp.com/datenschutzerklaerung" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com/datenschutzerklaerung</a>.</p><p><strong>Abschluss eines Vertrags ĂĽber Auftragsverarbeitung</strong></p><p>Wir haben einen Vertrag ĂĽber Auftragsverarbeitung mit Klick-Tipp abgeschlossen, in dem wir Klick-Tipp verpflichten, die Daten unserer Kunden zu schĂĽtzen und sie nicht an Dritte weiterzugeben.</p>
    `,
  },
  {
    id: '6',
    text: `
    <h2>6. Plugins und Tools</h2><h3>YouTube</h3><p>Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die Google Ireland Limited (â€žGoogleâ€ś), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p><p>Des Weiteren kann Youtube verschiedene Cookies auf Ihrem EndgerĂ¤t speichern. Mit Hilfe dieser Cookies kann Youtube Informationen ĂĽber Besucher unserer Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem EndgerĂ¤t, bis Sie sie lĂ¶schen.</p><p>Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermĂ¶glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persĂ¶nlichen Profil zuzuordnen. Dies kĂ¶nnen Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p><p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p><p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der DatenschutzerklĂ¤rung von YouTube unter:&nbsp;<a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p><h3>Vimeo</h3><p>Unsere Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p><p>Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo erfassten Informationen werden an den Vimeo-Server in den USA ĂĽbermittelt.</p><p>Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermĂ¶glichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persĂ¶nlichen Profil zuzuordnen. Dies kĂ¶nnen Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.</p><p>Die Nutzung von Vimeo erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar.</p><p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der DatenschutzerklĂ¤rung von Vimeo unter:&nbsp;<a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">https://vimeo.com/privacy</a>.</p>
    `,
  },
  {
    id: '7',
    text: `
    <h2>7. Zahlungsanbieter und Reseller</h2><h3>Digistore24</h3><p>Einige unserer Produkte, Dienstleistungen und Inhalte werden von Digistore24 als Reseller angeboten. Anbieter und Vertragspartner ist die Digistore24 GmbH, St.-Godehard-StraĂźe 32 in 31139 Hildesheim. Welche Daten Digistore24 bei diesem Website-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen DatenschutzerklĂ¤rung dar. Weitere Informationen erhalten Sie in der DatenschutzerklĂ¤rung von Digistore24:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a>.</p><p><strong>Digistore24-Wordpress-Plugin</strong></p><p>Das WordPress-Plugin bietet die MĂ¶glichkeit, verschiedene Dienste von Digistore24 auf der eigenen Webseite einzubinden, z.&nbsp;B. die Social-Proof-Bubble, den Affiliate-Werbemittel-Generator oder andere Tools.</p><p>Bei jeder Einbindung werden nicht-personenbezogene Daten vom Digistore24-Server nachgeladen (z.&nbsp;B. eine Javascript-Datei).</p><p>Bei diesem Nachladen ruft Ihr Webbrowser eine Webseite vom Digistore24-Server ab. Unser Server hat keinen Einfluss darauf, in welchem Umfang Ihr Webbrowser dabei Daten an den Digistore24-Server ĂĽbertrĂ¤gt. Unser Server selbst ĂĽbermittelt in diesem Zusammenhang keine Daten an die Digistore24-Server.</p><p>Welche Daten Digistore24 bei diesem Webseiten-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen DatenschutzerklĂ¤rung dar. Die DatenschutzerklĂ¤rung von Digistore24 finden Sie hier:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a></p><p><strong>Conversion-Tools/Warenkorb</strong></p><p>Digistore24 bietet die MĂ¶glichkeit, ĂĽber HTML- und Javascript-Codes verschiedene Dienste auf der eigenen Webseite einzubinden, z.&nbsp;B. die Social-Proof-Bubble oder den Digistore24-Warenkorb.</p><p>Bei jeder Einbindung werden nicht-personenbezogene Daten vom Digistore24-Server nachgeladen (z.&nbsp;B. eine Javascript-Datei).</p><p>Bei diesem Nachladen ruft Ihr Webbrowser eine Webseite vom Digistore24-Server ab. Unser Server hat keinen Einfluss darauf, in welchem Umfang Ihr Webbrowser dabei Daten an den Digistore24-Server ĂĽbertrĂ¤gt. Unser Server selbst ĂĽbermittelt in diesem Zusammenhang keine Daten an die Digistore24-Server.</p><p>Welche Daten Digistore24 bei diesem Webseiten-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen DatenschutzerklĂ¤rung dar. Die DatenschutzerklĂ¤rung von Digistore24 finden Sie hier:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a></p>
    `,
  },
]

export const Greeting = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleD, setModalVisibleD] = useState(false)
  const contentWidth = useWindowDimensions().width

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.logo}>
          <Image
            source={logoTIQ}
            style={{ width: '90%', height: 180 * ratio }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => navigation.navigate('SignIn')}
          >
            <GradientBtn name="Log-In" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitReg}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.submitTextReg}>Registrieren</Text>
          </TouchableOpacity>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <GradientBtnClose />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                  <FlatList
                    data={AGB}
                    keyExtractor={({ id }, index) => id}
                    ListHeaderComponent={
                      <View>
                        <Text style={styles.modalTitle}>
                          AGBÂ´s der Trader IQ GmbH
                        </Text>
                        <Text style={styles.modalTitleH2}>
                          Allgemeine GeschĂ¤ftsbedingungen
                        </Text>
                      </View>
                    }
                    renderItem={({ item }) => (
                      <View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <RenderHtml
                            tagsStyles={tagsStyles}
                            source={{ html: item.text }}
                            contentWidth={contentWidth}
                          />
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisibleD}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisibleD(!modalVisibleD)}
                >
                  <GradientBtnClose />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                  <FlatList
                    data={Datenschutz}
                    keyExtractor={({ id }, index) => id}
                    ListHeaderComponent={
                      <Text style={styles.modalTitle}>Datenschutz</Text>
                    }
                    renderItem={({ item }) => (
                      <View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <RenderHtml
                            tagsStyles={tagsStyles}
                            source={{ html: item.text }}
                            contentWidth={contentWidth}
                          />
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Text style={[styles.text, { marginTop: '10%' }]}>
            Mit Ihrer Anmeldung akzeptieren Sie unsere{' '}
            <Text
              style={{ color: '#FF741F' }}
              onPress={() => setModalVisible(true)}
            >
              AGBâ€™s
            </Text>{' '}
            sowie unsere{' '}
            <Text
              style={{ color: '#FF741F' }}
              onPress={() => setModalVisibleD(true)}
            >
              Datenschutz
            </Text>
          </Text>
          <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>
            Laut{' '}
            <Text
              style={{ color: '#FF741F' }}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  'https://www.provenexpert.com/traderiq-gmbh'
                )
              }
            >
              Provenexpert
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Image
              source={topD}
              style={{ width: 132, height: 90, marginRight: '3%' }}
            />
            <Image
              source={topE}
              style={{ width: 132, height: 90, marginLeft: '3%' }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginBottom: '5%',
  },
  block: {
    alignItems: 'center',
  },
  wrapper: {
    width: '70%',
    height: 68,
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-medium',
    fontSize: 24,
  },
  submitReg: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FF741F',
    width: '70%',
    height: 68,
    justifyContent: 'center',
  },
  submitTextReg: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'ub-medium',
    fontSize: 24,
  },
  text: {
    width: '80%',
    fontFamily: 'ub-medium',
    fontSize: 15,
    textAlign: 'center',
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
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'ub-bold',
    fontSize: 21,
    color: '#FF741F',
  },
  modalTitleH2: {
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 0,
    fontFamily: 'ub-medium',
    fontSize: 15,
    color: '#FF741F',
  },
})
