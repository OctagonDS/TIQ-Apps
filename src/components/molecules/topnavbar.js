import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const Topnavbar = (props) => {
  return (
    <View style={styles.topnavbar}>
      <Text style={styles.text}>Топ бар</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topnavbar: {
    backgroundColor: "#1dadbc",
  },
  text: {},
})
