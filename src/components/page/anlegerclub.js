import React from "react"
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native"
import { gStyle } from "../../styles/style"
import { LinearGradient } from "expo-linear-gradient"
import { IconCourses } from "../atoms/iconCurses"
import { Feedback } from "../atoms/iconFeedback"
import { IconMentor } from "../atoms/iconMentor"
import { IconAnleger } from "../atoms/iconAnleger"
import { IconBurger } from "../atoms/iconBurger"

export const Anleger = (props) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Страница клуба</Text>
      </ScrollView>
    </View>
  )
}
