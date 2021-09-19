import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Navbar } from "./src/components/molecules/navbar"
import { Topbar } from "./src/components/molecules/topbar"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Topbar />
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <Navbar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1 },
  content: { flex: 9 },
  footer: {
    flex: 1,
  },
})
