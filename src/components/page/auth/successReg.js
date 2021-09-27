// Авторизация
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

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={["#FF741F", "#E86312"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 5, justifyContent: "center" }}
  >
    <Text style={styles.submitTextLog}>{name}</Text>
  </LinearGradient>
)

export const SuccessReg = ({ navigation: { goBack }, navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft style={styles.arrow} />
        </TouchableOpacity>
        <View style={[gStyle.main, { justifyContent: "center" }]}>
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
    marginTop: "24%",
  },
  block: {
    alignItems: "center",
  },
  textBlock: { marginTop: "10%", width: "90%", marginLeft: "5%" },
  text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "ub-medium",
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
