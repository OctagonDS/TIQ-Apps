import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../styles/style"

export const Notifications = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница уведомлений</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
