import React from "react"
import { View, StyleSheet } from "react-native"
import { Navbar } from "../organisms/navbar"
import { Topbar } from "../organisms/topbar"
import { Content } from "../organisms/content"

export const Traderiq = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Topbar />
      </View>
      <View style={styles.content}>
        <Content />
      </View>
      <View style={styles.footer}>
        <Navbar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1 },
  content: {
    flex: 9,
    alignContent: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
  },
})
