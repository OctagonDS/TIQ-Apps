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
    backgroundColor: "#21b287",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 75,
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
  },
})
