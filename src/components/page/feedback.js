import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native"
import { gStyle } from "../../styles/style"
import { IconFeedbackPlus } from "../atoms/iconCirclePlus"

export const Feedback = ({ navigation }) => {
  return (
    <View style={gStyle.main}>
      <TouchableOpacity
        // // onPress={() => navigation.navigate("Profile")}
        style={{
          position: "absolute",
          bottom: "16%",
          right: "5%",
          zIndex: 1,
        }}
      >
        <IconFeedbackPlus />
      </TouchableOpacity>
      <ScrollView></ScrollView>
    </View>
  )
}
