import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../styles/style"

export const Mentor = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница менторы</Text>
      </ScrollView>
      {/* <View style={gStyle.footer}>
        <LinearGradient
          colors={["#454A4F", "#545A60"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.navbar}>
            <IconCourses />
            <IconMentor />
            <Feedback />
            <IconAnleger />
            <IconBurger />
          </View>
        </LinearGradient>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: Platform.OS === "android" ? "100%" : "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
})
