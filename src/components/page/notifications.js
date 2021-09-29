import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../styles/style"

export const Notifications = (props) => {
  return (
    <View style={gStyle.main}>
      <Text style={styles.not}>Sie haben keine neuen Benachrichtigungen</Text>
      <ScrollView></ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  not: { textAlign: "center", fontFamily: "ub-light", marginTop: "5%" },
})
