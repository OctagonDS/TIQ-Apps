import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const Topbar = (props) => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.text}>Топ бар</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "#1dadbc",
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {},
})
