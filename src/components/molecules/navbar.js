import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export const Navbar = (props) => {
  return (
    <LinearGradient
      colors={["#454A4F", "#545A60"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
    >
      <View style={styles.navbar}>
        <Text>Нижнее меню</Text>
        <Button title="Меню" />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: "100%",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
