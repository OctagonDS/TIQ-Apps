import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../styles/style"

export const Feedback = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Поддержка</Text>
      </ScrollView>
    </View>
  )
}
