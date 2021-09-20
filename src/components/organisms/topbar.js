import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { IconBack } from "../atoms/iconBack"
import { IconSearch } from "../atoms/iconSearch"
import { IconForward } from "../atoms/iconForward"

export const Topbar = (props) => {
  return (
    <View style={styles.topbar}>
      <IconBack />
      <IconSearch />
      <IconForward />
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    // backgroundColor: "#21b287",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
})
