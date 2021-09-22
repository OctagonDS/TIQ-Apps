import React from "react"
import { View, Text, ScrollView, StyleSheet, Button } from "react-native"
import { gStyle } from "../../styles/style"

export function Courses({ navigation }) {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница курсов</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button
            title="Анлегер клуб"
            onPress={() => {
              navigation.navigate("Anleger")
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Button
            title="Анлегер клуб"
            onPress={() => {
              navigation.navigate("Anleger")
            }}
            style={{
              marginTop: 10,
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  // navbar: {
  //   height: Platform.OS === "android" ? "100%" : "80%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  // },
  // text: {
  //   color: "#fff",
  //   fontSize: 20,
  //   textAlign: "center",
  // },
})
