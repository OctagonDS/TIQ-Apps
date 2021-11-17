import React from 'react'
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import { gStyle } from '../../styles/style'

export const Mentor = (props) => {
  return (
    <View
      style={[
        gStyle.main,
        {
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingBottom: '25%',
        },
      ]}
    >
      <Text
        style={{ textAlign: 'center', fontFamily: 'ub-medium', fontSize: 18 }}
      >
        Dieser Abschnitt ist vorübergehend nicht verfügbar
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
