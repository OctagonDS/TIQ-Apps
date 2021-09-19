import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { Traderiq } from "./src/components/templates/traderiq"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Traderiq />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
