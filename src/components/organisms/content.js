import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { gStyle } from "../../styles/style"

export const Content = (props) => {
  return (
    <View>
      <View style={styles.body}>
        <TextInput style={styles.input} autoCapitalize="none" />
        <Button title="Поиск" />
      </View>
      <Text style={gStyle.title}>Hello world!</Text>
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
    borderWidth: 1.5,
    width: "70%",
    borderColor: "#000",
  },
})
