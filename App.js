import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { Traderiq } from "./src/components/templates/traderiq"
import topandroid from "./src/components/atoms/topandroid"

export default function App() {
  return (
    <SafeAreaView style={topandroid.AndroidSafeArea}>
      <Traderiq />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
