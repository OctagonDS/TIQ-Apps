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

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. '

const text = <Text>Привет</Text>
const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: text,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
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
        <Text>{section.content}</Text>
      </View>
    )
  }

  render() {
    const { multipleSelect, activeSections } = this.state

    return (
      <View style={gStyle.main}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
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
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'ub-medium',
    color: '#454A4F',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#C4C4C4',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  inactive: {
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
  },
  activeContent: {
    backgroundColor: '#D9D8D8',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  inactiveContent: {
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
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
