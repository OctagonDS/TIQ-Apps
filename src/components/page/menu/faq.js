import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import Constants from 'expo-constants'
import Accordion from 'react-native-collapsible/Accordion'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const LoremIpsum2 =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
const CONTENT = [
  {
    title: 'Beliebteste Frage 1',
    content: LoremIpsum,
  },
  {
    title: 'Beliebteste Frage 2',
    content: LoremIpsum2,
  },
  {
    title: 'Beliebteste Frage 3',
    content: LoremIpsum,
  },
  {
    title: 'Beliebteste Frage 4',
    content: LoremIpsum,
  },
  {
    title: 'Beliebteste Frage 5',
    content: LoremIpsum,
  },
  {
    title: 'Beliebteste Frage 6',
    content: LoremIpsum,
  },
  {
    title: 'Beliebteste Frage 7',
    content: LoremIpsum,
  },
]

export class FaqPage extends Component {
  state = {
    activeSections: [],
    multipleSelect: false,
  }

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    })
  }

  renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    )
  }

  renderContent(section, _, isActive) {
    return (
      <View
        style={[
          styles.content,
          isActive ? styles.activeContent : styles.inactiveContent,
        ]}
      >
        <Text
          style={{ color: '#50555C', fontFamily: 'ub-reg', textAlign: 'left' }}
        >
          {section.content}
        </Text>
      </View>
    )
  }

  render() {
    const { multipleSelect, activeSections } = this.state

    return (
      <View style={gStyle.main}>
        <ScrollView
          contentContainerStyle={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
            sectionContainerStyle={{
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'ub-medium',
    color: '#fff',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#FF741F',
  },
  inactive: {
    backgroundColor: '#FF741F',
  },
  activeContent: {
    backgroundColor: 'rgba(255,116,31,0.3)',
  },
  inactiveContent: {
    backgroundColor: '#C4C4C4',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
})
