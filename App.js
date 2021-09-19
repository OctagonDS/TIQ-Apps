import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Traderiq } from "./src/components/templates/traderiq"

export default function App() {
  return (
    <View style={styles.container}>
      <Traderiq />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
