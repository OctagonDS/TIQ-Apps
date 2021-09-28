import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { gStyle } from "../../../styles/style"
import { ArrowLeft } from "../../atoms/arrowLeft"
import { LinearGradient } from "expo-linear-gradient"

const image = require("../../../assets/img/black-geo.png")

export const SuccessReg = ({ navigation: { goBack }, navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.title}>Registrieren</Text>
          <View style={styles.textBlock}>
            <Text style={styles.text}>
              Die Zugangsdaten zum App kommen per E-Mail. Dafür brauchen wir
              Deine Genehmigung.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  arrow: {
    marginLeft: "8%",
    marginTop: "12%",
    position: "absolute",
    zIndex: 1,
  },
  textBlock: { marginTop: "10%", width: "90%", marginLeft: "5%" },
  text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "ub-light",
    fontSize: 16,
  },
  title: {
    fontSize: 40,
    fontFamily: "ub-medium",
    textAlign: "center",
    color: "#fff",
    letterSpacing: 2,
    marginTop: "-20%",
  },
})
