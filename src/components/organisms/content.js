import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { gStyle } from "../../styles/style"
import { Courses } from "../page/courses"

export const Content = (props) => {
  return (
    <View style={styles.body}>
      <Text>Привет МИр</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    padding: 10,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1.5,
    width: "70%",
    borderColor: "#000",
  },
})
