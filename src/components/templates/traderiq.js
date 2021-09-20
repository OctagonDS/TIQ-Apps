import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { Navbar } from "../organisms/navbar"
import { Topbar } from "../organisms/topbar"
import { Content } from "../organisms/content"

export const Traderiq = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Topbar />
      </View>
      <ScrollView style={styles.content}>
        <Content />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {},
  content: {
    // flex: 8,
    // alignContent: "center",
    // justifyContent: "center",
  },
  footer: {
    // flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },
})
