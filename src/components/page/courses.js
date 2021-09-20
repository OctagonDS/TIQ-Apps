import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native"
import { gStyle } from "../../styles/style"
import { LinearGradient } from "expo-linear-gradient"
import { IconCourses } from "../atoms/iconCurses"
import { Feedback } from "../atoms/iconFeedback"
import { IconMentor } from "../atoms/iconMentor"
import { IconAnleger } from "../atoms/iconAnleger"
import { IconBurger } from "../atoms/iconBurger"

export function Courses({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Mentor")
  }
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница курсов</Text>
      </ScrollView>
      <View style={gStyle.footer}>
        <LinearGradient
          colors={["#454A4F", "#545A60"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.navbar}>
            <IconCourses />
            <IconMentor onPress={loadScene} />
            <Feedback />
            <IconAnleger />
            <IconBurger />
          </View>
        </LinearGradient>
      </View>
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
