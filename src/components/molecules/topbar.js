import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const Topbar = (props) => {
  return (
    <View style={styles.topbar}>
      <View style={styles.topline} />
      <View style={styles.bottomline}>
        <Text style={styles.text}>Топ бар</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    flex: 1,
  },
  topline: {
    backgroundColor: "#ffd61e",
    flex: 1,
  },
  bottomline: {
    backgroundColor: "#21b287",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
})
