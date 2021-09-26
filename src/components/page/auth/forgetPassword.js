// Забыл пароль
import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../../styles/style"

export const FotgetPass = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Забыл пароль</Text>
      </ScrollView>
    </View>
  )
}
