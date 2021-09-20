import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native"
import { Traderiq } from "./src/components/templates/traderiq"
import topandroid from "./src/components/atoms/topandroid"
import { Navbar } from "./src/components/organisms/navbar"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={topandroid.AndroidSafeArea}>
        <Traderiq />
        <StatusBar style="auto" />
      </SafeAreaView>
      <View style={styles.footer}>
        <Navbar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: Platform.OS === "ios" ? 120 : 80,
  },
})
