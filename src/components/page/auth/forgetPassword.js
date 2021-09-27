// Зыбыл пароль
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

export const ForgetPass = ({ navigation: { goBack }, navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => goBack()} style={styles.arrow}>
          <ArrowLeft />
        </TouchableOpacity>
        <View style={[gStyle.main, { justifyContent: "center" }]}>
          <View style={{ marginTop: "8%", marginLeft: "5%", width: "90%" }}>
            <Text style={styles.text}>
              Bitte gib deinen Benutzernamen oder deine E-Mail-Adresse an. Du
              wirst eine E-Mail-Nachricht mit Informationen erhalten, wie du
              dein Passwort zurücksetzen kannst.
            </Text>
          </View>
          <View style={{ marginTop: "8%" }}>
            <View style={styles.label}>
              <Text style={{ color: "#FF741F" }}>
                Benutzername oder E-Mail-Adresse{" "}
                <Text style={{ color: "#DA1414" }}>*</Text>
              </Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.block}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => navigation.navigate("SignIn")}
            >
              <GradientBtn name="Neues Passwort" />
            </TouchableOpacity>
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
  label: {
    backgroundColor: "#fff",
    width: "65%",
    borderRadius: 4,
    position: "absolute",
    height: 15,
    zIndex: 1,
    paddingLeft: 5,
    marginLeft: "10%",
    marginTop: -5,
    fontFamily: "ub-medium",
  },
  block: {
    alignItems: "center",
    marginTop: "10%",
  },
  wrapper: {
    width: "70%",
    height: 68,
  },
  submitTextLog: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "ub-medium",
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF741F",
    width: "86%",
    marginLeft: "7%",
    borderRadius: 5,
    height: 60,
    backgroundColor: "#fff",
    fontSize: 21,
    paddingLeft: "2%",
  },
  text: {
    fontSize: 16,
    fontFamily: "ub-light",
    color: "#fff",
    letterSpacing: 2,
    marginTop: "28%",
  },
})
