import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Topbar } from "./src/components/molecules/topbar"

export default function App() {
  return (
    <View style={styles.container}>
      <Topbar />
      <View style={{ flex: 13 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
