import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'
import { LinearGradient } from 'expo-linear-gradient'

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

export const FeedbackForm = ({ props, navigation }) => {
  const { userProfile } = useContext(mainContext)

  return (
    <View style={[gStyle.main, { alignContent: 'center' }]}>
      <ScrollView
        contentContainerStyle={{ paddingTop: '5%', paddingBottom: 20 }}
      >
        <Text style={styles.title}>Nimm Kontakt zum</Text>
        <Text style={styles.title}>Trader IQ Team auf</Text>
        <View
          style={{
            marginTop: '7%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Name*"
              autoCapitalize="none"
              autoCompleteType="off"
              defaultValue={userProfile && userProfile.name}
              autoCorrect={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="E-Mail*"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCompleteType="off"
              defaultValue={userProfile && userProfile.email}
              autoCorrect={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Betreff"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              // alignItems: 'center',
              // justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: '#FF741F',
                width: '80%',
                textAlignVertical: 'top',
                borderRadius: 7,
                fontSize: 18,
                paddingLeft: 10,
                paddingTop: 15,
                fontFamily: 'ub-reg',
                color: '#333',
                height: 180,
              }}
              placeholder="Wie können wir Ihnen helfen?"
              multiline={true}
              numberOfLines={10}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              editable
            />
          </View>
          <View style={{ marginTop: 20, width: '100%' }}>
            <TouchableOpacity style={styles.wrapper} onPress={() => {}}>
              <GradientBtn name="Übermitteln" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'ub-reg',
    fontSize: 20,
    color: '#545A60',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#FF741F',
    width: '80%',
    // marginLeft: '5%',
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'ub-reg',
    color: '#333',
  },
  noQuery: {
    textAlign: 'center',
    marginTop: 35,
    fontFamily: 'ub-reg',
    fontSize: 17,
    color: '#ACB3BF',
  },
  submitTextLog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ub-reg',
    fontSize: 17,
  },
  wrapper: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
  },
})
