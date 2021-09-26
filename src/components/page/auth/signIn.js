// Авторизация
import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../../styles/style"

export const SignIn = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница менторы</Text>
      </ScrollView>
    </View>
  )
}
