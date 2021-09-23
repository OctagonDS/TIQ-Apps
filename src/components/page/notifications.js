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

const styles = StyleSheet.create({
  navbar: {
    height: Platform.OS === "android" ? "100%" : "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
})
