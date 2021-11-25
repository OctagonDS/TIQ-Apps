import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native'
import { gStyle } from '../../styles/style'
import { IconFeedbackPlus } from '../atoms/iconCirclePlus'

export const Feedback = ({ navigation }) => {
  return (
    <View style={gStyle.main}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 35,
            fontFamily: 'ub-reg',
            fontSize: 17,
            color: '#ACB3BF',
          }}
        >
          Sie haben noch keine Tickets erstellt
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('FeedbackForm')}
        style={{
          position: 'absolute',
          bottom: '16%',
          right: '5%',
          zIndex: 1,
        }}
      >
        <IconFeedbackPlus />
      </TouchableOpacity>
      <ScrollView></ScrollView>
    </View>
  )
}
