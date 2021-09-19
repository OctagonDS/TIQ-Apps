import React from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Svg, { Circle } from "react-native-svg"

export const Navbar = (props) => {
  return (
    <LinearGradient
      colors={["#454A4F", "#545A60"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
    >
      <View style={styles.navbar}>
        <View style={styles.circle}>
          <Svg height="95%" width="95%" viewBox="0 0 100 100" {...props}>
            <Circle cx="50" cy="50" r="45" fill="#FF741F" />
          </Svg>
        </View>
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
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
  },
})
