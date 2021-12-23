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
import HTML from 'react-native-render-html'
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
    <p><b>Allgemeine Geschäftsbedingungen/&nbsp; Vertragsbedingungen im Rahmen von Kaufverträgen über die Plattform https://traderiq.net</b></p><p>zwischen</p><p>Trader IQ GmbH<br>Schillerstraße 99<br>12305 Berlin</p><p>Fon: +49 30 55512066<br>Geschäftsführer: Andrei Anissimov<br>Amtsgericht Berlin (Charlottenburg) HRB 153713</p><p>– im Folgenden „Anbieter“ –</p><p>und</p><p>den in § 2 dieser AGB bezeichneten Nutzern dieser Plattform – im Folgenden „Kunde/Kunden“ – geschlossen werden.</p>
    `,
  },
  {
    id: '2',
    text: `
    <p><b>1. Geltungsbereich</b><br>1.1 Die folgenden allgemeinen Geschäftsbedingungen („AGB“) gelten für sämtliche Geschäftsbeziehungen zwischen der Trader IQ GmbH (Schillerstr. 99, 12305 Berlin, E-Mail: info@traderiq.net, Telefon: +49 (0)30 555 120 66, vertreten durch den Geschäftsführer Herrn Andrei Anissimov, („Trader IQ“) und Ihrem Kunden (der „Kunde“). Die allgemeinen Geschäftsbedingungen von Trader IQ gelten ausschließlich und unabhängig davon, ob der Kunde Verbraucher, Unternehmer oder Kaufmann ist. Maßgebend ist die jeweils bei Abschluss des Vertrages gültige Fassung der AGB. 1.2 Abweichungen von den AGB bedürfen der ausdrücklichen Zustimmung von Trader IQ. Allgemeine Geschäftsbedingungen des Kunden finden keine Anwendung, auch wenn wir ihrer Geltung nicht gesondert widersprechen.</p>
    `,
  },
  {
    id: '3',
    text: `
    <p><b>2. Leistungsinhalt</b><br>2.1 Trader IQ bietet Waren (CDs, DVDs, Bücher), Online-Kurse und Präsenzveranstaltungen an, durch welche Grundlagenwissen und ausschließlich allgemeine Informationen im Bereich des Handels mit Finanzinstrumenten gegeben werden. Von den Leistungen von Trader IQ nicht umfasst sind insbesondere persönliche Anlageempfehlungen an den Kunden oder die Vermittlung von Finanzinstrumenten.<br>2.2 Dem Kunden ist bewusst, dass die Vermittlung von Grundlagenwissen und allgemeinen Informationen zum Handel mit Finanzinstrumenten keine Gewähr für risikofreie Anlageentscheidungen beinhaltet. Der Kunde handelt bei Anlageentscheidungen ausschließlich auf eigenes Risiko und trifft eigenverantwortlich sämtliche Entscheidungen, gleich welcher Natur, die der Kunde im Zusammenhang mit einer von Trader IQ veräußerten Ware oder durchgeführten Veranstaltung trifft. Trader IQ trägt keine Verantwortung für eventuelle Folgen von Handlungen des Kunden auf Grundlage der Lehrinhalte.<br>2.3 Trader IQ erbringt keine Rechts- oder Steuerberatung im Rahmen ihrer Leistungen. Dem Kunden wird empfohlen, rechtlichen und steuerlichen Rat vor Anwendung der Lehrinhalte gesondert einzuholen.</p>
    `,
  },
  {
    id: '4',
    text: `
    <p><b>3. Vertragsschluss</b><br>3.1 Die Darstellung des Sortiments von Trader IQ über das Internet, in Katalogen und auf Informations- oder Lehrveranstaltungen stellt kein Angebot im Sinne der §§ 145 ff. BGB dar.<br>3.2 Der Kunde gibt gegenüber Trader IQ ein Angebot im Sinne von § 145 BGB ab, indem der Kunde eine Bestellung durch Auswählen und Speichern des betreffenden Angebots im Warenkorb auf der Internetseite www.traderiq.net und anschließendes Betätigen der Schaltfläche „Kostenpflichtig bestellen“ absendet, telefonisch eine Bestellung abgibt oder ein ausgefülltes Bestellformular überreicht oder dieses per E-Mail, Fax oder Post übersendet.<br>3.3 Trader IQ übermittelt dem Kunden eine Empfangsbestätigung, in welcher die Bestellung des Kunden nochmals aufgeführt wird. Bei Verwendung des gedruckten Bestellformulars behält der Kunde einen Durchschlag. Bei Übermittlung der Empfangsbestätigung per E-Mail kann der Kunde diese über die Funktion „Drucken“ ausdrucken. Bei einer Bestellung über das Internet wird darüber hinaus eine Zusammenfassung angezeigt, die der Kunde abspeichern und ausdrucken kann.<br>3.4 Der Vertrag mit Trader IQ kommt zustande, wenn Trader IQ das Angebot des Kunden annimmt. Als Annahme gilt auch die Mitteilung an den Kunden, dass ein Platz für ihn reserviert ist. Wenn Trader IQ das Angebot des Kunden nicht annimmt, wird dies dem Kunden mündlich, telefonisch oder in Textform mitgeteilt. Bis zur Annahme des Angebots durch Trader IQ kann der Kunde das Angebot jederzeit widerrufen.<br>3.5 Trader IQ speichert Verträge in elektronischer oder in Papierform. Der Kunde kann auf Wunsch Kopien seines Vertragsangebots gesondert anfordern.<br>3.6 Trader IQ behält sich das Recht vor, Kunden vor Vertragsschluss im Hinblick auf deren wirtschaftliche Leistungsfähigkeit durch Auskunfteien prüfen zu lassen. Im Übrigen behält sich Trader IQ das Recht vor, den Kunden bei begründetem Anlass auf dessen Bonität und Leistungsfähigkeit zu prüfen und auch in anderen Fällen Angaben zu verlangen, die die Prüfung ermöglichen, sofern dies nicht bereits mit den Vertragsunterlagen geschehen ist.</p>
    `,
  },
  {
    id: '5',
    text: `
    <p><b>4. Preise</b><br>Der jeweils angegebene Preis für den Vertragsgegenstand versteht sich als Endpreis einschließlich eventuell anfallender Umsatzsteuer und weiterer Preisbestandteile. Der Preis umfasst nicht etwaige Liefer- und Versandkosten, wie z.B. für Waren, Lehrbücher oder sonstige Materialien. Soweit gesonderte Kosten für Zugänge zu Systemen oder Programmen anfallen, werden diese gesondert ausgewiesen.</p>
    `,
  },
  {
    id: '6',
    text: `
    <p><b>5. Zahlung, Fälligkeit, Zahlungsverzug</b><br>5.1 Die Vergütung für die Leistungen von Trader IQ ist vor dem Bezug der Ware bzw. vor der Teilnahme an den Online-Kursen und/oder Präsenzveranstaltungen durch den Kunden an Trader IQ zu zahlen. Die möglichen Zahlungsarten werden durch Trader IQ bekanntgegeben. Trader IQ akzeptiert für Buchungen über den Webshop nur die im Rahmen des Bestellvorgangs dem Kunden jeweils bekanntgegebenen Zahlungsarten. Trader IQ behält sich das Recht vor, im Einzelfall andere Zahlungsarten zuzulassen oder einzelne auszuschließen bzw. entsprechende Abweichungen gesondert mit dem Kunden zu vereinbaren.<br>5.2 Bei Zahlung per Vorkasse, Überweisung oder PayPal verpflichtet sich der Kunde, die Vergütung nach Vertragsschluss unverzüglich zu zahlen. Bei Zahlung auf Rechnung verpflichtet sich der Kunde, den Rechnungsbetrag innerhalb von 7 Tagen nach Erhalt der Rechnung zu begleichen. Sofern eine Zahlung per Bankeinzug vereinbart wurde, erfolgt die Abbuchung innerhalb einer Woche nach Vertragsschluss. Bei Zahlung per Kreditkarte erfolgt die Abbuchung nach Vertragsschluss. Ratenzahlungen sind nur zulässig, wenn dies mit dem Kunden ausdrücklich vereinbart wurde.<br>5.3 Im Falle der Mahnung nach Eintritt des Zahlungsverzugs beträgt die Mahngebühr EUR 15,00, sofern sich nicht aus vertraglichen oder gesetzlichen Bestimmungen etwas anderes ergibt und sofern nicht Trader IQ oder der Kunde einen niedrigeren oder höheren Verzugsschaden nachweist.<br>5.4 Der Kunde ist zu einer Aufrechnung gegen Forderungen aus Leistungen von Trader IQ nur berechtigt, sofern und soweit seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder von Trader IQ anerkannt sind.</p>
    `,
  },
  {
    id: '7',
    text: `
    <p><b>6. Lieferung von Waren</b><br>6.1 Alle Waren, die bei Trader IQ sofort verfügbar sind, werden in der Regel innerhalb von 10 Werktagen auf den Versandweg gebracht bzw. online freigeschaltet Sollten nicht alle bestellten Waren vorrätig sein, ist Trader IQ zu Teillieferungen auf seine Kosten berechtigt, soweit dies für den Kunden zumutbar ist.<br>6.2 Die Lieferfrist verlängert sich um die Zeit, bis der Kunde alle Angaben und Unterlagen, welche für die Ausführung des Auftrages notwendig sind, überreicht hat.<br>6.3 Lieferverzögerungen, die durch Maßnahmen im Rahmen von Arbeitsausfällen, insbesondere Streik und Aussperrung, gesetzliche oder behördliche Anordnungen (z.B. Import- und Exportbeschränkungen) sowie weitere von Trader IQ nicht zu vertretende Umstände verursacht werden, verlängern die Lieferfrist entsprechend der Dauer derartiger Hindernisse. Deren Beginn und Ende wird Trader IQ dem Kunden in wichtigen Fällen unverzüglich mitteilen.</p>
    `,
  },
  {
    id: '8',
    text: `
    <p><b>7. Online-Kurse und Präsenzveranstaltungen</b><br>7.1 Online-Kurse und Präsenzveranstaltungen stellen Dienstleistungen im Sinne des § 611 BGB dar.<br>7.2 Für einen bei Buchung festgelegten Termin oder für eine feste Laufzeit abgeschlossene Verträge über Online-Kurse und Präsenzveranstaltungen sind durch den Kunden nicht vorzeitig kündbar, soweit sich aus der Vereinbarung mit dem Kunden oder diesen AGB nichts anderes ergibt.<br>7.3 Trader IQ behält sich das Recht vor, einzelne Online-Kurse oder Präsenzveranstaltungen zu verschieben, wenn diese, bedingt durch Krankheit, Tod oder sonstige unvorhersehbare persönliche Verhinderung des Vortragenden, nicht an dem ursprünglich vorgesehenen Termin durchgeführt werden kann. Trader IQ wird den Kunden unverzüglich von der Absage unterrichten und sobald wie möglich einen Ersatztermin bekanntgeben. Sollte ein Ersatztermin nicht innerhalb von 12 Monaten stattfinden, ist der Kunde berechtigt, vom Vertrag zurückzutreten und Rückzahlung des bereits gezahlten Entgelts für die nicht durchgeführte Präsenzveranstaltung oder den nicht durchgeführten Online-Kurs zu verlangen.<br>7.4 Trader IQ wird den Kunden auch unverzüglich unterrichten, wenn gebuchte Online-Kurse und/oder Präsenzveranstaltungen vollständig und ersatzlos abgesagt werden müssen. In diesem Fall verpflichtet sich Trader IQ, dem Kunden das Entgelt unverzüglich zurückzuzahlen.<br>7.5 Sofern der Kunde eine Umbuchung, die Teilnahme einer anderen als der angemeldeten Person oder die Änderung des Vertragspartners wünscht und sich Trader IQ damit einverstanden erklärt, fällt bei dem (neuen) Kunden eine Entschädigung in Höhe von EUR 15,00 inkl. gesetzlicher Umsatzsteuer an, sofern sich nicht aus vertraglichen oder gesetzlichen Bestimmungen etwas anderes ergibt und sofern nicht Trader IQ oder der Kunde einen niedrigeren oder höheren Aufwand nachweist.<br>7.6 Das Recht zur Kündigung aus wichtigem Grund bleibt unberührt.</p>
    `,
  },
  {
    id: '9',
    text: `
    <p><b>8. Rücktritt</b><br>8.1 Trader IQ ist berechtigt von dem Vertrag auch hinsichtlich eines noch offenen Teils der Leistung zurückzutreten, wenn falsche Angaben über die Kreditwürdigkeit des Kunden gemacht worden oder objektive Gründe hinsichtlich der Zahlungsunfähigkeit des Kunden entstanden sind, bspw. die Eröffnung eines Insolvenzverfahrens über das Vermögen des Kunden oder dessen Abweisung mangels Masse. Dem Kunden wird vor dem Rücktritt die Möglichkeit eingeräumt, eine Vorauszahlung zu leisten oder eine taugliche Sicherheit zu erbringen.<br>8.2 Der Kunde ist berechtigt, bis zum Beginn eines Online-Kurses/ einer Präsenzveranstaltung von dem Vertrag zurückzutreten. Bei Rücktritt bis spätestens zum 14. Tag vor Beginn der des Onine-Kurses/ der Präsenzrveranstaltung besteht keine Stornogebühr; bei späterem Rücktritt bis spätestens zum Beginn des Online-Kurses/ der Präsenzveranstaltung fällt eine Stornogebühr in Höhe von 25 % des Veranstaltungspreises an.<br>8.3 Sofern dem Kunden bei Online-Kursen/ Präsenzveranstaltungen eine „Geld-zurück-Garantie“ eingeräumt wird, hat er das Recht, innerhalb von 24 Stunden nach Beginn der Lehrveranstaltung/ des Online-Kurses von dem Vertrag vollständig zurücktreten, sofern er (i) vor Veranstaltungs-/ Kurs-Beginn den Veranstaltungs-/ Kurspreis vollständig gezahlt und (ii) an mindestens einem Veranstaltungstag/ Online-Webinar durchgängig teilgenommen hat.<br>8.4 Unbeschadet etwaiger Schadensersatzansprüche sind im Falle des Teilrücktritts bereits erbrachte Teilleistungen vertragsgemäß zu bezahlen.</p>
    `,
  },
  {
    id: '10',
    text: `
    <p><b>9. Widerrufsrecht des Verbrauchers</b><br>Sofern der Kunde Verbraucher ist, gilt nachfolgendes:</p><p><b>Widerrufsbelehrung</b></p><p><b>Widerruf</b><br>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.<br>Die Widerrufsfrist beträgt vierzehn Tage (i) ab dem Tag des Vertragsabschlusses, (ii) abweichend davon im Falle eines Kaufvertrages ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat und (iii) abweichend davon im Falle eines Kaufvertrags über mehrere Waren, die Sie im Rahmen einer einheitlichen Bestellung bestellt haben und die getrennt geliefert werden, ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p><p>Um das Widerrufsrecht auszuüben, müssen Sie uns (Trader IQ GmbH, Schillerstr. 99, 12305 Berlin, E-Mail: info@traderiq.net, Telefon: +49 (0)30 555 120 66) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das Muster-Widerrufsformular auf der Webseite www.traderiq.net verwenden, das jedoch nicht vorgeschrieben ist.<br>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p><p><b>Folgen des Widerrufs</b><br>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, ein-schließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.<br>Im Falle eines Kaufvertrages: Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vier-zehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.<br>Im Falle eines Vertrags zur Erbringung von Dienstleistungen: Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht. Trader IQ ist berechtigt, erst nach Ablauf der Widerrufsfrist zu leisten.</p>
    `,
  },
  {
    id: '11',
    text: `
    <p><b>10. Gewährleistung</b><br>10.1 Im Falle eines Kaufvertrages gilt das gesetzliche Gewährleistungsrecht mit den folgenden Abweichungen. Sofern der Kunde Verbraucher ist, beträgt die Verjährung der in § 437 BGB bezeichneten Ansprüche (Gewährleistungsfrist) bei gebrauchten Sachen ein Jahr ab dem gesetzlichen Verjährungsbeginn, ausgenommen ein Anspruch des Verbrauchers auf Schadensersatz. Sofern der Kunde kein Verbraucher ist, beträgt die Verjährung der in § 437 BGB bezeichneten Ansprüche (Gewährleistungsfrist) ein Jahr ab dem gesetzlichen Verjährungsbeginn.<br>10.2 Trader IQ übernimmt eine Garantie nur, wenn diese ausdrücklich zugesichert wird.</p>
    `,
  },
  {
    id: '12',
    text: `
    <p><b>11. Haftung</b><br>11.1 Trader IQ haftet unbeschränkt für die von ihr oder ihren Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursachten Schäden und die schuldhaft verursachten Schäden an Leib, Körper, Gesundheit sowie gemäß den Bestimmungen des Produkthaftungsgesetzes.<br>11.2 Trader IQ haftet darüber hinaus für die aufgrund einfacher Fahrlässigkeit verursachte Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Diese Haftung ist jedoch beschränkt auf den typischerweise vorhersehbaren Schaden. Wesentliche Vertragspflichten sind Pflichten, die zur Erfüllung des Vertrages so wesentlich sind, dass deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.<br>11.3 Eine Haftung außerhalb der Nr. 10.1 und 10.2 ist ausgeschlossen.</p>
    `,
  },
  {
    id: '13',
    text: `
    <p><b>12. Datenschutz</b><br>12.1 Der Kunde willigt darin ein, dass seine personenbezogenen Daten zur Erfüllung des Geschäftszweckes von Trader IQ erhoben, verarbeitet und genutzt werden. Die von den Kunden erhaltenen personenbezogenen Daten werden vertraulich behandelt. Die für die Bearbeitung eines Auftrags notwendigen Daten wie Name und Adresse werden im Rahmen der Durchführung der Lieferung an die mit der Lieferung des Kaufgegenstands beauftragten Unternehmen weitergegeben. Im Übrigen gibt Trader IQ personenbezogene Daten nicht an Dritte weiter.<br>12.2 Trader IQ speichert die für die Vertragserfüllung erforderlichen Daten des Kunden gemäß den steuerlichen Pflichten.<br>12.3 Registrierte Kunden von Trader IQ können ihre eigenen Benutzerinformationen nach Anmeldung jederzeit im geschützten Bereich der Internetseite von Trader IQ einsehen und bearbeiten. Die Kunden können ihre jeweiligen Daten jederzeit löschen lassen. Voraussetzung ist eine entsprechende Mitteilung an Trader IQ (info@traderiq.net). Sofern einer Löschung gesetzliche oder vertragliche Aufbewahrungspflichten oder sonstige gesetzliche Gründe entgegenstehen, werden die Daten gesperrt.</p>
    `,
  },
  {
    id: '14',
    text: `
    <p><b>13. Schlussbestimmungen</b><br>13.1 Der Vertrag zwischen Trader IQ und dem Kunden unter-liegt ausschließlich dem materiellen Recht der Bundesrepublik Deutschland unter Ausschluss des Kollisionsrechts und des UN-Kaufrechts. Ausschließlicher Gerichtsstand ist Berlin, wenn der Kunde den Vertrag als Kaufmann oder Unternehmer abgeschlossen oder keinen allgemeinen Gerichtsstand in der Bundesrepublik Deutschland hat.<br>13.2 Die Überschriften in diesen AGB dienen nur der besseren Lesbarkeit und sind bei der Auslegung der Bestimmungen nicht heranzuziehen. Die Verwendung des Singular impliziert den Plural und umgekehrt, des männlichen, weiblichen oder sächlichen Artikels auch jeden anderen dieser Artikel.<br>13.3 Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die im Internet unter http://ec.europa.eu/consumers/odr/ erreichbar ist. Dar-über hinaus kann der Kunde einen Antrag auf außergerichtliche Streitbeilegung bei der Allgemeinen Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V., (Straßburger Str. 8, 77694 Kehl, Tel.: +49 7851 79579 40, Fax: +49 7851 79579 41, E-Mail: mail@verbraucherschlichter.de) stellen. Trader IQ ist nicht zur Teilnahme an einem außergerichtlichen Streitbeilegungsverfahren verpflichtet.<br>13.4 Sollte eine Bestimmung des Vertrages einschließlich dieser AGB unwirksam oder undurchführbar sein oder werden, so bleiben die übrigen Bestimmungen des Vertrages einschließlich dieser AGB unberührt, es sei denn nach Wegfall einzelner Klauseln ist einer Vertragspartei ein Festhalten am Vertrag nicht mehr zumutbar.</p>
    `,
  },
]

const Datenschutz = [
  {
    id: '1',
    text: `
    <h2>1. Datenschutz auf einen Blick</h2><h3>Allgemeine Hinweise</h3><p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p><h3>Datenerfassung auf unserer Website</h3><p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p><p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p><p><strong>Wie erfassen wir Ihre Daten?</strong></p><p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p><p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p><p><strong>Wofür nutzen wir Ihre Daten?</strong></p><p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p><p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p><p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p><p>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</p><h3>Analyse-Tools und Tools von Drittanbietern</h3><p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</p><p>Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.</p>
    `,
  },
  {
    id: '2',
    text: `
    <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2><h3>Datenschutz</h3><p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p><p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p><p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p><h3>Hinweis zur verantwortlichen Stelle</h3><p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p><p>Trader IQ GmbH<br>Geschäftsführer Andrei Anissimov<br>Schillerstraße 99<br>12305 Berlin</p><p>Telefon: +49 (0) 30 555 120 66<br>E-Mail: info@traderiq.net</p><p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p><h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3><p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p><h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3><p><strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></p><p><strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></p><h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3><p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p><h3>Recht auf Datenübertragbarkeit</h3><p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p><h3>SSL- bzw. TLS-Verschlüsselung</h3><p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p><h3>Verschlüsselter Zahlungsverkehr auf dieser Website</h3><p>Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.&nbsp;B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung benötigt.</p><p>Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p><h3>Auskunft, Sperrung, Löschung und Berichtigung</h3><p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p><h3>Recht auf Einschränkung der Verarbeitung</h3><p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p><ul><li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li><li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li></ul><p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p><h3>Widerspruch gegen Werbe-E-Mails</h3><p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
    `,
  },
  {
    id: '3',
    text: `
    <h2>3. Datenerfassung auf unserer Website</h2><h3>Cookies</h3><p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p><p>Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p><p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p><p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p><h3>Server-Log-Dateien</h3><p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p><ul><li>Browsertyp und Browserversion</li><li>verwendetes Betriebssystem</li><li>Referrer URL</li><li>Hostname des zugreifenden Rechners</li><li>Uhrzeit der Serveranfrage</li><li>IP-Adresse</li></ul><p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p><p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p><h3>Kontaktformular</h3><p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p><p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p><h3>Anfrage per E-Mail, Telefon oder Telefax</h3><p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p><p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p><h3>Registrierung auf dieser Website</h3><p>Sie können sich auf unserer Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.</p><p>Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.</p><p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p><p>Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p><h3>Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3><p>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.</p><p>Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p><h3>Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</h3><p>Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.</p><p>Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.</p><p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
    `,
  },
  {
    id: '4',
    text: `
    <h2>4. Analyse-Tools und Werbung</h2><h3>Google Analytics</h3><p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p><p>Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.</p><p><strong>IP Anonymisierung</strong></p><p>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p><p><strong>Browser Plugin</strong></p><p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:&nbsp;<a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p><p><strong>Widerspruch gegen Datenerfassung</strong></p><p>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert:&nbsp;<a>Google Analytics deaktivieren</a>.</p><p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google:&nbsp;<a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p><p><strong>Auftragsverarbeitung</strong></p><p>Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p><p><strong>Speicherdauer</strong></p><p>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z.&nbsp;B. User ID) oder Werbe-IDs (z.&nbsp;B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter folgendem Link:&nbsp;<a href="https://support.google.com/analytics/answer/7667196?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=de</a></p><h3>Google Analytics Remarketing</h3><p>Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in Verbindung mit den geräteübergreifenden Funktionen von Google AdWords und Google DoubleClick. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Diese Funktion ermöglicht es die mit Google Analytics Remarketing erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google AdWords und Google DoubleClick zu verknüpfen. Auf diese Weise können interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem Endgerät (z.&nbsp;B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z.&nbsp;B. Tablet oder PC) angezeigt werden.</p><p>Haben Sie eine entsprechende Einwilligung erteilt, verknüpft Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto. Auf diese Weise können auf jedem Endgerät auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben personalisierten Werbebotschaften geschaltet werden.</p><p>Zur Unterstützung dieser Funktion erfasst Google Analytics google-authentifizierte IDs der Nutzer, die vorübergehend mit unseren Google-Analytics-Daten verknüpft werden, um Zielgruppen für die geräteübergreifende Anzeigenwerbung zu definieren und zu erstellen.</p><p>Sie können dem geräteübergreifenden Remarketing/Targeting dauerhaft widersprechen, indem Sie personalisierte Werbung in Ihrem Google-Konto deaktivieren; folgen Sie hierzu diesem Link:&nbsp;<a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads/onweb/</a>.</p><p>Die Zusammenfassung der erfassten Daten in Ihrem Google-Konto erfolgt ausschließlich auf Grundlage Ihrer Einwilligung, die Sie bei Google abgeben oder widerrufen können (Art. 6 Abs. 1 lit. a DSGVO). Bei Datenerfassungsvorgängen, die nicht in Ihrem Google-Konto zusammengeführt werden (z.&nbsp;B. weil Sie kein Google-Konto haben oder der Zusammenführung widersprochen haben) beruht die Erfassung der Daten auf Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der Websitebetreiber ein Interesse an der anonymisierten Analyse der Websitebesucher zu Werbezwecken hat.</p><p>Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerklärung von Google unter:&nbsp;<a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads?hl=de</a>.</p><h3>Facebook Pixel</h3><p>Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA („Facebook“).</p><p>So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.</p><p>Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der&nbsp;<a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook-Datenverwendungsrichtlinie</a>&nbsp;verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.</p><p>Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien.</p><p>In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre:&nbsp;<a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/about/privacy/</a>.</p><p>Sie können außerdem die Remarketing-Funktion „Custom Audiences“ im Bereich Einstellungen für Werbeanzeigen unter&nbsp;<a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a>&nbsp;deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.</p><p>Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital Advertising Alliance deaktivieren:&nbsp;<a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.</p>
    `,
  },
  {
    id: '5',
    text: `
    <h2>5. Newsletter</h2><h3>Newsletterdaten</h3><p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p><p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p><p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt.</p><h3>Klick-Tipp</h3><p>Diese Website nutzt Klick-Tipp für den Versand von Newslettern. Anbieter ist die KLICK-TIPP LIMITED, 15 Cambridge Court, 210 Shepherd’s Bush Road, London W6 7NJ, Vereinigtes Königreich.</p><p>Klick-Tipp ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Die von Ihnen zum Zwecke des Newsletterbezugs eingegeben Daten werden auf den Servern von Klick-Tipp gespeichert.</p><p><strong>Datenanalyse durch Klick-Tipp</strong></p><p>Wenn wir Newsletter mit Hilfe von Klick-Tipp versenden, können wir feststellen, ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden.</p><p>Klick-Tipp ermöglicht es uns auch, die Newsletter-Empfänger anhand verschiedener Kategorien zu unterteilen (sog. Tagging). Dabei lassen sich die Newsletterempfänger z.&nbsp;B. nach Geschlecht, persönlichen Vorlieben (z.&nbsp;B. Vegetarier oder Nicht-Vegetarier) oder Kundenbeziehung (z.&nbsp;B. Kunde oder potenzieller Kunde) unterteilen. Auf diese Weise lassen sich die Newsletter besser an die jeweiligen Zielgruppen anpassen. Nähere Informationen erhalten Sie unter:&nbsp;<a href="https://www.klick-tipp.com/" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com</a>&nbsp;und&nbsp;<a href="https://www.klick-tipp.com/handbuch" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com/handbuch</a>.</p><p>Wenn Sie keine Analyse durch Klick-Tipp wollen, müssen Sie daher den Newsletter abbestellen. Hierfür stellen wir in jeder Newsletternachricht einen entsprechenden Link zur Verfügung. Des Weiteren können Sie den Newsletter auch direkt auf der Website abbestellen.</p><p><strong>Rechtsgrundlage</strong></p><p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p><p><strong>Speicherdauer</strong></p><p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters sowohl von unseren Servern als auch von den Servern von Klick-Tipp gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt.</p><p>Näheres entnehmen Sie den Datenschutzbestimmungen von Klick-Tipp unter:&nbsp;<a href="https://www.klick-tipp.com/datenschutzerklaerung" target="_blank" rel="noopener noreferrer">https://www.klick-tipp.com/datenschutzerklaerung</a>.</p><p><strong>Abschluss eines Vertrags über Auftragsverarbeitung</strong></p><p>Wir haben einen Vertrag über Auftragsverarbeitung mit Klick-Tipp abgeschlossen, in dem wir Klick-Tipp verpflichten, die Daten unserer Kunden zu schützen und sie nicht an Dritte weiterzugeben.</p>
    `,
  },
  {
    id: '6',
    text: `
    <h2>6. Plugins und Tools</h2><h3>YouTube</h3><p>Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p><p>Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p><p>Des Weiteren kann Youtube verschiedene Cookies auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann Youtube Informationen über Besucher unserer Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.</p><p>Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p><p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p><p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter:&nbsp;<a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p><h3>Vimeo</h3><p>Unsere Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p><p>Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo erfassten Informationen werden an den Vimeo-Server in den USA übermittelt.</p><p>Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.</p><p>Die Nutzung von Vimeo erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar.</p><p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Vimeo unter:&nbsp;<a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">https://vimeo.com/privacy</a>.</p>
    `,
  },
  {
    id: '7',
    text: `
    <h2>7. Zahlungsanbieter und Reseller</h2><h3>Digistore24</h3><p>Einige unserer Produkte, Dienstleistungen und Inhalte werden von Digistore24 als Reseller angeboten. Anbieter und Vertragspartner ist die Digistore24 GmbH, St.-Godehard-Straße 32 in 31139 Hildesheim. Welche Daten Digistore24 bei diesem Website-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen Datenschutzerklärung dar. Weitere Informationen erhalten Sie in der Datenschutzerklärung von Digistore24:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a>.</p><p><strong>Digistore24-Wordpress-Plugin</strong></p><p>Das WordPress-Plugin bietet die Möglichkeit, verschiedene Dienste von Digistore24 auf der eigenen Webseite einzubinden, z.&nbsp;B. die Social-Proof-Bubble, den Affiliate-Werbemittel-Generator oder andere Tools.</p><p>Bei jeder Einbindung werden nicht-personenbezogene Daten vom Digistore24-Server nachgeladen (z.&nbsp;B. eine Javascript-Datei).</p><p>Bei diesem Nachladen ruft Ihr Webbrowser eine Webseite vom Digistore24-Server ab. Unser Server hat keinen Einfluss darauf, in welchem Umfang Ihr Webbrowser dabei Daten an den Digistore24-Server überträgt. Unser Server selbst übermittelt in diesem Zusammenhang keine Daten an die Digistore24-Server.</p><p>Welche Daten Digistore24 bei diesem Webseiten-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen Datenschutzerklärung dar. Die Datenschutzerklärung von Digistore24 finden Sie hier:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a></p><p><strong>Conversion-Tools/Warenkorb</strong></p><p>Digistore24 bietet die Möglichkeit, über HTML- und Javascript-Codes verschiedene Dienste auf der eigenen Webseite einzubinden, z.&nbsp;B. die Social-Proof-Bubble oder den Digistore24-Warenkorb.</p><p>Bei jeder Einbindung werden nicht-personenbezogene Daten vom Digistore24-Server nachgeladen (z.&nbsp;B. eine Javascript-Datei).</p><p>Bei diesem Nachladen ruft Ihr Webbrowser eine Webseite vom Digistore24-Server ab. Unser Server hat keinen Einfluss darauf, in welchem Umfang Ihr Webbrowser dabei Daten an den Digistore24-Server überträgt. Unser Server selbst übermittelt in diesem Zusammenhang keine Daten an die Digistore24-Server.</p><p>Welche Daten Digistore24 bei diesem Webseiten-Aufruf speichert und verarbeitet, legt die Digistore24 GmbH als Verantwortlicher in der eigenen Datenschutzerklärung dar. Die Datenschutzerklärung von Digistore24 finden Sie hier:&nbsp;<a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer">https://www.digistore24.com/dataschutz</a></p>
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
                          AGB´s der Trader IQ GmbH
                        </Text>
                        <Text style={styles.modalTitleH2}>
                          Allgemeine Geschäftsbedingungen
                        </Text>
                      </View>
                    }
                    renderItem={({ item }) => (
                      <View>
                        <View style={{ paddingHorizontal: 10 }}>
                          <HTML
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
                          <HTML
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
              AGB’s
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
