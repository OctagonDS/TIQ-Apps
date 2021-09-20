import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { Topbar } from "../organisms/topbar"
import { Content } from "../organisms/content"
import { gStyle } from "../../styles/style"
import { Navbar } from "../organisms/navbar"

export const Traderiq = (props) => {
  return (
    <View style={gStyle.main}>
      <View style={styles.header}>
        <Topbar />
      </View>
      <ScrollView style={styles.content}>
        <Content />
      </ScrollView>
      <View style={gStyle.Navbar}>
        <Navbar />
      </View>
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
})
