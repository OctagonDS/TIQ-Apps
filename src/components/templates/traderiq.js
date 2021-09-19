import React from "react"
import { View, StyleSheet } from "react-native"
import { Navbar } from "../organisms/navbar"
import { Topbar } from "../organisms/topbar"
import { Content } from "../organisms/content"

export const Traderiq = (props) => {
  return (
    <View>
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
