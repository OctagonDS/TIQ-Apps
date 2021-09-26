// Авторизация
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { gStyle } from "../../../styles/style"
import { ArrowLeft } from "../../atoms/arrowLeft"

const image = require("../../../assets/img/black-geo.png")

export const SignIn = ({ navigation: { goBack } }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={[gStyle.main, { justifyContent: "center" }]}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Anmelden</Text>
      </View>
    </ImageBackground>
  )
}

export const styles = StyleSheet.create({
  arrow: {
    marginLeft: "8%",
    marginTop: "15%",
    marginBottom: "10%",
  },
  block: {
    alignItems: "center",
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
  title: {
    fontSize: 40,
    fontFamily: "ub-medium",
    textAlign: "center",
    color: "#fff",
    letterSpacing: 2,
  },
})
