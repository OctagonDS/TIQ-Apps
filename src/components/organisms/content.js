import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"

export const Content = (props) => {
  return (
    <View style={styles.body}>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Button title="Кнокпа" />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    width: "70%",
    borderColor: "#000",
  },
})
