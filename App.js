import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Topnavbar } from "./src/components/molecules/topnavbar"

export default function App() {
  return (
    <View style={styles.container}>
      <Topnavbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
