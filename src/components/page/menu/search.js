import React from "react"
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native"
import { gStyle } from "../../../styles/style"

export const SearchModal = (props) => {
  return (
    <View style={[gStyle.main, { alignContent: "center" }]}>
      <View>
        <Text style={styles.title}>Suche</Text>
        <TextInput style={styles.input} placeholder="Was suchen wir?" />
      </View>
      <ScrollView></ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: "ub-reg",
    fontSize: 40,
    color: "#545A60",
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#FF741F",
    width: "80%",
    marginLeft: "10%",
    marginTop: "7%",
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
  },
})
